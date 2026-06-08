"use client";

import { useState } from "react";
import { GraphCanvasNode } from "@/components/GraphCanvasNode";
import { exampleDomains } from "./examples";

export function GraphCanvasNodeInteractive() {
  const [clicked, setClicked] = useState<string | null>(null);
  return (
    <div className="flex flex-col items-center gap-3">
      <div className="w-64">
        <GraphCanvasNode
          domainLabel="Party"
          domainColor={exampleDomains.party}
          name="Acme Corporation"
          attributes={12}
          nodes={184200}
          edges={6}
          status="active"
          onClick={() => setClicked("Acme Corporation")}
        />
      </div>
      <p className="text-small">
        {clicked ? `Clicked: ${clicked}` : "Click the node…"}
      </p>
    </div>
  );
}
