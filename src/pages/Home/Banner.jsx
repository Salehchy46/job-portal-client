import React from 'react';
import { easeOut, motion } from 'framer-motion';
import team1 from '../../assets/team/team1.jpg';
import team2 from '../../assets/team/team2.jpg';
// import team3 from '../../assets/team/team3.jpg';

const Banner = () => {
    return (
        <div className="hero bg-blue-100 min-h-96 pb-10">
            <div className="hero-content flex-col lg:flex-row-reverse text-center flex justify-between">
                <div className='flex-1 lg:flex lg:justify-center mb-10 lg:mb-0 md:mb-10'>
                    <div>
                        <motion.img
                            src={team1}
                            animate={{ y: [50, 75, 50] }}
                            transition={{ duration: 10, repeat: Infinity }}
                            className="max-w-sm border-l-8 border-b-8 border-blue-500 rounded-t-[40px] rounded-br-[40px] shadow-2xl w-64"
                        />
                        <motion.img
                            src={team2}
                            animate={{ x: [100, 125, 100] }}
                            transition={{ duration: 10, repeat: Infinity, delay: 5 }}
                            className="max-w-sm border-l-8 border-b-8 border-blue-500 rounded-t-[40px] rounded-br-[40px] shadow-2xl w-64"
                        />
                    </div>
                </div>
                <div className='flex-1'>
                    <motion.h1
                        animate={{ x: [0, 50, 0] }}
                        transition={{ duration: 10, delay: 1, ease: easeOut, repeat: Infinity }}
                        className="text-5xl font-bold">Latest
                        <motion.span
                            animate={{ color: ['#ecff33', '#33ffe3', '#ff6133', '#ecff33'] }}
                            transition={{ duration: 1.5, repeat: Infinity }}> Jobs</motion.span> For You!
                    </motion.h1>
                    <p className="py-6">
                        Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
                        quasi. In deleniti eaque aut repudiandae et a id nisi.
                    </p>
                    <button className="btn btn-primary">Get Started</button>
                </div>
            </div>
        </div>
    );
};

export default Banner;