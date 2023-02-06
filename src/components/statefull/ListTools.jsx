import React from "react";
import ListCard from "../stateless/props/ListCard";

class ListTools extends React.Component {
    render() {
        return (
            <section className="px-6 lg:px-12 xl:px-36 mb-8">
                <h1 className='mt-6 mb-4 text-xl font-bold text-slate-200'>Peralatan yang harus dipersiapkan: </h1>
                
                <ListCard number="01" tools="Device" tools_name="Laptop / Komputer"/>
                <ListCard number="02" tools="Code Editor" tools_name="Visual Studio Code / Sublime Text / Notepad++"/>
                <ListCard number="03" tools="Package Manager" tools_name="NPM"/>
                <ListCard number="04" tools="Server" tools_name="NodeJS"/>
                <ListCard number="05" tools="Browser" tools_name="Microsoft Edge / Firefox"/>
                <ListCard number="06" tools="Connection" tools_name="Wifi / Hotspot / Modem / Data Seluler"/>
            </section>
        )
    }
}

export default ListTools