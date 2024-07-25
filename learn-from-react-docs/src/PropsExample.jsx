export default function User({ person, address }) {
    return (
        <>
            <h1>{person.name}, {person.age}</h1>
            <h1>{address}</h1>
        </>
    );
}

// function Parent(props) {
//     return (
//         <div className="wrapper">
//             <Child {...props} />
//         </div>
//     );
// }