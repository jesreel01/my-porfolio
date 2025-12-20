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
      className="p-1.5 rounded-md hover:text-zinc-300 transition-colors active:scale-95 cursor-pointer"
      onClick={copy}
      aria-label="Copy code"
    >
      {isCopied ? (
        <Check className="h-4 w-4 text-green-400" />
      ) : (
        <Copy className="h-4 w-4 text-zinc-400" />
      )}
    </button>
  );
}
