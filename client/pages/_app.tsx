import type { AppProps } from "next/app";

// => Styles
import "@/styles/globals.css";
import "@/styles/base.css";

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
