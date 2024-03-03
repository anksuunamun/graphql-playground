import StoreProvider from "@/src/store/StoreProvider";
import React from "react";

const CustomApp = ({Component, pageProps }: {Component: React.ElementType, pageProps: Object}) => {
  return (
    <StoreProvider>
      <Component {...pageProps} />
    </StoreProvider>
  );
};

export default CustomApp