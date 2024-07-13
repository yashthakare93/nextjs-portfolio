"use client"
import React, { useState } from "react";
import Head from "next/head";

import "./globals.css";
import { FiSun, FiMoon } from "react-icons/fi";
import { FloatingNav } from "./components/ui/FloatingNav";
import { TracingBeam } from "./components/ui/tracing-beam";

const navItems = [
  { name: "Home", link: "/" },
  { name: "About", link: "/about" },
  { name: "Skills", link: "/skills" },
  { name: "Projects", link: "/projects" },
  { name: "Blogs", link: "/blog" },
];

const RootLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  // Initialize dark mode state, defaulting to true for dark mode
  const [darkMode, setDarkMode] = useState(true);

  // Function to toggle dark mode
  const toggleDarkMode = () => {
    const newMode = !darkMode;
    setDarkMode(newMode);
    localStorage.setItem("darkMode", JSON.stringify(newMode));
  };

  // Effect to initialize dark mode based on user preference from localStorage
  React.useEffect(() => {
    const storedMode = localStorage.getItem("darkMode");
    if (storedMode !== null) {
      setDarkMode(JSON.parse(storedMode));
    }
  }, []);

  return (
    <html lang="en">
      <Head>
        <title>Yash Thakare | Portfolio</title>
        <meta name="description" content="" />
      </Head>
      <body className={`${darkMode ? "dark" : "light"}`}>

        <div className={`transition-colors duration-500 ${darkMode ? "bg-black text-white" : "bg-white text-black"} pt-10`}>
          <div className="flex justify-end pr-10 pt-4">
            <button
              onClick={toggleDarkMode}
              className="flex items-center text-lg"
            >
              {darkMode ? <FiSun /> : <FiMoon />}

            </button>
          </div>
          <FloatingNav
            navItems={navItems}
            className="hidden sm:flex px-6 py-4"
          />
          <TracingBeam>
            <main className="w-full lg:px-24 px-4">

              {children}
            </main>
          </TracingBeam>
        </div>
        <footer className="bg-white dark:bg-black text-black dark:text-gray-400 border-t-2 border-gray-300 dark:border-gray-800 text-center py-4">
          <p className="text-sm font-light">&copy; Copyright 2024 - Developed by Yash Thakare. All right reserved.</p>
        </footer>
      </body>

    </html>
  );
};

export default RootLayout;
