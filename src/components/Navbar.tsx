/* eslint-disable @next/next/no-img-element */
/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const navItems = [
  { label: "Home", href: "/" },
  { label: "Explore Travelers", href: "/explore" },
  { label: "Find Travel Plans", href: "/travel-plans" },
];

const DASHBOARD_LINKS = {
  ADMIN: "/dashboard/admin/stats",
  HOST: "/dashboard/host/my-plans",
  USER: "/dashboard/user/profile",
};

export default function Navbar() {
  const pathname = usePathname();
  const router = useRouter();

  const [open, setOpen] = useState(false);
  const [userMenuOpen, setUserMenuOpen] = useState(false);
  const [userData, setUserData] = useState<any>(null);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setIsMounted(true);

    const fetchProfile = async () => {
      try {
        const res = await fetch(
          `${process.env.NEXT_PUBLIC_API_URL}/users/profile`,
          {
            method: "GET",
            credentials: "include",
          }
        );
        const data = await res.json();

        if (data.success) {
          setUserData(data.data);
        } else {
          setUserData(null);
        }
      } catch (err) {
        setUserData(null);
      }
    };

    fetchProfile();
  }, [pathname]);

  const isLoggedIn = !!userData;

  const handleLogout = async () => {
    try {
      await fetch(`${process.env.NEXT_PUBLIC_API_URL}/auth/logout`, {
        method: "POST",
        credentials: "include",
      });
      setUserData(null);
      setUserMenuOpen(false);
      router.push("/login");
    } catch (err) {
      console.error("Logout failed", err);
    }
  };

  if (!isMounted) return null;

  return (
    <nav className="fixed top-0 inset-x-0 z-50 w-full border-b border-gray-200 bg-white shadow-sm">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 md:px-6 h-16">
        {/* Logo */}
        {/* 
        <Link href="/" className="text-2xl font-bold text-blue-600" onClick={() => setOpen(false)}>
        </Link> */}
        <Link
          href="/"
          className="text-2xl font-bold text-blue-600"
          onClick={() => setOpen(false)}
        >
          <Image
            src="/TripMingle Logo.png"
            alt=""
            width={60}
            height={60}
            className="inline-block rounded-full"
          />
          TripMingle
        </Link>

        {/* Desktop Nav */}
        <div className="hidden items-center gap-6 md:flex">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`text-sm font-medium transition ${
                pathname === item.href
                  ? "text-blue-600"
                  : "text-gray-600 hover:text-blue-500"
              }`}
            >
              {item.label}
            </Link>
          ))}
          {userData?.role === "HOST" && (
            <Link
              href="/dashboard/host/create-plan"
              className={`text-sm font-medium transition ${
                pathname === "/dashboard/host/create-plan"
                  ? "text-blue-600"
                  : "text-gray-600 hover:text-blue-500"
              }`}
            >
              Create Plan
            </Link>
          )}
        </div>

        {/* Desktop User Section */}
        <div className="hidden items-center gap-3 md:flex">
          {!isLoggedIn ? (
            <>
              <Link
                href="/login"
                className="px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-100 rounded-md"
              >
                Login
              </Link>
              <Link
                href="/register"
                className="bg-blue-600 px-4 py-2 text-sm font-medium text-white hover:bg-blue-700 rounded-md"
              >
                Register
              </Link>
            </>
          ) : (
            <div className="relative">
              {userData && (
                <div className="group relative">
                  <img
                    src={
                      userData.profilePhoto ||
                      "https://i.ibb.co.com/zWjwgLsH/db40c047-22e9-48cc-9f0b-3832ff87e92e.jpg"
                    }
                    className="w-10 h-10 rounded-full cursor-pointer"
                  />

                  <div className="hidden group-hover:block absolute right-0 w-48 bg-white border rounded-xl shadow-xl p-2">
                    <p className="text-xs text-gray-400 px-3 py-1 uppercase font-bold">
                      {userData.role}
                    </p>

                    {userData.role === "ADMIN" && (
                      <Link
                        href="/dashboard/admin"
                        className="block px-3 py-2 hover:bg-gray-100 rounded-md"
                      >
                        Admin Panel
                      </Link>
                    )}

                    {userData.role === "HOST" && (
                      <Link
                        href="/dashboard/host/my-plans"
                        className="block px-3 py-2 hover:bg-gray-100 rounded-md"
                      >
                        Host Panel
                      </Link>
                    )}
                    {userData.role === "TOURIST" && (
                      <Link
                        href="/dashboard/tourist/my-trips"
                        className="block px-3 py-2 hover:bg-gray-100 rounded-md"
                      >
                        My Trips
                      </Link>
                    )}

                    <Link
                      href="/dashboard/profile"
                      className="block px-3 py-2 hover:bg-gray-100 rounded-md"
                    >
                      Profile
                    </Link>
                    <hr className="my-1" />
                    <button
                      onClick={handleLogout}
                      className="w-full text-left px-3 py-2 text-red-500 hover:bg-red-50 rounded-md"
                    >
                      Logout
                    </button>
                  </div>
                </div>
              )}
            </div>
          )}
        </div>

        {/* Mobile Hamburger */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden p-2 text-gray-600"
        >
          {open ? "✕" : "☰"}
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="border-t border-gray-200 bg-white md:hidden p-4 space-y-4">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className="block text-sm font-medium text-gray-700"
            >
              {item.label}
            </Link>
          ))}
          {userData?.role === "HOST" && (
            <Link
              href="/dashboard/host/create-plan"
              className={`text-sm font-medium transition ${
                pathname === "/dashboard/host/create-plan"
                  ? "text-blue-600"
                  : "text-gray-600 hover:text-blue-500"
              }`}
            >
              Create Plan
            </Link>
          )}
          <hr />
          {!isLoggedIn ? (
            <div className="flex flex-col gap-3">
              <Link
                href="/login"
                onClick={() => setOpen(false)}
                className="text-sm font-medium text-gray-700"
              >
                Login
              </Link>
              <Link
                href="/register"
                onClick={() => setOpen(false)}
                className="bg-blue-600 text-white px-4 py-2 rounded-md text-center text-sm font-medium"
              >
                Register
              </Link>
            </div>
          ) : (
            <div className="flex flex-col gap-3">
              <Link
                href="/dashboard"
                onClick={() => setOpen(false)}
                className="text-sm font-medium text-gray-700"
              >
                Dashboard
              </Link>
              <button
                onClick={handleLogout}
                className="text-left text-sm font-medium text-red-600"
              >
                Logout
              </button>
            </div>
          )}
        </div>
      )}
    </nav>
  );
}
