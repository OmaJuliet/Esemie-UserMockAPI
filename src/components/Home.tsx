import UserList from './UserList';
import useFetch from '../useFetch';
import { motion } from 'framer-motion';


// Creating the loading ball animation with framer motion.
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
    const { data: users, isPending, error } = useFetch('http://localhost:8000/users')


    return (
        <section className="home">
            {/* if an error occurs while trying to fetch user list, show the error message */}
            {error && <p className="flex flex-col text-center w-full mt-12">{error}</p>}

            {/* if data is being fetched, show the loading message and the rolling ball animation*/}
            {isPending && <p className="flex flex-col text-center w-full my-12">Loading users...</p>}
            {isPending && (
                <motion.div variants={loaderVariants} animate="animationOne" className="flex flex-col text-center rounded-full w-4 h-4 mx-auto mt-2 lg:mt-2 bg-indigo-500 rounded-full"></motion.div>
            )}

            {/* if there's no error and it's done fetching, display the list of users from the UserList component */}
            {users && <UserList users={users} name="List of users" />}
        </section>
    );
};

export default Home;
