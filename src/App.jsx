import styles from "./style";
import {Routes,Route} from 'react-router-dom'
import {
  Navbar,
  Hero,
  Billing,
  Footer,
} from "./components";

const App = () => {
  return (
    <div className="bg-primary w-full overflow-hidden">
      
      <div className={`bg-primary ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
        <Navbar></Navbar>
        <Routes>
      <Route path='/' element={<Hero/>}></Route>
      <Route path='/result' element={<Billing/>}></Route>
    </Routes>
        </div>
      </div>

      <div className={`bg-primary ${styles.paddingX} ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default App;
