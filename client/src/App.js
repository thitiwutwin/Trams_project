import React, { useEffect } from 'react';

import { Container, AppBar, Typography, Grow, Grid } from '@material-ui/core';
import { useDispatch } from 'react-redux';

import { getData } from './actions/data';

const App = () => {

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getData());
    }, [dispatch]);

    return (
        <div>
                <h1>App</h1>
        </div>
    );

}

export default App;