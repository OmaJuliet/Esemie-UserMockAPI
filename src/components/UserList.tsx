import React from 'react';
import { Link } from 'react-router-dom';

// interface User - a typescript interface that defines the structure of an object that has four properties with each property having a specific data type.
interface User {
    id: number;
    name: string;
    email: string;
    number: string;
}

// interface UserListProps defines the structure of an object that has two properties - users and name. users is an array of objects that match the "User"interface.
interface UserListProps {
    users: User[];
    name: string;
}

//Takes an object with the userListProps interface as an argument, destructures users and namee from it and uses them as props in the component.
const UserList: React.FC<UserListProps> = ({ users, name }) => {

    return (
        <>
            <section className="text-gray-600 body-font">
                <div className="container px-5 py-12 mx-auto">
                    <div className="flex flex-col text-center w-full">
                        <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-indigo-600">Users List</h1>
                    </div>
                    <div className="lg:w-2/3 w-full mx-auto overflow-auto shadow mt-2 border-gray-300 lg:overflow-hidden border-b sm:rounded-lg">
                        <table className="table-auto w-full text-left whitespace-no-wrap divide-y divide-gray-200">
                            <thead>
                                <tr>
                                    <th className="p-4 title-font tracking-wider font-medium text-gray-900 text-lg bg-gray-100 uppercase">Name</th>
                                    <th className="p-4 title-font tracking-wider font-medium text-gray-900 text-lg bg-gray-100 uppercase">Email</th>
                                    <th className="p-4 title-font tracking-wider font-medium text-gray-900 text-lg bg-gray-100 uppercase">Details</th>
                                </tr>
                            </thead>
                            <tbody className=" divide-y divide-gray-200">
                                {/* The map method is used to cycle through an array and return a template for each user data as it is being itirated through */}
                                {users.map((user) => (
                                    <tr key={user.id}>
                                        <td className="px-4 py-4">
                                            <div className="flex items-center">
                                                <div className="">
                                                    <div className="text-sm font-medium text-gray-900">{user.name}</div>
                                                </div>
                                            </div>
                                        </td>

                                        <td className="px-4 py-4">
                                            <div className="flex items-center">
                                                <div className="">
                                                    <div className="text-sm font-medium text-gray-500">{user.email}</div>
                                                </div>
                                            </div>
                                        </td>

                                        <td className="px-4 py-4">
                                            <Link to={`/users/${user.id}`}>
                                                <button className="text-indigo-600 border-indigo-600 border-2 rounded-lg px-4 py-2 hover:bg-indigo-600 hover:text-white focus:border-1 focus:border-indigo-200">
                                                    View full details
                                                </button>
                                            </Link>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </section>
        </>
    );
};

export default UserList;
