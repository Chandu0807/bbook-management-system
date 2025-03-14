import './style.css'
function Book(props){
    return(
        <div className="book-card">
        <img src={props.bookdetails.coverImage} alt="" width="200px" height="300px" className='book-cover'/>
        <div className='book-details'>
            <h2 className='book-title'>{props.bookdetails.title}</h2>
            <p className='book-author'>{props.bookdetails.author}</p>
            <p className='book-decri'>{props.bookdetails.description}</p>
        </div>
        </div>
    )
}
export default Book;