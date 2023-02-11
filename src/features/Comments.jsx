import React from "react";
import InputComment from "../components/stateless/InputComment";
import CommentCard from "../components/stateless/props/CommentCard";

class Comment extends React.Component {

    state = {
        newComments: ""
    }

    comments = [
        "UI enak dilihat penataan layout yang compact. Namun, pemilihan warna biru yang terlalu mendominasi akan membuat mata sakit jika terlalu lama menggunakannya.",
        "Bahasa yang digunakan cukup membingungkan saya khususnya pada page penjelasan ditambah contoh penggunaan source code malah membuat saya semakin bingung"
    ]

    emote = [
        "😀", "😁", "😂", "🤣", "😃", "😄", "😅", "😆", "😉", "😊", "😊", "😋", "😎", "😍", "😘", "🥰", "😗", "😙", "🥲", "😚", "🙂",
        "🤗", "🤩", "🤔", "🫡", "🤨", "😐", "😑", "😶", "🙄", "😏", "😣", "😥", "😮", "🤐", "😯", "😪", "😫", "🥱", "😴", "😌", "😛",
        "😜", "😝", "🤤", "😒", "😓", "😔", "😕", "🫤", "🙃", "🫠", "🤑", "😲", "☹️", "🙁", "😖", "😞", "😟", "😨", "😩", "😤", "😢",
        "🤯", "😭", "😬", "😮‍💨", "😦", "😧", "😰", "😱", "🥵", "🥶", "😳", "🤪", "😵", "😵‍💫", "🥴", "😠", "😡", "😷", "🤒", "🤕", "🤢",
        "🤮", "🤧", "😇", "😇", "🥳", "🤥", "🥸", "🤫", "🥺", "🤭", "🥹", "🫢", "🤠", "🫣", "🤡", "🧐", "🤓"
    ]

    date = [
        "06-02-2023,  13.45",
        "01-02-2023,  09.34"
    ]

    getNewComment = (newValue) => {
        if (this.state.newComments !== newValue) {
            this.setState({
                newComments: newValue
            })
        } else {
            alert("Anda sudah mengomentari hal yang sama!")
        }
    }

    getDateNow = () => {
        const date = new Date()

        return `${date.getDate()}-${date.getMonth()}-${date.getFullYear()}, ${date.getHours()}.${date.getMinutes()}`
    }
    
    listComments = () => {
        return this.comments.map((comment, i) => {
            return <CommentCard 
                emote={this.emote[Math.floor((Math.random() * (this.emote.length - 1)) + 1)]} 
                name="Anonymous" 
                date={this.getDateNow()}
                comment={comment}
                />
            })
    }
        
    render() {
        return(
            <div className="mb-6 text-slate-200">
                <InputComment/>

                <hr  className="mt-10 mb-10 border-slate-700 border-2 rounded-full"/>

                <this.listComments/>
            </div>
        )
    }
}

export default Comment