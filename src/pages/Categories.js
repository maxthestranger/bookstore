import { useSelector } from 'react-redux';
import { checkStatus } from '../redux/categories/categories';
import Button from '../components/button/button';
import Header from '../components/header/header';

const Categories = () => {
  const status = useSelector((state) => state.categories);
  return (
    <>
      <Header />
      <div className="container mt-5">
        <Button type="button" title="Check status" checkStatus={checkStatus} />
        <p style={{ margin: '20px auto', fontWeight: 'bold' }}>{status}</p>
      </div>
    </>
  );
};

export default Categories;
