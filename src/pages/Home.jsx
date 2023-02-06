import React from 'react'
import GiveRate from '../features/GiveRate'
import Header from '../components/stateless/props/Header'
import Footer from '../components/stateless/Footer'
import ListTools from './../components/statefull/ListTools'
import ListKnowledge from '../components/statefull/ListKnowledge'
import CardWithoutDetails from '../components/stateless/CardWithoutDetails'

class HomePage extends React.Component {
    state = {
        rate: 0,
        showNavbar: 1
    }

    rateChange = (newRate) => {
        this.setState({
            rate: newRate
        })
    }
    
    render() {
        return (
            <main className='bg-slate-900'>
                <Header rate={this.state.rate}/>

                <CardWithoutDetails/>

                <GiveRate actionRate={(value) => this.rateChange(value)}/>

                <ListKnowledge/>
                <ListTools/>

                <Footer/>
            </main>
        )
    }
}

export default HomePage