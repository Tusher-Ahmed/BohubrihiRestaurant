import React from "react";
import MainComponent from "./components/mainComponent.jsx";
import "bootstrap/dist/css/bootstrap.min.css";
import "font-awesome/css/font-awesome.min.css";
import "./App.css";
import { BrowserRouter as Router } from "react-router-dom";
import myStore from "./redux/store";
import { Provider } from "react-redux";

function App() {
  // console.log("app.js:", myStore.getState());
  return (
    <div className="App">
      <Provider store={myStore}>
        <Router>
          <MainComponent />
        </Router>
      </Provider>
    </div>
  );
}

export default App;
