import "../styles/globals.css";
import Header from "../components/header";
import { Auth0Provider } from "@auth0/auth0-react";
import Head from "next/head";

function MyApp({ Component, pageProps }) {
  return (
    <Auth0Provider
      domain={process.env.NEXT_PUBLIC_AUTH0_DOMAIN}
      clientId={process.env.NEXT_PUBLIC_AUTH0_CLIENT_ID}
      redirectUri={process.env.NEXT_PUBLIC_URL}
    >
      <div className="antialiased text-gray-700">
        <Head>
          <title>Andaç erdoğmuş</title>
          <link rel="shortcut icon" href="/static/favicon.ico" />
          <meta name="description" content="Kişisel blog" />
          <meta property="og:site_name" content="Personal portfolio" />
          <meta property="og:title" content="personal blog" />
        </Head>

        <Header></Header>
        <main className="mt-6 mb-20">
          <Component {...pageProps} />
        </main>
      </div>
    </Auth0Provider>
  );
}

export default MyApp;
