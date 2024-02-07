import { Link } from 'react-router-dom'
import Jordan from '../../assets/jordan.svg'
import Converse from '../../assets/converse.svg'
import Container from '../../utils/Utils'
import './TopNavigation.scss'

const TopNavigation = () => {
  return (
    <nav className='top-navigation'>
      <Container>
        <div className="top-navigation__wrapper">
          <div className="logo__wrapper">
            <Link to='/'>
              <img src={Jordan} alt="" />
            </Link>
            <Link to='/'>
              <img src={Converse} alt="" />
            </Link>
          </div>
          <ul className="top-navigation__list">
            <li><Link to='/'>Find a Store</Link></li>
            <li><Link to='/help'>Help</Link></li>
            <li><Link to='/join'>Join Us</Link></li>
            <li><Link to='/sign-in'>Sign In</Link></li>
            <li><Link to='/cart'>Cart</Link></li>
          </ul>
        </div>
      </Container>
    </nav>
  )
}

export default TopNavigation