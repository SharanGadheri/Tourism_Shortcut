import Explore from "./Components/AboutUs/Explore";
import { Histories } from "./Components/AboutUs/Histories";
import Header from "./Components/Header/Header";
import Footer from "./Components/Shared/Footer";
import Contact from "./Components/UpdatePage/Contact/Contact";
import PageOne from "./Components/UpdatePage/PageOne";
function App() {
  return (
    <div className="App">
      <Header />
      <Histories />
      {/* <PageOne /> */}
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
