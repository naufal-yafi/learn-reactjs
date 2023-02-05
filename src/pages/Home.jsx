import ListName from './../components/stateless/props/ListName'
import CardGroup from '../components/statefull/CardGroup'
import React from 'react'

class HomePage extends React.Component {
    render() {
        return (
        <div className='mb-6'>
            <CardGroup/>

            <div className='px-6 mt-5 mb-4 text-xl font-bold text-slate-200'>Daftar Anggota: </div>
            
            <div id="list" className='px-6'>
                <ListName number="01" name="Sujarwo" location="Pekalongan"/>
                <ListName number="02" name="Susanti" location="Jakarta"/>
                <ListName number="03" name="Billy" location="Rowoyoso"/>
                <ListName number="04" name="Jimmy" location="Yogyakarta"/>
                <ListName number="05" name="Farhan" location="Tegal"/>
                <ListName/>
            </div>
        </div>)
    }
}

export default HomePage