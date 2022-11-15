import Head from "next/head";


import Hero from "../components/hero"
import Languages from "../components/languages"
import Footer from "../components/footer"

export default function Home() {

const description = "A self learned coder with few pro Skills"
const pageTitle = "Krishna Choudhary"
const siteName = "krishnak2c"



  return (
    <div>
      <Head>
      <title>{pageTitle}</title>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charSet="utf-8" />
        <meta name="description" content="A self learned coder with few pro Skills" />
        <meta property="og:title" content={pageTitle} key="ogtitle" />
        <meta name="twitter:card" content="summary_large_image" key="twcard" />
        <meta property="og:description" content={description} key="ogdesc" />
        <meta name="twitter:creator" content="@krishnak2c" key="twhandle" />
        

        {/* Open Graph */}
        <meta property="og:url" content="https://krishna-theta.vercel.app" key="ogurl" />
        <meta property="og:image" content="https://gitHub.com/krishnak2c.png" key="ogimage" />
        <meta property="og:site_name" content={siteName} key="ogsitename" />
        <meta property="og:title" content={pageTitle} key="ogtitle" />
        <meta property="og:description" content={description} key="ogdesc" />
                
      </Head>

      <Hero />
      <Languages />
      <Footer />
    </div>
  );
}
