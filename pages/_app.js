import { createGlobalStyle } from "styled-components";

const Global = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    color: #666;
    background-color: #efefef;
    font-size: 90%;

    @media (min-width: 768px) {
      font-size: 100%;
    }
  }
`;

export default function MyApp({ Component, pageProps }) {
  return (
    <>
      <Global />
      <Component {...pageProps} />
    </>
  );
}
