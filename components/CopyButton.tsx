"use client";

import { useState } from "react";
import { Copy, Check } from "lucide-react";

interface CopyButtonProps {
  text: string;
}

export function CopyButton({ text }: CopyButtonProps) {
  const [isCopied, setIsCopied] = useState(false);

  const copy = async () => {
    await navigator.clipboard.writeText(text);
    setIsCopied(true);
    setTimeout(() => setIsCopied(false), 2000);
  };

  return (
    <button
      className="absolute right-4 top-2 p-2 rounded-md bg-background/30 hover:bg-background/50 transition-colors active:scale-95 cursor-pointer"
      onClick={copy}
    >
      {isCopied ? (
        <Check className="h-5 w-5 text-green-500" />
      ) : (
        <Copy className="h-5 w-5 text-muted-foreground" />
      )}
      <span className="sr-only">Copy code</span>
    </button>
  );
}
