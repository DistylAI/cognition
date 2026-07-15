"use client";

import * as React from "react";

import { cn } from "@/lib/utils";

// API mirrors fe-distillery/components/ui/card.tsx -- the Card + CardHeader /
// CardTitle / CardDescription / CardContent / CardFooter compound parts. v4
// migration: plain function components + data-slot. Visual classes stay mapped
// to Cognition v1.2 semantic tokens so the card themes via [data-theme="dark"]
// with no dark: classes.
//
// `size` ("default" | "sm") is a Cognition addition that tightens padding and
// the title size. It is propagated to the sub-parts through context so the
// header/content/footer stay padding-aware without each call site repeating it.

type CardSize = "default" | "sm";

const CardSizeContext = React.createContext<CardSize>("default");

export interface CardProps extends React.ComponentProps<"div"> {
  size?: CardSize;
}

function Card({ className, size = "default", ...props }: CardProps) {
  return (
    <CardSizeContext.Provider value={size}>
      <div
        data-slot="card"
        data-size={size}
        className={cn(
          "flex flex-col overflow-hidden rounded-xl border border-border-default bg-background-default text-text-default shadow-sm",
          className,
        )}
        {...props}
      />
    </CardSizeContext.Provider>
  );
}

function CardHeader({ className, ...props }: React.ComponentProps<"div">) {
  const size = React.useContext(CardSizeContext);
  return (
    <div
      data-slot="card-header"
      className={cn(
        "flex flex-col space-y-1",
        size === "sm" ? "p-3" : "p-4",
        className,
      )}
      {...props}
    />
  );
}

function CardTitle({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="card-title"
      className={cn("text-title leading-normal", className)}
      {...props}
    />
  );
}

function CardDescription({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="card-description"
      className={cn("text-description leading-normal", className)}
      {...props}
    />
  );
}

function CardContent({ className, ...props }: React.ComponentProps<"div">) {
  const size = React.useContext(CardSizeContext);
  return (
    <div
      data-slot="card-content"
      className={cn(
        "flex flex-col",
        size === "sm" ? "px-3 pb-3" : "px-4 pb-4",
        className,
      )}
      {...props}
    />
  );
}

function CardFooter({ className, ...props }: React.ComponentProps<"div">) {
  const size = React.useContext(CardSizeContext);
  return (
    <div
      data-slot="card-footer"
      className={cn(
        "flex items-center border-t border-border-default bg-background-subtle",
        size === "sm" ? "p-3" : "p-4",
        className,
      )}
      {...props}
    />
  );
}

export {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
};
