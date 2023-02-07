import React from "react"
import iconHome from './../../assets/icons/home.svg'
import iconBook from './../../assets/icons/book-open.svg'
import iconWhy from './../../assets/icons/help-circle.svg'
import iconCode from './../../assets/icons/code.svg'

const LiComponent = (props) => {
    return (
        <li className="home bg-slate-700 hover:bg-slate-600 cursor-pointer py-3 px-4 rounded-lg flex gap-3">
            <img src={props.icon} alt="icon home" className="w-4"/>
            <p className="font-medium">
                {props.width !== "450px" ? "" : props.title}
            </p>
        </li>
    )
}

class Sidebar extends React.Component {
    Menu = () => {
        return (
            <nav>
                <ul className="flex flex-col gap-5">
                    <LiComponent icon={iconHome} width={this.props.width} title="Beranda"/>
                    <LiComponent icon={iconWhy} width={this.props.width} title="Kenapa Saya Belajar ReactJS ?"/>
                    <LiComponent icon={iconBook} width={this.props.width} title="Apa yang Saya Pelajari ?"/>
                    <LiComponent icon={iconCode} width={this.props.width} title="Contoh Kode Program"/>
                </ul>
            </nav>
        )
    }

    render() {
        return(
            <aside className="bg-slate-900 text-slate-200 rounded-xl z-20" style={{width: this.props.width, height: "100%", transition: "0.3s"}}>
                <this.Menu/>
            </aside>    
        )
    }
}


export default Sidebar