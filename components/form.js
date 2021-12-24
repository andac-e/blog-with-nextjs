import { useAuth0 } from "@auth0/auth0-react";

export default function Form({ onSubmit, text, textSet }) {
  const { loginWithRedirect, logout, isAuthenticated, user } = useAuth0();
  return (
    <form className="mt-10" onSubmit={onSubmit}>
      <textarea
        value={text}
        onChange={(e) => textSet(e.target.value)}
        rows="2"
        className="border border-gray-300 rounded w-full block px-2 py-1"
      />
      <div className="mt-4">
        {isAuthenticated ? (
          <div className="flex items-center space-x-2">
            <button className="bg-indigo-500 text-white px-2 py-1 rounded">
              Gönder
            </button>
            <img src={user.picture} width={32} className="rounded-full" />
            <span>{user.name}</span>
            <button
              typeof="button"
              onClick={() =>
                logout({ returnTo: process.env.NEXT_PUBLIC_URL + "/blog" })
              }
            >
              x
            </button>
          </div>
        ) : (
          <button
            typeof="button"
            className="bg-indigo-500 text-white px-2 py-1 rounded"
            onClick={() => loginWithRedirect()}
          >
            Giriş yap
          </button>
        )}
      </div>
    </form>
  );
}
