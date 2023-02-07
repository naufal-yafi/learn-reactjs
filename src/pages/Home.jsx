import React, { Fragment } from 'react'
import Comment from '../features/Comments'
import GiveRate from '../features/GiveRate'
import Footer from '../components/stateless/Footer'
import Header from '../components/statefull/Header'
import ListTools from './../components/statefull/ListTools'
import ListKnowledge from '../components/statefull/ListKnowledge'
import CardWithoutDetails from '../components/stateless/CardWithoutDetails'
import Sidebar from '../components/statefull/Sidebar'
import './Home.css'

class HomePage extends React.Component {
    state = {
        rate: 0,
        mainWidth: "55px",
        class: "normal"
    }

    rateChange = (newRate) => {
        this.setState({
            rate: newRate
        })
    }

    mainWidthChange = () => {
        if (this.state.mainWidth === "55px") {
            this.setState({
                class: "normal"
            })
        } else {
            this.setState({
                class: "mini"
            })
        }
    }

    widthChange = (valueWidth) => {
        this.setState({
            mainWidth: valueWidth
        })

        this.mainWidthChange()
    } 
    
    render() {
        return (
            <Fragment>
                <Header rate={this.state.rate} actionMenuClick={(value) => this.widthChange(value)}/>
                
                <div className='bg-slate-900 flex pt-20 px-6 lg:px-12 xl:px-36 gap-5'>
                    <main className={this.state.class} style={{transition: "0.3s"}}>
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