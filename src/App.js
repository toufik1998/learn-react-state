import React, {useState} from "react";

function App() {
  const [answer, setAnswer] = useState(true);

  function changeMind() {
    setAnswer(prevAnswer => !prevAnswer);
  }
  return (
    <div className="state">
        <h1 className="state--title">Do I feel like going out tonight?</h1>
        <div onClick={changeMind} className="state--value">
            <h1>{answer ? "Yes" : "Noo"}</h1>
        </div>
    </div>
)
}

export default App;
