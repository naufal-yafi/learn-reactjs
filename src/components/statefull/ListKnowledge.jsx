import React from "react";
import ListCard from "../stateless/props/ListCard";

class ListKnowledge extends React.Component {
    render() {
        return(
            <section className="px-6 lg:px-12 xl:px-36">
                <h1 className='mt-6 mb-4 text-xl font-bold text-slate-200'>Pelajari fundamental berikut sebelum mempelajari ReactJS: </h1>
                
                <ListCard number="01" tools="Kesabaran dan Ketabahan (WAJIB)" tools_name="Luangkan waktu dan memiliki rasa semangat belajar yang tinggi :v."/>
                <ListCard number="02" tools="HTML" tools_name="Tag, Element, Attribute, Semantic."/>
                <ListCard number="03" tools="Javascript" tools_name="DOM, Function, Class, Modules, Async dan Await."/>
                <ListCard number="04" tools="NPM/NodeJS" tools_name="Install dan Uninstall Library, Mengerti cara menjalankan command script di package.json"/>
                <ListCard number="05" tools="Github/GIT (Jika Diperlukan)" tools_name="Dapat mengatur file maupun folder pada Repository Github (git add, git commit, git push)."/>
                <ListCard number="06" tools="CSS (Jika Diperlukan)" tools_name="Properties, Selector, Pseudo Class."/>
            </section>
        )
    }
}

export default ListKnowledge