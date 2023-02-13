import React from "react"

class InputComment extends React.Component {
    insertFeedback = () => {
        alert(this.props.rate)
    }

    render() {
        return (
            <section>
                <hgroup>
                    <h1 className="mt-6 text-xl font-bold">Berikan Ulasan:</h1>
                    <p className="mt-1 mb-4 text-slate-400">Berikan ulasan terbaikmu untuk bahan evaluasi saya baik pada project ini maupun pada project berikutnya.</p>
                </hgroup>

                <div id="input-group" className="mb-5">
                    <h2 className="text-sm mb-2 font-bold">Nama Anda: </h2>
                    <input type="text" className="w-full h-12 px-5 outline-none bg-slate-800 rounded-lg" placeholder="default: Anonymous"/>
                </div>

                <h2 className="text-sm mb-2 font-bold">Tulis Ulasan Anda: </h2>
                <div id="input-group" className="w-full rounded-lg bg-slate-800 px-5 py-3 flex flex-col items-end gap-6">
                    <textarea className="w-full h-28 outline-none bg-slate-800" placeholder="Ketik komentar terbaik anda..."></textarea>
                    
                    <div id="btn-group" className="mb-2 flex">
                        <button type="submit" className="mr-4 py-2 px-12 text-sm bg-slate-700 rounded-lg hover:bg-slate-900">Batal</button>
                        
                        <button onClick={this.insertFeedback} type="submit" className="bg-blue-600 hover:bg-blue-400 text-sm py-2 px-12 rounded-lg font-bold flex items-center">
                            Kirim
                        </button>
                    </div>
                </div>
            </section>
        )
    }
}

export default InputComment