import { AppProvider } from '../context/AppContext';
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Crypto Currency Analyzer",
  description: "Crypto Currency Analyzer",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.2/css/all.min.css" />
      </head>
      <body className={inter.className}>
      <AppProvider>
        {children}
        </AppProvider>
      </body>
    </html>
  );
}
