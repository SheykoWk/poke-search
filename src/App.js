import { useState } from "react";
import "./App.css";

function App() {
    const [currentAnswer, setCurrentAnswer] = useState(null);

    return (
        <div className="App">
            <header className="App-header">
                <h1>Cual es un ejemplo de renderizado condicional</h1>
                <input
                    type="radio"
                    name="answer"
                    id="a"
                    checked={"a" === currentAnswer}
                    onChange={() => setCurrentAnswer("a")}
                />
                <label htmlFor="a">{"value ? <Home /> : null"}</label>

                <input
                    type="radio"
                    name="answer"
                    id="b"
                    checked={"b" === currentAnswer}
                    onChange={() => setCurrentAnswer("b")}
                />
                <label htmlFor="b">
                    {"isLogged && isAdmin <Admin /> : <Login />"}
                </label>

                <input
                    type="radio"
                    name="answer"
                    id="c"
                    checked={"c" === currentAnswer}
                    onChange={() => setCurrentAnswer("c")}
                />
                <label htmlFor="c">
                    {"value || value2 ?  <Home /> : null"}
                </label>

                <input
                    type="radio"
                    name="answer"
                    id="d"
                    checked={"d" === currentAnswer}
                    onChange={() => setCurrentAnswer("d")}
                />
                <label htmlFor="d">Todas las anteriores</label>

                <button onClick={() => {
                  if(currentAnswer === 'd'){
                    alert('Correcto felicidades, te has graduado de React')
                  } else {
                    alert('Nimodo mi chavo, nos vemos el siguiente modulo')
                  }
                }}>Validar Respuesta</button>

            </header>
        </div>
    );
}

export default App;
