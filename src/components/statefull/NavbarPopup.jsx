import React from "react";
import './NavbarPopup.css'
import iconX from './../../assets/icons/x.svg'
import iconHome from './../../assets/icons/home.svg'
import iconHelp from './../../assets/icons/help-circle.svg'
import iconBook from './../../assets/icons/book-open.svg'

class NavbarPopup extends React.Component {
    closeNavbar = () => {
        this.props.newElement("hidden fixed top-0 left-0 z-50 w-full h-screen")
    }

    listComponent = (props) => {
        return (
            <li className="px-6 py-4 bg-slate-800 hover:bg-slate-700 cursor-pointer mb-5 rounded-lg flex gap-4">
                <img src={props.image} alt={"icon" + props.text} className="w-4"/>
                <p className="font-medium">{props.text}</p>
            </li>
        )
    }
    
    render() {
        return(
            <main className={this.props.propert}>
                <div className="w-full h-screen bg-slate-900 opacity-95"></div>

                <button className="btn-close z-50 absolute top-0 left-0 w-full h-16 px-6 lg:px-12 xl:px-36 flex justify-end items-center" onClick={this.closeNavbar}>
                    <img src={iconX} alt="icon close" className="icon-close w-5 lg:w-6"/>
                </button>

                <nav className="z-30 absolute text-slate-200 top-0 left-0 w-full h-screen flex justify-center items-center">
                    <ul className="w-4/5 lg:w-2/4">
                        <this.listComponent text="Beranda" image={iconHome}/>
                        <this.listComponent text="Alasan saya belajar ReactJS" image={iconHelp}/>
                        <this.listComponent text="Apa saja yang saya pelajari" image={iconBook}/>
                        
                        {/* <li className="pt-3">
                            <GiveRate/>
                        </li> */}
                    </ul>
                </nav>
            </main>
        )
    }
}

export default NavbarPopup