import type { Metadata } from 'next';
import { Roboto } from 'next/font/google';

import Footer from '@/shared/ui/components/footer/Footer';
import Header from '@/shared/ui/components/header/Header';
import Preloader from '@/shared/ui/components/preloader/Preloader';

import '@/shared/lib/styles/base.scss';
import '@/shared/lib/styles/mixin.scss';

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
      <body className={`${roboto.variable}`}>
        <Preloader />
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
