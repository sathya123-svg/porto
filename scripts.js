// Ambil semua elemen nav link
const navLinks = document.querySelectorAll('.navbar a');
// Mengambil semua elemen <section> di halaman 
const sections = document.querySelectorAll("section");

// Tambahkan event listener untuk setiap nav link
navLinks.forEach(link => {
  link.addEventListener('click', function() {
    // Hapus class 'active' dari semua link
    navLinks.forEach(nav => nav.classList.remove('active'));
    // Tambahkan class 'active' pada link yang diklik
    this.classList.add('active');
  });
}); 


window.addEventListener("scroll", () => {
  // menyimpan id
    let current = "";

    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;

        if (pageYOffset >= sectionTop - sectionHeight / 3) {
            current = section.getAttribute("id");
        }
    });

    navLinks.forEach(link => {
        link.classList.remove("active");
        if (link.getAttribute("href") === `#${current}`) {
            link.classList.add("active");
        }
    });
});
