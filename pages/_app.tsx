import "../styles/globals.css";
import "../styles/queries.css";
import 'react-loading-skeleton/dist/skeleton.css';
import { Provider } from "react-redux";
import { SessionProvider } from "next-auth/react";
import { wrapper } from "../store";
import type { AppProps } from "next/app";

function App({ Component, pageProps }: AppProps) {
  const { session } = pageProps;
  const { store, props } = wrapper.useWrappedStore(pageProps);

  return (
    <SessionProvider session={session}>
      <Provider store={store}>
        <Component {...props} />
      </Provider>
    </SessionProvider>
  );
}

export default App;
