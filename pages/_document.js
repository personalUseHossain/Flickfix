import { Html, Head, Main, NextScript } from 'next/document';
import Script from 'next/script';

// Rename the component to avoid naming conflicts
function MyCustomDocument() {
    return (
        <Html lang="en">
            <Head>
                <Script
                    async
                    src={`https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-2468796206068346`}
                    strategy="lazyOnload"
                    crossOrigin="anonymous"
                />
            </Head>
            <body>
                <Main />
                <NextScript />
            </body>
        </Html>
    );
}

export default MyCustomDocument;
