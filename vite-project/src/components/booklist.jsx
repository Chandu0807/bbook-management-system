import Book from "./Book"
import "./style.css"

function BookList(props){
    console.log("props",props);
    return(
        <div className="booklist">
        {
            props.booksdata.map(data=><Book key={data.id}bookdetails={data}></Book>)
        }
       
        
        </div>
    )
}
export default BookList