import BoxList from "./components/box/BoxList";
import Header from "./components/header/Header";
import MiddleLayer from "./components/middlelayer/MiddleLayer";
import { PeriodicityContextProvider } from "./components/periodicity/PeriodicityContext";

function App() {
  return (
    <div>
      <div>
        <Header />
        <MiddleLayer />
        <PeriodicityContextProvider>
          <BoxList />
        </PeriodicityContextProvider>
      </div>
    </div>
  );
}

export default App;
