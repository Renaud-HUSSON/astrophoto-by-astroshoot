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
//Custom Hook to fetch data from an URL
import useFetchData from './components/shared/Hooks/useFetchData'
import Admin from './Admin/Admin'

function App() {
  const location = useLocation()
  const categories = useFetchData('http://localhost/astroshoot/api/categories/read.php')

  return (
    <div className="App">
      <Nav />
      <div id="page-container">
        <AnimatePresence exitBeforeEnter>
          <Switch location={location} key={location.key}>
            <Route path="/" exact component={Accueil} />
            {
              !categories[1] 
              ? categories[0]['data'].map((categorie) => {
                  return <Route key={categorie.id} path={`/${categorie.nom}`} exact>
                    <Categorie categorie={categorie.nom} title={categorie.titre}/>
                  </Route>
                })
              : ''
            }
            <Route path="/admin" component={Admin}/>
            <Route path="/:categorie/:id" exact component={ImageDetails} />
            <Route path="/materiel" exact component={Materiel} />
            <Route path="/informations" exact component={Informations}/>
            <Route path="/calculs" exact component={Calculs}/>
          </Switch>
        </AnimatePresence>
      </div>
      <Footer />
    </div>
  );
}

export default App;
