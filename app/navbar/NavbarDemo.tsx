"use client";
import React, { useState } from "react";
import { HoveredLink, Menu, MenuItem, ProductItem } from "../../components/ui/navbar-menu";
import { cn } from "@/utils/cn";
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';

import testImage from '../../app/images/test.png';

export function NavbarDemo() {
  return (
    <div className="relative w-full flex items-center justify-center">
      <Navbar className="top-2" />
    </div>
  );
}

function Navbar({ className }: { className?: string }) {
  const [active, setActive] = useState<string | null>(null);
  return (
    <div className={cn("fixed top-10 inset-x-0 max-w-2xl mx-auto z-50", className)}>
      <Menu setActive={setActive}>
        <button onClick={() => {
          window.location.hash = "test";
        }}>About</button>
        <button>Skills</button>
        <MenuItem setActive={setActive} active={active} item="Projects">
          <div className="text-sm grid grid-cols-2 gap-10 p-4">
            <ProductItem
              title="Todo List"
              href="https://todo-pink-seven.vercel.app/"
              src={testImage.src}
              description="This intuitive and user-friendly tool helps you manage your tasks efficiently."
            />
            <ProductItem
              title="Todo List"
              href="https://todo-pink-seven.vercel.app/"
              src={testImage.src}
              description="This intuitive and user-friendly tool helps you manage your tasks efficiently."
            />
            <ProductItem
              title="Todo List"
              href="https://todo-pink-seven.vercel.app/"
              src={testImage.src}
               description="This intuitive and user-friendly tool helps you manage your tasks efficiently."
            />
            <ProductItem
              title="Todo List"
              href="https://todo-pink-seven.vercel.app/"
              src={testImage.src}
              description="This intuitive and user-friendly tool helps you manage your tasks efficiently."
            />
          </div>
        </MenuItem>
        <MenuItem setActive={setActive} active={active} item="Contact">
          <div className="flex flex-col space-y-4 text-sm">
            <HoveredLink href="/web-dev"><LinkedInIcon /></HoveredLink>
            <HoveredLink href="/interface-design"><GitHubIcon /></HoveredLink>
            <HoveredLink href="/seo"><InstagramIcon /></HoveredLink>
            <HoveredLink href="/branding"><FacebookIcon /></HoveredLink>
            <HoveredLink href="/branding"><TwitterIcon /></HoveredLink>
          </div>
        </MenuItem>
        <button>Resume</button>
      </Menu>
    </div>
  );
}