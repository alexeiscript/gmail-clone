import React from 'react'
import './Login.css'
import Button from '@material-ui/core/Button'
import { auth, provider } from './firebase'
import { login } from './features/userSlice'
import { useDispatch } from 'react-redux'

function Login() {
  const dispatch = useDispatch()

  const signIn = () => {
    auth.signInWithPopup(provider)
    .then(({ user }) => {
      dispatch(login({
        displayName: user.displayName,
        email: user.email,
        photoUrl: user.photoURL
      }))
    })
    .catch((error) => alert(error.message))
  }
  
  return (
    <div className="login">
      <div className="login_container">
        <img src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/8c5af47d-0ce3-4365-a097-c17fec609620/da3xgqq-e43bcfcf-cadb-45ec-a4be-3ce0779fc870.png/v1/fill/w_1024,h_791,q_75,strp/gmail__product_sans_logo_concept__by_cosmcala-da3xgqq.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwic3ViIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl0sIm9iaiI6W1t7InBhdGgiOiIvZi84YzVhZjQ3ZC0wY2UzLTQzNjUtYTA5Ny1jMTdmZWM2MDk2MjAvZGEzeGdxcS1lNDNiY2ZjZi1jYWRiLTQ1ZWMtYTRiZS0zY2UwNzc5ZmM4NzAucG5nIiwid2lkdGgiOiI8PTEwMjQiLCJoZWlnaHQiOiI8PTc5MSJ9XV19.ESzx6MwsEoh1AQ77QyPo8pElJuaql75UsBKjHybcISI" alt="" />
        <Button variant="contained" color="primary" onClick={signIn}>Login</Button>
      </div> 
    </div>
  )
}

export default Login
