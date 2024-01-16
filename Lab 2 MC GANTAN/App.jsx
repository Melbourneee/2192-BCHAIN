import { useState } from 'react'
import './App.css'
import BookList from './components/BookList';
import ChoresList from './components/ChoresList';
import MovieList from './components/MovieList';


function App() {
  return (
    <div>
      
      <BookList/>
      <ChoresList/>
      <MovieList/>
    </div>
  )
}

export default App
