//Components
//Import components
import Nav from './components/shared/Nav'
import Footer from './components/shared/Footer'
import RouteSwitch from './components/RouteSwitch'
//Import context provider
import { AuthProvider } from './components/shared/Context/AuthContext'
import { FlashProvider } from './components/shared/Context/FlashContext'
//Import style
import './styles/app.scss'
//Import react helmet
import {Helmet, HelmetProvider} from 'react-helmet-async'

function App() {
  return (
    <div className="App">
      <HelmetProvider>
        <FlashProvider>
          <AuthProvider>
            <Nav />
            <div id="page-container">
              <RouteSwitch />
            </div>
            <Footer />
          </AuthProvider>
        </FlashProvider>
      </HelmetProvider>
    </div>
  );
}

export default App;
