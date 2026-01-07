import Link from "next/link";
import type { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from "react";

type BaseProps = {
  children: ReactNode;
  className?: string;
  variant?: "primary" | "secondary";
};

type LinkProps = BaseProps &
  AnchorHTMLAttributes<HTMLAnchorElement> & {
    href: string;
  };

type NativeButtonProps = BaseProps &
  ButtonHTMLAttributes<HTMLButtonElement> & {
    href?: undefined;
  };

type ButtonProps = LinkProps | NativeButtonProps;

const variantStyles: Record<NonNullable<ButtonProps["variant"]>, string> = {
  primary:
    "bg-[#6B46C1] text-white hover:bg-[#53309d] focus-visible:outline-[#53309d]",
  secondary:
    "border border-[#6B46C1] text-[#6B46C1] hover:bg-[#f5f0ff] focus-visible:outline-[#6B46C1]",
};

const baseStyles =
  "inline-flex items-center justify-center rounded-xl px-6 py-3 text-sm font-medium transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:ring-0";

export default function Button(props: ButtonProps) {
  const { children, className = "", variant = "primary", ...rest } = props;
  const styles = `${baseStyles} ${variantStyles[variant]} ${className}`.trim();

  if ("href" in rest && rest.href !== undefined) {
    const { href, ...linkProps } = rest;
    // Exclude button-specific props from link props
    const { type, ...anchorProps } = linkProps as any;
    return (
      <Link href={href} className={styles} {...anchorProps}>
        {children}
      </Link>
    );
  }

  // Exclude anchor-specific props from button props
  const { href, target, rel, download, ...buttonProps } = rest as any;
  const buttonType = buttonProps.type || "button";
  return (
    <button type={buttonType} className={styles} {...buttonProps}>
      {children}
    </button>
  );
}

