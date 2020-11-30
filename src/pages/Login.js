import { motion } from "framer-motion"
import { useContext, useEffect } from "react"
import { useState } from "react"
import { fadeIn } from "../animations/fade"
import { AuthContext } from "../components/shared/Context/AuthContext"
import SimpleForm from "../components/shared/Forms/SimpleForm"
import SubmitButton from "../components/shared/Forms/SubmitButton"
import TextInput from "../components/shared/Forms/TextInput"

const Login = () => {
  const [data, setData] = useState({})
  const [correct, setCorrect] = useState(false)

  const [,setAuth] = useContext(AuthContext)

  const pageTransition = fadeIn()

  const handleChange = (e) => {
    setData({...data, [e.target.name]: e.target.value})
  }

  const succeed = () => {
    setAuth(true)
  }

  useEffect(() => {
    if(data.username && data.password){
      setCorrect(true)
    }else{
      setCorrect(false)
    }
  }, [data])

  return <motion.div variants={pageTransition} animate="visible" initial="hidden" exit="exit">
    <SimpleForm className="login-form">
      <TextInput onChange={handleChange} label="Nom d'utilisateur" name="username"/>
      <TextInput onChange={handleChange} label="Mot de passe" name="password" type="password"/>
      <SubmitButton section="users" mode="login" correct={correct} redirectPath="/admin" data={data} succeed={succeed}/>
    </SimpleForm>
  </motion.div> 
}

export default Login