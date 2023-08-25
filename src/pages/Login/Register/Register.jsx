import React, { useContext, useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../contexts/AuthProvider';
import { toast } from 'react-hot-toast';

const Register = () => {

    const { createUser, updateUser } = useContext(AuthContext);
    const [error, setError] = useState('');
    const [accepted, setAccepted] = useState(false);

    const location = useLocation();
    const navigate = useNavigate();
    const from = location.state?.from?.pathname || "/";

    const handleRegister = (event) => {
        event.preventDefault();
        setError('');

        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        const confirmPassword = form.confirmPassword.value;

        if (password !== confirmPassword) {
            return toast.error('Password did not match. Try again!!');
        }

        if (!/(?=.*[a-z])/.test(password)) {
            return setError('You have to enter at least 1 Lowercase Letter');
        }

        createUser(email, password)
            .then(result => {
                const user = result.user;
                userUpdate(name);
                form.reset();
                toast.success("Account Successfully Created");
                navigate(from, { replace: true });
            })
            .catch(error => {
                console.log(error);
                setError(error.message);
                // setError('');
            })

    }

    const userUpdate = (name) => {
        updateUser({
            displayName: name
        })
            .then(() => {

            })
            .catch(error => {
                console.log(error);
                setError(error.message);
                setError('');
            })
    }

    const handleTermsAndConditions = (event) => {
        setAccepted(event.target.checked);
    }

    return (
        <div>
            <Form onSubmit={handleRegister} className='w-50 p-4 mx-auto my-5 bg-transparent bg-gradient rounded border-bottom'>
                <h2 className='text-center border-bottom pb-3 pt-2 mb-4'>Register Your Account</h2>
                <Form.Group className="mb-3" controlId="formBasicName">
                    <Form.Label>Name</Form.Label>
                    <Form.Control type="name" name="name" placeholder="Enter Your Name" required />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email Address</Form.Label>
                    <Form.Control type="email" name="email" placeholder="Enter Your Email" required />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" name="password" placeholder="Enter Password" required />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicConfirmPassword">
                    <Form.Label>Confirm Password</Form.Label>
                    <Form.Control type="password" name="confirmPassword" placeholder="Enter Confirm Password" required />
                </Form.Group>

                {error &&
                    <Form.Group className="my-3" controlId="formBasicCheckbox">
                        <span className='text-danger'>{error}</span>
                    </Form.Group>}

                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check onChange={handleTermsAndConditions} type="checkbox" label={<>Accept <Link to='/termsandconditions' className='text-decoration-none'><span className='text-white text-decoration-underline'>Terms & Conditions</span></Link></>} />
                </Form.Group>

                <Button variant="primary" type="submit" disabled={!accepted}>
                    Register
                </Button>

                <Form.Group className="my-3" controlId="formBasicCheckbox">
                    Already have an Account? <Link to='/login'>Login</Link>
                </Form.Group>
            </Form>

        </div>
    );
};

export default Register;