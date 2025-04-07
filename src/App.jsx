import useToggle from "./useToggle";

function App() {
  const [isOn, toggle] = useToggle();

  return (
    <div>
      <h1>Il valore è: {isOn ? "ON" : "OFF"}</h1>
      <button onClick={toggle} className="bg-blue-400 border rounded">
        Cambia Stato
      </button>
    </div>
  );
}

export default App;
