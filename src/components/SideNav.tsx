"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { MenuIcon } from "lucide-react";

interface LinkComponentProps {
  children: React.ReactNode;
  href: string;
  icon: string;
  isActive: boolean;
}

const LinkComponent = ({
  children,
  href,
  icon,
  isActive,
}: LinkComponentProps) => {
  return (
    <Link
      href={href}
      className={`flex items-center w-full text-sm font-semibold rounded-md px-3 py-2 hover:text-white hover:bg-slate-800 transition-colors ${
        isActive ? "text-white bg-slate-800" : "text-slate-400"
      }`}
    >
      <span className="flex items-center justify-center w-7 h-7 mr-3 px-2 py-1 rounded-lg border border-slate-600">
        {icon}
      </span>
      {children}
    </Link>
  );
};

const HeadingComponent = ({ children }: { children: React.ReactNode }) => {
  return (
    <h3 className="text-sm pl-3 font-medium text-slate-400 mt-8 mb-2">
      {children}
    </h3>
  );
};

type LinksProps = Array<
  | {
      href: string;
      title: string;
      icon: string;
    }
  | {
      heading: string;
    }
>;

const Links: LinksProps = [
  { heading: "Framer Motion" },
  { href: "/", title: "Motion.dev", icon: "M" },
  { href: "/frontend-fyi", title: "Frontend FYI", icon: "F" },
  { href: "/animations-dev", title: "Animations.dev", icon: "A" },
  { href: "/buildui", title: "Buildui", icon: "B" },
  { href: "/framer-full-page-hover-anim", title: "Hover Animation", icon: "H" },
  { href: "/full-page-sticky", title: "Sticky Navigation", icon: "S" },
  { heading: "GSAP Animations" },
  { href: "/full-page-hover-anim", title: "Hover Animation", icon: "H" },
];

function SideNav() {
  const pathname = usePathname();
  const isActive = (href: string) => {
    return pathname === href;
  };

  const Header = () => {
    return (
      <header className="border-none">
        <nav className="flex flex-col gap-1">
          <Link href="/" className="cursor-pointer">
            <Image width={48} height={48} src="/logo.png" alt="Logo" />
          </Link>
          {Links.map((link, index) => (
            <div key={index}>
              {"heading" in link ? (
                <HeadingComponent>{link.heading}</HeadingComponent>
              ) : (
                <LinkComponent
                  href={link.href}
                  icon={link.icon}
                  isActive={isActive(link.href)}
                >
                  {link.title}
                </LinkComponent>
              )}
            </div>
          ))}
        </nav>
      </header>
    );
  };

  return (
    <Popover>
      <PopoverTrigger className="fixed top-4 left-4 z-40">
        <div className="w-12 h-12 border border-slate-600 bg-slate-800 rounded-full text-white flex items-center justify-center">
          <MenuIcon className="w-6 h-6" />
        </div>
      </PopoverTrigger>
      <PopoverContent
        side="bottom"
        align="start"
        sideOffset={10}
        alignOffset={12}
        className="bg-slate-950 rounded-lg border border-slate-700"
      >
        <Header />
      </PopoverContent>
    </Popover>
  );
}

export default SideNav;
