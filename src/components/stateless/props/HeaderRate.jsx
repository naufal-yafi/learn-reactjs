const emote = (valueRate) => {
    if (valueRate > 3) {
        return '😀'
    }  else if (valueRate > 1) {
        return '🙂'
    } else {
        return '😤'
    }
}

const HeaderRate = (props) => {
    return (
        <hgroup className='flex items-center gap-2 text-blue-50 bg-slate-800 px-4 lg:px-5 py-1 lg:py-2 rounded-full'>
                <h1 className='text-xs lg:text-sm font-bold'>Rating: </h1>
                <p className='text-base'>{emote(props.rate)} <span className='text-sm italic'>/ ({props.rate})</span></p>
        </hgroup>
    )
}

export default HeaderRate