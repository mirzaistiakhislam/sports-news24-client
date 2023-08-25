import React, { useContext } from 'react';
import { ListGroup } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import { FaFacebook, FaSquareTwitter, FaInstagram, FaLinkedin, FaTwitter } from 'react-icons/fa6';
import { AuthContext } from '../../../contexts/AuthProvider';
import ads from '../../../assets/bg.png';
import { Link, useLocation, useParams } from 'react-router-dom';

const RightSideNav = () => {

    const { user, googleSignIn, githubSignIn } = useContext(AuthContext);
    const { id } = useParams();
    console.log(id);

    const { pathname } = useLocation();
    console.log(pathname);

    const handleGoogleLogin = () => {
        googleSignIn()
            .then((result) => {
                const user = result.user;
            })
            .catch(error => {
                console.error(error)
            })
    }

    const handleGithubLogin = () => {
        githubSignIn()
            .then((result) => {
                const user = result.user;
            })
            .catch(error => {
                console.error(error)
            })
    }

    return (
        <div className='sticky-top'>
            {
                !user &&
                <div className='mb-4'>
                    <h6>Login With</h6>
                    <Button variant="outline-danger" onClick={handleGoogleLogin} className='mb-2 w-100'>Login With Google</Button>
                    <Button variant="outline-secondary" onClick={handleGithubLogin} className='w-100'>Login With Github</Button>
                </div>
            }
            <div>
                <h6>Find Us On</h6>
                <ListGroup className='w-100 mb-4'>
                    <Link to='https://www.facebook.com/groups/774078196815183/' target='_blank' className='text-decoration-none'><ListGroup.Item className='mb-2 rounded'><FaFacebook size={20} /><span className='ms-2'>Facebook</span></ListGroup.Item></Link>

                    <Link to='https://twitter.com/FabrizioRomano?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor' target='_blank' className='text-decoration-none'><ListGroup.Item className='mb-2 rounded'><FaTwitter size={20} /><span className='ms-2'>Twitter</span></ListGroup.Item></Link>

                    <Link to='https://it.linkedin.com/in/fabrizio-romano-05708262?original_referer=https%3A%2F%2Fwww.google.com%2F' target='_blank' className='text-decoration-none'><ListGroup.Item className='mb-2 rounded'><FaLinkedin size={20} /><span className='ms-2'>Linkedin</span></ListGroup.Item></Link>

                    <Link to='https://www.instagram.com/fabriziorom/?hl=en' target='_blank' className='text-decoration-none'><ListGroup.Item className='mb-2 rounded'><FaInstagram size={20} /><span className='ms-2'>Instagram</span></ListGroup.Item></Link>
                </ListGroup>
            </div>

            {
                pathname.length > 20 &&
                <div className='text-center p-5 d-none d-sm-block rounded' style={{ backgroundImage: `url(${ads})`, backgroundRepeat: "no-repeat", backgroundSize: 'cover' }}>
                    <h2>Create an Amazing Newspaper</h2>
                    <p>Discover thousands of options, easy to customize layouts, one-click to import demo and much more.</p>
                    <Button variant="danger">Learn More</Button>
                </div>
            }

        </div>
    );
};

export default RightSideNav;