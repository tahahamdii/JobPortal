import React from 'react'
import { useSelector } from 'react-redux'

const Auth = () => {
  const  {user} = useSelector((state) => state.user) 
  const [open , setOpen] = React.useState(false);
  const location = useLocation();

  let from = location.state?.from || { pathname: "/" };
  if(user.token) {
    return window.location.replace(from);
  
  }
  return (
    <div>Auth</div>
  )
}

export default Auth