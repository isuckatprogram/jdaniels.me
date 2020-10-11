import Document, { Html, Head, Main, NextScript } from "next/document"

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    var props = await Document.getInitialProps(ctx)
    return { ...props }
  }
  render() {
    return (
      <Html>
        <Head>
          <link rel="icon" href="/static/hackermon.png" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <meta name="theme-color" content="#50c878" />
          <meta name="title" content="PDanielY"/>
          <meta name="description" content="PDanielY is an unknown specie that lives in a planet called Earth (you may have heard of it). Apparently, he likes to make websites and app. You can contact him with something he calls an email (therealhackermon@gmail.com). He also has a Discord (Hackermon#6691)."/>
          <meta name="og:title" content="PDanielY" />
          <meta name="og:description" content="PDanielY is an unknown specie that lives in a planet called Earth (you may have heard of it). Apparently, he likes to make websites and app. You can contact him with something he calls an email (therealhackermon@gmail.com). He also has a Discord (Hackermon#6691)." />
					
          <meta name="og:image" content="https://jdaniels.me/static/hackermon.png" />
          <meta name="twitter:card" content="summary" />
          <meta name="twitter:title" content="PDanielY" />
          <meta name="twitter:description" content="PDanielY is an unknown specie that lives in a planet called Earth (you may have heard of it). Apparently, he likes to make websites and app. You can contact him with something he calls an email (therealhackermon@gmail.com). He also has a Discord (Hackermon#6691)." />
          <meta name="twitter:image" content="https://jdaniels.me/static/hackermon.png" />
          <meta name="twitter:site" content="@plop_daniel" />

          { /* Google Analytics */}
          <script
            async
            src="https://www.googletagmanager.com/gtag/js?id=UA-176091657-1"
          />

          <script
            dangerouslySetInnerHTML={{
              __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'UA-176091657-1');
        `,
            }}
          />

					<script async src="https://arc.io/widget.js#8BsJZj7h"></script>
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument