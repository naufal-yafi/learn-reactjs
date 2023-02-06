import React from 'react'
import Comment from '../features/Comments'
import GiveRate from '../features/GiveRate'
import Footer from '../components/stateless/Footer'
import Header from '../components/statefull/Header'
import ListTools from './../components/statefull/ListTools'
import ListKnowledge from '../components/statefull/ListKnowledge'
import CardWithoutDetails from '../components/stateless/CardWithoutDetails'

class HomePage extends React.Component {
    state = {
        rate: 0,
        width: "100%"
    }

    rateChange = (newRate) => {
        this.setState({
            rate: newRate
        })
    }

    widthChange = (valueWidth) => {
        this.setState({
            width: valueWidth
        })
    } 
    
    render() {
        return (
            <main className='bg-slate-900' style={{width: this.state.width, transition: "0.3s"}}>
                <Header rate={this.state.rate} actionMenuClick={(value) => this.widthChange(value)}/>

                <CardWithoutDetails/>

                <GiveRate actionRate={(value) => this.rateChange(value)}/>

                <ListKnowledge/>
                <ListTools/>

                <Comment/>
                
                <Footer/>
            </main>
        )
    }
}

export default HomePage