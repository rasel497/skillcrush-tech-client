import React from 'react';
import { Link } from 'react-router-dom';
import HomeCourses from '../HomeCourses/HomeCourse/HomeCourses';
import ContactPage from '../Shared/ContactPage/ContactPage';
import CourseDisplayHome from './CourseDisplayHome';

const Home = () => {


    return (
        <div>

            <div className="hero min-h-screen bg-purple-500">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <img style={{ width: '700px', height: '500px' }} src="https://www.siliconinfo.com/assets/img/banner-img-right.png" alt="" />
                    <div>
                        <h1 className="text-5xl font-bold text-white mb-2">Welcome To Skillcrush <br /> Learning Desk!
                        </h1>
                        <h1 className='text-4xl font-bold'>
                            Let the career begin with the confidence of competence.
                        </h1>
                        <p className="py-6">Provident cupiditate voluptatem et in. <br />Find the right instructor for you. Choose from many topics, skill levels, and languages. Shop thousands of high-quality on-demand online courses. Start learning today. Download To Your Phone. 30-Day Money Guarantee. Expert Instructors. Courses in 60+ Languages. Lifetime Access. Over 204,000 Courses. Courses: Programming, Personal Development, Design, Communication, Excel.</p>
                        <Link to='/courses'><button className="btn btn-primary">Continue course</button></Link>
                    </div>
                </div>
            </div>

            {/* Coreses Categorey with api */}
            <section>
                <HomeCourses></HomeCourses>
            </section>
            {/* Coreses Categorey with api */}

            {/*  demo category start */}
            <div>
                <CourseDisplayHome></CourseDisplayHome>
            </div>
            {/* course category end */}


            <div className="carousel w-full">
                <div id="slide1" className="carousel-item relative w-full">
                    <img style={{ height: '350px' }} src="https://pbs.twimg.com/media/EzCG9SBXEAQvRUT?format=jpg&name=4096x4096" className="w-full" alt='' />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide4" className="btn btn-circle">???</a>
                        <a href="#slide2" className="btn btn-circle">???</a>
                    </div>
                </div>
                <div id="slide2" className="carousel-item relative w-full">
                    <img style={{ height: '350px' }} src="https://res.cloudinary.com/practicaldev/image/fetch/s--XhVRGdz8--/c_imagga_scale,f_auto,fl_progressive,h_720,q_auto,w_1280/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/epv55hgtsfi8csprpj9u.jpg" className="w-full" alt='' />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide1" className="btn btn-circle">???</a>
                        <a href="#slide3" className="btn btn-circle">???</a>
                    </div>
                </div>
                <div id="slide3" className="carousel-item relative w-full">
                    <img style={{ height: '350px' }} src="https://blog.habilelabs.io/wp-content/uploads/2021/11/python-expert.png" className="w-full" alt='' />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide2" className="btn btn-circle">???</a>
                        <a href="#slide4" className="btn btn-circle">???</a>
                    </div>
                </div>
                <div id="slide4" className="carousel-item relative w-full">
                    <img style={{ height: '350px' }} src="https://www.interviewbit.com/blog/wp-content/uploads/2021/08/dot-net-developer.jpg" className="w-full" alt='' />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide3" className="btn btn-circle">???</a>
                        <a href="#slide1" className="btn btn-circle">???</a>
                    </div>
                </div>
            </div>


            {/* company info */}
            <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
                <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">

                    <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto">
                        <span className="relative inline-block">
                            <svg
                                viewBox="0 0 52 24"
                                fill="currentColor"
                                className="absolute top-0 left-0 z-0 hidden w-32 -mt-8 -ml-20 text-blue-gray-100 lg:w-32 lg:-ml-28 lg:-mt-10 sm:block"
                            >
                                <defs>
                                    <pattern
                                        id="18302e52-9e2a-4c8e-9550-0cbb21b38e55"
                                        x="0"
                                        y="0"
                                        width=".135"
                                        height=".30"
                                    >
                                        <circle cx="1" cy="1" r=".7" />
                                    </pattern>
                                </defs>
                                <rect
                                    fill="url(#18302e52-9e2a-4c8e-9550-0cbb21b38e55)"
                                    width="52"
                                    height="24"
                                />
                            </svg>
                            <span className="relative">The</span>
                        </span>{' '}
                        hardwork developer jumps over our destination!
                    </h2>
                    <p className="text-base text-gray-700 md:text-lg">
                        Web developer perspiciatis unde omnis iste natus error sit voluptatem
                        accusantium doloremque rem aperiam, eaque ipsa quae.
                    </p>
                </div>
                <div className="grid gap-4 row-gap-5 sm:grid-cols-2 lg:grid-cols-4">
                    <div className="flex flex-col justify-between p-5 border rounded shadow-sm">
                        <div>
                            <div className="flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-indigo-50">
                                <svg
                                    className="w-12 h-12 text-deep-purple-accent-400"
                                    stroke="currentColor"
                                    viewBox="0 0 52 52"
                                >
                                    <polygon
                                        strokeWidth="3"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        fill="none"
                                        points="29 13 14 29 25 29 23 39 38 23 27 23"
                                    />
                                </svg>
                            </div>
                            <h6 className="mb-2 font-semibold leading-5">The deep ocean</h6>
                            <p className="mb-3 text-sm text-gray-900">
                                A flower in my garden, a mystery in my panties. Heart attack never
                                stopped old Big Bear.
                            </p>
                        </div>
                        <a
                            href="/"
                            aria-label=""
                            className="inline-flex items-center font-semibold transition-colors duration-200 text-deep-purple-accent-400 hover:text-deep-purple-800"
                        >
                            Learn more
                        </a>
                    </div>
                    <div className="flex flex-col justify-between p-5 border rounded shadow-sm">
                        <div>
                            <div className="flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-indigo-50">
                                <svg
                                    className="w-12 h-12 text-deep-purple-accent-400"
                                    stroke="currentColor"
                                    viewBox="0 0 52 52"
                                >
                                    <polygon
                                        strokeWidth="3"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        fill="none"
                                        points="29 13 14 29 25 29 23 39 38 23 27 23"
                                    />
                                </svg>
                            </div>
                            <h6 className="mb-2 font-semibold leading-5">When has justice</h6>
                            <p className="mb-3 text-sm text-gray-900">
                                Rough pomfret lemon shark plownose chimaera southern sandfish
                                kokanee northern sea.
                            </p>
                        </div>
                        <a
                            href="/"
                            aria-label=""
                            className="inline-flex items-center font-semibold transition-colors duration-200 text-deep-purple-accent-400 hover:text-deep-purple-800"
                        >
                            Learn more
                        </a>
                    </div>
                    <div className="flex flex-col justify-between p-5 border rounded shadow-sm">
                        <div>
                            <div className="flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-indigo-50">
                                <svg
                                    className="w-12 h-12 text-deep-purple-accent-400"
                                    stroke="currentColor"
                                    viewBox="0 0 52 52"
                                >
                                    <polygon
                                        strokeWidth="3"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        fill="none"
                                        points="29 13 14 29 25 29 23 39 38 23 27 23"
                                    />
                                </svg>
                            </div>
                            <h6 className="mb-2 font-semibold leading-5">Organically grow</h6>
                            <p className="mb-3 text-sm text-gray-900">
                                A slice of heaven. O for awesome, this chocka full cuzzie is as
                                rip-off as a cracker.
                            </p>
                        </div>
                        <a
                            href="/"
                            aria-label=""
                            className="inline-flex items-center font-semibold transition-colors duration-200 text-deep-purple-accent-400 hover:text-deep-purple-800"
                        >
                            Learn more
                        </a>
                    </div>
                    <div className="flex flex-col justify-between p-5 border rounded shadow-sm">
                        <div>
                            <div className="flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-indigo-50">
                                <svg
                                    className="w-12 h-12 text-deep-purple-accent-400"
                                    stroke="currentColor"
                                    viewBox="0 0 52 52"
                                >
                                    <polygon
                                        strokeWidth="3"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        fill="none"
                                        points="29 13 14 29 25 29 23 39 38 23 27 23"
                                    />
                                </svg>
                            </div>
                            <h6 className="mb-2 font-semibold leading-5">A slice of heaven</h6>
                            <p className="mb-3 text-sm text-gray-900">
                                Disrupt inspire and think tank, social entrepreneur but
                                preliminary thinking think tank compelling.
                            </p>
                        </div>
                        <a
                            href="/"
                            aria-label=""
                            className="inline-flex items-center font-semibold transition-colors duration-200 text-deep-purple-accent-400 hover:text-deep-purple-800"
                        >
                            Learn more
                        </a>
                    </div>
                </div>
            </div>

            <section>
                <ContactPage></ContactPage>
            </section>
        </div>
    );
};

export default Home;