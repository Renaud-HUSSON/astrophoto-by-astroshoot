const { useContext } = require("react")
const { Route, Redirect } = require("react-router-dom")
const { AuthContext } = require("../Context/AuthContext")

const PrivateRoute = ({path, component}) => {
  const [auth] = useContext(AuthContext)
  
  return <Route path={path}>
    {
      auth 
      ? component
      : <Redirect to="/login"/>
    }
  </Route>
}

export default PrivateRoute