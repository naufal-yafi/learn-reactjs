const CardWithoutDetails = () => {
    return (
        <article className="px-6 lg:px-12 xl:px-36 text-slate-200 mt-20">
            <hgroup className="bg-blue-600 px-6 py-4 rounded-xl">
                <hgroup>
                    <h1 className="text-slate-200 font-bold text-2xl">
                        Apa itu ReactJS?
                    </h1>
                    
                    <p className="mt-2 text-slate-300">
                        ReactJS adalah sebuah library JavaScript untuk membangun antarmuka pengguna (UI) yang dikembangkan oleh Facebook. Ini membantu untuk membuat aplikasi web yang dinamis dan memungkinkan kita untuk membangun komponen yang dapat digunakan kembali dan diterapkan pada halaman web. React menggunakan konsep Virtual DOM yang membuat aplikasi lebih cepat dan efisien dalam memperbarui UI.
                    </p>
                </hgroup>

                <h2 className="font-bold mt-2">Cara membuat project baru: </h2>
                <code>
                    npx create-react-app [nama-project-kamu]
                </code>

                <h2 className="font-bold mt-2">Cara menjalankan project tersebut: </h2>
                <code>
                    npm start
                </code>
            </hgroup>
        </article>
    )
}

export default CardWithoutDetails