
import CommingSoon from '../../CommingSoon/CommingSoon';
import DiscountProduct from '../../DiscountProduct/DiscountProduct';
import Inventory from '../Inventory/Inventory';
import banner from '../../../Images/banner.jpg';


const Home = () => {

  
  return (
    <div className='h-screen w-full overflow-auto'>
      <img className='' src={banner} alt="" />
      <Inventory />
      <DiscountProduct/>
      <CommingSoon/>
    </div>
  );
};

export default Home;