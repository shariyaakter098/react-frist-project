
import { NavLink } from 'react-router-dom'
import './Header.css'

function Header() {
  

  return (
    <>
     <div>
      <h2 className='header'>
        Mind Luster
      </h2>
      <ul>
        <li>
          <NavLink to="/">
            <button>Home</button>
          </NavLink>
        </li>
        <li>
        <NavLink to="/blog">
            <button>Blog</button>
          </NavLink>
        </li>
        <li>
        <NavLink to="/about">
            <button>About</button>
          </NavLink>
        </li>
        <li>
        <NavLink to="/project">
            <button>Projects</button>
          </NavLink>
        </li>
        <li>``
        <NavLink to="/contact">
            <button>Contact</button>
          </NavLink>
        </li>
       

      </ul>
     </div>

    </>
  )
}

export default Header
