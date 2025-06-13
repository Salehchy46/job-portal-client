import React from 'react';
import Marquee from 'react-fast-marquee';

const Category = () => {
    return (
        <div>
            <div className='text-center my-10'>
                <h1 className="text-4xl font-bold">Browse By Category</h1>
                <p>Find the job that’s perfect for you. about 800+ new jobs everyday</p>
            </div>
            <div className='my-10 flex'>
                <Marquee pauseOnHover>
                    <a href="#" className='w-64 hover:w-[258px]'>
                        <div className='card p-4 bg-blue-200 mx-2'>
                            <div className='flex items-center'>
                                <img src="https://jthemes.net/themes/wp/jobbox/wp-content/uploads/2024/12/retail.svg" className='w-16 h-16 mr-4' alt="" />
                                <h5 className="font-bold">Retail & Product</h5>
                            </div>
                        </div>
                    </a>
                    <a href="#" className='w-64 hover:w-[258px]'>
                        <div className='card p-4 bg-blue-200 mx-2'>
                            <div className='flex items-center'>
                                <img src="https://jthemes.net/themes/wp/jobbox/wp-content/uploads/2024/12/content-writer.svg" className='w-16 h-16 mr-4' alt="" />
                                <h5 className="font-bold">Content Writer</h5>
                            </div>
                        </div>
                    </a>
                    <a href="#" className='w-64 hover:w-[258px]'>
                        <div className='card p-4 bg-blue-200 mx-2'>
                            <div className='flex items-center'>
                                <img src="https://jthemes.net/themes/wp/jobbox/wp-content/uploads/2024/12/human-resource.svg" className='w-16 h-16 mr-4' alt="" />
                                <h5 className="font-bold">Human Resources</h5>
                            </div>
                        </div>
                    </a>
                    <a href="#" className='w-64 hover:w-[258px]'>
                        <div className='card p-4 bg-blue-200 mx-2'>
                            <div className='flex items-center'>
                                <img src="https://i.ibb.co/dJGW0gq7/download.png" className='w-16 h-16 rounded-2xl mr-4' alt="" />
                                <h5 className="font-bold">Market Research</h5>
                            </div>
                        </div>
                    </a>
                    <a href="#" className='w-64 hover:w-[258px]'>
                        <div className='card p-4 bg-blue-200 mx-2'>
                            <div className='flex items-center'>
                                <img src="https://jthemes.net/themes/wp/jobbox/wp-content/uploads/2024/12/research.svg" className='w-16 h-16 mr-4' alt="" />
                                <h5 className="font-bold">Software</h5>
                            </div>
                        </div>
                    </a>
                    <a href="#" className='w-64 hover:w-[258px]'>
                        <div className='card p-4 bg-blue-200 mx-2'>
                            <div className='flex items-center'>
                                <img src="https://jthemes.net/themes/wp/jobbox/wp-content/uploads/2023/03/finance.svg" className='w-16 h-16 mr-4' alt="" />
                                <h5 className="font-bold">Finance</h5>
                            </div>
                        </div>
                    </a>
                    <a href="#" className='w-64 hover:w-[258px]'>
                        <div className='card p-4 bg-blue-200 mx-2'>
                            <div className='flex items-center'>
                                <img src="https://jthemes.net/themes/wp/jobbox/wp-content/uploads/2024/12/management.svg" className='w-16 h-16 mr-4' alt="" />
                                <h5 className="font-bold">Management</h5>
                            </div>
                        </div>
                    </a>
                    <a href="#" className='w-64 hover:w-[258px]'>
                        <div className='card p-4 bg-blue-200 mx-2'>
                            <div className='flex items-center'>
                                <img src="https://jthemes.net/themes/wp/jobbox/wp-content/uploads/2024/12/marketing.svg" className='w-16 h-16 mr-4' alt="" />
                                <h5 className="font-bold">Marketing & Sale</h5>
                            </div>
                        </div>
                    </a>
                </Marquee>
            </div>
        </div>
    );
};

export default Category;