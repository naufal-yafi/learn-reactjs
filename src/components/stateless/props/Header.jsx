import HeaderRate from './HeaderRate'
import logo from './../../../assets/images/logo512.png'
import burgerMenu from './../../../assets/icons/menu.svg'
import navbarScroll from './../../../features/navbarScroll'
import { Fragment } from 'react'

const Header = (props) => {
    navbarScroll()

    return (
        <Fragment>
            <header className='fixed w-full top-0 px-6 lg:px-12 xl:px-36 h-16 flex items-center justify-between bg-slate-900'>
                <figure className='flex items-center gap-3 lg:gap-4'>
                    <img src={logo} alt="logo react" className='w-5 lg:w-6'/>
                    <h1 className='text-blue-50 text-sm lg:text-base'>Sinau React</h1>
                </figure>

                <div id="group" className='flex gap-3 lg:gap-8'>
                    <HeaderRate rate={props.rate}/>

                    <button>
                        <img src={burgerMenu} alt="icon burger menu" className='w-6 lg:w-7'/>
                    </button>
                </div>
            </header>
            <aside></aside>
        </Fragment>
    )
}

export default Header