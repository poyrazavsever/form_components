import Login from "./Components/Login";
import Register from "./Components/Register";
import "./index.css"

function App() {
  return (
    <div className=" w-full flex flex-col gap-64 justify-around items-center">
      
      <div style={{width:200}}></div>
      
      <Login />

      <Register />

      <div style={{width:200}}></div>

    </div>
  );
}

export default App;
