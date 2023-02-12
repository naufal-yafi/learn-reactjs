const emote = (valueRate) => {
    if (valueRate === 11) {
        return <span>&#128561;</span>
    }

    else if (valueRate === 10) {
        return <span>&#128525;</span>
    }
    else if (valueRate === 9) {
        return <span>&#128522;</span>
    }
    else if (valueRate === 8) {
        return <span>&#128513;</span>
    }
    else if (valueRate === 7) {
        return <span>&#128578;</span>
    }
    else if (valueRate === 6) {
        return <span>&#129300;</span>
    }
    else if (valueRate === 5) {
        return <span>&#128528;</span>
    }
    else if (valueRate === 4) {
        return <span>&#128560;</span>
    }
    else if (valueRate === 3) {
        return <span>&#128545;</span>
    }
    else if (valueRate === 2) {
        return <span>&#129314;</span>
    }
    else if (valueRate === 1) {
        return <span>&#129313;</span>
    }
    
    else {
        return <span>&#128511;</span>
    }
}

 /*
        0 🗿 128511	
        1 🤡 129313
        2 🤢 129314
        3 😡 128545
        4 😰 128560
        5 😐 128528
        6 🤔 129300
        7 🙂 128578
        8 😁 128513
        9 😊 128522
        10 😍 128525	
        11 😱 128561	
    */

const HeaderRate = (props) => {
    return (
        <hgroup className='flex items-center gap-2 text-blue-50 bg-slate-800 px-4 lg:px-5 py-1 lg:py-2 rounded-full'>
                <h1 className='text-xs lg:text-sm font-bold'>Rating: </h1>
                <p className='text-base'>{emote(props.rate)} <span className='text-sm italic'>/ ({props.rate})</span></p>
        </hgroup>
    )
}

export default HeaderRate