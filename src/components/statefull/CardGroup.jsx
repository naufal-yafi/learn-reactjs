import React from "react";
import Card from "../stateless/Card";

class CardGroup extends React.Component {
    render() {
        return (
            <div>
                <Card/>
                <Card 
                    title="Statefull Component" 
                    description="Stateful component digunakan untuk membungkus kode dari stateless component dengan cakupan yang lebih banyak dan besar."
                    code="class card extends React.Component { render() { return(...) } }"
                />
            </div>
        )
    }
}

export default CardGroup