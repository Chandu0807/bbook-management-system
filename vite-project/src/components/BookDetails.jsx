import { useParams } from "react-router-dom";
import Books from "../utils/mockdata";
function BookDetails(){
    const params=useParams();
    const book=Books.filter(book=>book.id==params.id)
    return(
        <>
        <h1>{`Book Details for book with id ${params.id} `}</h1>
       
        {book.map((book)=>{
         return(
        <>
          <img src={book.cover_image} alt="" />
            <h2>{book.title}</h2>
            <h2>{book.author}</h2>
            <h2>{book.publishedDate}</h2>
            <h2>{book.description}</h2>
        </>
        );
        })}
</>

      
    )
}
export default BookDetails;