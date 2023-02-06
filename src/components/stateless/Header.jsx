import logo from './../../assets/images/logo512.png'
import burgerMenu from './../../assets/icons/menu.svg'

const Header = () => {
    const navbar = document.querySelector('header.navbar')
    window.onscroll = function () {
        if (window.pageYOffset > 0) {
            navbar.style.borderBottom = '2px solid #1e293b'
        } else {
            navbar.style.borderBottom = '2px solid #0f172a'
        }
    }

    return (
        <header className='navbar fixed w-full top-0 px-6 lg:px-12 xl:px-36 h-16 flex items-center justify-between bg-slate-900'>
            <figure className='flex items-center gap-3 lg:gap-4'>
                <img src={logo} alt="logo react" className='w-5 lg:w-6'/>
                <h1 className='text-blue-50 text-sm lg:text-base'>Sinau React</h1>
            </figure>

            <div id="group" className='flex gap-3 lg:gap-8'>
                <hgroup className='flex items-center gap-2 text-blue-50 bg-slate-800 px-4 lg:px-5 py-1 lg:py-2 rounded-full'>
                    <h1 className='text-xs lg:text-sm font-bold'>Rating: </h1>
                    <p className='text-base'>😤 <span className='text-sm italic'>/ (0)</span></p>
                </hgroup>

                <button>
                    <img src={burgerMenu} alt="icon burger menu" className='w-6 lg:w-7'/>
                </button>
            </div>
        </header>
    )
}

export default Header