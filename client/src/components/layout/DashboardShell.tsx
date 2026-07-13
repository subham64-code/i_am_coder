"use client";

import Link from "next/link";
import { FiBookOpen, FiClipboard, FiGrid, FiLogOut, FiAward, FiUser } from "react-icons/fi";
import { useAppDispatch, useAppSelector } from "@/lib/hooks";
import { logout } from "@/lib/store";

export function DashboardShell({
  title,
  children,
  links,
}: {
  title: string;
  children: React.ReactNode;
  links: { label: string; href: string; icon: React.ReactNode }[];
}) {
  const dispatch = useAppDispatch();
  const user = useAppSelector((s) => s.auth.user);

  return (
    <div className="min-h-screen flex">
      <aside className="w-64 hidden md:flex flex-col glass-strong rounded-none border-r border-white/10 p-5 fixed inset-y-0">
        <div className="font-display text-xl font-bold text-gradient mb-8">I AM CODER</div>
        <nav className="flex-1 space-y-1">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="flex items-center gap-3 px-3 py-2 rounded-lg text-white/70 hover:bg-white/10 hover:text-white transition-colors"
            >
              {l.icon}
              {l.label}
            </Link>
          ))}
        </nav>
        <div className="mt-4 pt-4 border-t border-white/10">
          <div className="text-sm text-white/60 mb-2">{user?.fullName ?? "Student"}</div>
          <button
            onClick={() => dispatch(logout())}
            className="flex items-center gap-2 text-red-300 hover:text-red-200 text-sm"
          >
            <FiLogOut /> Logout
          </button>
        </div>
      </aside>

      <main className="flex-1 md:ml-64 p-6 lg:p-10">
        <h1 className="font-display text-3xl font-bold mb-6">{title}</h1>
        {children}
      </main>
    </div>
  );
}

export const studentLinks = [
  { label: "Dashboard", href: "/student", icon: <FiGrid /> },
  { label: "Courses", href: "/courses", icon: <FiBookOpen /> },
  { label: "Quiz", href: "/quiz", icon: <FiClipboard /> },
  { label: "Attendance", href: "/student/attendance", icon: <FiClipboard /> },
  { label: "Bookmarks", href: "/student/bookmarks", icon: <FiAward /> },
  { label: "Queries", href: "/student/queries", icon: <FiUser /> },
  { label: "Profile", href: "/student", icon: <FiUser /> },
];

export const adminLinks = [
  { label: "Dashboard", href: "/admin", icon: <FiGrid /> },
  { label: "Applications", href: "/admin", icon: <FiClipboard /> },
  { label: "Students", href: "/admin", icon: <FiUser /> },
  { label: "Uploads", href: "/admin/uploads", icon: <FiBookOpen /> },
  { label: "Queries", href: "/admin/queries", icon: <FiUser /> },
  { label: "Reports", href: "/admin", icon: <FiAward /> },
];
