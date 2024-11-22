import { Banner } from "./components/Banner/Banner";
import { Header } from "./components/Header/Header";
import { Interesting } from "./components/Interesting/Interesting";
import firstMore from './assets/icons/1 more.png';
import secondMore from './assets/icons/2 more.png';
import { Footer } from "./components/Footer/Footer";
function App() {
  return (
    <>
      <Header />
      <hr className="underline" />
      <Banner />
      <Interesting />
      <Footer />
    </>
  );
}

export default App;
