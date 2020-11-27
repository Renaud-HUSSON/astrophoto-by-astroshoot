import AdminNav from './components/AdminNav'
import Grid from './components/Grid'
import Update from './pages/Update'
import {motion} from 'framer-motion'
import { Route, Switch } from 'react-router-dom'
import Create from './pages/Create'
import Delete from './pages/Delete'
import { RedirectContextProvider } from './components/shared/Context/RedirectContext'

const Admin = () => {
  return <motion.div className="Admin" exit=' '>
    <div className="admin-nav">
      <h1>Admin</h1>
      <AdminNav />
    </div>
    <div className="datas">
      <RedirectContextProvider>
        <Switch>
          <Route exact path="/admin/:section" component={Grid} />
          <Route path="/admin/:section/update/:id" component={Update} />
          <Route path="/admin/:section/create" component={Create} />
          <Route path="/admin/:section/delete/:id" component={Delete} />
        </Switch>
      </RedirectContextProvider>
    </div>
  </motion.div>
}

export default Admin