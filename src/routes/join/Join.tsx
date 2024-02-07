import React from 'react'
import Container from '../../utils/Utils'
import { GoogleOAuthProvider, GoogleLogin } from '@react-oauth/google';
import './Join.scss'
import { useDispatch, useSelector } from 'react-redux';
import { setToken } from '../../redux/features/authSlice';
import { AppDispatch, RootState } from '../../redux/store';
const Join = () => {
  const dispatch = useDispatch<AppDispatch>()
  const auth = useSelector((state: RootState) => state.authRoot)
  console.log(auth);
  return (
    <GoogleOAuthProvider clientId={import.meta.env.VITE_GOOGLE_CLIENT_ID}>
      <Container>
        <div className="join__wrapper">
          {
            !auth.token &&
            <GoogleLogin
              onSuccess={credentialResponse => {
                dispatch(setToken(credentialResponse.credential as string))
              }}
              onError={() => {
                console.log('Login Failed');
              }}
            />
          }
        </div>
      </Container>
    </GoogleOAuthProvider>
  )
}

export default Join