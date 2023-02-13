import React, { Fragment } from 'react'
import Comment from '../features/Comments'
import GiveRate from '../features/GiveRate'
import Header from '../components/statefull/Header'
import Footer from '../components/stateless/Footer'
// import ListTools from './../components/statefull/ListTools'
// import ListKnowledge from '../components/statefull/ListKnowledge'
import CardWithoutDetails from '../components/stateless/CardWithoutDetails'

class HomePage extends React.Component {
    state = {
        rate: 0
    }

    rateChange = (newRate) => {
        this.setState({
            rate: newRate
        })
    }
    
    render() {
        return (
            <Fragment>
                <Header rate={this.state.rate}/>

                <main className="bg-slate-900 pt-20 px-6 lg:px-12 xl:px-36 gap-5">
                    <CardWithoutDetails/>

                    <GiveRate actionRate={(value) => this.rateChange(value)}/>

                    {/* <ListKnowledge/>
                    <ListTools/> */}

                    <Comment rate={this.state.rate}/>
                </main>

                <Footer/>
            </Fragment>
        )
    }
}

export default HomePage