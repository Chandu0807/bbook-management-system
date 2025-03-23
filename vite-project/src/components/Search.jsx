import { useState,useEffect } from 'react'
import Books from '../utils/mockdata';
import BookList from './booklist';

function Search(){

    const [searchText,setSearchText]=useState("");
    const [filteredbooks,setFilteredBooks]=useState([]);
    
    
    function handlesearch() {
        const filterbooks = Books.filter(book => 
            book.title.toLowerCase().includes(searchText.toLowerCase())
        );
        setFilteredBooks(filterbooks); // ✅ Use correct variable
    }
    

      useEffect(()=>{
           fetchData();
        },[]);
    
        async function fetchData() {
            try {
                const response = await fetch("https://www.freetestapi.com/api/v1/books", {
                    method: "GET",
                    redirect: "follow"
                });
        
                if (!response.ok) {
                    throw new Error(`HTTP error! Status: ${response.status}`);
                }
        
                const data = await response.json();
                setFilteredBooks(data);  // ✅ Store API response
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        }
    return(
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
export default Search;