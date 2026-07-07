"use client";

import * as React from "react";

import { cn } from "@/lib/utils";

// API mirrors fe-distillery/components/ui/card.tsx -- the Card + CardHeader /
// CardTitle / CardDescription / CardContent / CardFooter compound parts. Visual
// classes are mapped to Cognition v1.2 semantic tokens so the card themes via
// [data-theme="dark"] with no dark: classes (the fix for card.tsx's raw
// bg-card / text-card-foreground / text-muted-foreground utilities).
//
// `size` ("default" | "sm") is a Cognition addition that tightens padding and the title size. It is propagated to the
// sub-parts through context so the header/content/footer stay padding-aware
// without each call site having to repeat it.

type CardSize = "default" | "sm";

const CardSizeContext = React.createContext<CardSize>("default");

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  size?: CardSize;
}

const Card = React.forwardRef<HTMLDivElement, CardProps>(
  ({ className, size = "default", ...props }, ref) => (
    <CardSizeContext.Provider value={size}>
      <div
        ref={ref}
        data-size={size}
        className={cn(
          "flex flex-col overflow-hidden rounded-xl border border-border-default bg-background-default text-text-default shadow-sm",
          className,
        )}
        {...props}
      />
    </CardSizeContext.Provider>
  ),
);
Card.displayName = "Card";

const CardHeader = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => {
  const size = React.useContext(CardSizeContext);
  return (
    <div
      ref={ref}
      className={cn(
        "flex flex-col space-y-1",
        size === "sm" ? "p-3" : "p-4",
        className,
      )}
      {...props}
    />
  );
});
CardHeader.displayName = "CardHeader";

const CardTitle = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => {
  const size = React.useContext(CardSizeContext);
  return (
    <div
      ref={ref}
      className={cn(
        size === "sm"
          ? "text-sm font-medium leading-normal text-text-default"
          : "text-title leading-normal",
        className,
      )}
      {...props}
    />
  );
});
CardTitle.displayName = "CardTitle";

const CardDescription = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("text-sm leading-normal text-text-subtle", className)}
    {...props}
  />
));
CardDescription.displayName = "CardDescription";

const CardContent = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => {
  const size = React.useContext(CardSizeContext);
  return (
    <div
      ref={ref}
      className={cn(
        "flex flex-col",
        size === "sm" ? "px-3 pb-3" : "px-4 pb-4",
        className,
      )}
      {...props}
    />
  );
});
CardContent.displayName = "CardContent";

const CardFooter = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => {
  const size = React.useContext(CardSizeContext);
  return (
    <div
      ref={ref}
      className={cn(
        "flex items-center border-t border-border-default bg-background-subtle",
        size === "sm" ? "p-3" : "p-4",
        className,
      )}
      {...props}
    />
  );
});
CardFooter.displayName = "CardFooter";

export {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
};
