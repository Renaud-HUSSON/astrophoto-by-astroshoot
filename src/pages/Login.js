import { useContext, useEffect } from "react"
import { useState } from "react"
import { AuthContext } from "../components/shared/Context/AuthContext"
import SimpleForm from "../components/shared/Forms/SimpleForm"
import SubmitButton from "../components/shared/Forms/SubmitButton"
import TextInput from "../components/shared/Forms/TextInput"

const Login = () => {
  const [data, setData] = useState({})
  const [correct, setCorrect] = useState(false)

  const [,setAuth] = useContext(AuthContext)

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

  return <SimpleForm className="login-form">
    <TextInput onChange={handleChange} label="Nom d'utilisateur" name="username"/>
    <TextInput onChange={handleChange} label="Mot de passe" name="password" type="password"/>
    <SubmitButton section="users" mode="login" correct={correct} redirectPath="/admin" data={data} succeed={succeed}/>
  </SimpleForm>
}

export default Login