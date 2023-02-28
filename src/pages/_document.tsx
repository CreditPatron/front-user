import Document, {
  Html,
  Head,
  Main,
  NextScript,
  DocumentContext,
  DocumentInitialProps,
} from "next/document";

class MyDocument extends Document {
  static async getInitialProps(
    ctx: DocumentContext
  ): Promise<DocumentInitialProps> {
    const initialProps = await Document.getInitialProps(ctx);
    return {...initialProps};
  }

  render(): React.ReactElement {
    return (
      <Html lang="en">
        <Head>
          <meta charSet="utf-8" />
          <meta
            name="description"
            content="Next.js TailwindCSS admin template"
          />
          <link rel="shortcut icon" href="/icons/evig_logo.png"/>
          <link
            rel="apple-touch-icon"
            sizes="57x57"
            href="/icons/evig_logo.png"
          />
          <link
            rel="apple-touch-icon"
            sizes="60x60"
            href="/icons/evig_logo.png"
          />
          <link
            rel="apple-touch-icon"
            sizes="72x72"
            href="/icons/evig_logo.png"
          />
          <link
            rel="apple-touch-icon"
            sizes="76x76"
            href="/icons/evig_logo.png"
          />
          <link
            rel="apple-touch-icon"
            sizes="114x114"
            href="/icons/evig_logo.png"
          />
          <link
            rel="apple-touch-icon"
            sizes="120x120"
            href="/icons/evig_logo.png"
          />
          <link
            rel="apple-touch-icon"
            sizes="144x144"
            href="/icons/evig_logo.png"
          />
          <link
            rel="apple-touch-icon"
            sizes="152x152"
            href="/icons/evig_logo.png"
          />
          <link
            rel="apple-touch-icon"
            sizes="180x180"
            href="/icons/evig_logo.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="192x192"
            href="/icons/evig_logo.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="32x32"
            href="/icons/evig_logo.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="96x96"
            href="/icons/evig_logo.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="16x16"
            href="/icons/evig_logo.png"
          />
          <link rel="manifest" href="/manifest.json" />
          <meta name="msapplication-TileColor" content="#2196f3" />
          <meta
            name="msapplication-TileImage"
            content="/icons/evig_logo.png"
          />
          <meta name="theme-color" content="#2196f3" />
        </Head>
        <body className="font-sans text-sm antialiased disable-scrollbars bg-white dark:bg-gray-900 text-gray-900 dark:text-white">
          <div id="portal" />
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
