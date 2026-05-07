"use client";
import { Playfair_Display } from "next/font/google";
import Link from "next/link";
import NavLink from "./NavLink";
import { authClient } from "@/lib/auth-client";
import Image from "next/image";
import { useRouter } from "next/navigation";

const playFair_Display = Playfair_Display({
  variable: "--font-playfair-display",
  subsets: ["latin"],
});

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/all_animals", label: "All Animals" },
];

const Navbar = () => {
  const router = useRouter();
  const { data: session } = authClient.useSession();
  const user = session?.user;

  const handleLogout = async () => {
    await authClient.signOut();
     router.push("/");
  };

  return (
    <div className="sticky top-0 z-50 bg-white border-b border-gray-200 shadow-sm">
      <div className="container mx-auto px-4">
        <div className="navbar bg-white min-h-16">
          
          <div className="navbar-start">
            <Link href="/">
              <p
                className={`${playFair_Display.className} text-2xl font-bold text-green-800`}
              >
                QurbaniHat
              </p>
            </Link>
          </div>

         
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal gap-1 px-1">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <NavLink href={link.href}>{link.label}</NavLink>
                </li>
              ))}
            </ul>
          </div>

          
          <div className="navbar-end gap-2">
           
            <div className="hidden lg:flex items-center gap-3">
              {user ? (
                <div className="flex items-center gap-3">
                 
                  <Link href="/my_profile">
                    <div className="avatar cursor-pointer">
                      <div className="w-9 rounded-full ring ring-green-800 ring-offset-1 overflow-hidden">
                        {user.image && user.image.startsWith("https") ? (
                          <Image
                            src={user.image}
                            alt={user.name || "user"}
                            height={36}
                            width={36}
                            className="rounded-full"
                          />
                        ) : (
                          <div className="w-9 h-9 bg-green-800 text-white flex items-center justify-center text-sm font-bold">
                            {user.name?.charAt(0).toUpperCase()}
                          </div>
                        )}
                      </div>
                    </div>
                  </Link>
                  
                  <span className="text-sm font-medium text-gray-700">
                    {user.name}
                  </span>
                  
                  <button
                    onClick={handleLogout}
                    className="btn btn-sm btn-outline border-green-800 text-green-800 hover:bg-green-800 hover:text-white hover:border-green-800"
                  >
                    Logout
                  </button>
                </div>
              ) : (
                <>
                  <Link
                    href="/login"
                    className="btn btn-sm btn-ghost text-green-800"
                  >
                    Login
                  </Link>
                  <Link
                    href="/register"
                    className="btn btn-sm bg-green-800 text-white hover:bg-green-900 border-none"
                  >
                    Register
                  </Link>
                </>
              )}
            </div>

           
            <div className="dropdown dropdown-end lg:hidden">
              <div tabIndex={0} role="button" className="btn btn-ghost btn-sm">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h8m-8 6h16"
                  />
                </svg>
              </div>
              <ul
                tabIndex={0}
                className="dropdown-content menu bg-white rounded-xl shadow-lg z-50 mt-3 w-52 p-2 border border-gray-100"
              >
                {navLinks.map((link) => (
                  <li key={link.href}>
                    <NavLink href={link.href}>{link.label}</NavLink>
                  </li>
                ))}
                <div className="divider my-1"></div>
                {user ? (
                  <>
                    <li className="px-2 py-1 text-sm font-medium text-gray-700">
                     <Link href={'/my_profile'}>
                       {user.name}
                     </Link>
                    </li>
                    <li>
                      <button
                        onClick={handleLogout}
                        className="text-red-500 font-medium"
                      >
                        Logout
                      </button>
                    </li>
                  </>
                ) : (
                  <>
                    <li>
                      <Link href="/login" className="font-medium">
                        Login
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/register"
                        className="font-medium text-green-800"
                      >
                        Register
                      </Link>
                    </li>
                  </>
                )}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
