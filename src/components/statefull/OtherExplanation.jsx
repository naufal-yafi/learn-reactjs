import React from "react";
import Card from "../stateless/props/Card";

class OtherExplanation extends React.Component {
    render() {
        return(
            <details className='my-7'>
                    <summary className='px-6 lg:px-36 mb-4 text-xl font-bold cursor-pointer text-slate-200'>Penjelasan Lainnya</summary>
                    
                    <Card 
                        title="Props"
                        short_description="Props adalah singkatan dari properties,"
                        details_description="yang merupakan sebuah mekanisme untuk mengirim data dari komponen induk ke komponen anak dalam aplikasi React. Props digunakan untuk mempassing data dari komponen ke komponen lain, sehingga memungkinkan komponen memperoleh informasi yang dibutuhkan untuk melakukan tugasnya. Props diterima sebagai parameter pada komponen dan dapat dikonsumsi dalam komponen itu sendiri."
                        code="const card = (props) => { return ( <p>{props....}</p> ) }"
                    />

                    <Card
                        title="State"
                        short_description="State adalah sebuah objek yang berisi data internal yang dapat berubah."
                        details_description="State digunakan untuk menyimpan informasi yang spesifik untuk sebuah komponen, seperti data form, status aplikasi, dll. Setiap kali state berubah, komponen yang bersangkutan akan merender ulang komponen mereka sendiri. Penggunaan state sangat penting dalam pembuatan aplikasi React karena memungkinkan komponen untuk memperbarui dan merender ulang komponen mereka sendiri saat state berubah. Hal ini membuat aplikasi lebih interaktif dan responsif terhadap perubahan data."
                        code="const [count, setCount] = useState(0)"
                        code_2="const plus = () => { setCount(count + 1) }"
                    />
                </details>
        )
    }
}

export default OtherExplanation