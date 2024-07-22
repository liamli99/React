import { useParams } from 'react-router-dom';

function UserProfile() {
    const { userId } = useParams();

    return <h1>Hello, Your UserId is: {userId}</h1>;
}

export default UserProfile;