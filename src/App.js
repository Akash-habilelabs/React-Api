import logo from './logo.svg';
import './App.css';
import { useState,useEffect } from 'react';
// import Assignment1 from './Assignment1';
// import Form from "./components/Form";
// import Input from './form/Input';
import axios from 'axios';
import {Routes, Route} from 'react-router-dom'
import BookList from './componentBook/BookList';
import BookDetails from './componentBook/BookDetails';
import Navbar from './componentBook/Navbar';
import Footer from './componentBook/Footer';
import Favorites from './componentBook/Favorites';

function App(){
  return(
    <div>
      <Navbar/>
      <Routes>
        <Route path='/' element= {<BookList/>} />
        <Route path='/books/:id' element = {<BookDetails/>} />
        <Route path='/favorites' element = {<Favorites/>} />
      </Routes>
      <Footer/>
    </div>
  )
}    
export default App;
