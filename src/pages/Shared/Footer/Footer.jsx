import React from 'react';
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from 'react-icons/fa6';

const Footer = () => {
    return (
        <div>
            <footer className='text-center text-lg-start bg-dark text-muted'>
                <section className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">
                    <div className="me-5 d-none d-lg-block">
                        <span className='text-white'>Get connected with us on social networks:</span>
                    </div>

                    <div className='text-white'>
                        <FaFacebook className='me-2' size={30} />
                        <FaTwitter className='me-2' size={30} />
                        <FaLinkedin className='me-2' size={30} />
                        <FaInstagram className='me-2' size={30} />
                    </div>
                </section>
            </footer>
        </div>
    );
};

export default Footer;