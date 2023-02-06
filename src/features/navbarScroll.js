const navbarScroll = () => {
    const navbar = document.querySelector('header')

    window.onscroll = function () {
        if (window.pageYOffset > 0) {
            navbar.style.borderBottom = '2px solid #1e293b'
        } else {
            navbar.style.borderBottom = '2px solid #0f172a'
        }
    }
}

export default navbarScroll