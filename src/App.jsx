import AboutusUI from "./Components/AboutusUI";
import BlogUI from "./Components/BlogUI";
import ContactusUI from "./Components/ContactusUI";
import FooterUI from "./Components/FooterUI";
import NavbarUI from "./Components/NavbarUI";
import PricePlaneUI from "./Components/PricePlaneUI";
import QuestionUI from "./Components/QuestionUI";
import ServicesUI from "./Components/ServicesUI";
import TeamUI from "./Components/TeamUI";

function App() {
  return (
    <>
      <div>
        <NavbarUI />
        <ContactusUI />
        <AboutusUI />
        <ServicesUI />
        <PricePlaneUI />
        <QuestionUI />
        <TeamUI />
        <BlogUI />
        <FooterUI />
      </div>
    </>
  );
}

export default App;
