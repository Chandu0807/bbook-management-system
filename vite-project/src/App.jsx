import { useState } from 'react'


import BookList from './components/booklist'
import {Books} from './utils/mockdata'
function App(){
  return <BookList booksdata={Books}/>
}


export default App
