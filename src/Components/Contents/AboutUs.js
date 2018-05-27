import React,{Component} from 'react';
import TabContent from './TabContent'


class AboutUs extends Component {
    render() {
        return (
            <TabContent 
            title='درباره ی ما'
            desc= 'گروه محصولات بهداشتی ibotta با بیست سال ............ ' 
            btnStr= 'اشتراک گذاری'
            />
        );
    }
}

export default AboutUs;