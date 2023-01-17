import { Html, Head, Main, NextScript } from "next/document";
import Script from "next/script";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <script async src="https://cdn.tailwindcss.com"></script>
        <title>Ahmaddin</title>
      </Head>
      <body>
        <form name="contact" netlify netlify-honeypot="bot-field" hidden>
          <input type="text" name="name" />
          <input type="email" name="email" />
          <textarea name="message"></textarea>
        </form>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
