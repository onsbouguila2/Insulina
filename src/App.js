import './App.css';
import AboutSection from './Components/AboutSection/AboutSection';
import ArticleSection from './Components/ArticleSection/ArticleSection';
import DownloadSection from './Components/DownloadSection/DownloadSection';
import Faq from './Components/FAQ/Faq';
import FeatureSection from './Components/FeaturesSection/FeatureSection';
import Footer from './Components/Footer/Footer';
import Header from './Components/Header';
import './index.css';

function App() {
  return (
   <div >
   <Header/>
   <AboutSection/>
   <FeatureSection/>
   <ArticleSection/>
   <Faq/>
   <DownloadSection/>
   <Footer/>
   
  </div>
  );
}

export default App;
