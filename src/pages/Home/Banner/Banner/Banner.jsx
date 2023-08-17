import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import coverpic1 from '../../../../assets/coverpic1.jpg';
import coverpic2 from '../../../../assets/coverpic2.jpg';
import coverpic3 from '../../../../assets/coverpic3.jpg';
import BannerNav from '../BannerNav/BannerNav';
import './Banner.css';


const Banner = () => {
    return (
        <div >
            <BannerNav></BannerNav>
            <Carousel style={{ maxHeight: '400px' }}>
                <Carousel.Item style={{ maxHeight: '400px' }}>
                    <img
                        className="d-block w-100"
                        src={coverpic1}
                        alt="First slide"
                    />
                </Carousel.Item>
                <Carousel.Item style={{ maxHeight: '400px' }}>
                    <img
                        className="d-block w-100"
                        src={coverpic2}
                        alt="Second slide"
                    />
                </Carousel.Item>
                <Carousel.Item style={{ maxHeight: '400px' }}>
                    <img
                        className="d-block w-100"
                        src={coverpic3}
                        alt="Third slide"
                    />
                </Carousel.Item>
            </Carousel>
        </div>
    );
};

export default Banner;