"use client";
import { Logo } from "@/assets/icons/logo";
import { NAV_LINKS } from "@/constants/nav-links";
import Link from "next/link";
import { usePathname } from "next/navigation";

export const Sidebar = () => {
  const pathname = usePathname();

  return (
    <div className="h-full  flex flex-col w-[250px] gap-8   rounded-xl ">
      <div className="px-4">
        <Link href="/">
          <Logo />
        </Link>
      </div>

      <div className="flex flex-col  ">
        {NAV_LINKS.map((link) => {
          return (
            <Link key={link.id} href={`${link.hreflink}`} passHref>
              <div
                className={`cursor-pointer hover:bg-slate-200 h-8 flex px-4 gap-4 items-center  text-sm font-normal   ${link.hreflink === pathname ? "border-r-4 border-black text-black bg-slate-200" : "text-disabledText"}`}
              >
                {link.hreflink === pathname ? link.activeIcon : link.icon}

                <div className="font-sf">{link.title}</div>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
};
