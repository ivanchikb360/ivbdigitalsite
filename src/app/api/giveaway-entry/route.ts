import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  try {
    const formData = await request.json();

    // Validate required fields
    const requiredFields = [
      "businessName",
      "ownerName",
      "email",
      "phone",
      "address",
      "city",
      "state",
      "zip",
    ];

    for (const field of requiredFields) {
      if (!formData[field]) {
        return NextResponse.json(
          { error: `Missing required field: ${field}` },
          { status: 400 }
        );
      }
    }

    // Get Mailchimp credentials from environment variables
    const mailchimpApiKey = process.env.MAILCHIMP_API_KEY;
    const mailchimpServerPrefix = process.env.MAILCHIMP_SERVER_PREFIX;
    const mailchimpListId = process.env.MAILCHIMP_LIST_ID;

    if (!mailchimpApiKey || !mailchimpServerPrefix || !mailchimpListId) {
      console.error("Missing Mailchimp environment variables");
      return NextResponse.json(
        { error: "Server configuration error" },
        { status: 500 }
      );
    }

    // Prepare Mailchimp member data
    const mailchimpData = {
      email_address: formData.email,
      status: "subscribed", // or "pending" if you want double opt-in
      merge_fields: {
        FNAME: formData.ownerName.split(" ")[0] || formData.ownerName,
        LNAME:
          formData.ownerName.split(" ").slice(1).join(" ") ||
          formData.ownerName,
        PHONE: formData.phone,
        ADDRESS: formData.address,
        CITY: formData.city,
        STATE: formData.state,
        ZIP: formData.zip,
        COMPANY: formData.businessName,
      },
      tags: ["giveaway-entry", "adult-family-home"],
    };

    // Add member to Mailchimp list
    const mailchimpUrl = `https://${mailchimpServerPrefix}.api.mailchimp.com/3.0/lists/${mailchimpListId}/members`;

    const mailchimpResponse = await fetch(mailchimpUrl, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${mailchimpApiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(mailchimpData),
    });

    if (!mailchimpResponse.ok) {
      const errorData = await mailchimpResponse.json();
      console.error("Mailchimp API error:", errorData);

      // Handle duplicate email (already subscribed)
      if (mailchimpResponse.status === 400 && errorData.title === "Member Exists") {
        return NextResponse.json(
          { error: "This email is already registered for the giveaway" },
          { status: 400 }
        );
      }

      return NextResponse.json(
        { error: "Failed to submit entry. Please try again." },
        { status: 500 }
      );
    }

    const result = await mailchimpResponse.json();

    return NextResponse.json(
      {
        success: true,
        message: "Entry submitted successfully",
        mailchimpId: result.id,
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error processing giveaway entry:", error);
    return NextResponse.json(
      { error: "An unexpected error occurred. Please try again." },
      { status: 500 }
    );
  }
}

