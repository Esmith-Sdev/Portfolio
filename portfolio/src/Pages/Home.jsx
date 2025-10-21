import NavigationBar from "../Components/NavigationBar";
import WelcomeHeader from "../Components/WelcomeHeader";
import About from "../Pages/About";
import Projects from "../Pages/Projects";
import Contact from "./Contact";
export default function Home() {
  return (
    <>
      <NavigationBar />
      <WelcomeHeader />
      <About />
      <Projects />
      <Contact />
    </>
  );
}
