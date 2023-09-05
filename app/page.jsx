import About from "./components/About";
import Archive from "./components/Archive";
import Banner from "./components/Banner";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Blogs from "./components/Blogs";

import Contact from "./contact/page";

const HomePage = () => {
  return (
    <div className="mainHomePage">
      <Banner />
      <About />
      <Projects />
      <Archive />
      <Experience />
      <Blogs />
      {/*<Contact />*/}
    </div>
  );
};

export default HomePage;

//  <Home2 />  within div .mainHomePage
