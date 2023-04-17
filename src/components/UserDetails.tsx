import { useParams } from 'react-router-dom';
import useFetch from '../useFetch';
import { motion } from 'framer-motion';


// Creating the loading ball animation
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
  const { id } = useParams();
  const { data: user, error, isPending } = useFetch("http://localhost:8000/users/" + id);


  return (
    <>
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-12 mx-auto">
          
          {/* If data is being fetched, show the loading message and the rolling ball */}
          {isPending && <div className="flex flex-col text-center w-full mt-4 mb-12">Loading user details...</div>}
          {isPending && <motion.div variants={loaderVariants} animate="animationOne" className="flex flex-col text-center rounded-full w-4 h-4 mx-auto mt-2 lg:mt-2 bg-indigo-500 rounded-full"></motion.div>}
          
          {/* If there is an error in displaying user data, show error message */}
          {error && <div className="flex flex-col text-center w-full mb-2">{error}</div>}

          {/* If there's no error and it's done fetching the data, display the user's full details */}
          {user && (
            <>
              <div className="flex flex-col text-center w-full">
                <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-indigo-600">User {user.id} details</h1>
              </div>
              <div className="flex flex-wrap -m-4 text-center">
                <div className="p-4 md:w-1/4 sm:w-1/2 w-full">
                  <div className="border-2 border-gray-200 bg-gray-200 px-4 py-6 rounded-lg">
                    <h2 className="title-font text-left font-medium text-2xl mt-2 text-gray-900">{user.name}</h2>
                    <p className="mt-2 text-left text-gray-700 leading-relaxed">{user.email}</p>
                    <p className="mt-2 text-left text-gray-700 leading-relaxed">{user.number}</p>
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
