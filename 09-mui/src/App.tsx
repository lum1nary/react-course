import {Provider} from "react-redux";
import React from "react";
import {store} from "./store";
import {WaitersApp} from "./features/Waiters";
import {BrowserRouter, NavLink, Route, Routes} from "react-router-dom";
import {Home} from "./features/Home";
import {About} from "./features/About";
import {NotFound} from "./features/NotFound";
import Container from '@mui/material/Container'
import Stack from '@mui/material/Stack';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import {Navigation} from "./components/Navigation";

export function App() {
    return (
      <Provider store={store}>
          <BrowserRouter>
              <Container maxWidth="md">
                  <Stack spacing={3}>
                      <AppBar position="static">
                          <Toolbar>
                              <Navigation/>
                          </Toolbar>
                      </AppBar>
                      <Routes>
                          <Route path='/' element={<Home/>} />
                          <Route path='/waiters/*' element={<WaitersApp/>} />
                          <Route path='/about' element={<About/>} />
                          <Route path='*' element={<NotFound/>} />
                      </Routes>
                  </Stack>
              </Container>
          </BrowserRouter>
      </Provider>
    );
}