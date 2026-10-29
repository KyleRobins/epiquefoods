"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

export function NavLink({
  href,
  children,
  className,
}: {
  href: string;
  children: React.ReactNode;
  className?: string;
}) {
  const pathname = usePathname();
  const isActive = href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <Link
      href={href}
      className={cn(
        "group relative py-1 text-xs font-medium tracking-[0.12em] text-foreground/70 uppercase transition-colors hover:text-foreground",
        isActive && "text-burgundy",
        className
      )}
    >
      {children}
      <span
        className={cn(
          "absolute inset-x-0 -bottom-0.5 h-[1.5px] origin-left scale-x-0 bg-burgundy transition-transform duration-300 ease-out group-hover:scale-x-100",
          isActive && "scale-x-100"
        )}
      />
    </Link>
  );
}
