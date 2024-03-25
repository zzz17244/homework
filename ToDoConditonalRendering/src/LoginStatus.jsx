import React from 'react'

export default function LoginStatus(props) {
  return (
 <>{props.isLogin ? <p className='card2'>Hello welcome to our new AI platform</p> : <button className='card'>Login</button>}</> )
}
