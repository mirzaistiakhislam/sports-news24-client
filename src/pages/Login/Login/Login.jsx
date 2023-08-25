import React, { useContext, useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../contexts/AuthProvider';
import { toast } from 'react-hot-toast';

const Login = () => {

    const { loginUser } = useContext(AuthContext);
    const [error, setError] = useState('');

    const location = useLocation();
    const navigate = useNavigate();
    const from = location.state?.from?.pathname || "/";

    const handleLogin = (event) => {
        event.preventDefault();
        setError('');

        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        loginUser(email, password)
            .then(result => {
                const user = result.user;
                form.reset();
                toast.success('Login Successfully!!');
                navigate(from, { replace: true });
            })
            .catch(error => {
                setError(error.message);
            })
    }

    return (
        <div>
            <Form onSubmit={handleLogin} className='w-50 p-4 mx-auto my-5 bg-transparent bg-gradient rounded border-bottom'>
                <h2 className='text-center border-bottom pb-3 pt-2 mb-4'>Login Your Account</h2>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email Address</Form.Label>
                    <Form.Control type="email" name="email" placeholder="Enter Email" required />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" name="password" placeholder="Enter Password" required />
                </Form.Group>

                {error &&
                    <Form.Group className="my-3" controlId="formBasicCheckbox">
                        <span className='text-danger'>{error}</span>
                    </Form.Group>}

                <Button variant="primary" type="submit">
                    Login
                </Button>

                <Form.Group className="my-3" controlId="formBasicCheckbox">
                    Don't have an Account? <Link to='/register'>Register</Link>
                </Form.Group>


            </Form>
        </div>
    );
};

export default Login;