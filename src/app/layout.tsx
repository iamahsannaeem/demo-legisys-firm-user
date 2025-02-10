import { inter, roboto } from "@/assets/fonts";
import { MainLayout } from "@/layouts/main";
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Legisys",
  description:
    "Streamline your legal practice with Legisys. Our AI-powered platform empowers law firms with cutting-edge legal research, document management, and collaboration tools. Increase efficiency, reduce research time, and gain a competitive edge.",
};

const RootLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <html lang="en">
      <body
        className={`h-screen bg-baseColor ${roboto.className} ${inter.className} `}
      >
        <MainLayout>{children}</MainLayout>
      </body>
    </html>
  );
};

export default RootLayout;
