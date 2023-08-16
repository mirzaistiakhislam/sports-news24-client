import moment from 'moment';
import React from 'react';
import Card from 'react-bootstrap/Card';
import { FaRegBookmark, FaShareNodes, FaEye } from "react-icons/fa6";
import { Link } from 'react-router-dom';
import '@smastrom/react-rating/style.css';
import { Rating } from '@smastrom/react-rating';

const NewsCard = ({ news }) => {

    const { author: { img, name, published_date }, details, image_url, rating: { number }, title, total_view, _id } = news;

    return (
        <Card className='mb-3'>
            <Card.Header>
                <div className='d-flex align-items-center'>
                    <div>
                        <Card.Img variant="top" src={img} className='rounded-circle' style={{ width: "45px", height: "45px" }} />
                    </div>
                    <div className='ms-2 line flex-grow-1' style={{ fontSize: '13px' }}>
                        <span className='d-block'>{name}</span>
                        <span className=''>{moment().format("YYYY-MM-DD")}</span>
                    </div>
                    <div>
                        <FaRegBookmark className='me-2' />
                        <FaShareNodes />
                    </div>
                </div>
            </Card.Header>
            <Card.Body>
                <Card.Title>{title}</Card.Title>
                <Card.Img variant="top" src={image_url} />
                <Card.Text>
                    {details.length > 200 ?
                        <>
                            {details.slice(0, 200)} ...<Link to={`/news/${_id}`}>Read More</Link>
                        </>
                        :
                        details
                    }
                </Card.Text>
            </Card.Body>
            <Card.Footer className="text-muted">
                <div className='d-flex align-items-center justify-content-between'>
                    <div className='d-flex'>
                        <Rating
                            style={{ maxWidth: 100 }}
                            value={number}
                            readOnly
                        />
                        <span className='ms-1'>{number}</span>
                    </div>
                    <div className='d-flex align-items-center'>
                        <FaEye />
                        <span className='ms-2'>{total_view}</span>
                    </div>
                </div>
            </Card.Footer>
        </Card>
    );
};

export default NewsCard;