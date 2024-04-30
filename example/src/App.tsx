import { NoRampCheckout } from '../../src';

const App = () => {
  const handleSuccess = (data: any) => {
    console.log('Success: ', JSON.stringify(data, null, 2));
  };

  return (
    <div className="main">
      <div className="column dark">
        <p className="title">Light theme:</p>
        <NoRampCheckout
          priceId="pi_0a0CHdzVCUSwvZmvbQ1gjm"
          onSuccess={handleSuccess}
          theme="light"
          type="buy"
          buttonTheme="light"
        />

        <NoRampCheckout
          priceId="pi_0a0CHdzVCUSwvZmvbQ1gjm"
          onSuccess={handleSuccess}
          theme="light"
          type="book"
          buttonTheme="light"
        />

        <NoRampCheckout
          priceId="pi_0a0CHdzVCUSwvZmvbQ1gjm"
          onSuccess={handleSuccess}
          theme="light"
          type="donate"
          buttonTheme="light"
        />
        <NoRampCheckout
          priceId="pi_0a0CHdzVCUSwvZmvbQ1gjm"
          onSuccess={handleSuccess}
          theme="light"
          type="plain"
          buttonTheme="light"
        />
      </div>

      <div className="column light">
        <p className="title">Dark theme:</p>
        <NoRampCheckout
          priceId="pi_0a0CHdzVCUSwvZmvbQ1gjm"
          onSuccess={handleSuccess}
          theme="dark"
          buttonTheme="dark"
        />

        <NoRampCheckout
          priceId="pi_0a0CHdzVCUSwvZmvbQ1gjm"
          onSuccess={handleSuccess}
          theme="dark"
          buttonTheme="dark"
          type="checkout"
        />

        <NoRampCheckout
          priceId="pi_0a0CHdzVCUSwvZmvbQ1gjm"
          onSuccess={handleSuccess}
          theme="dark"
          buttonTheme="dark"
          type="continue"
        />

        <NoRampCheckout
          priceId="pi_0a0CHdzVCUSwvZmvbQ1gjm"
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
