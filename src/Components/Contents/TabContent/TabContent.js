import React from 'react';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import './TabContent.css'

class TabContent extends React.Component {
     render() {
         return (
            <div>
            <Card className="card">
                <div className="imgContainer" >
                     {this.props.title}
                </div>
              <CardContent >
                <Typography component="p" className="content">
                  {this.props.desc}
                </Typography>
              </CardContent>
              <CardActions className="action">
                <Button size="small" color="primary">
                  {this.props.btnStr}
                </Button>
              </CardActions>
            </Card>
          </div>
         );
     }
}

export default TabContent;