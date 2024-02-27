import React, { useEffect, useState } from 'react';
import axios from 'axios';

interface User {
  id: number;
  name: string;
}

const API_URL = '/api/data/users?timeout=10000';

export const useFetchUsers = () => {
  const [users, setUsers] = useState([]);
  const [isConnectionIssue, setIsConnectionIssue] = useState(false);

  const fetchUsers = () => {
    axios
      .get(API_URL, { timeout: 5000 })
      .then((res) => {
        setUsers(res.data);
      })
      .catch((error) => {
        if (error.code === 'ECONNABORTED') {
          setIsConnectionIssue(true);
        }
      });
  };

  const retryLoading = () => {
    setIsConnectionIssue(false);
    fetchUsers();
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  return { users, isConnectionIssue, retryLoading };
};
