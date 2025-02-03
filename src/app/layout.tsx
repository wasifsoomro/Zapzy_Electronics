import type { Metadata } from "next";
import { Inter, Poppins} from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ClerkProvider } from "@clerk/nextjs";

const inter = Inter({ subsets: ["latin"] });

const poppins = Poppins({ 
  subsets: ["latin"],
  weight: ["400", "700"]
 });

export const metadata: Metadata = {
  title: "Zapzy Electronics",
  description: "Zapzy Electronics Marketplace",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
    <html lang="en">
      <body className={`${inter.className} ${poppins.className}`} >
        <Header />
        <div className="overflow-x-hidden">
          {children}
        </div>
        
        <Footer />
        </body>
    </html>
    </ClerkProvider>
  );
}
