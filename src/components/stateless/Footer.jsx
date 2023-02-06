import logo from './../../assets/images/logo512.png'

const Footer = () => {
    return (
        <footer className="bg-blue-800 text-slate-200 px-6 lg:px-12 xl:px-36 py-7 lg:py-9">
            <hgroup>
                <figure className='flex gap-4'>
                    <img src={logo} alt="logo react" className='w-6'/>
                    <h1>Sinau ReactJS</h1>
                </figure>
                <p className='text-slate-400 text-sm mt-2'>React merupakan framework frontend yang seru untuk dipelajari.</p>
            </hgroup>

            <p className='text-sm mt-1'>
                Tanggal Awal Belajar: &nbsp;
                <time>05 - 02 - 2023</time>
            </p>

            <p className='text-sm mt-5 text-blue-300'>
                Dev: Muhammad Naufal Yafi'
            </p>
        </footer>
    )
}

export default Footer