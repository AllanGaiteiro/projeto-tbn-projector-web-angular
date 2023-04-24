import { AppContainer } from "./components/AppContainer";
import { Header } from "./components/Header";
import { SectionSelected } from "./components/SectionSelected";

function App() {
  return (
    <AppContainer className="App">
      <Header />
      <main>
        <SectionSelected />
      </main>
    </AppContainer>
  );
}

export default App;
