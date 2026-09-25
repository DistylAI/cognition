import { cva, type VariantProps } from "class-variance-authority";
import * as React from "react";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

// A Folio layout-and-style wrapper that joins multiple Button instances into
// one control: a shared edge with the radius applied only to the outermost
// corners. The orientation joining logic mirrors fe-distillery's button-group;
// group-level size and disabled are forwarded to each Button child (item-level
// props win). It does not replace Button, it composes Buttons.
const buttonGroupVariants = cva(
  "flex w-fit items-stretch [&>*]:focus-visible:relative [&>*]:focus-visible:z-10",
  {
    variants: {
      orientation: {
        horizontal:
          "[&>*:not(:first-child)]:rounded-l-none [&>*:not(:first-child)]:border-l-0 [&>*:not(:last-child)]:rounded-r-none",
        vertical:
          "flex-col [&>*:not(:first-child)]:rounded-t-none [&>*:not(:first-child)]:border-t-0 [&>*:not(:last-child)]:rounded-b-none",
      },
    },
    defaultVariants: {
      orientation: "horizontal",
    },
  },
);

type ButtonProps = React.ComponentProps<typeof Button>;

interface ButtonGroupProps
  extends Omit<React.ComponentProps<"div">, "color">,
    VariantProps<typeof buttonGroupVariants> {
  size?: ButtonProps["size"];
  disabled?: boolean;
}

function ButtonGroup({
  className,
  orientation,
  size,
  disabled,
  children,
  ...props
}: ButtonGroupProps) {
  const items = React.Children.map(children, (child) => {
    if (!React.isValidElement(child)) return child;
    const el = child as React.ReactElement<ButtonProps>;
    return React.cloneElement(el, {
      size: el.props.size ?? size,
      disabled: el.props.disabled || disabled,
    });
  });

  return (
    <div
      role="group"
      data-slot="button-group"
      data-orientation={orientation ?? "horizontal"}
      className={cn(buttonGroupVariants({ orientation }), className)}
      {...props}
    >
      {items}
    </div>
  );
}

export { ButtonGroup, buttonGroupVariants };
