import React from 'react';
import { useFetchUsers } from './useFetchUsers';

interface User {
  id: number;
  name: string;
}

const App = () => {
  const { users, isConnectionIssue, retryLoading } = useFetchUsers();

  return (
    <div>
      <div className="flex flex-row items-center justify-between py-4">
        <h1 className="text-2xl font-bold">Users</h1>
        {isConnectionIssue && (
          <div className="flex flex-row items-center">
            <p className="mr-2">
              Sorry, there seems to be connectivity issues...
            </p>
            <button
              onClick={retryLoading}
              className="text-blue-400 bg-blue-200 hover:text-blue-200 hover:bg-blue-400 rounded-md p-4"
            >
              Try again
            </button>
          </div>
        )}
      </div>
      <ul className="space-y-2">
        {users.map((user: User, index) => (
          <li
            className="bg-white p-4 rounded-md border border-gray-100"
            key={index}
          >
            {user.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App;
