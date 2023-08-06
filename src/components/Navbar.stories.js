// .storybook/Navbar.stories.js
import React from 'react';
import Navbar from './Navbar';
import SecondNavbar from './Navbar2';

export default {
    title: 'Example/Navbar',
    component: Navbar,
};

export const Default = () => <Navbar />;
export const BottomNavbar = () => <SecondNavbar />;

