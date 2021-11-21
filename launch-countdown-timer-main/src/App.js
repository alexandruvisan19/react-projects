import "./App.css";
import { Container } from "./App.styled";
import Countdown from "./components/Countdown";

function App() {
  return (
    <Container className="App">
      <main>
        <h1>We're launching soon</h1>
        <Countdown />
      </main>
      <footer>
        <div class="attribution">
          Challenge by{" "}
          <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">
            Frontend Mentor
          </a>
          . Coded by <a href="#">Alexandru Visan</a>.
        </div>
      </footer>
    </Container>
  );
}

export default App;
