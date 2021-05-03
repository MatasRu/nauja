import './App.css';
import Toolbar from "./components/Toolbar";
import Home from "./pages/Home";
import Upload from "./pages/Upload";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";


function App() {
  return (
      <Router>
        <div className="">

          <Toolbar />

          <div className="d-flex flex-center">

            <Switch>

              <Route exact path="/">
                <Home />
              </Route>

              <Route path="/upload">
                <Upload />
              </Route>



            </Switch>


          </div>

        </div>
      </Router>
  );
}

export default App;
