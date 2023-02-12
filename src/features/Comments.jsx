import React, { useEffect, useState } from "react";
import axios from "axios";
import InputComment from "../components/stateless/InputComment";
import CommentCard from "../components/stateless/props/CommentCard";
import LoadingComment from "../components/stateless/LoadingComment";

// const GetData = () => {
//     const [feedbackList, setFeedBackList] = useState([])
//     const [loading, setLoading] = useState(false)

//     useEffect(() => {
//         axios.get(process.env.REACT_APP_ENDPOINT).then(res => {
//             setFeedBackList(res.data)
//             setLoading(true)
//         })
//     }, [])

//     return (
//         <div>
//             {loading ? 
//             feedbackList.map(feedback => {
//                 const date = new Date(feedback.date)
//                 const formatDate = `${this.addZero(date.getDate())}-${this.addZero(date.getMonth())}-${date.getFullYear()}, ${this.addZero(date.getHours())}.${this.addZero(date.getMinutes())}`
                
//                 return <CommentCard rate={Number(feedback.rate)} name={feedback.name} date={formatDate} text={feedback.feedback}/>
//             })
//             :
//             <LoadingComment/>}
//         </div>
//     )
// }

class Comment extends React.Component {

    GetData = () => {
        const [feedbackList, setFeedBackList] = useState([])
        const [loading, setLoading] = useState(false)

        useEffect(() => {
            axios.get(process.env.REACT_APP_ENDPOINT).then(res => {
                setFeedBackList(res.data)
                setLoading(true)
            })
        }, [])

        return (
            <div>
                {
                    loading ? feedbackList.map(feedback => {
                            const date = new Date(feedback.date)
                            const formatDate = `${this.addZero(date.getDate())}-${this.addZero(date.getMonth())}-${date.getFullYear()}, ${this.addZero(date.getHours())}.${this.addZero(date.getMinutes())}`
                
                            return <CommentCard rate={Number(feedback.rate)} name={feedback.name} date={formatDate} text={feedback.feedback}/>
                        }
                    ) : <LoadingComment/>
                }
            </div>
        )
    }

    addZero = (number) => {
        if (number < 10) {
            return `0${number}`
        } else {
            return number
        }
    }
        
    render() {
        return(
            <div className="mb-6 text-slate-200">
                <InputComment/>

                <hr  className="mt-10 mb-10 border-slate-700 border-2 rounded-full"/>

                <this.GetData/>
            </div>
        )
    }
}

export default Comment