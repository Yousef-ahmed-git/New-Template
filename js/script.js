// Background Of Header
let header = document.getElementsByTagName('header')[0];
window.scrollY >= header.offsetHeight ? header.classList.add('scrolled') : header.classList.remove('scrolled');
window.onscroll = () => {
    window.scrollY >= header.offsetHeight ? header.classList.add('scrolled') : header.classList.remove('scrolled');
};

// Prevent Default On About Link
document.querySelector('header a.about-link').onclick = (e) => e.preventDefault();







// window.onload = () => {
//     document.documentElement.scrollTo({top: document.documentElement.scrollHeight});
// }

document.onkeydown = (e) => {
    if (e.key === 'd') return document.documentElement.scrollTo({top: document.documentElement.scrollHeight});;
};