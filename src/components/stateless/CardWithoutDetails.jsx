const CardWithoutDetails = () => {
    return (
        <article className="px-6 lg:px-12 xl:px-36 text-slate-200 mt-24">
            <hgroup className="bg-blue-600 px-6 py-4 rounded-xl">
                <hgroup>
                    <h1 className="text-slate-200 font-bold text-2xl">
                        Apa itu React?
                    </h1>
                    
                    <p className="mt-2 text-slate-300">React adalah sebuah library JavaScript untuk membangun antarmuka pengguna. React memfokuskan pada membangun komponen yang dapat digunakan berulang-ulang dan memungkinkan pengembang membangun aplikasi yang skalabel dan mudah dikelola. React menggunakan konsep Virtual DOM yang membuat proses render lebih efisien dan memungkinkan aplikasi berjalan dengan cepat. React juga memiliki fitur seperti manajemen state dan proses yang mudah untuk melakukan interaksi dengan server atau API. React populer digunakan untuk membangun aplikasi web dan mobile.</p>
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