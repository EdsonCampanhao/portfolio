import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

import { AiFillGithub, AiFillEye } from 'react-icons/ai'
import './ImgMediaCard.css'


export default function ImgMediaCard(props) {
    return (
        <Card sx={{ maxWidth: 345 }} className='card'>
            <CardMedia className='card__image'
                component="img"
                alt={props.alt}
                height="140"
                image={props.image}
            />
            <CardContent className='card__content'>
                <Typography gutterBottom variant="h5" component="div">
                    {props.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    {props.content}
                </Typography>
            </CardContent>
            <CardActions className='card__actions'>
                <a href={props.repo}>  <AiFillGithub size={32} fill='#3f90b9'/></a>
                <a href={props.app}><AiFillEye size={32} fill='#3f90b9' /></a>

            </CardActions>
        </Card>
    );
}
