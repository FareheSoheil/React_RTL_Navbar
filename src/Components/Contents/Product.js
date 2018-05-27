import React,{Component} from 'react';
import TabContent from './TabContent'


class Product extends Component {
    render() {
        return (
            <TabContent 
            title='محصولات'
            desc= 'محصولات این شرکت عبارتند از ..... ' 
            btnStr= 'لیست محصولات'
            />
        );
    }
}

export default Product;