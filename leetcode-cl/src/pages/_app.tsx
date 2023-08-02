import "leetcode/styles/globals.css";
import type { AppProps } from "next/app";
import Head from "next/head";
// recoil
import { RecoilRoot } from "recoil";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <RecoilRoot>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta
          name="description"
          content="Leetcode clone application that contains code problems to solve"
        />
        <title>Leetcode Clone</title>
      </Head>
      <Component {...pageProps} />
    </RecoilRoot>
  );
}
