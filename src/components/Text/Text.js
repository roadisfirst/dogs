import React, { Fragment } from 'react';

const textComponent = (props) => (
 <Fragment>
     <h2>{props.title}</h2>
     <p>{props.text}</p>
 </Fragment>
); 

export default textComponent;