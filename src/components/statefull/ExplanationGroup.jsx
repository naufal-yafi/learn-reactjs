import React, { Fragment } from "react";
import Card from "../stateless/props/Card";
import OtherExplanation from "./OtherExplanation";

class ExplanationGroup extends React.Component {
    render() {
        return (
            <Fragment>
                <div className='px-6 lg:px-36 mt-6 mb-4 text-xl font-bold text-slate-200'>Penjelasan: </div>

                <Card/>
                <Card 
                    title="Statefull Component" 
                    short_description="Digunakan untuk membungkus banyak kode stateless component."
                    details_description="Stateful component adalah sebuah komponen React yang menyimpan dan mengatur data internal yang dapat berubah (state) seiring dengan perubahan aplikasi. Komponen stateful memiliki kemampuan untuk memperbarui dan merender ulang komponen mereka sendiri saat state berubah. Stateful components dibandingkan dengan stateless components, yang hanya menerima props dari komponen lain dan tidak memiliki kemampuan untuk menyimpan dan memperbarui data internal. Contohnya, sebuah form login adalah contoh dari sebuah komponen stateful karena membutuhkan memanipulasi data internal seperti input dari pengguna dan status login."
                    code="class card extends React.Component { render() { return(...) } }"
                />

                <OtherExplanation/>
            </Fragment>
        )
    }
}

export default ExplanationGroup