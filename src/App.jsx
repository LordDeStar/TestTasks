import { Banner } from "./components/Banner/Banner";
import { Header } from "./components/Header/Header";
import { Interesting } from "./components/Interesting/Interesting";

function App() {
  return (
    <>
      <Header />
      <hr className="underline" />
      <Banner />
      <Interesting />
    </>
  );
}

export default App;
