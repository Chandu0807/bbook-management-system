import { useEffect } from "react"
import Book from "./Book"
import "./style.css"
import { Link } from "react-router-dom"

function BookList(props){

    // useEffect(()=>{
    //    fetchData();
    // },[]);

    // async function fetchData(){
    //     const response=await fetch("https://www.freetestapi.com/api/v1/books",{ method: "GET",
    //     redirect: "follow"});
    //     const data=await response.json();

        
    //     console.log("result",data);
    // }

    return(
        <div className="booklist">
    {
      props.booksdata.map(data=><Link to={`/book/${data.id}`} key={data.id}>
      <Book key={data.id}bookdetails={data}></Book> 
      </Link>)
    }
       
        
        </div>
    )
}
export default BookList