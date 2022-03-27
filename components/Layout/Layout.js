import Head from "next/head";
import { useRouter } from "next/router";

//navbar
import Navbar from "./Navbar";
import NavbarTwo from "./NavbarTwo";

//footer
import Footer from "./Footer";

const Layout = ({ children }) => {
  const router = useRouter();
  const { pathname } = router;

  return (
    <>
      <Head>
        <title>Metatradas - The most reliable crypto trading Platform using Artificial Intelligence with cognitive power</title>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
        <meta
          name="description"
          content="Metatradas - The most reliable crypto trading Platform using Artificial Intelligence with cognitive power"
        />
        <meta
          name="og:title"
          property="og:title"
          content="Metatradas - The most reliable crypto trading Platform using Artificial Intelligence with cognitive power"
        ></meta>
        <meta
          name="twitter:card"
          content="Metatradas - The most reliable crypto trading Platform using Artificial Intelligence with cognitive power"
        ></meta>
      </Head>

      {pathname === "/index-2" ? <NavbarTwo /> : <Navbar />}

      {children}

      <Footer />
    </>
  );
};

export default Layout;
