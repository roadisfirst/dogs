import React, { Fragment } from 'react';

import Form from '../UI/Form/Form';
import Button from '../UI/Button/Button';

const filter = () => {
    return (
        <Fragment>
            <Form />
            <Button>Liked</Button>
            <Button>Favourite</Button>
            <Button>Disliked</Button>
        </Fragment>
    )
    
};

export default filter;