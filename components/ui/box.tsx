import * as React from "react";
import { cn } from "@/lib/utils";

const spaceMap = {
  none: "0",
  xs: "1",
  sm: "2",
  md: "4",
  lg: "6",
  xl: "8",
  "2xl": "12",
} as const;

type Space = keyof typeof spaceMap;

type Background =
  | "default"
  | "subtle"
  | "secondary"
  | "accent"
  | "inverse"
  | "danger"
  | "success"
  | "warning";

type BorderRadius = "none" | "sm" | "md" | "lg" | "xl" | "full";

export interface BoxProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Padding on all sides */
  p?: Space;
  /** Horizontal padding */
  px?: Space;
  /** Vertical padding */
  py?: Space;
  /** Background token */
  bg?: Background;
  /** Border using border-border */
  border?: boolean;
  /** Border radius */
  radius?: BorderRadius;
  /** Render as a different element */
  as?: React.ElementType;
}

// Tailwind only generates utilities it can see as complete strings; a
// `p-${spaceMap[p]}` template is invisible to the scanner, so the spacing scale
// is mapped to full class names here. spaceMap defines the scale (and the Space
// type); these maps turn each step into a real utility.
const pMap: Record<Space, string> = {
  none: "p-0",
  xs: "p-1",
  sm: "p-2",
  md: "p-4",
  lg: "p-6",
  xl: "p-8",
  "2xl": "p-12",
};
const pxMap: Record<Space, string> = {
  none: "px-0",
  xs: "px-1",
  sm: "px-2",
  md: "px-4",
  lg: "px-6",
  xl: "px-8",
  "2xl": "px-12",
};
const pyMap: Record<Space, string> = {
  none: "py-0",
  xs: "py-1",
  sm: "py-2",
  md: "py-4",
  lg: "py-6",
  xl: "py-8",
  "2xl": "py-12",
};

const bgMap: Record<Background, string> = {
  default: "bg-background",
  subtle: "bg-muted",
  secondary: "bg-secondary",
  accent: "bg-primary-subtle",
  inverse: "bg-inverse",
  danger: "bg-destructive-subtle",
  success: "bg-success-subtle",
  warning: "bg-warning-subtle",
};

const radiusMap: Record<BorderRadius, string> = {
  none: "rounded-none",
  sm: "rounded-sm",
  md: "rounded-lg",
  lg: "rounded-xl",
  xl: "rounded-2xl",
  full: "rounded-full",
};

function Box({
  p,
  px,
  py,
  bg,
  border = false,
  radius,
  as: Comp = "div",
  className,
  children,
  ...props
}: BoxProps) {
  return (
    <Comp
      className={cn(
        p && pMap[p],
        px && pxMap[px],
        py && pyMap[py],
        bg && bgMap[bg],
        border && "border border-border",
        radius && radiusMap[radius],
        className,
      )}
      {...props}
    >
      {children}
    </Comp>
  );
}

export { Box };
