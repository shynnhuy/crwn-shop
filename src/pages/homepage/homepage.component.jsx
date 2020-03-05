import React from 'react';
import './homepage.style.scss';
import Directory from '../../components/directory/directory.component';
import { HomepageContainer } from './homepage.style';

const HomePage = () => (
    <HomepageContainer>
        <Directory />
    </HomepageContainer>
);

export default HomePage;
