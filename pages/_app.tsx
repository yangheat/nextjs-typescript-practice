import { AppProps } from "next/app";
import "../styles/globals.css";
import Layout from "../components/Layout";

export default function MyApp({ Component, pageProps }: AppProps) {
  console.log("MyApp:", pageProps);
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}
