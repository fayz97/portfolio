import React from "react";
import "./App.css";
import Home from "./pages/Home";
import { Grid } from "@material-ui/core";

function App() {
  return (
    <div className="App">
      <Grid container>
        <Grid item xs>
          <Home />
        </Grid>
      </Grid>
    </div>
  );
}

export default App;
