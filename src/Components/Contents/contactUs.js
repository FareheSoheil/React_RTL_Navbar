import React from 'react';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

// import logo from '../../Icons'
import '../../Styles/Contents/contactUs.css'


// function bgImage(props) {
//     const imageUrl = require(`./images/${props.imageName}.jpg`)
//     return 
//   }

class ContactUs extends React.Component {
     render() {
        const imageUrl = '../../Icons/'+this.props.imageName+'.jpg';
        alert ("this is : "+ imageUrl);
         return (
            <div>
            <Card className="card">
            <div className="aa">
                {this.props.title}
                {/* <CardMedia className="media"
                    image="../../Icons/cn4.jpg"
                    title="Contemplative Reptile"
                /> */}
              </div>
              <CardContent>
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
            // <div>
            //     <div className="aa"  >saaaaaaaaaaaaaaalam</div>
            //     <div className="aa">abbas vaysa</div>
            // </div>
        
         );
     }
}

export default ContactUs;