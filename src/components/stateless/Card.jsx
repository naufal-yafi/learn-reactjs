const Card = (props) => {
    return (
        <div className="px-6 text-slate-200 mt-5">
            <hgroup className="bg-blue-600 px-6 py-4 rounded-xl">
                <h1 className="text-slate-200 font-bold text-2xl">
                    {'> ' + props.title}
                </h1>
                
                <p className="text-slate-300 mt-2 mb-2">
                    {props.description}
                </p>

                <code>
                    {props.code}
                </code>
            </hgroup>
        </div>
    )
}

Card.defaultProps = {
    title: "Stateless Component",
    description: "Stateless component atau functional component adalah sebuah fungsi javascript yang hanya mengambil sebuah inputan, biasanya functional component ini digunakan untuk membungkus component kecil seperti component table, button dan lainnya.",
    code: "const card = () => { return(...) }"
}

export default Card