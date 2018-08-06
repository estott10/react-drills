import React from 'react';

const rendersImage= (props) => {

    return(
        <div>
            <img src={props.placeholder} alt= "blank" />
        </div>
    )
}

export default rendersImage;