import React from "react";
import { Navbar, Header, Home, About, Services, Portfolio, Skills, Contact, Footer } from "./Main/Exports";
import { Blog, Projects, CV, GithubStats } from "./pages/Exports";
import { ActiveClass, RevealEffect } from "./animations/Exports";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const App = () => {
  ActiveClass();
  RevealEffect();

  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route
          exact
          path="/myprofile/"
          element={
            <React.Fragment>
              <Header />
              <Home />
              <About />
              <Services />
              <Portfolio />
              <Skills />
              <Contact />
              <Footer />
            </React.Fragment>
          }
        />
        <Route exact path="/myprofile/blog/" Component={Blog} />
        <Route path="/myprofile/projects/" Component={Projects} />
        <Route path="/myprofile/cv/" Component={CV} />
        <Route path="/myprofile/githubstats/" Component={GithubStats} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
