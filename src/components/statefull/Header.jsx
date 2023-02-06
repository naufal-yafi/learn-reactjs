import HeaderRate from '../stateless/props/HeaderRate'
import logo from './../../assets/images/logo512.png'
import burgerMenu from './../../assets/icons/menu.svg'
import navbarScroll from '../../features/navbarScroll'
import React, { Fragment } from 'react'
import Sidebar from '../stateless/Sidebar'

class Header extends React.Component {
    state = {
        condition: false,
        valueTransition: "translateX(200%)"
    }

    mainWidth = () => {
        if (this.state.condition) {
            this.props.actionMenuClick("60%")
            
            this.setState({
                valueTransition: "translateX(0%)"
            })
        } else {
            this.props.actionMenuClick("100%")

            this.setState({
                valueTransition: "translateX(200%)"
            })
        }
    }

    navbarAction = () => {
        if (this.state.condition) {
            this.setState({
                condition: false
            })
        } else {
            this.setState({
                condition: true
            })
        }

        this.mainWidth()
    }

    render() {
        navbarScroll()

        return (
            <Fragment>
                <header className='fixed w-full top-0 px-6 lg:px-12 xl:px-36 h-16 flex items-center justify-between bg-slate-900'>
                    <figure className='flex items-center gap-3 lg:gap-4'>
                        <img src={logo} alt="logo react" className='w-5 lg:w-6'/>
                        <h1 className='text-blue-50 text-sm lg:text-base'>Sinau ReactJS</h1>
                    </figure>

                    <div id="group" className='flex gap-3 lg:gap-8'>
                        <HeaderRate rate={this.props.rate}/>

                        <button onClick={this.navbarAction}>
                            <img src={burgerMenu} alt="icon burger menu" className='w-6 lg:w-7'/>
                        </button>
                    </div>
                </header>

                <Sidebar condition="true" translateX={this.state.valueTransition}/>
            </Fragment>
        )
    }
}

export default Header