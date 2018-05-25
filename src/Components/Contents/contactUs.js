import React from 'react';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

import logo from '../../Icons/cn61.png'
import '../../Styles/Contents/contactUs.css'
import '../../Styles/samimFont.css'

class ContactUs extends React.Component {
     render(props) {
         return (
            <div>
                <Card className="card">
                        
                    <CardMedia >
                    <img src={logo} alt="sss" />
                        </ CardMedia>
                    {/* className="media"
                    image={logo}
                    title="Contemplative Reptile"
                    /> */}
                    <CardContent>
                    <Typography gutterBottom variant="headline" component="h2">
                        {this.props.title}
                    </Typography>
                    <Typography component="p">
                        {this.props.desc}
                    </Typography>
                    </CardContent>
                    <CardActions>
                    <Button size="small" color="primary">
                        Share
                    </Button>
                    <Button size="small" color="primary">
                        Learn More
                    </Button>
                    </CardActions>
                </Card>
            </div>

         );
     }
}

export default ContactUs;