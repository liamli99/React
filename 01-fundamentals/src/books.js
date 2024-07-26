// img1 is the path to book-1.jpg!!! Note that in React, the path is not './images/book-1.jpg', it is way more complexed!
import img1 from './images/book-1.jpg';
import img2 from './images/book-2.jpg';
import img3 from './images/book-3.jpg';

export const books = [
    {
        author: 'Jordan Moore',
        title: 'Interesting Facts For Curious Minds',
        img: img1, // It cannot be './images/book-1.jpg'!!!
        id: 1
    },
    {
        author: 'James Clear',
        title: 'Atomic Habits',
        img: img2,
        id: 2
    },
    {
        author: 'Stephen King',
        title: 'Fairy Tale',
        img: img3,
        id: 3,
    }
];