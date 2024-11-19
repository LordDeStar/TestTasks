import { Carousel, Slide } from "./components/Carousel/Carousel";
import { Header } from "./components/Header/Header";

function App() {
  return (
    <>
    <Header />
    <hr className="underline"/>
    <Carousel >
      <Slide index={1}>
        <h1>test</h1>
      </Slide>
      <Slide index={2}>
        <h1>test2</h1>
      </Slide>
      <Slide index={3}>
        <h1>test3</h1>
      </Slide>
    </Carousel>
    </>
  );
}

export default App;
