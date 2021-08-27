import Header from "../Header";
import Head from "next/head";
export default function Layout(props) {
  const { children, pageTitle } = props;
  return (
    <>
      <Head>
        <title>{pageTitle + " | Pokemonpedia"}</title>
      </Head>
      <Header />
      <div className="container">{children}</div>
    </>
  );
}
