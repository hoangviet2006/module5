import React from "react";

const ListCityComponent=()=>{
     const element = React.createElement('ul', null,
         React.createElement('li', null, "Hà Nội"),
         React.createElement('li', null, "Hải Phòng"),
         React.createElement('li', null, "Đà Nẵng"),
         React.createElement('li', null, "Cần Thơ"),
         React.createElement('li', null, "Thành Phố Hồ Chí Minh"));
    return element;
 }
 export default ListCityComponent ;