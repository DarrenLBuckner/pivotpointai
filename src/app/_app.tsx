import type { AppProps } from 'next/app';
import "./globals.css";
import "../../public/tailwind.css";

export default function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
