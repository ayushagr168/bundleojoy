import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';



export default function ItemCard(props) {
  return (
    <Card style={{margin:"20px"}}sx={{ minWidth: 275 }}>
      <CardContent>
      <Typography variant="h5" component="div">
        {props.name}
        </Typography>   
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
         {props.color}
        </Typography>
             
      </CardContent>
      <CardActions>
        <Button size="small">Buy Now</Button>
      </CardActions>
    </Card>
  );
}
