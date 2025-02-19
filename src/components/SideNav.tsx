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
      className={`block w-full text-sm font-semibold rounded-md px-3 py-2 hover:text-white hover:bg-slate-800 transition-colors ${
        isActive ? "text-white bg-slate-800" : "text-slate-400"
      }`}
    >
      <span className="mr-3 px-2 py-1 rounded-lg border border-slate-600">
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
  { href: "/", title: "Motion Animations", icon: "M" },
  { href: "/frontend-animations", title: "Frontend Animations", icon: "B" },
];

function SideNav() {
  const pathname = usePathname();
  const isActive = (href: string) => {
    return pathname === href;
  };

  return (
    <header>
      <nav className="min-h-screen overflow-y-auto border-r border-slate-800 p-4 flex flex-col gap-1">
        <Link href="/" className="cursor-pointer mb-6">
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
