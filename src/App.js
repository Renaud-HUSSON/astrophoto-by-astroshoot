//Components
import Nav from './components/shared/Nav'
import Footer from './components/shared/Footer'
import './styles/app.scss'
import RouteSwitch from './components/RouteSwitch'
import { AuthProvider } from './components/shared/Context/AuthContext'
import { FlashProvider } from './components/shared/Context/FlashContext'

function App() {
  return (
    <div className="App">
      <FlashProvider>
        <AuthProvider>
          <Nav />
          <div id="page-container">
            <RouteSwitch />
          </div>
          <Footer />
        </AuthProvider>
      </FlashProvider>
    </div>
  );
}

export default App;
