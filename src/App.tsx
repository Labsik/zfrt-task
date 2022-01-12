import "./App.css";
import { PhotosList } from "./containers/Photos/containers/PhotosList";
import { Sidebar } from "./containers/Photos/components";

function App() {
  return (
    <div className="App">
      <Sidebar />
      <div className="container">
        <PhotosList />
      </div>
    </div>
  );
}

export default App;
