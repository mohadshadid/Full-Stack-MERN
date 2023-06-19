import React from 'react';


const List = (props) => {


    return (
        <div>
          {props.allProduct.map((prod, i) => (
            <p key={i}>{prod.title}</p>
          ))}
        </div>
      );
    }

    export default List;