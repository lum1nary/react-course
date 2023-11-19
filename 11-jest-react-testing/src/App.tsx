import {Provider} from "react-redux";
import React from "react";
import {store} from "./store";
import {WaitersApp} from "./features/Waiters";
import {BrowserRouter, NavLink, Route, Routes} from "react-router-dom";
import "./App.css";
import {Home} from "./features/Home";
import {About} from "./features/About";
import {NotFound} from "./features/NotFound";

export function App() {
    const isActiveClass = ({ isActive }: any) => isActive ? "active" : "";

    return (
      <Provider store={store}>
          <BrowserRouter>
              <nav className='navigation'>
                  <NavLink to='/' className={isActiveClass}>Home</NavLink>
                  <span className='nav-separator'>|</span>
                  <NavLink to='/waiters' className={isActiveClass}>Waiters</NavLink>
                  <span className='nav-separator'>|</span>
                  <NavLink to='/about' className={isActiveClass}>About</NavLink>
              </nav>
              <Routes>
                  <Route path='/' element={<Home/>} />
                  <Route path='/waiters/*' element={<WaitersApp/>} />
                  <Route path='/about' element={<About/>} />
                  <Route path='*' element={<NotFound/>} />
              </Routes>
          </BrowserRouter>
      </Provider>
    );
}