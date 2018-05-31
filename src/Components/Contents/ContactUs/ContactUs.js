import React,{Component} from 'react';
import TabContent from '../TabContent/TabContent'


class ContactUs extends Component {
    render() {
        return (
            <TabContent 
                title='ارتباط با ما'
                desc= 'با آدرس زیر می توانید ،با ما در ارتباط باشید ' 
                btnStr= 'اشتراک گذاری'
            />
        );
    }
}

export default ContactUs;