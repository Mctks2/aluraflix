import { Footer } from "../../components/Footer";
import GlobalStyle from "../../components/GlobalStyle/GlobalStyles";
import { Header } from "../../components/Header";

export function BasePage() {
  return (
    <>
      <GlobalStyle />
      <Header />
      <Footer />
    </>
  );
}
