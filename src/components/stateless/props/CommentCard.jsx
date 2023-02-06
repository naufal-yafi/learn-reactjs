const CommentCard = (props) => {
    return (
        <figure className="w-full px-4 py-4 mt-5 rounded-lg bg-slate-800">
            <hgroup>
                <div id="profile" className="flex gap-3">
                    <div id="photo">{props.emote}</div>
                    <div id="name" className="font-bold">{props.name}</div>
                </div>
                <p className="text-xs text-slate-300 mt-4">
                    <time>{props.date}</time>
                </p>
                <div id="comment" className="mt-1 text-slate-400">
                    {props.comment}
                </div>

            </hgroup>
        </figure>
    )
}

export default CommentCard