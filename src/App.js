import React from "react";
import { Provider } from "react-redux";
import store from "./reduxStore/store.js";
import JobListingsCard from "./components/JobListingsCard.js";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <JobListingsCard />
      </div>
    </Provider>
  );
}

export default App;
