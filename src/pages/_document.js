// pages/_document.js
import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html>
      <Head>
        <meta name="description" content="Coqurate Box is a corporate and personalized gifting solution company that believes in the power of thoughtful gifts to build connections and inspire loyalty." />
        <meta property="og:title" content="Coqurate Box" />
        <meta property="og:description" content="Coqurate Box is a corporate and personalized gifting solution company that believes in the power of thoughtful gifts to build connections and inspire loyalty." />
        <meta property="og:image" content="./logo (2).png" />
        <meta property="og:url" content="https://www.coquratebox.com" />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
          "@type": "Organization",
          "url": "https://www.coquratebox.com",
          "logo": "./logo (2).png",
          "name": "Coqurate Box",
          "description": "Coqurate Box is a corporate and personalized gifting solution company.",
          "sameAs": [
            "https://www.instagram.com/coquratebox/",
            "https://www.linkedin.com/company/coqurate-box/posts/?feedView=all",
            "https://www.facebook.com/coquratebox/"
          ]
        })}} />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
