import { useSignup } from "../hooks/useSignup"
import { FcGoogle } from "react-icons/fc";



function Signup() {
   const {signupWihtGoogle,user,error}=useSignup()
  return (
    <div className="min-h-screen grid place-items-center">
        <button onClick={signupWihtGoogle} className="btn btn-secondary text-2xl">
        <FcGoogle className="text-3xl"/>
         Google
        </button>
    </div>
  )
}

export default Signup

