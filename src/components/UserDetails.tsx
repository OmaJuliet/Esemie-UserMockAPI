import { useNavigate, useParams } from 'react-router-dom';
import useFetch from '../useFetch';
import { motion } from 'framer-motion';


interface User {
  id: number;
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


const UserDetails = () => {
  // const { id } = useParams<{ id: string }>();
  // const { data: user, error, isPending } = useFetch<User>("http://localhost:8000/users/" + id);
  const { id } = useParams();
  const { data: user, error, isPending } = useFetch("http://localhost:8000/users/" + id);
  const navigate = useNavigate();


  return (
    <>
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-12 mx-auto">
          {isPending && <div className="flex flex-col text-center w-full mt-4 mb-12">Loading user details...</div>}
          {isPending && <motion.div variants={loaderVariants} animate="animationOne" className="flex flex-col text-center rounded-full w-4 h-4 mx-auto mt-2 lg:mt-2 bg-indigo-500 rounded-full"></motion.div>}
          {error && <div className="flex flex-col text-center w-full mb-2">{error}</div>}
          {user && (
            <>
              <div className="flex flex-col text-center w-full">
                <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-indigo-600">User {user.id} details</h1>
              </div>
              <div className="flex flex-wrap -m-4 text-center">
                <div className="p-4 md:w-1/4 sm:w-1/2 w-full">
                  <div className="border-2 border-gray-200 px-4 py-6 rounded-lg">
                    <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="text-indigo-500 w-12 h-12 mb-3 inline-block" viewBox="0 0 24 24">
                      <path d="M8 17l4 4 4-4m-4-5v9"></path>
                      <path d="M20.88 18.09A5 5 0 0018 9h-1.26A8 8 0 103 16.29"></path>
                    </svg>
                    <h2 className="title-font text-left font-medium text-3xl mt-2 text-gray-900">{user.name}</h2>
                    <p className="mt-2 text-left leading-relaxed">{user.email}</p>
                    <p className="mt-2 text-left leading-relaxed">{user.number}</p>
                  </div>
                </div>
              </div>
            </>
          )}
        </div>
      </section>
    </>
  );
};

export default UserDetails;
