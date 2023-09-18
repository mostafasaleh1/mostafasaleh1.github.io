import React, { useEffect } from "react";
import { Navbar, Header, Home, Contact, Footer } from "./Main/Exports";
import { Blog, Projects, CV, Stats, AboutPage } from "./pages/Exports";
import { RenderArticles } from "./pages/blog/main/articlepage/RenderArticles";
import { ActiveClass, RevealEffect } from "./animations/Exports";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import i18n from "./i18n";


const App = () => {

  ActiveClass();
  RevealEffect();

  useEffect(() => {
    document.documentElement.lang = i18n.language;
  }, [])

  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route
          exact
          path="/"
          element={
            <React.Fragment>
              <Header />
              <Home />
              <Contact />
              <Footer colour="footer-light" />
            </React.Fragment>
          }
        />
        <Route path="/blog/" Component={Blog} />
        <Route path="/about/" Component={AboutPage} />
        <Route path="/projects/" Component={Projects} />
        <Route path="/cv/" Component={CV} />
        <Route path="/stats/" Component={Stats} />
        {RenderArticles.map(articleRoute => articleRoute)}
      </Routes>
    </BrowserRouter>
  );
};

export default App;
