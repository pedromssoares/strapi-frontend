import { AppProps } from "next/app";
import "@/styles/globals.css"
import Layout from "@/components/Layout";
import "@fontsource/inter"; 

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}
