export default function App(params) {
  console.log(params);
  const {Component, pageProps} = params;
  return <Component {...pageProps} />
}
