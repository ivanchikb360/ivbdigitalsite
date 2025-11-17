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

  if ("href" in rest && rest.href) {
    const { href, ...linkProps } = rest;
    return (
      <Link href={href} className={styles} {...linkProps}>
        {children}
      </Link>
    );
  }

  return (
    <button className={styles} {...rest}>
      {children}
    </button>
  );
}

