import { AppProps } from "next/app";
import "../styles/globals.css";
import NavBar from "../components/NavBar";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <NavBar />
      <Component {...pageProps} />
      <span>hello</span>
      <style jsx global>
        {`
          a {
            color: white;
          }
        `}
      </style>
    </>
  );
}
