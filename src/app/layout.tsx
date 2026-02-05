import type { Metadata } from "next";
import { Poppins, Open_Sans } from "next/font/google";
import Script from "next/script";
import "./globals.css";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const openSans = Open_Sans({
  variable: "--font-open-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://kingclean.co"),
  title: "King Clean | Lavado de Colchones, Sofás y Muebles a Domicilio en Bogotá",
  description:
    "Servicio profesional de lavado y desinfección de colchones, sofás, tapetes y muebles a domicilio en Bogotá y Soacha. Eliminamos 100% orina de mascotas y 90% de manchas. Sin abonos, precios bajos. WhatsApp 3222898383",
  keywords: [
    "lavado de colchones Bogotá",
    "limpieza de sofás a domicilio",
    "desinfección de muebles",
    "eliminar orina de mascota colchón",
    "lavado de tapetes Bogotá",
    "limpieza profesional Soacha",
    "King Clean Bogotá",
  ],
  authors: [{ name: "King Clean" }],
  creator: "King Clean",
  publisher: "King Clean",
  formatDetection: {
    telephone: true,
    email: false,
  },
  openGraph: {
    title: "King Clean | Lavado Profesional a Domicilio en Bogotá",
    description:
      "Limpieza profunda de colchones, sofás y muebles. Eliminamos orina de mascotas y manchas difíciles. Sin abonos previos. Llámanos al 3222898383",
    url: "https://kingclean.co",
    siteName: "King Clean",
    locale: "es_CO",
    type: "website",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "King Clean - Servicio de Limpieza Profesional a Domicilio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "King Clean | Lavado Profesional a Domicilio",
    description:
      "Limpieza profunda de colchones y sofás en Bogotá. Sin abonos previos.",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "your-google-verification-code",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className="scroll-smooth">
      <head>
        <link rel="canonical" href="https://kingclean.co" />
        <meta name="geo.region" content="CO-DC" />
        <meta name="geo.placename" content="Bogotá" />
        {/* Google Tag Manager */}
        <Script id="gtm-script" strategy="afterInteractive">
          {`
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-PQVTSVMQ');
          `}
        </Script>
      </head>
      <body
        className={`${poppins.variable} ${openSans.variable} antialiased`}
      >
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-PQVTSVMQ"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>
        {children}
      </body>
    </html>
  );
}
