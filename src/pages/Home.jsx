import React from 'react'
import Header from '../components/stateless/Header'
import ListTools from './../components/statefull/ListTools'
import ListKnowledge from '../components/statefull/ListKnowledge'
import ExplanationGroup from '../components/statefull/ExplanationGroup'
import CardWithoutDetails from '../components/stateless/CardWithoutDetails'

class HomePage extends React.Component {
    render() {
        return (
        <div className='bg-slate-900'>
            <Header/>

            <CardWithoutDetails></CardWithoutDetails>

            <ListKnowledge/>
            <ListTools/>
            
            <ExplanationGroup/>
        </div>)
    }
}

export default HomePage