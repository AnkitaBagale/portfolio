import { createContext, useContext, useRef } from 'react';
import 'tailwindcss/tailwind.css';
import '../styles/global.css';

export const anchorsContext = createContext();

function MyApp({ Component, pageProps }) {
  const footerRef = useRef(null);
  const topRef = useRef(null);

  return (
    <anchorsContext.Provider value={{ footerRef, topRef }}>
      <Component {...pageProps} />
    </anchorsContext.Provider>
  );
}

export default MyApp;

export const useAnchors = () => useContext(anchorsContext);
