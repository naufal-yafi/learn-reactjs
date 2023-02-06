const Card = (props) => {
    return (
        <article className="text-slate-200 mb-5">
            <hgroup className="bg-blue-600 px-6 py-4 rounded-xl">
                <h1 className="text-slate-200 font-bold text-2xl">
                    {props.title}
                </h1>
                
                <details className="text-slate-300 mt-2 mb-2">
                    <summary className="cursor-pointer font-bold">{props.short_description}</summary>
                    <p className="mt-2">{props.details_description}</p>
                </details>

                <code>
                    {props.code}
                </code> <br/>
                <code>
                    {props.code_2}
                </code>
            </hgroup>
        </article>
    )
}

Card.defaultProps = {
    title: "Stateless Component",
    short_description: "Digunakan untuk membungkus component kecil seperti button dan lainnya.",
    details_description: "Stateless component adalah sebuah komponen React yang tidak menyimpan atau mengatur data internal (state) yang dapat berubah. Komponen stateless hanya menerima props dari komponen lain dan menggunakan props tersebut untuk menentukan bagaimana mereka harus ditampilkan. Karena tidak memiliki state yang dapat berubah, komponen stateless tidak memiliki kemampuan untuk memperbarui atau merender ulang komponen mereka sendiri. Stateless components biasanya digunakan untuk menampilkan data yang tidak berubah seperti header, footer, atau komponen tampilan statis lainnya. Dalam hal ini, komponen stateless sangat efisien karena hanya perlu merender ulang jika props yang diterimanya berubah.",
    code: "const card = () => { return(...) }"
}

export default Card