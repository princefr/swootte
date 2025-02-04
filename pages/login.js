import { useRouter } from "next/router"
import { useState } from "react"
import { getAuth } from "firebase/auth"





const Login = () => {
    const router = useRouter()
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")


    const handleConnect = (event) => {
        event.preventDefault()
        let prevUser = getAuth().currentUser
        const credential = getAuth().signInWithEmailAndPassword(email, password).then(() => {
            router.push("/home")
        }).catch((err) => {
            console.log(err)
        })
    }

    return (
        <div className="flex flex-col">
            <input value={email} onChange={((e) => setEmail(e.target.value) )} placeholder="email"></input>
            <input value={password} onChange={((e) => setPassword(e.target.value) )} placeholder="password"></input>

            <button onClick={handleConnect}>
                <span>se connecter</span>
            </button>
        </div>
    )
}


export default Login