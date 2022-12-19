import React from "react";
import { Bars3Icon } from "@heroicons/react/24/solid";
import Link from "next/link";
import NavLinks from "./NavLinks";
import SearchBox from "./SearchBox";
import DarkModeButton from "./DarkModeButton";

function Header() {
  return (
    <header>
      <div className="grid grid-cols-3 p-10 items-center">
        <Bars3Icon className="h-8 w-8 cursor-pointer" />
        <Link href="/" prefetch={false}>
          <h1>The News Board</h1>
        </Link>
        {/* <div>
          <button className="hidden md:inline bg-slate-900 text-white px-4 lg:px-8 py-2 lg:py-4 rounded-full dark:bg-slate-800">
            subscipb
          </button>
        </div> */}
        <div className="flex  justify-center">
          <DarkModeButton />
        </div>
      </div>
      <NavLinks />
      <SearchBox />
    </header>
  );
}

export default Header;
