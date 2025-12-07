import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ChevronLeft, LayoutDashboard } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const navLinks = [
  { path: "/", label: "الرئيسية" },
  { path: "/subscription", label: "الاشتراك" },
  { path: "/signup", label: "تسجيل حساب" },
  { path: "/login", label: "تسجيل الدخول" },
  { path: "/about", label: "من نحن" },
];

export function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const location = useLocation();

  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);
  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);
  const closeMobileMenu = () => setIsMobileMenuOpen(false);

  return (
    <>
      <header className="sticky top-0 z-[50] w-full">
        <div className="mx-auto max-w-6xl px-4 pt-4">
          <nav className="gradient-primary rounded-xl shadow-elevated px-4 py-3">
            <div className="flex items-center justify-between gap-4">
              {/* Sidebar Toggle */}
              <Button
                variant="ghost"
                size="icon"
                onClick={toggleSidebar}
                className="text-primary-foreground hover:bg-secondary/50"
              >
                <ChevronLeft
                  className={cn(
                    "h-5 w-5 transition-transform duration-300",
                    isSidebarOpen && "rotate-180"
                  )}
                />
              </Button>

              {/* Desktop Navigation */}
              <div className="hidden md:flex items-center gap-2">
                {navLinks.map((link) => (
                  <Link
                    key={link.path}
                    to={link.path}
                    className={cn(
                      "nav-link-slide px-4 py-2 rounded-lg text-sm font-medium text-primary-foreground",
                      location.pathname === link.path && "bg-accent"
                    )}
                  >
                    {link.label}
                  </Link>
                ))}
              </div>

              {/* Mobile Menu Toggle */}
              <Button
                variant="ghost"
                size="icon"
                onClick={toggleMobileMenu}
                className="md:hidden text-primary-foreground hover:bg-secondary/50"
              >
                {isMobileMenuOpen ? (
                  <X className="h-5 w-5" />
                ) : (
                  <Menu className="h-5 w-5" />
                )}
              </Button>
            </div>

            {/* Mobile Navigation */}
            {isMobileMenuOpen && (
              <div className="md:hidden mt-4 pb-2 border-t border-primary-foreground/20 pt-4 animate-fade-in">
                <div className="flex flex-col gap-2">
                  {navLinks.map((link) => (
                    <Link
                      key={link.path}
                      to={link.path}
                      onClick={closeMobileMenu}
                      className={cn(
                        "nav-link-slide px-4 py-3 rounded-lg text-sm font-medium text-primary-foreground text-center",
                        location.pathname === link.path && "bg-accent"
                      )}
                    >
                      {link.label}
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </nav>
        </div>
      </header>

      {/* Sidebar */}
      <aside
        className={cn(
          "fixed top-0 right-0 h-full w-64 bg-secondary z-[60] transition-transform duration-300 ease-in-out",
          "shadow-2xl pt-24 px-4",
          isSidebarOpen ? "translate-x-0" : "translate-x-full"
        )}
      >
        <Link
          to="/dashboard"
          onClick={toggleSidebar}
          className="flex items-center gap-3 px-4 py-3 rounded-lg text-secondary-foreground hover:bg-primary/50 transition-all duration-300"
        >
          <LayoutDashboard className="h-5 w-5" />
          <span className="font-medium">لوحة التحكم</span>
        </Link>
      </aside>

      {/* Sidebar Overlay */}
      {isSidebarOpen && (
        <div
          className="fixed inset-0 bg-foreground/20 backdrop-blur-sm z-[55]"
          onClick={toggleSidebar}
        />
      )}
    </>
  );
}
