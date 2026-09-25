"use client";

import * as React from "react";
import {
  ChevronRight,
  Folder,
  Settings,
  Star,
  Trash2,
} from "lucide-react";
import { Item } from "@/components/ui/item";
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";

// Interactive Item demos live here because Item takes an onClick (a function
// that cannot cross the server boundary). Items with an interactive child
// (checkbox, action button) render without onClick to avoid nesting a button
// inside a button.
const noop = () => {};

export function ItemListPreview() {
  return (
    <div className="w-full max-w-sm rounded-xl border border-border bg-background p-1">
      <Item
        label="General"
        secondaryLabel="Workspace name and defaults"
        leading={<Settings />}
        trailing={<ChevronRight className="size-4 text-muted-foreground" />}
        onClick={noop}
      />
      <Item
        label="Members"
        secondaryLabel="Invite and manage access"
        leading={<Star />}
        trailing={<Badge variant="secondary">12</Badge>}
        onClick={noop}
      />
      <Item
        label="Derek Ho"
        secondaryLabel="derek@distyl.ai"
        leading={
          <Avatar className="size-8">
            <AvatarImage src="/avatar-sample.jpg" alt="Derek Ho" />
            <AvatarFallback>DH</AvatarFallback>
          </Avatar>
        }
        trailing={<Badge variant="secondary">Owner</Badge>}
        onClick={noop}
      />
    </div>
  );
}

function Frame({ children }: { children: React.ReactNode }) {
  return <div className="w-full max-w-xs">{children}</div>;
}

export function ItemDefault() {
  return (
    <Frame>
      <Item label="Overview" onClick={noop} />
    </Frame>
  );
}

export function ItemWithIcon() {
  return (
    <Frame>
      <Item
        label="Projects"
        leading={<Folder />}
        trailing={<ChevronRight className="size-4 text-muted-foreground" />}
        onClick={noop}
      />
    </Frame>
  );
}

export function ItemWithAvatar() {
  return (
    <Frame>
      <Item
        label="Derek Ho"
        secondaryLabel="derek@distyl.ai"
        leading={
          <Avatar className="size-8">
            <AvatarImage src="/avatar-sample.jpg" alt="Derek Ho" />
            <AvatarFallback>DH</AvatarFallback>
          </Avatar>
        }
        onClick={noop}
      />
    </Frame>
  );
}

export function ItemWithCheckbox() {
  const [checked, setChecked] = React.useState(true);
  return (
    <Frame>
      <Item
        label="Email notifications"
        secondaryLabel="Send a summary each morning"
        leading={
          <Checkbox
            checked={checked}
            onCheckedChange={(v) => setChecked(v === true)}
          />
        }
      />
    </Frame>
  );
}

export function ItemWithBadge() {
  return (
    <Frame>
      <Item
        label="Plan"
        leading={<Star />}
        trailing={<Badge variant="secondary">Pro</Badge>}
        onClick={noop}
      />
    </Frame>
  );
}

export function ItemWithAction() {
  return (
    <Frame>
      <Item
        label="Arjun Prakash"
        secondaryLabel="arjun@distyl.ai"
        leading={
          <Avatar className="size-8">
            <AvatarFallback>AP</AvatarFallback>
          </Avatar>
        }
        trailing={
          <Button variant="ghost" size="icon-sm" aria-label="Remove member">
            <Trash2 />
          </Button>
        }
      />
    </Frame>
  );
}

export function ItemWithSecondary() {
  return (
    <Frame>
      <Item
        label="Billing"
        secondaryLabel="Invoices, payment method, and plan"
        onClick={noop}
      />
    </Frame>
  );
}

export function ItemStateDefault() {
  return (
    <Frame>
      <Item label="Inbox" leading={<Star />} onClick={noop} />
    </Frame>
  );
}

export function ItemStateHover() {
  return (
    <Frame>
      <Item
        label="Inbox"
        leading={<Star />}
        onClick={noop}
        className="bg-secondary"
      />
    </Frame>
  );
}

export function ItemStateSelected() {
  const [selected, setSelected] = React.useState(true);
  return (
    <Frame>
      <Item
        label="Inbox"
        leading={<Star />}
        selected={selected}
        onClick={() => setSelected((s) => !s)}
      />
    </Frame>
  );
}

export function ItemStateDisabled() {
  return (
    <Frame>
      <Item label="Inbox" leading={<Star />} disabled onClick={noop} />
    </Frame>
  );
}
