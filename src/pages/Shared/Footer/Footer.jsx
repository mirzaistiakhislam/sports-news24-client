import React from 'react';
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from 'react-icons/fa6';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <div>
            <footer className='text-center text-lg-start bg-dark text-muted'>
                <section className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">
                    <div className="me-5 d-none d-lg-block">
                        <span className='text-white'>Get connected with us on social networks:</span>
                    </div>

                    <div className='text-white'>
                        <Link to='https://www.facebook.com/groups/774078196815183/' className='text-decoration-none text-white' target='_blank'><FaFacebook className='me-2' size={30} /></Link>

                        <Link to='https://twitter.com/FabrizioRomano?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor' className='text-decoration-none text-white' target='_blank'><FaTwitter className='me-2' size={30} /></Link>

                        <Link to='https://it.linkedin.com/in/fabrizio-romano-05708262?original_referer=http%3A%2F%2Flocalhost%3A5173%2F' className='text-decoration-none text-white' target='_blank'><FaLinkedin className='me-2' size={30} /></Link>

                        <Link to='https://www.instagram.com/fabriziorom/?hl=en' className='text-decoration-none text-white' target='_blank'><FaInstagram className='me-2' size={30} /></Link>
                    </div>
                </section>
            </footer>
        </div>
    );
};

export default Footer;