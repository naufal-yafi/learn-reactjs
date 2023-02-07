import React, { Fragment } from 'react'
import Comment from '../features/Comments'
import GiveRate from '../features/GiveRate'
import Footer from '../components/stateless/Footer'
import Header from '../components/statefull/Header'
import ListTools from './../components/statefull/ListTools'
import ListKnowledge from '../components/statefull/ListKnowledge'
import CardWithoutDetails from '../components/stateless/CardWithoutDetails'
import Sidebar from '../components/stateless/Sidebar'

class HomePage extends React.Component {
    state = {
        rate: 0,
        mainWidth: "50px"
    }

    rateChange = (newRate) => {
        this.setState({
            rate: newRate
        })
    }

    widthChange = (valueWidth) => {
        this.setState({
            mainWidth: valueWidth
        })
    } 
    
    render() {
        return (
            <Fragment>
                <Header rate={this.state.rate} actionMenuClick={(value) => this.widthChange(value)}/>
                
                <div className='flex pt-20 px-6 lg:px-12 xl:px-36 gap-5'>
                    <main className='bg-slate-900' style={{width: "100%", transition: "0.3s"}}>
                        <CardWithoutDetails/>

                        <GiveRate actionRate={(value) => this.rateChange(value)}/>

                        <ListKnowledge/>
                        <ListTools/>

                        <Comment/>
                        
                    </main>

                    <Sidebar width={this.state.mainWidth}/>
                </div>

                <Footer/>
            </Fragment>
        )
    }
}

export default HomePage