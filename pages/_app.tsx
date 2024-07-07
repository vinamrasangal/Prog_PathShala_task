import { AppProps } from 'next/app';
import { ThemeProvider } from '../@/components/theme-provider'; 
import './global.css';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="system"
      enableSystem={true}
    >
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;
