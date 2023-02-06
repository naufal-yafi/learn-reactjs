import React from "react";

class GiveRate extends React.Component {
    state = {
        rate: 0
    }

    changeRate = (value) => {
        this.props.actionRate(value)
    }

    addRate = () => {
        if (this.state.rate < 5) {
            this.setState({
                rate: this.state.rate + 1
            }, () => {
                this.changeRate(this.state.rate)
            })
        } else {
            alert('Sudah melebihi batas yang ditentukan')
        }
    }
    
    subtractRate = () => {
        if (this.state.rate > 0) {
            this.setState({
                rate: this.state.rate - 1
            }, () => {
                this.changeRate(this.state.rate)
            })
        } else {
            alert('Sudah melebihi batas yang ditentukan')
        }
    }
    
    render() {
        return (
            <section className="text-slate-200 px-6 lg:px-12 xl:px-36 ">
                <hgroup>
                    <h1 className='mt-6 text-xl font-bold'>Berikan Rating (0 - 5) : </h1>
                    <p className="mt-1 mb-4 text-slate-400">Rating ini digunakan sebagai feedback ketika sudah membaca artikel yang saya buat.</p>
                </hgroup>
                
                <div id="groupInput" className='flex items-center gap-4 font-bold'>
                    <button type="submit" onClick={this.subtractRate} className='bg-blue-800 text-xl h-10 w-10 rounded-lg hover:bg-blue-500'>😤</button>
                        <p className='select-none flex justify-center items-center h-14 w-20 rounded-lg bg-slate-800 text-xl'>{this.state.rate}</p>
                    <button type="submit" onClick={this.addRate} className='bg-blue-800 text-xl h-10 w-10 rounded-lg hover:bg-blue-500'>😀</button>
                </div>
            </section>
        )
    }
}

export default GiveRate