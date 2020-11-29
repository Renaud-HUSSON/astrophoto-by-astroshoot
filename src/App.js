//Components
import Nav from './components/shared/Nav'
import Footer from './components/shared/Footer'
//Animation
import {AnimatePresence} from 'framer-motion'
import './styles/app.scss'
import RouteSwitch from './components/RouteSwitch'
import { AuthProvider } from './components/shared/Context/AuthContext'

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Nav />
        <div id="page-container">
          <AnimatePresence exitBeforeEnter>
            <RouteSwitch />
          </AnimatePresence>
        </div>
        <Footer />
      </AuthProvider>
    </div>
  );
}

export default App;
