import React from "react";
import TabContent from "../TabContent/TabContent";

class Introduction extends React.Component {
  render() {
    return (
      <TabContent
        title="معرفی"
        desc="در این بخش به معرفی محصول میپردازیم ...... "
        btnStr="دیدن فیلم"
      />
    );
  }
}

export default Introduction;
