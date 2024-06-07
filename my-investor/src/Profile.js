import {Button} from "react-bootstrap";
import {auth} from "./firebase";
import {useNavigate} from "react-router-dom";
import {useEffect} from "react";

function Profile(){
    const navigate = useNavigate();
    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged(user => {
            if (!user) {
                alert('Please log in before accessing your profile.');
                navigate("/signin");
            }
        });
        return unsubscribe;
    }, []);
    const handleLogout = () => {
        auth
            .signOut()
            .then(() =>
            {
                alert("Logged Out");
                navigate('/');
            })
            .catch(error => alert(error.message));
    }
    return (
        <div>
            Profile Page!
            <Button onClick={handleLogout}> Log Out </Button>
        </div>
    )
}
export default Profile;