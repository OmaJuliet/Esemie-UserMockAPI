import React from 'react';
import UserList from './UserList';
import useFetch from '../useFetch';
import { motion } from 'framer-motion';


interface User {
    id: string;
    name: string;
    email: string;
    number: string;
}

const loaderVariants = {
    animationOne: {
        x: [-20, 20],
        y: [0, -30],
        transition: {
            x: {
                yoyo: Infinity,
                duration: 0.5
            },
            y: {
                yoyo: Infinity,
                duration: 0.25,
                ease: 'easeOut'
            }
        }
    }
}

const Home = (): JSX.Element => {
    //   const { data: blogs, isPending, error } = useFetch('http://localhost:8000/blogs');
    const { data: users, isPending, error } = useFetch('http://localhost:8000/users')


    return (
        <section className="home">
            {error && <p className="flex flex-col text-center w-full mt-12">{error}</p>}
            {isPending && <p className="flex flex-col text-center w-full my-12">Loading users...</p>}
            {isPending && (
                <motion.div variants={loaderVariants} animate="animationOne" className="flex flex-col text-center rounded-full w-4 h-4 mx-auto mt-2 lg:mt-2 bg-indigo-500 rounded-full"></motion.div>
            )}
            {/* {blogs && <UserList blogs={blogs as Blog[]} title="My Blogs" />} */}
            {users && <UserList users={users} name="My Blogs" />}
        </section>
    );
};

export default Home;
