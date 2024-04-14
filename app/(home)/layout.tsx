'use client';

import React from 'react';
import Navbar from "@/components/_layout/Navbar";
import Sidebar from "@/components/_layout/Sidebar";
import Chatbox from "@/features/chatbox";
import { NextUIProvider } from "@nextui-org/react";


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <NextUIProvider>
      <div className="flex flex-1 min-h-[100vh] ">
        
        <Sidebar />

        <div className="flex flex-1 flex-col">
          <Navbar />
          <div className="flex flex-1 flex-row">
            {children}
            <Chatbox />
          </div>
        </div>

      </div>
    </NextUIProvider>
  );
}
