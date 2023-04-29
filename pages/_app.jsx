import { Provider } from "react-redux";

import "@/styles/globals.css";
import store from "@/lib/redux/store";

// TODO: Wrap app with chakra ui provider

export default function App({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  );
}
