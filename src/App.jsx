import useToggle from "./useToggle";
import useDate from "./useDate";
import useCustomPointer from "./customPointer";

function App() {
  const [isOn, toggle] = useToggle();
  const currentDate = useDate();
  const pointerElement = useCustomPointer("🔥");

  return (
    <>
      <div>
        <h1>Il valore è: {isOn ? "ON" : "OFF"}</h1>
        <button onClick={toggle} className="bg-blue-400 border rounded">
          Cambia Stato
        </button>
      </div>
      <div>
        <h1>Data e ora attuali:</h1>
        <p>{currentDate.toLocaleString()}</p>
      </div>
      <div>
        <h1>Sposta il mouse per vedere il cursore personalizzato!</h1>
        {pointerElement}
      </div>
    </>
  );
}

export default App;
