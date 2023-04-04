import { BrowserRouter } from "react-router-dom";
import AllContries  from "./component/AllContries";
import './App.css';

function App() {
  return (
    <BrowserRouter>
    <h2 className="h2">250 countries</h2>
        <AllContries/>
    </BrowserRouter>
  );
}
export default App;