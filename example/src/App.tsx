import { NoRampOneClick } from '../../.';
import './App.css';

const App = () => {
  const handleSuccess = (data: any) => {
    console.log('Success: ', JSON.stringify(data, null, 2));
  };

  return (
    <NoRampOneClick
      priceId="price_3O7ZpGp3BmILQOQhlzk2Pg"
      testnet
      onSuccess={handleSuccess}
    />
  );
};

export default App;
