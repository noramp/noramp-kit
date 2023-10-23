import { NoRampOneClick } from '../../src';

const App = () => {
  const handleSuccess = (data: any) => {
    console.log('Success: ', JSON.stringify(data, null, 2));
  };

  return (
    <div className="main">
      <div className="column dark">
        <p className="title">Light theme:</p>
        <NoRampOneClick
          priceId="price_3O7ZpGp3BmILQOQhlzk2Pg"
          testnet
          onSuccess={handleSuccess}
          theme="light"
          type="buy"
          buttonTheme="light"
        />

        <NoRampOneClick
          priceId="price_3O7ZpGp3BmILQOQhlzk2Pg"
          testnet
          onSuccess={handleSuccess}
          theme="light"
          type="book"
          buttonTheme="light"
        />

        <NoRampOneClick
          priceId="price_3O7ZpGp3BmILQOQhlzk2Pg"
          testnet
          onSuccess={handleSuccess}
          theme="light"
          type="donate"
          buttonTheme="light"
        />
        <NoRampOneClick
          priceId="price_3O7ZpGp3BmILQOQhlzk2Pg"
          testnet
          onSuccess={handleSuccess}
          theme="light"
          type="plain"
          buttonTheme="light"
        />
      </div>

      <div className="column light">
        <p className="title">Dark theme:</p>
        <NoRampOneClick
          priceId="price_3O7ZpGp3BmILQOQhlzk2Pg"
          testnet
          onSuccess={handleSuccess}
          theme="dark"
          buttonTheme="dark"
        />

        <NoRampOneClick
          priceId="price_3O7ZpGp3BmILQOQhlzk2Pg"
          testnet
          onSuccess={handleSuccess}
          theme="dark"
          buttonTheme="dark"
          type="checkout"
        />

        <NoRampOneClick
          priceId="price_3O7ZpGp3BmILQOQhlzk2Pg"
          testnet
          onSuccess={handleSuccess}
          theme="dark"
          buttonTheme="dark"
          type="continue"
        />

        <NoRampOneClick
          priceId="price_3O7ZpGp3BmILQOQhlzk2Pg"
          testnet
          onSuccess={handleSuccess}
          theme="dark"
          type="plain"
          buttonTheme="dark"
        />
      </div>
    </div>
  );
};

export default App;
