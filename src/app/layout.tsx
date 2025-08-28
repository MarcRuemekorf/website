import type { Metadata } from "next";
import { JetBrains_Mono, Inter } from 'next/font/google';

import { Provider } from "@/components/ui/Provider"
import { ReactElement } from "react";

const fontInter = Inter({
	variable: '--font-inter',
	subsets: ['latin'],
});

const fontJetBrainsMono = JetBrains_Mono({
	variable: '--font-jetbrains-mono',
	subsets: ['latin'],
});


export const metadata: Metadata = {
  title: "Marc Ruemekorf",
  description: "My website",
};

type RootLayoutProps = Readonly<{
	children: React.ReactNode;
}>;

const RootLayout = ({ children }: RootLayoutProps): ReactElement => {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${fontInter.variable} ${fontJetBrainsMono.variable}`}>
        <Provider>{children}</Provider>
      </body>
    </html>
  );
}

export default RootLayout;