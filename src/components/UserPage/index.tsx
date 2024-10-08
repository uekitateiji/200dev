import { useEffect, useState } from 'react';
import axios from '../../services/api';

const UserPage = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('/user');
        setData(response.data);
      } catch (error) {
        console.error('Error', error);
      }
    };
    fetchData();
  }, []);

  return (
    <div>
      <h2>Usuário</h2>
      {data ? <p>{JSON.stringify(data)}</p> : <p>Aguarde</p>}
    </div>
  );
};

export default UserPage;
