import ListName from './../components/stateless/props/ListName'
import CardGroup from '../components/statefull/CardGroup'
import Card from '../components/stateless/Card'
import React from 'react'

class HomePage extends React.Component {
    render() {
        return (
        <div className='mb-6 text-slate-200'>
            
            <CardGroup/>
            
            <details className='my-7'>
                <summary className='px-6 text-xl font-bold cursor-pointer'>Penjelasan Lainnya</summary>
                
                <Card 
                    title="Props"
                    description="Props adalah data (state) yang bisa di akses di komponen lain (Properties Components)."
                    code="const card = (props) => { return ( <p>{props....}</p> ) }"
                />
            </details>

            <div className='px-6 mt-5 mb-4 text-xl font-bold'>Apa saja yang harus dipersiapkan: </div>

            <div id="list" className='px-6'>
                <ListName number="01" tools="Code Editor" tools_name="Visual Studio Code / Sublime Text / Notepad++"/>
                <ListName number="02" tools="Package Manager" tools_name="NPM"/>
                <ListName number="03" tools="Server" tools_name="NodeJS"/>
                <ListName number="04" tools="Browser" tools_name="Microsoft Edge / Firefox"/>
                <ListName number="05" tools="Connection" tools_name="Wifi / Hotspot / Modem / Data Seluler"/>
            </div>
        </div>)
    }
}

export default HomePage