/**
 * If any global style is required, that needs to be added here
 */

 import React from 'react';
 import '../components/styles.css';
 import { ThemeProvider } from 'theme-ui';
 import theme from '../../theme';
 import Nav from '../components/nav'

 export default function App({ Component, pageProps }) {
  return (
      <ThemeProvider theme={theme}>
          <div>
            <Nav />
            <Component {...pageProps} />
          </div>
          
      </ThemeProvider>
  )
}
