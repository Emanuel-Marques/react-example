import Header from './components/header';
import LuckyNumbers from './components/LuckyNumbers';
import Footer from './components/Footer';
import './App.css';
import PastResults from './components/PastResults';
import LottoNumbers from './components/LottoNumbers';

function App() {
  return (
    <>
      <Header />
      <LuckyNumbers />
      {/* <PastResults /> */}
      <LottoNumbers numbers={ [1, 2, 3, 4, 5, 6] } />
      <Footer />
    </>
  );
}

export default App;
