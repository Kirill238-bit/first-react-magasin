import React from 'react';
import {BrowserRouter} from "react-router-dom";
import AppRouter from './components/AppRouter';
import Footer from './components/pages/begin/Footer';
import Header from './components/pages/begin/Header';


const App=()=> {
  return (
    <BrowserRouter>
    <Header />
     <AppRouter />
    <Footer />
    </BrowserRouter>
  );
  }

export default App;
