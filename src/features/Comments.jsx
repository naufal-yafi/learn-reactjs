import React from "react";
import axios from "axios";
import InputComment from "../components/stateless/InputComment";
import CommentCard from "../components/stateless/props/CommentCard";

class Comment extends React.Component {
    state = {
        dataFeedback: []
    }

    componentDidMount() {
        axios.get(process.env.REACT_APP_ENDPOINT)
        .then((res) => this.setState({
            dataFeedback: res.data
        }))
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

                {
                    this.state.dataFeedback.map(feedback => {
                        const date = new Date(feedback.date)
                        const formatDate = `${this.addZero(date.getDate())}-${this.addZero(date.getMonth())}-${date.getFullYear()}, ${this.addZero(date.getHours())}.${this.addZero(date.getMinutes())}`
                        
                        return <CommentCard rate={Number(feedback.rate)} name={feedback.name} date={formatDate} text={feedback.feedback}/>
                    })
                }
            </div>
        )
    }
}

export default Comment