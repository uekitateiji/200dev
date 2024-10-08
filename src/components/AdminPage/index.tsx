import { useEffect, useState } from 'react';
import axios from '../../services/api';

const AdminPage = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('/admin');
        setData(response.data);
      } catch (error) {
        console.error('Error', error);
      }
    };
    fetchData();
  }, []);

  return (
    <div>
      <h2>Admin</h2>
      {data ? <pre>{JSON.stringify(data, null, 2)}</pre> : <p>Aguarde</p>}
    </div>
  );
};

export default AdminPage;
