import React from 'react'
import companyLogo from '../../Icons/cn611.png'
import NavItem from './NavItem/NavItem.js'
import Toggleicon from './ToggleIcon/Toggleicon'
import Brand from './NavbarBrand/NavbarBrand.js'
import './Navbar.css'
import '../../Styles/samimFont.css'
class NavBar extends React.Component {
  constructor (props) {
    super(props)
    this.state = { toggle: false, isMobile: false }
    this.toggleMenu = this.toggleMenu.bind(this)
  }
  toggleMenu () {
    this.setState({toggle: !this.state.toggle})
  }
  menuMananger () {
    var classtype = ''
    if (!this.state.isMobile) { classtype = '' } else if (this.state.toggle) { classtype = 'show' } else { classtype = 'hide' }
    return classtype
  }
  componentDidMount () {
    if (document.body.clientWidth < 990) {
      this.setState({
        isMobile: true
      })
    }
    window.addEventListener('resize', () => {
      if (document.body.clientWidth < 990) {
        this.setState({
          isMobile: true
        // I dont know what to choose
        // toggle: false
        })
      } else {
        this.setState({
          isMobile: false
        })
      }
    }, false)
  }
  render () {
    const className = this.menuMananger()
    return (
      <nav className="inverse">
        <Toggleicon className="toggle" toggleMenu={this.toggleMenu}> toggle icon</Toggleicon>
        <Brand src={companyLogo}/>
        <div className = {className} >
          <NavItem url='/Product'>محصول</NavItem>
          <NavItem url='/Introduction'>معرفی</NavItem>
          <NavItem url='/ContactUs'>ارتباط با ما</NavItem>
          <NavItem url='/AboutUs'>درباره ی ما</NavItem>
        </div>
      </nav>
    )
  }
}
export default NavBar
