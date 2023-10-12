import './globals.css'
import type { Metadata } from 'next'
import localFont from 'next/font/local';
import Header from '@/app/components/Header';
import Footer from '@/app/components/Footer';
import SidebarLeft from '@/app/components/SidebarLeft';
import SidebarMenu from '@/app/components/SidebarMenu';
import SidebarRight from '@/app/components/SidebarRight';
import Navbar from '@/app/components/Navbar';
import SidebarProvider from '@/app/sidebar-provider';
import Terminal from '@/app/components/Terminal';

export const metadata: Metadata = {
  metadataBase: new URL('https://www.yugma.dev'),
  title: {
    default: 'Yugma Dewangga',
    template: '%s | Yugma Dewangga',
  },
  description: 'Saya Yugma Dewangga, Saya adalah seorang Web Developer yang berpengalaman mengembangkan web menggunakan bahasa pemrograman JavaScript, TypeScript dan PHP.',
  openGraph: {
    title: 'Yugma Dewangga',
    description: 'Saya Yugma Dewangga, Saya adalah seorang Web Developer yang berpengalaman mengembangkan web menggunakan bahasa pemrograman JavaScript, TypeScript dan PHP.',
    url: 'https://www.yugma.dev',
    siteName: 'Yugma Dewangga',
    locale: 'id-ID',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    }
  },
  verification: {
    google: 'WU1WoM-DuB5UYeDD6Kx0e6zn6pHDyaPGk5w6xDTt-wc'
  }
}

const inter = localFont({
  src: [
    {
      path: '../public/font/Inter-Regular.ttf',
      weight: '400',
      style: 'regular',
    },
    {
      path: '../public/font/Inter-Medium.ttf',
      weight: '500',
      style: 'medium',
    },
    {
      path: '../public/font/Inter-SemiBold.ttf',
      weight: '600',
      style: 'semibold',
    },
    {
      path: '../public/font/Inter-Bold.ttf',
      weight: '700',
      style: 'bold',
    },
  ],
  variable: '--font-inter',
  display: 'swap',
});

const jetbrains = localFont({
  src: [
    {
      path: '../public/font/JetBrainsMono-Medium.ttf',
      weight: '500',
      style: 'medium',
    },
    {
      path: '../public/font/JetBrainsMono-Bold.ttf',
      weight: '700',
      style: 'bold',
    },
  ],
  variable: '--font-jetbrains',
  display: 'swap',
});

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="id-ID"
      className={`${inter.variable} ${jetbrains.variable}`}
    >
    <body
      suppressHydrationWarning={true}
      className="bg-gray-primary"
    >
    <SidebarProvider>
      <Header />
      <div className="relative h-full w-full max-w-[1536px] mx-auto">
        <div className="flex justify-start items-center">
          <SidebarLeft />
          <SidebarMenu />
          <div className="flex-1 height overflow-x-auto">
            <Navbar />
            {children}
          </div>
          <SidebarRight />
          <Terminal />
        </div>
      </div>
      <Footer />
    </SidebarProvider>
    </body>
    </html>
  )
}
