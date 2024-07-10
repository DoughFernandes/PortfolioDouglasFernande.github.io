import './scss/layout.scss';
import type { Metadata } from 'next';
import { Header } from '../components/Header/index';

export const metadata: Metadata = {
  title: 'Portfólio ',
  description: 'Esse é uma apresentação sobre Douglas Fernandes, tudo sobre sua carreira',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='pt-BR'>
      <body>
        <Header />
        {children}
      </body>
    </html>
  );
}