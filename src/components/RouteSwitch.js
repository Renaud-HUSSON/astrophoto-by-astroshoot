//Reacr
import { Route, Switch, useLocation } from "react-router-dom"
//Components
import Admin from "../Admin/Admin"
import Accueil from "../pages/Accueil"
import Categorie from "../pages/Categorie"
import ImageDetails from "../pages/ImageDetails"
import Materiel from "../pages/Materiel"
import Informations from "../pages/Informations"
import Calculs from "../pages/Calculs"
import useFetchData from "./shared/Hooks/useFetchData"
import Login from "../pages/Login"
//Context
import NotFound from "./shared/NotFound"
import { AnimatePresence } from "framer-motion"
import { useEffect } from "react"
import Newsletter from "../pages/Newsletter"
//Google analytics
import ReactGA from 'react-ga';

const RouteSwitch = () => {
  ReactGA.initialize(process.env.REACT_APP_GA, {
    debug: false,
    titleCase: false,
    gaOptions: {
      userId: 123,
      siteSpeedSampleRate: 100
    }
  });
  ReactGA.pageview(window.location.pathname + window.location.search);
  
  const location = useLocation()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [location])

  const categories = useFetchData(`${process.env.REACT_APP_URL}api/categories/read.php`)

  return <AnimatePresence exitBeforeEnter>
    <Switch location={location} key={location.key}>
      <Route path="/" exact component={Accueil} />
      <Route path="/login" exact component={Login}/>
      <Route path="/admin" component={Admin}/>
      {
        !categories[1] 
        ? categories[0]['data'].map((categorie) => {
          return <Route key={categorie.id} path={`/${categorie.nom}`} exact>
              <Categorie categorie={categorie.nom} title={categorie.titre}/>
            </Route>
          })
          : ''
        }
      <Route path="/:categorie/:id" exact component={ImageDetails} />
      <Route path="/materiel" exact component={Materiel} />
      <Route path="/informations" exact component={Informations}/>
      <Route path="/calculs" exact component={Calculs}/>
      <Route path="/newsletter" exact component={Newsletter}/>
      <Route component={NotFound}/>
    </Switch>
  </AnimatePresence>
}

export default RouteSwitch