import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

export default function ActionAreaCard(props) {
  return (
    <Card sx={{ maxWidth: 345,backgroundColor:"black",padding:"20px"}}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="400"
          image="https://mobimg.b-cdn.net/v3/fetch/02/02d248d9eeaf7c12258f6ea6e1d445c1.jpeg"
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div" style={{color:"white"}}>
            {props.name}
          </Typography>
          <Typography variant="body2" color="text.secondary" style={{color:"white"}}>
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
