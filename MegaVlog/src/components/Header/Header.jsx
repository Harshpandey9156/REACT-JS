import React from 'react'
import {Container , Logo,Logoutbtn} from '../index.js'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import {useNavigate} from 'react-router-dom'

function Header() {
  const authStatus = useSelector((state) => state.auth.status);

  const navigate = useNavigate();
  const navItems=[
    {
      name: 'Home',
      slug: "/",
      active: true
    }, 
    {
      name: "Login",
      slug: "/login",
      active: !authStatus,
  },
  {
      name: "Signup",
      slug: "/signup",
      active: !authStatus,
  },
  {
      name: "All Posts",
      slug: "/all-posts",
      active: authStatus,
  },
  {
      name: "Add Post",
      slug: "/add-post",
      active: authStatus,
  },
  ]
  return (

    <header className='py-3 shadow bg-gray-500'>

      <Container>
        <nav  className='flex'> 
          <div className='flex mr-4 justify-between items-center'>
            <Link to='/'>
              <Logo width='100px'/>
              </Link>
            </div>
           <ul className='flex ml-auto'>
            {navItems.map((item )=>{
              item.active= item.active ? (<li key ={item.name}>
                <button onClick={()=>navigate(item.slug)} 
                className='inline-block px-6 py-2 duration-200 hover:bg-blue-100 rounded-full'>{item.name}
                 </button>

              </li>) : null;
            })}
            {authStatus && (
              <li>
                <Logoutbtn/>
              </li>
            )}
           </ul>
        </nav>
      </Container>
    </header>
  )
}

export default Header