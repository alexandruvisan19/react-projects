import "./App.css";
import Person from "./components/Person";

function App() {
  return (
    <div className="container">
      <header>
        <Person />
      </header>
      <main>
        <div>
          <h3>About</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus,
            odio illo iure porro qui illum rem, laudantium sed quia harum
            aliquam commodi totam non omnis dolorem provident facere. Aperiam,
            consectetur?
          </p>
        </div>
        <div>
          <h3>Interests</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo
            ducimus eum laborum beatae! Nesciunt quibusdam saepe ea, maiores
            deserunt, ullam ex voluptates exercitationem at in asperiores
            consequatur sunt, culpa consequuntur?
          </p>
        </div>
      </main>
      <footer>
        <div>
          <img src="" alt="Twitter" />
          <img src="" alt="Facebook" />
          <img src="" alt="Instagram" />
          <img src="" alt="Github" />
        </div>
      </footer>
    </div>
  );
}

export default App;
