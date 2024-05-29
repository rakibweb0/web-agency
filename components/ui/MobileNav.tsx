"use client";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { AlignRight } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

const MobileNav = ({ menus }: { menus: { label: string; url: string }[] }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="block lg:hidden">
      <Sheet open={isOpen} onOpenChange={setIsOpen}>
        <SheetTrigger>
          <AlignRight />
        </SheetTrigger>
        <SheetContent>
          <ul className="flex flex-col items-start *:text-fontClamp18 *:font-medium">
            {menus.map((menu) => (
              <li key={menu.label}>
                <Link
                  onClick={() => setIsOpen(false)}
                  href={menu.url || "/"}
                  className="py-2.5 block"
                >
                  {menu.label}
                </Link>
              </li>
            ))}
          </ul>
        </SheetContent>
      </Sheet>
    </div>
  );
};

export default MobileNav;
