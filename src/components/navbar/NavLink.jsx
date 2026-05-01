"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function NavLink({ href, children, icon }) {
  const pathname = usePathname();
  const isActive = pathname === href || (href !== "/" && pathname.startsWith(href));

  return (
    <Link
      href={href}
      className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-bold transition-colors duration-200
        ${isActive
          ? "bg-green-800 text-white"
          : "text-gray-600 hover:text-green-800 hover:bg-green-50"
        }`}
    >
      {icon && <span className="text-base">{icon}</span>}
      {children}
    </Link>
  );
}