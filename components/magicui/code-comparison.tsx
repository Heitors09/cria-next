"use client";

import { cn } from "@/lib/utils";
import {
  transformerNotationDiff,
  transformerNotationFocus,
} from "@shikijs/transformers";
import { FileIcon } from "lucide-react";
import { useTheme } from "next-themes";
import { useEffect, useState, useMemo } from "react";

export function CodeComparison() {
  const { theme, systemTheme } = useTheme();
  const [highlighted, setHighlighted] = useState("");
  const [hasFocus, setHasFocus] = useState(false);

  const code = `// Website Development Process
class WebsiteProject {
  constructor(clientName, requirements) {
    this.clientName = clientName;
    this.requirements = requirements;
    this.status = "New Lead";
    this.startDate = new Date();
  }

  async analyzeRequirements() {
    console.log("Analyzing requirements for " + this.clientName);
    const projectScope = await this.gatherClientNeeds();
    return projectScope;
  }

  gatherClientNeeds() {
    return new Promise((resolve) => {
      setTimeout(() => {
        const clientNeeds = {
          type: "E-commerce",
          features: ["Product Catalog", "Shopping Cart", "Payment Integration"],
          deadline: "3 months",
          budget: 15000
        };
        resolve(clientNeeds);
      }, 2000);
    });
  }

  createProposal(scope) {
    this.status = "Proposal Sent";
    return {
      client: this.clientName,
      estimatedCost: this.calculateCost(scope),
      timeline: this.generateTimeline(scope),
      technologies: ["React", "Node.js", "MongoDB"]
    };
  }

  calculateCost(scope) {
    const basePrice = 10000;
    const featuresCost = scope.features.length * 1000;
    return basePrice + featuresCost;
  }
}

// Creating a new project
const newClient = new WebsiteProject(
  "TechCorp Solutions",
  "Modern E-commerce Platform"
);

newClient.analyzeRequirements()
  .then(scope => {
    const proposal = newClient.createProposal(scope);
    console.log("Proposal ready for: " + proposal.client);
  });`;

  const selectedTheme = useMemo(() => {
    const currentTheme = theme === "system" ? systemTheme : theme;
    return currentTheme === "dark" ? "github-dark" : "github-light";
  }, [theme, systemTheme]);

  useEffect(() => {
    if (highlighted) {
      setHasFocus(highlighted.includes('class="line focused"'));
    }
  }, [highlighted]);

  useEffect(() => {
    async function highlightCode() {
      try {
        const { codeToHtml } = await import("shiki");
        const { transformerNotationHighlight } = await import(
          "@shikijs/transformers"
        );

        const highlightedCode = await codeToHtml(code, {
          lang: "javascript",
          theme: "one-dark-pro",
          transformers: [
            transformerNotationHighlight({ matchAlgorithm: "v3" }),
            transformerNotationDiff({ matchAlgorithm: "v3" }),
            transformerNotationFocus({ matchAlgorithm: "v3" }),
          ],
        });
        setHighlighted(highlightedCode);
      } catch (error) {
        console.error("Error highlighting code:", error);
        setHighlighted(`<pre>${code}</pre>`);
      }
    }
    highlightCode();
  }, [code, selectedTheme]);

  const renderCode = (code: string, highlighted: string) => {
    if (highlighted) {
      return (
        <div
          className={cn(
            "h-full max-lg:h-[200px]  w-full overflow-auto bg-[#282c34] font-mono text-xs",
            "[&>pre]:h-full [&>pre]:!w-screen [&>pre]:py-2",
            "[&>pre>code]:!inline-block [&>pre>code]:!w-full",
            "[&>pre>code>span]:!inline-block [&>pre>code>span]:w-full [&>pre>code>span]:px-4 [&>pre>code>span]:py-0.5",
            "[&>pre>code>.highlighted]:inline-block [&>pre>code>.highlighted]:w-full",
            "group-hover:[&>pre>code>:not(.focused)]:!opacity-100 group-hover:[&>pre>code>:not(.focused)]:!blur-none",
            "[&>pre>code>.add]:bg-[rgba(16,185,129,.16)] [&>pre>code>.remove]:bg-[rgba(244,63,94,.16)]",
            "group-hover:[&>pre>code>:not(.focused)]:transition-all group-hover:[&>pre>code>:not(.focused)]:duration-300",
          )}
          dangerouslySetInnerHTML={{ __html: highlighted }}
        />
      );
    } else {
      return (
        <pre className="h-full overflow-auto break-all bg-[#282c34] p-4 font-mono text-xs text-foreground">
          {code}
        </pre>
      );
    }
  };

  return (
    <div className="mx-auto w-full max-w-5xl">
      <div className="group relative w-full max-h-[600px] overflow-hidden rounded-md border border-border">
        <div className="relative">
          <div
            className={cn(
              "group border-primary/20",
              hasFocus &&
                "[&>div>pre>code>:not(.focused)]:!opacity-50 [&>div>pre>code>:not(.focused)]:!blur-[0.095rem]",
              "[&>div>pre>code>:not(.focused)]:transition-all [&>div>pre>code>:not(.focused)]:duration-300",
            )}
          >
            <div className="flex items-center border-b border-primary/20 bg-[#21252b] p-2 text-sm text-foreground">
              <FileIcon className="mr-2 h-4 w-4" />
              project.js
            </div>
            {renderCode(code, highlighted)}
          </div>
        </div>
      </div>
    </div>
  );
}
