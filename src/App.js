import Accueil from './pages/Accueil'
import {Switch, Route} from 'react-router-dom'
import './styles/app.scss'
import Nav from './components/shared/Nav'
import Footer from './components/shared/Footer'

function App() {
  return (
    <div className="App">
      <Nav />
      <Switch>
        <Route path="/" exact>
          <Accueil />
        </Route>
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
