import Link from "next/link";
import { BlogPost } from "@/lib/mdx";
import { ArrowLeftIcon, ArrowRightIcon } from "lucide-react";

interface PostNavigationProps {
  prev: BlogPost | null;
  next: BlogPost | null;
}

export default function PostNavigation({ prev, next }: PostNavigationProps) {
  if (!prev && !next) return null;

  return (
    <nav className="mt-12 pt-8 border-t border-border">
      <div className="grid grid-cols-2 gap-8">
        <div>
          {prev && (
            <Link href={`/blog/${prev.slug}`} className="group block">
              <span className="text-base font-bold text-foreground flex items-center gap-2 mb-1 group-hover:text-primary transition-colors">
                <ArrowLeftIcon className="h-4 w-4 group-hover:-translate-x-1 transition-transform" />
                Previous
              </span>
              <h3 className="text-xs text-muted-foreground line-clamp-2 pl-6">
                {prev.title}
              </h3>
            </Link>
          )}
        </div>

        <div className="text-right">
          {next && (
            <Link href={`/blog/${next.slug}`} className="group block">
              <span className="text-base font-bold text-foreground flex items-center justify-end gap-2 mb-1 group-hover:text-primary transition-colors">
                Next
                <ArrowRightIcon className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </span>
              <h3 className="text-xs text-muted-foreground line-clamp-2 pr-6">
                {next.title}
              </h3>
            </Link>
          )}
        </div>
      </div>
    </nav>
  );
}
