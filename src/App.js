import logo from './logo.svg';
import './App.css';
// import Test1 from './Test'
import HeaderSection from './components/HeaderSection';
import DetailSection from './components/DetailSection';
import ProductsSection from './components/ProductsSection';
import HomeFindSection from './components/HomeFindSection';
import WhatCustomerSaysSection from './components/WhatCustomerSaysSection';
import NewsletterSection from './components/NewsletterSection';
import FooterInfoSection from './components/FooterInfoSection';
import FooterCopyRightSection from './components/FooterCopyRightSection';
import 'bootstrap/dist/css/bootstrap.min.css';
// import Navbar from './components/Navbar';

function App() {
  return (
    <div>
      <HeaderSection />
      <DetailSection />
      <ProductsSection />
      <HomeFindSection />
      <WhatCustomerSaysSection />
      <NewsletterSection />
      <FooterInfoSection />
      <FooterCopyRightSection />
    </div>

    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //     // <Test1 />
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
  );
}

export default App;
