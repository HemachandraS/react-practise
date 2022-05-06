import '../App.css'
import { AuthContext } from '../context/AuthContext'
import {useContext} from 'react'
export const Display = () => {
    const {isAuth,toggleAuth}=useContext(AuthContext)
    return (<div>
        <h4>Welcome , you login successfully done</h4>
        <h5>Token:- {isAuth}</h5>
    </div>)
}