import Link from "next/link";
import React from "react";

const Nav = ({menus}: {menus: {label: string; url: string}[]}) => {
  
  return (
    <nav className="hidden lg:block">
      <ul className="flex justify-between items-center gap-5 *:text-fontClamp18 *:font-medium">
        {menus.map((menu) => (
          <li key={menu.label}>
            <Link href={menu.url || "/"} className="px-6 py-2.5  rounded-lg transition-all duration-300 hover:border-[#353535] hover:bg-[#F3F3F4]">
              {menu.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Nav;
