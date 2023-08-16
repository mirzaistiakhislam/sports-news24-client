import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { Link, useLoaderData } from 'react-router-dom';

const NewsDetailCard = () => {

    const newsDetail = useLoaderData();
    const { author: { img, name, published_date }, category_id, details, image_url, rating: { number }, title, total_view, _id } = newsDetail;

    return (
        <div>
            <Card>
                <Card.Body>
                    <Card.Img variant="top" src={image_url} />
                    <Card.Title className='my-2'>{title}</Card.Title>
                    <Card.Text>{details}</Card.Text>
                    <Link to={`/category/${category_id}`}><Button variant="danger">All news in this category</Button></Link>
                </Card.Body>
            </Card>
        </div>
    );
};

export default NewsDetailCard;