import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Prompt } from "@next/font/google";

const propmt = Prompt({ weight: "400", subsets: ["thai", "latin"] });

export default function App({ Component, pageProps }: AppProps) {
  return (
    <main className={propmt.className}>
      <Component {...pageProps} />
    </main>
  );
}
