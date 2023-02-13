import React, { Fragment } from 'react'
import NavbarPopup from './NavbarPopup'
import logo from './../../assets/images/logo512.png'
import HeaderRate from '../stateless/props/HeaderRate'
import burgerMenu from './../../assets/icons/menu.svg'
import navbarScroll from '../../features/navbarScroll'

class Header extends React.Component {
    state = {
        classID: "hidden fixed top-0 left-0 z-50 w-full h-screen"
    }

    showNavbar = () => {
        this.setState({
            classID: "fixed top-0 left-0 z-50 w-full h-screen"
        })
    }

    closeNavbar = (newElement) => {
        this.setState({
            classID: newElement
        })
    }

    render() {
        navbarScroll()

        return (
            <Fragment>
                <header className='z-20 fixed w-full top-0 px-6 lg:px-12 xl:px-36 h-16 flex items-center justify-between bg-slate-900'>
                    <figure className='flex items-center gap-3 lg:gap-4'>
                        <img src={logo} alt="logo react" className='w-5 lg:w-6'/>
                        <h1 className='text-blue-50 text-sm lg:text-base'>Sinau ReactJS</h1>
                    </figure>

                    <div id="group" className='flex gap-3 lg:gap-8'>
                        <HeaderRate rate={this.props.rate}/>

                        <button onClick={this.showNavbar}>
                            <img src={burgerMenu} alt="icon burger menu" className='w-6 lg:w-7'/>
                        </button>
                    </div>
                </header>

                <NavbarPopup propert={this.state.classID} newElement={(element) => this.closeNavbar(element)}/>
            </Fragment>
        )
    }
}

export default Header