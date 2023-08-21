import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { Link, useLoaderData } from 'react-router-dom';

const NewsDetailCard = () => {

    const newsDetail = useLoaderData();
    const { author, category_id, details, image_url, rating, title, total_view, _id } = newsDetail;

    return (
        <div>
            <Card className='bg-transparent bg-gradient text-white mb-4'>
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