//Components
import Nav from './components/shared/Nav'
import Footer from './components/shared/Footer'
import './styles/app.scss'
import RouteSwitch from './components/RouteSwitch'
import { AuthProvider } from './components/shared/Context/AuthContext'

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Nav />
        <div id="page-container">
          <RouteSwitch />
        </div>
        <Footer />
      </AuthProvider>
    </div>
  );
}

export default App;
