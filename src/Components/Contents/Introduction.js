import React,{Component} from 'react';
import TabContent from './TabContent'


class Introduction extends Component {
    render() {
        return (
            <TabContent 
            title='معرفی'
            desc= 'در این بخش به معرفی محصول میپردازیم ...... ' 
            btnStr= 'دیدن فیلم'
            />
        );
    }
}

export default Introduction;