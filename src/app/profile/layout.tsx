import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Customer Profile",
  description: "made with love ❤️",
};
import LoginNavBar from "@/components/local/loginNavBar";


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
    <LoginNavBar/>
    {children}
    </>
  );
}
