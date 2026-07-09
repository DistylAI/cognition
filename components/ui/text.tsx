import * as React from "react";
import { cn } from "@/lib/utils";

type Size = "xs" | "sm" | "md" | "lg" | "xl";
type Weight = "normal" | "medium" | "semibold" | "bold";
type Color =
  | "default"
  | "subtle"
  | "disabled"
  | "inverse"
  | "primary"
  | "danger"
  | "success"
  | "warning";
type Align = "left" | "center" | "right";

export interface TextProps extends React.HTMLAttributes<HTMLElement> {
  /** Render as a different element */
  as?: React.ElementType;
  /** Font size */
  size?: Size;
  /** Font weight */
  weight?: Weight;
  /** Text color token */
  color?: Color;
  /** Text alignment */
  align?: Align;
  /** Balance wrapping across lines (text-wrap: balance) */
  balance?: boolean;
}

// Tailwind only generates utilities it can see as complete strings; a
// `text-${size}` template is invisible to the scanner, so each scale step is
// mapped to a full class name here.
const sizeMap: Record<Size, string> = {
  xs: "text-xs",
  sm: "text-sm",
  md: "text-base",
  lg: "text-lg",
  xl: "text-xl",
};

const weightMap: Record<Weight, string> = {
  normal: "font-normal",
  medium: "font-medium",
  semibold: "font-semibold",
  bold: "font-bold",
};

const colorMap: Record<Color, string> = {
  default: "text-text-default",
  subtle: "text-text-subtle",
  disabled: "text-text-disabled",
  inverse: "text-text-inverse",
  primary: "text-text-primary",
  danger: "text-text-danger",
  success: "text-text-success",
  warning: "text-text-warning",
};

const alignMap: Record<Align, string> = {
  left: "text-left",
  center: "text-center",
  right: "text-right",
};

function Text({
  as: Comp = "p",
  size = "md",
  weight = "normal",
  color = "default",
  align,
  balance = false,
  className,
  children,
  ...props
}: TextProps) {
  return (
    <Comp
      className={cn(
        sizeMap[size],
        weightMap[weight],
        colorMap[color],
        align && alignMap[align],
        balance && "text-balance",
        className,
      )}
      {...props}
    >
      {children}
    </Comp>
  );
}

export { Text };
