import {Provider} from "react-redux";
import React from "react";
import {store} from "./store";
import {WaitersApp} from "./features/waiters";


export function App() {
    return (
      <Provider store={store}>
          <WaitersApp/>
      </Provider>
    );
}