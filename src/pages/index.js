import Head from "next/head";
import { useEffect, useState } from "react";

export default function Home() {
  const [source, setSource] = useState("");

  useEffect(() => {
    fetch("/api/images")
      .then((res) => res.json())
      .then((data) => {
        setSource(data.imageUrl);
      });
  }, []);

  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <style>{` 
        body {
          background-image: url(${source});
          background-size: cover;
          background-position: center;
          background-repeat: no-repeat;
        }`}</style>
      </Head>
      <main style={{ width: "100vw", height: "100vh" }}></main>
    </>
  );
}
