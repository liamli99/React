const people = [
    { id: 1, name: 'bob', nickName: 'Stud Muffin' },
    { id: 2, name: 'peter' },
    {
      id: 3,
      name: 'oliver',
      images: [
        {
          small: {
            url: 'https://res.cloudinary.com/diqqf3eq2/image/upload/ar_1:1,bo_5px_solid_rgb:ff0000,c_fill,g_auto,r_max,w_1000/v1595959121/person-1_aufeoq.jpg',
          },
        },
      ],
    },
    { id: 4, name: 'david' },
];

const List = () => {
    return (
        <div>
            {people.map((person) => {
                // Optional Chaining `?.`: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Optional_chaining
                // Return 'undefined' instead of throwing an error if doesn't exist!
                const imgUrl = person.images?.[0]?.small?.url
                
                // Alternative solution
                // const imgUrl = person.images && person.images[0] && person.images[0].small && person.images[0].small.url
                
                return (
                    <div key={person.id}>
                        <h4>Name: {person.name}</h4>
                        <p>Nick Name: {person.nickName || 'No Nick Name'}</p>
                        <img src={imgUrl || 'https://user-images.githubusercontent.com/2938045/56276896-af93b580-6103-11e9-9885-74981a49a5ae.png'} style={{ width: '50px' }} />
                    </div>
                );
            })}
        </div>
    );
}

export default List;