import {useEffect, useState} from "react";
import {Button, Form} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import {auth, db, firebase} from "./firebase";
import {useNavigate} from "react-router-dom";

function CreateAccount() {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [errorMessage, setErrorMessage] = useState("");
    const navigate = useNavigate();
    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged(user => {
            // after user logs/signs in, redirect to profile
            if (user) {
                alert('Please log out before creating a new account.');
                navigate('/');
            }
        });
        return () => unsubscribe();
    }, [navigate]);


    const handleFirstNameChange = (e) => {
        setFirstName(e.target.value);
    };

    const handleLastNameChange = (e) => {
        setLastName(e.target.value);
    };

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    };

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    };

    const handleConfirmPasswordChange = (e) => {
        setConfirmPassword(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Form validation
        if (!firstName || !lastName || !email || !password || !confirmPassword) {
            setErrorMessage("Please fill in all fields.");
            return;
        }

        if (password !== confirmPassword) {
            setErrorMessage("Passwords do not match.");
            return;
        }

        if (password.length < 6) {
            setErrorMessage("Password must be at least 6 characters long.");
            return;
        }

        console.log("Submitting sign-up form:", { firstName, lastName, email, password });
        auth
            .createUserWithEmailAndPassword(email,password)
            .then(userCredentials => {
                const user = userCredentials.user;
                const userToken = user.getIdToken().then(token => {
                    db.collection("users").doc(user.uid).set({
                        firstName: firstName,
                        lastName: lastName,
                        email: user.email,
                        balance: 1000,
                        accountCreationTime: firebase.firestore.FieldValue.serverTimestamp()
                    })
                        .then(() => {
                            alert(`Account Successfully Created with ${user.email}`);
                            navigate("/"); // make this redirect to profile screen
                        })
                        .catch((error) => console.log(error.message));
                }).catch(error => console.log(error.message));
            }).catch(error => alert.log(error.message));
    };

    return (
        <div style={styles.container}>
            {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}
            <h2>Create an Account</h2>
            <Form style={styles.form} onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="formBasicFirstName">
                    <Form.Label>First Name</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Enter first name"
                        value={firstName}
                        onChange={handleFirstNameChange} />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicLastName">
                    <Form.Label>Last Name</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Enter last name"
                        value={lastName}
                        onChange={handleLastNameChange} />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control
                        type="email"
                        placeholder="Enter email"
                        value={email}
                        onChange={handleEmailChange} />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control
                        type="password"
                        placeholder="Password"
                        value={password}
                        onChange={handlePasswordChange} />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicConfirmPassword">
                    <Form.Label>Confirm Password</Form.Label>
                    <Form.Control
                        type="password"
                        placeholder="Confirm password"
                        value={confirmPassword}
                        onChange={handleConfirmPasswordChange} />
                </Form.Group>

                <Button variant="primary" type="submit">
                    Sign Up
                </Button>
            </Form>
        </div>
    );
}

const styles = ({
    container: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100vh'
    },
    form: {
        width: "60%"
    }
});

export default CreateAccount;