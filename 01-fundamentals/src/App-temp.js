import { MyButton } from './Button';
import { UseStateExample } from './UseStateExample';

function App() {
    const user = {
        name: 'Liam',
        age: 18,
        imageUrl: 'https://image.tmdb.org/t/p/original/w6fCmYDlTNYfgdXBZjZH107c9zJ.jpg',
        imageSize: 200
    };

    const welcome = <h1>Welcom, {user.name}!</h1>
    const button = <div><MyButton /></div>

    const items = [{ id: 1, name: 'Apple' }, { id: 2, name: 'Banana' }];
    const itemList = items.map(item => {
        return (
            <li key={item.id}>
                {item.name}
            </li>
        );
    });

    return (
        <div>
            {welcome}
            {button}
            
            <img src={user.imageUrl} alt={'Photo of ' + user.name} style={{ width: user.imageSize / 2, height: user.imageSize / 2, borderRadius: '50%' }}/>
            
            {user.age > 18 ? welcome : <p style={{ fontSize: user.age > 18 ? '10px' : '20px' }}>Please Leave</p>}

            <ul>{itemList}</ul>
            
            <UseStateExample />
        </div>
    );
}

export default App;