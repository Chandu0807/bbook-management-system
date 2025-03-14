import Book from "./Book"
import "./style.css"

function BookList(props){
    console.log("props",props);
    return(
        <div className="booklist">
        {
            props.booksdata.map(data=><Book bookdetails={data}></Book>)
        }
       
        
        </div>
    )
}
export default BookList