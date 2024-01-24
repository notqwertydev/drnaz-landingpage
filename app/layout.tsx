import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import NavBar from "@/components/NavBar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>


        <div className='bg-[#0f1014] flex flex-col min-h-screen mx-auto 2xl:max-w-screen-3xl'>

          <NavBar />
          <div className='px-0'>
            {children}
          </div>

        </div>


      </body>
    </html>
  );
}
