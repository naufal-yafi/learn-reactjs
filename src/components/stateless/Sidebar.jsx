import React from "react"

class Sidebar extends React.Component {
    Menu = () => {
        return (
            <nav>
                <ul>
                    <li>Beranda</li>
                    <li>A</li>
                </ul>
            </nav>
        )
    }

    render() {
        return(
            <aside className="fixed top-20 right-0 bg-slate-800 text-slate-200 py-4 px-5 rounded-xl mr-6" style={{width: "37%", height: "88vh", transform: this.props.translateX, transition: "0.3s"}}>
                <this.Menu/>
            </aside>    
        )
    }
}


export default Sidebar