import React from "react";
import TabContent from "../TabContent/TabContent";

class Product extends React.Component {
  render() {
    return (
      <TabContent
        title="محصولات"
        desc="محصولات این شرکت عبارتند از ..... "
        btnStr="لیست محصولات"
      />
    );
  }
}

export default Product;
