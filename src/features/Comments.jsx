import axios from "axios";
import InputComment from "./InputComment";
import LoadingComment from "./LoadingComment";
import React, { useEffect, useState } from "react";
import CommentCard from "../components/stateless/props/CommentCard";

class Comment extends React.Component {
    GetAllDataFeedback = () => {
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
                <InputComment rate={this.props.rate}/>

                <hr  className="mt-5 mb-5 border-slate-700 border-2 rounded-full"/>

                <this.GetAllDataFeedback/>
            </div>
        )
    }
}

export default Comment