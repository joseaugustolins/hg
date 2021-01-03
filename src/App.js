import BoxList from "./components/box/BoxList";
import Header from "./components/header/Header";
import MiddleLayer from "./components/middlelayer/MiddleLayer";

function App() {
  return (
    <div>
      <div>
        <Header/>
        <MiddleLayer/>
      </div>
      <div>
        <BoxList/>
      </div>
    </div>
  );
}

export default App;
