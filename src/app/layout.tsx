import type { Metadata } from 'next';
import { Roboto } from 'next/font/google';
import { GoogleAnalytics } from '@next/third-parties/google';

import { CriticalAlert } from '@/shared/ui/components/criticalAlert/CriticalAlert';
import Footer from '@/shared/ui/components/footer/Footer';
import Header from '@/shared/ui/components/header/Header';
import ServiceUpdate from '@/shared/ui/components/serviceUpdate/ServiceUpdate';

import '@/shared/lib/styles/base.scss';
import '@/shared/lib/styles/mixin.scss';

// The site is temporarily closed. While this flag is true, every route renders
// only the maintenance placeholder; all pages remain in the codebase but hidden.
// Set to false to restore the regular site (Header / page content / Footer).
const MAINTENANCE_MODE = false;

const roboto = Roboto({
  variable: '--font-roboto',
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
});

export const metadata: Metadata = {
  title: 'LoonieBit | Buy, Sell & Exchange Cryptocurrency Instantly',
  description:
    'LoonieBit is a secure and regulated crypto exchange for fast and reliable cryptocurrency transactions. Trade Bitcoin, Ethereum, and more with full compliance and powerful tools.',
  openGraph: {
    title: 'LoonieBit | Buy, Sell & Exchange Cryptocurrency Instantly',
    description:
      'LoonieBit is a secure and regulated crypto exchange for fast and reliable cryptocurrency transactions. Trade Bitcoin, Ethereum, and more with full compliance and powerful tools.',
    images: "https://looniebit.com/images/meta.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <GoogleAnalytics gaId="G-XM5ZSK54ZR" />
      <body className={`${roboto.variable}`}>
        {MAINTENANCE_MODE ? (
          <ServiceUpdate />
        ) : (
          <>
            <CriticalAlert />
            <Header />
            <main>{children}</main>
            <Footer />
          </>
        )}
      </body>
    </html>
  );
}
