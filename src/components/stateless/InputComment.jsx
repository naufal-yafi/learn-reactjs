const InputComment = () => {
    return (
        <section>
            <hgroup>
                <h1 className="mt-6 text-xl font-bold">Komentar:</h1>
                <p className="mt-1 mb-4 text-slate-400">Berikan komentar untuk bahan evaluasi baik pada project ini maupun pada project berikutnya.</p>
            </hgroup>

            <div id="input-group" className="w-full rounded-lg bg-slate-800 px-5 py-3 flex flex-col items-end gap-6">
                <textarea className="w-full h-28 outline-none bg-slate-800" placeholder="Ketik komentar terbaik anda..."></textarea>
                
                <div id="btn-group" className="mb-2 flex">
                    <button type="submit" className="mr-4 py-2 px-12 text-sm bg-slate-700 rounded-lg hover:bg-slate-900">Batal</button>
                    
                    <button type="submit" className="bg-blue-600 hover:bg-blue-400 text-sm py-2 px-12 rounded-lg font-bold flex items-center">
                        Kirim
                    </button>
                </div>
            </div>
        </section>
    )
}

export default InputComment