import { FaLocationArrow, FaStopwatch } from 'react-icons/fa';
import { Link, useLoaderData } from 'react-router';

const JobDetails = () => {

    const job = useLoaderData();
    const { _id, jobType, title, company, company_logo, requirements, description, location, salaryRange, applicationDeadline, responsibilities, status, hr_email, hr_name, } = job;

    return (
        <div>
            <h2 className='text-4xl text-center font-bold my-10'>Job Details of {title}</h2>
            <div className="hero bg-base-200">
                <div className="hero-content flex-col lg:flex-row">
                    <img
                        src={company_logo}
                        className="max-w-sm rounded-lg shadow-2xl w-56"
                    />
                    <div>
                        <h1 className="text-5xl font-bold">{title}</h1>
                        <div className='flex mt-5 justify-between'>
                            <p className='text-gray-500 flex items-center gap-2'> <FaStopwatch></FaStopwatch> Deadline: {applicationDeadline}</p>
                            <p className='text-gray-500 flex items-center gap-2'> <FaLocationArrow></FaLocationArrow> Location: {location}</p>
                        </div>
                        <p className='my-2 text-blue-700 font-medium'>Salary : {salaryRange.min} - {salaryRange.max} {salaryRange.currency}</p>
                        <h6 className="text-2xl font-bold">{company}</h6>
                        <p className="py-6">
                            {description}
                        </p>

                        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2'>
                            <div className=' mr-2'>
                                <p className='font-bold'>Requirements</p>
                                {
                                    requirements.map((skill, index) => <div>
                                        <p
                                            key={index}
                                            className='border rounded-md my-1 text-center bg-gray-200 hover:text-blue-200 hover:bg-black'
                                        >{skill}</p>
                                    </div>)
                                }
                            </div>
                            <div className=''>
                                <p className='font-bold'>Responsibilities</p>
                                {
                                    responsibilities.map((work, index) => <p
                                        key={index}
                                        className='border rounded-md my-1 text-center bg-gray-200 hover:text-blue-200 hover:bg-black'
                                    >{work}
                                    </p>)
                                }
                            </div>
                        </div>
                        <p className='mt-2'>Job Type : {jobType}</p>
                        <p className='my-0.5'>Status : {status}</p>
                        <p className='my-0.5'>HR Name : {hr_name}</p>
                        <p className='mb-1'>HR Email : {hr_email}</p>
                        <Link to={`/jobApply/${_id}`}>
                            <button className="btn btn-primary">Apply</button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default JobDetails;