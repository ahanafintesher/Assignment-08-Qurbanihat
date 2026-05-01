import { playFair_Display } from "@/app/layout";
import Link from "next/link";
import { FaFacebook, FaTwitter, FaInstagram, FaYoutube } from "react-icons/fa";
import { MdEmail, MdPhone, MdLocationOn } from "react-icons/md";

const Footer = () => {
  return (
    <footer className="bg-green-900 text-white">
      {/* Main Footer */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">

          {/* Brand Section */}
          <div className="lg:col-span-1">
            <Link href="/">
              <p className={`${playFair_Display.className} text-3xl font-bold text-white mb-3`}>
                QurbaniHat
              </p>
            </Link>
            <p className="text-green-200 text-sm leading-relaxed mb-4">
              Bangladesh's most trusted Qurbani animal marketplace. 
              Premium quality cows, goats, and other sacrificial animals 
              directly from farms.
            </p>

            {/* Social Links */}
            <div className="flex gap-3 mt-4">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 bg-green-800 hover:bg-white hover:text-green-900 rounded-full flex items-center justify-center transition"
              >
                <FaFacebook size={16} />
              </a>

              <a
                href="https://twitter.com"
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 bg-green-800 hover:bg-white hover:text-green-900 rounded-full flex items-center justify-center transition"
              >
                <FaTwitter size={16} />
              </a>

              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 bg-green-800 hover:bg-white hover:text-green-900 rounded-full flex items-center justify-center transition"
              >
                <FaInstagram size={16} />
              </a>

              <a
                href="https://youtube.com"
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 bg-green-800 hover:bg-white hover:text-green-900 rounded-full flex items-center justify-center transition"
              >
                <FaYoutube size={16} />
              </a>
            </div>
          </div>

          {/* About Section */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-4 border-b border-green-700 pb-2">
              About Us
            </h3>
            <ul className="space-y-2">
              {[
                { href: "/", label: "Home" },
                { href: "/all_animals", label: "All Animals" },
                { href: "/about", label: "About Us" },
                { href: "/how-it-works", label: "How It Works" },
                { href: "/faq", label: "FAQ" },
              ].map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-green-200 hover:text-white text-sm flex items-center gap-2 transition"
                  >
                    <span className="text-green-500">›</span>
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Animal Categories */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-4 border-b border-green-700 pb-2">
              Animal Categories
            </h3>
            <ul className="space-y-2">
              {[
                { href: "/allanimals?type=cow", label: "🐄 Cow" },
                { href: "/allanimals?type=goat", label: "🐐 Goat" },
                { href: "/allanimals?type=sheep", label: "🐑 Sheep" },
                { href: "/allanimals?type=camel", label: "🐪 Camel" },
                { href: "/allanimals?type=buffalo", label: "🐃 Buffalo" },
              ].map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-green-200 hover:text-white text-sm flex items-center gap-2 transition"
                  >
                    <span className="text-green-500">›</span>
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-4 border-b border-green-700 pb-2">
              Contact
            </h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <MdLocationOn className="text-green-400 mt-0.5" size={18} />
                <span className="text-green-200 text-sm">
                  123, Qurbani Market, Dhaka - 1200, Bangladesh
                </span>
              </li>

              <li className="flex items-center gap-3">
                <MdPhone className="text-green-400" size={18} />
                <a
                  href="tel:+8801700000000"
                  className="text-green-200 hover:text-white text-sm"
                >
                  +880 1700-000000
                </a>
              </li>

              <li className="flex items-center gap-3">
                <MdEmail className="text-green-400" size={18} />
                <a
                  href="mailto:info@qurbanihat.com"
                  className="text-green-200 hover:text-white text-sm"
                >
                  info@qurbanihat.com
                </a>
              </li>
            </ul>

            {/* Working Hours */}
            <div className="mt-5 bg-green-800 rounded-lg p-3">
              <p className="text-white text-xs font-semibold mb-1">
                ⏰ Working Hours
              </p>
              <p className="text-green-200 text-xs">
                Sat - Thu: 8:00 AM - 10:00 PM
              </p>
              <p className="text-green-200 text-xs">
                Friday: 2:00 PM - 10:00 PM
              </p>
            </div>
          </div>

        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-green-700">
        <div className="container mx-auto px-4 py-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-2">
            <p className="text-green-300 text-sm text-center">
              © {new Date().getFullYear()} QurbaniHat. All rights reserved.
            </p>
            <div className="flex gap-4">
              <Link href="/privacy" className="text-green-300 hover:text-white text-xs">
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-green-300 hover:text-white text-xs">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;