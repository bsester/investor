import {useState} from "react";
import { Form, Button, InputGroup } from 'react-bootstrap';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import 'bootstrap/dist/css/bootstrap.min.css';

function SignIn(){
    const [email, setEmail] = useState("");
    const [pw, setPw] = useState("");
    const [showPw, setShowPw] = useState(false);

    const togglePwVisibility = () => {
        setShowPw(!showPw);
    };
    const handleResetPw = () => {
        alert('still working on it!');
    };
    const handleCreateAccount = () => {
        alert('this will go to account creation');
        // navigation.redirect("CreateAccount");
    }
    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    };
    const handlePwChange = (e) => {
        setPw(e.target.value);
    };
    const handleSignIn = (e) => {
        e.preventDefault();
        console.log("Attempting sign in with email " +
        email + " and password " + pw);
    }

    return(
        <div style = {styles.container}>
            <h1 className= "card-title" style = {styles.title}> Welcome Back! </h1>
            <div style = {styles.formContainer}>
            <Form style = {styles.form} onSubmit={handleSignIn}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control
                        type="email"
                        placeholder="Enter email"
                        onChange={handleEmailChange}/>
                    <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control
                        type="password"
                        placeholder="Password"
                        onChange={handlePwChange}/>
                </Form.Group>
                <Button
                    variant="primary"
                    type="submit">
                    Sign In
                </Button>
            </Form>
            </div>
            <div style={styles.linksContainer}>
                <a href="/">Forgot Password?</a>
                <span style={styles.separator}> | </span>
                <a href="#/create-account">Create an Account</a>
            </div>
        </div>

    );
}
const styles =({
    title: {
      margin: '2vh'
    },
    container: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: '80vh'
    },
    formContainer: {
        marginBottom: '5vh'
    },
    form: {
        width: "100%"
    },
    linksContainer: {
        textAlign: 'center'
    },
    separator: {
        margin: '0 10px'
    }
});
export default SignIn;