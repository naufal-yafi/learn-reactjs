import React from 'react'
import GiveRate from '../features/GiveRate'
import Header from '../components/stateless/Header'
import Footer from '../components/stateless/Footer'
import ListTools from './../components/statefull/ListTools'
import ListKnowledge from '../components/statefull/ListKnowledge'
import ExplanationGroup from '../components/statefull/ExplanationGroup'
import CardWithoutDetails from '../components/stateless/CardWithoutDetails'

class HomePage extends React.Component {
    render() {
        return (
        <div className='bg-slate-900'>
            <Header/>

            <CardWithoutDetails/>

            <GiveRate/>

            <ListKnowledge/>
            <ListTools/>
            
            <ExplanationGroup/>

            <Footer/>
        </div>)
    }
}

export default HomePage