import React from 'react';
import ReactDOM from 'react-dom/client';
import {WaitersApp} from "./features";

const App = () => <WaitersApp/>;

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(<App/>);
