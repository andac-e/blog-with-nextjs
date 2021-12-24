import "../styles/globals.css";
import Header from "../components/header";
import { Auth0Provider } from "@auth0/auth0-react";

function MyApp({ Component, pageProps }) {
  return (
    <Auth0Provider
      domain="dev-c-jctz0j.us.auth0.com"
      clientId="Z4iFyg25aQT1x5DuCUq4pwfklR3VFrSS"
      redirectUri={process.env.NEXT_PUBLIC_URL}
    >
      <div className="antialiased text-gray-700">
        <Header></Header>
        <main className="mt-6 mb-20">
          <Component {...pageProps} />
        </main>
      </div>
    </Auth0Provider>
  );
}

export default MyApp;
