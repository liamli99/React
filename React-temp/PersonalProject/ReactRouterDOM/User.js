import { useNavigate } from 'react-router-dom';

function User() {
    const navigate = useNavigate();

    return (
        <>
            <h1>This is User Page!</h1>
            <button onClick={() => navigate("/")}>Move to Home</button>
           
            {/* Create concrete page with specific userId based on template page */}
            <button onClick={() => navigate("/user/3")}>User 3</button>
            <button onClick={() => navigate("/user/4")}>User 4</button>
         
        </>
    )
}

export default User;