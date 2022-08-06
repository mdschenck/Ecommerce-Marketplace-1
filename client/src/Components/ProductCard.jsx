import React from 'react';
import {Card, CardMedia, CardContent, CardActions, Typography, IconButton, styled } from '@mui/material';
import { AddShoppingCart } from '@mui/icons-material';

const PREFIX = 'MyCard';
const classes = {
 root: `${PREFIX}-root`,
 cta: `${PREFIX}-cta`,
 content: `${PREFIX}-content`,
}

const Root = styled('div')(({ theme }) => ({
  [`&.${classes.root}`]: {
    maxWidth: '100%'
  },
 [`& .${classes.media}`]: {
   height: 200,
   width: 200,
   paddingTop: '56.25%', 
  },
  [`& .${classes.cardActions}`]: {
    display: 'flex',
    justifyContent: 'flex-end',
  },
  [`& .${classes.cardContent}`]: {
    display: 'flex',
    justifyContent: 'space-between',
  },
}))


const ProductCard = ({ product }) => {

    return (
        <Card className={classes.root}>
            <CardMedia component='img' className={classes.media} image={product.image} title={product.name} />
            <CardContent>
                <div className={classes.cardContent}>
                    <Typography variant="h5" gutterBottom>
                        {product.name}
                    </Typography>
                    <Typography variant="h5">
                        {product.price}
                    </Typography>
                </div>
                <Typography variant='body2' color='textSecondary'>{product.description}</Typography>
            </CardContent>
            <CardActions disableSpacing className={classes.CardActions}>
                <IconButton aria-label='Add to Card'>
                    <AddShoppingCart />
                </IconButton>
            </CardActions>
        </Card>
    );
}

export default ProductCard;