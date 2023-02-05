import logo from './../../assets/icons/logo512.png'

const Header = () => {
    return (
        <header className='fixed w-full top-0 px-6 lg:px-36 h-16 flex items-center bg-blue-900'>
            <figure className='flex items-center gap-4'>
                <img src={logo} alt="logo react" className='w-6'/>
                <h1 className='text-blue-50'>Belajar React</h1>
            </figure>
        </header>
    )
}

export default Header