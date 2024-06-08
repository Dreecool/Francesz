'use client'

import { useState, useEffect } from 'react';
import Image from "next/image";
import { TypewriterEffect } from "../components/ui/typewriter-effect";


export default function Home() {
  
  const [showSecondTypewriter, setShowSecondTypewriter] = useState(false);
  const [showCursor, setShowCursor] = useState(true)

  const words = [
    {
      text: "I'm",
    },
    {
      text: "Frances",
    },
    {
      text: "Khem",
    },
    {
      text: "Andre",
    },
    {
      text: "Donaire",
      className: "text-blue-500 dark:text-blue-500",
    }
  ];

  const test = [
    {
      text: 'A'
    },
    {
      text: 'Full'
    },
    {
      text: 'Stack'
    },
    {
      text: 'Software'
    },
    {
      text: 'Developer.'
    }
  ];

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setShowSecondTypewriter(true);
      setShowCursor(false)
    }, 3000); 
    return () => clearTimeout(timeoutId);
  }, []);

  return (
    <div className="flex flex-col items-center justify-center h-[40rem] ">
      <div className="mb-5">
        <TypewriterEffect words={words} showCursor={showCursor}/>
      </div>
      <div>
        {showSecondTypewriter && <TypewriterEffect words={test} showCursor={true} />} 
      </div>
    </div>
  );
}
