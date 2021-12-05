import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { StyledThemeProvider } from "@definitions/styled-components";
import { Provider } from "react-redux";
import store from "@redux/store";
import Header from "@components/Header";
import { SessionProvider } from "next-auth/react";
import Protected from "@components/Protected";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function MyApp({ Component, pageProps: { session, ...pageProps } }) {
  return (
    <SessionProvider session={session}>
      <Provider store={store}>
        <StyledThemeProvider>
          <ToastContainer 
            position="bottom-center"
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
          />
          <Header />
          { Component.auth ? (<Protected>
            <Component {...pageProps} />
          </Protected>) : (
            <Component {...pageProps} />
          )}
        </StyledThemeProvider>
      </Provider>
    </SessionProvider>
  );
}

export default MyApp;
