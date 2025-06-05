import React from 'react';
import NavBer from '../NavBer/NavBer';
import { Outlet } from 'react-router';

const Root = () => {
    return (
        <>
            <NavBer></NavBer>
            <Outlet></Outlet>
        </>
    );
};

export default Root;