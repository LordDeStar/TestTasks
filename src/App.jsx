import { Banner } from "./components/Banner/Banner";
import { Header } from "./components/Header/Header";
import { Interesting } from "./components/Interesting/Interesting";
import { More } from "./components/More/More";
import firstMore from './assets/icons/1 more.png';
import secondMore from './assets/icons/2 more.png';
function App() {
  return (
    <>
      <Header />
      <hr className="underline" />
      <Banner />
      <Interesting />
      <div style={{ display: "flex", gap: '10px' }}>
        <More title={'SUMMER CACTUS & SUCCULENTS'} image={firstMore}>
          We are an online plant shop offering a wide range of cheap and trendy plants
        </More>
        <More title={'STYLING TRENDS & MUCH MORE'} image={secondMore}>
          We are an online plant shop offering a wide range of cheap and trendy plants
        </More>
      </div>
    </>
  );
}

export default App;
