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

const CommentCard = (props) => {
    return (
        <figure className="w-full px-4 py-4 mt-5 rounded-lg bg-slate-800">
            <hgroup>
                <div id="profile" className="flex gap-3">
                    <div id="photo">{emote(props.rate)}</div>
                    <div id="name" className="font-bold">{props.name}</div>
                </div>
                <p className="text-xs text-slate-300 mt-4">
                    <time>{props.date}</time>
                </p>
                <div id="comment" className="mt-1 text-slate-400">
                    {props.text}
                </div>

            </hgroup>
        </figure>
    )
}

export default CommentCard