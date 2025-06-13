import React from 'react';
import Banner from './Banner';
import Category from './Category';
import HotJobs from '../Jobs/HotJobs';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Category></Category>
            <HotJobs></HotJobs>
        </div>
    );
};

export default Home;