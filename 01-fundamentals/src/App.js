import './App.css'; // No matter where we import App.css, the styles are applied globally!
import { books } from './books';
import Book from './Book';

const BookList = () => {
    return (
        <>
            <h1>Best Sellers</h1>
            <section className="booklist">
                {books.map((book, index) => {
                    // return <Book author={book.author} title={book.title} img={book.img} id={book.id} key={book.id}/>;
                    return <Book {...book} number={index} key={book.id} />;
                })}
            </section>
        </>
    );
}

const EventExample = () => {
    const handleFormSubmission = (e) => {
        // A <form> submit event, which happens when a button inside of it is clicked, will reload the whole page by default. We should prevent this unwanted default behaivor!
        e.preventDefault();
        console.log('form submitted');
    }
    const handleFormInput = (e) => {
        console.log(`Input Name: ${e.target.name}`);
        console.log(`Input Id: ${e.target.id}`);
        console.log(`Input Value: ${e.target.value}`);
    }
    const handleButtonClick = () => {
        alert('handle button click');
    }

    return (
        <section>
            <form onSubmit={handleFormSubmission}>
                <h2>Form</h2>
                <input name='example1' id='example2' onChange={handleFormInput} />
                <button>Submit</button>
            </form>
            <button onClick={handleButtonClick}>Click</button>
        </section>
    );
}

export default function App() {
    return (
        // <BookList />
        <EventExample />
    );
}