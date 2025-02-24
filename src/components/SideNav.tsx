"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

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
  { heading: "GSAP Animations" },
  { href: "/gsap-mouse-anim", title: "Mouse Related", icon: "M" },
];

function SideNav() {
  const pathname = usePathname();
  const isActive = (href: string) => {
    return pathname === href;
  };

  return (
    <header>
      <nav className="sticky top-0 min-h-screen overflow-y-auto border-r border-slate-800 p-4 flex flex-col gap-1">
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
}

export default SideNav;
