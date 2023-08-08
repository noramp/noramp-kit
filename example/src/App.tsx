import { NoRampOneClick } from '../../.';
import './App.css';

const App = () => {
  const handleSuccess = (data: any) => {
    console.log('Success: ', JSON.stringify(data, null, 2));
  };

  return (
    <div className="container">
      <p className="title">Light theme:</p>
      <NoRampOneClick
        priceId="price_3O7ZpGp3BmILQOQhlzk2Pg"
        testnet
        onSuccess={handleSuccess}
        theme="light"
      />
      <p className="title">Dark theme:</p>
      <NoRampOneClick
        priceId="price_3O7ZpGp3BmILQOQhlzk2Pg"
        testnet
        onSuccess={handleSuccess}
        theme="dark"
      />
    </div>
  );
};

export default App;
