import { Fragment } from "react"

const ListCard = () => {
    return (
        <figure className="w-full px-4 py-4 mt-5 rounded-lg bg-slate-800 animate-pulse">
            <hgroup>
                <div id="profile" className="flex gap-3">
                    <div id="photo" className="w-5 h-5 bg-slate-600 rounded-full"></div>
                    <div id="name" className="font-bold h-5 w-1/2 bg-slate-600 rounded-sm"></div>
                </div>
                <p className="text-xs text-slate-300 mt-4">
                    <p className="h-3 w-1/3 bg-slate-600 rounded-sm"></p>
                </p>
                <div id="comment" className="mt-2 text-slate-400 bg-slate-700 h-11 w-full rounded-sm"></div>
            </hgroup>
        </figure>
    )
}

const LoadingComment = () => {
    return (
        <Fragment>
            <ListCard/>
            <ListCard/>
            <ListCard/>
        </Fragment>
    )
}

export default LoadingComment