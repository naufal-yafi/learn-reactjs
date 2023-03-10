const ListCard = (props) => {
    return (
        <div className="text-slate-200 w-full bg-slate-800 rounded-lg mb-4 px-6 py-4 flex items-start gap-6">
            <h1 className="font-bold text-blue-600 text-lg">{props.number}</h1>

            <hgroup>
                <h1 className="font-bold text-lg">{props.tools}</h1>
                <p className="text-sm mt-2 text-slate-400">{props.tools_name}</p>
            </hgroup>
        </div>
    )
}

ListCard.defaultProps = {
    number: '00',
    name: 'input type tools',
    location: 'input name tools'
}

export default ListCard