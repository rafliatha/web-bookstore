const bar = document.getElementById('bar');
const close = document.getElementById('close');
const nav = document.getElementById('navbar');

if (bar) {
    bar.addEventListener('click',() =>{
        nav.classList.add('active');
    })
}
if (close) {
    close.addEventListener('click',() =>{
        nav.classList.remove('active');
    })
}

// Tombol bawah ke atas page
const toTop = document.querySelector(".to-top");

window.addEventListener("scroll", () => {
    if(window.pageYOffset > 100) {
        toTop.classList.add("active");
    }else{
        toTop.classList.remove("active");
    }
})

// Elemen FAQ
const questions = document.querySelectorAll(".faq-question");

questions.forEach((question) => {
    question.addEventListener("click", () => {
    // Toggle kelas "active" pada jawaban
    const answer = question.nextElementSibling;
    const isVisible = answer.style.display === "block";

    // Sembunyikan semua jawaban lain
    document.querySelectorAll(".faq-answer").forEach((item) => {
        item.style.display = "none";
    });

    // Tampilkan/ Sembunyikan jawaban yang di-klik
    answer.style.display = isVisible ? "none" : "block";
    });
});

document.getElementById('contact-form').addEventListener('submit', function (event) {
    event.preventDefault();

    // Reset pesan error
    document.getElementById('error-name').innerHTML = '';
    document.getElementById('error-email').innerHTML = '';
    document.getElementById('error-message').innerHTML = '';

    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();

    let valid = true;

    if (name.length < 3) {
        document.getElementById('error-name').innerHTML = 'Nama harus memiliki setidaknya 3 karakter.';
        valid = false;
    }

    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    if (!emailRegex.test(email)) {
        document.getElementById('error-email').innerHTML = 'Email harus valid, contoh: user@example.com';
        valid = false;
    }

    if (message.length < 10) {
        document.getElementById('error-message').innerHTML = 'Pesan harus memiliki setidaknya 10 karakter.';
        valid = false;
    }

    if (valid) {
        alert('Form berhasil dikirim!');
        this.submit();
    }
});
