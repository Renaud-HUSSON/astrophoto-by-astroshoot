//Components
import Nav from './components/shared/Nav'
import Accueil from './pages/Accueil'
import Categorie from './pages/Categorie'
import ImageDetails from './pages/ImageDetails'
import Materiel from './pages/Materiel'
import Informations from './pages/Informations'
import Calculs from './pages/Calculs'
import Footer from './components/shared/Footer'
//Animation
import {AnimatePresence} from 'framer-motion'
//Other
import {Switch, Route, useLocation} from 'react-router-dom'
import './styles/app.scss'

function App() {
  const location = useLocation()

  return (
    <div className="App">
      <Nav />
      <div id="page-container">
        <AnimatePresence exitBeforeEnter>
          <Switch location={location} key={location.key}>
            <Route path="/" exact>
              <Accueil />
            </Route>
            <Route path="/nebuleuses" exact>
              <Categorie categorie="nebuleuses" title="Les Nébuleuses"/>
            </Route>
            <Route path="/nebuleuses/:id" exact>
              <ImageDetails />
            </Route>
            <Route path="/materiel" exact>
              <Materiel />
            </Route>
            <Route path="/informations" exact>
              <Informations />
            </Route>
            <Route path="/calculs" exact>
              <Calculs />
            </Route>
          </Switch>
        </AnimatePresence>
      </div>
      <Footer />
    </div>
  );
}

export default App;
