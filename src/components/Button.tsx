import { cva, type VariantProps } from "class-variance-authority";
import { twMerge } from "tailwind-merge";
import React from "react";

const buttonStyles = cva(
  "inline-flex items-center justify-center font-medium rounded-md transition-colors cursor-pointer",
  {
    variants: {
      size: {
        default: "px-2 py-2 text-sm",
        sm: "px-2 py-1 text-xs",
        md: "px-4 py-2 text-md",
        lg: "px-6 py-2 text-base",
      },
      variant: {
        default: "bg-gray-100 text-gray-900 hover:bg-gray-200",
        ["default-rounded"]: "bg-gray-100 text-gray-900 hover:bg-gray-200 rounded-full",
        ghost: "bg-transparent text-gray-700 hover:bg-gray-100",
        icon: "text-gray-900 hover:bg-gray-200 rounded-full", // no padding here
      }
      ,
    },
    defaultVariants: {
      size: "default",
      variant: "default",
    },
  }
);

// ✅ Correct typing: combine VariantProps with native button props
type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> &
  VariantProps<typeof buttonStyles>;

export default function Button({ size, variant, className, ...props }: ButtonProps) {
  return (
    <button
      className={twMerge(buttonStyles({ size, variant }) ,className )}
      {...props}
    />
  );
}
