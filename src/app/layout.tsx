import type { Metadata } from 'next';

import {
  gmarketSansBold,
  gmarketSansMedium,
  pretendardBold,
  pretendardMedium,
  pretendardRegular,
  pretendardSemiBold,
} from '@/app/(configs)/font/config';
import AppInitializer from '@/app/(initializer)/AppInitializer';
import NavBar from '@/app/components/NavBar';

import '@/styles/index.scss';

export const metadata: Metadata = {
  title: 'GiBi',
  description: 'Group Buy Custom Keyboard',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${gmarketSansMedium.className} ${gmarketSansBold.variable} ${pretendardRegular.variable} ${pretendardMedium.variable} ${pretendardBold.variable} ${pretendardSemiBold.variable}`}
    >
      <body>
        <AppInitializer>
          <NavBar />
          {children}
        </AppInitializer>
      </body>
    </html>
  );
}
