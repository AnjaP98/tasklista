import logo from './logo.svg';
import './App.css';
import './components/Todos'
import React from "react";
import Todos from './components/Todos';
import Todo from './components/Todo';
import TodoForm from './components/TodoForm';
import AllNotes from './components/AllNotes';
import Header from './components/Header';
import { useState } from "react";

import {BrowserRouter, Routes, Route} from "react-router-dom";

function App() {

  return(

   <BrowserRouter> 
    <Header/>
    <Routes>
      <Route path='/' element = {
    <Todos/>}/>
    <Route path='/beleske' element = {
    <AllNotes/>}/>
    
    </Routes>
    </BrowserRouter>
  )
  
  
}

export default App;
