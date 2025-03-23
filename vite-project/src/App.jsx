import { useState } from 'react'


import BookList from './components/booklist'
import {Books} from './utils/mockdata'
import "./components/style.css"
function App(){
const [searchText,setSearchText]=useState("");
const [filteredbooks,setFilteredBooks]=useState(Books);


  function handlesearch(){
const filterbooks=Books.filter(book=>book.title.toLowerCase().includes(searchText.toLowerCase()));
setFilteredBooks(filterbooks);
}
  return (
    <>
    <div className='search'>
    <h2>search books</h2>
    <div className='search-inp'>
    <input type="text" name="" id=""
     className='search-input'
    onChange={(e)=>setSearchText(e.target.value)} />
   
  
    <button onClick={handlesearch}>Search</button>
    </div>
    </div>
  
      <BookList booksdata={filteredbooks}/>
    </>
  )

}


export default App
