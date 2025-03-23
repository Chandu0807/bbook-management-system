import './style.css'
function Book({ bookdetails }){
    return (
        <div className="book-card">
            <img src={bookdetails.cover_image} alt="Book Cover" width="200px" height="300px" className='book-cover'/>
            <div className='book-details'>
                <h2 className='book-title'>{bookdetails.title}</h2>
                <p className='book-author'>{bookdetails.author}</p>
                <p className='book-decri'>{bookdetails.description}</p>
            </div>
        </div>
    );
}

export default Book;