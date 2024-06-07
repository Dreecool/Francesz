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
              title="Algochurn"
              href="https://algochurn.com"
              src={testImage.src}
              description="Prepare for tech interviews like never before."
            />
            <ProductItem
              title="Tailwind Master Kit"
              href="https://tailwindmasterkit.com"
              src={testImage.src}
              description="Production ready Tailwind css components for your next project"
            />
            <ProductItem
              title="Moonbeam"
              href="https://gomoonbeam.com"
              src={testImage.src}
              description="Never write from scratch again. Go from idea to blog in minutes."
            />
            <ProductItem
              title="Rogue"
              href="https://userogue.com"
              src={testImage.src}
              description="Respond to government RFPs, RFIs and RFQs 10x faster using AI"
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