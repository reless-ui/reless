import React from "react";
import App from "next/app";

interface Props {
  getLayout: () => any;
}

class MyApp extends App<Props> {
  props: any;
  render() {
    const { Component, pageProps, router } = this.props;

    const getLayout = Component.getLayout || (page => page);

    return getLayout(<Component {...pageProps}></Component>);
  }
}

export default MyApp;
