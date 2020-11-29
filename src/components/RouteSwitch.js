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
import PrivateRoute from './shared/Routes/PrivateRoute'
//Context
import { RedirectContextProvider } from "./shared/Context/RedirectContext"

const RouteSwitch = () => {
  const location = useLocation()
  const categories = useFetchData('http://localhost/astroshoot/api/categories/read.php')

  return <Switch location={location} key={location.key}>
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
  <Route path="/:categorie/:id" exact component={ImageDetails} />
  <Route path="/materiel" exact component={Materiel} />
  <Route path="/informations" exact component={Informations}/>
  <Route path="/calculs" exact component={Calculs}/>
  <RedirectContextProvider>
    <Route path="/login" exact component={Login}/>
    <PrivateRoute path="/admin" component={Admin}/>
  </RedirectContextProvider>
</Switch>
}

export default RouteSwitch