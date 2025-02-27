//function login
function login() {
  // Ambil nilai dari input
  let username = document.getElementById("username").value;
  let password = document.getElementById("password").value;

  // Validasi input
  if (username === "" || password === "") {
    alert("Username dan Password tidak boleh kosong");
    return;
  }

  document.getElementById("name").innerText = username;
  document.querySelector(".login-container").classList.add("hidden");
  document.querySelectorAll("#main-content").forEach(function (element) {
    element.classList.remove("hidden");
  });
}
//function logout
function logout() {
  document.getElementById("name").innerText = "";

  // menyembyunikan page utama dan tampilkan kembali form login// seakan mau login(manipulasi)
  document.querySelector(".login-container").classList.remove("hidden");
  document.querySelectorAll("#main-content").forEach(function (element) {
    element.classList.add("hidden");
  });
}

function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

//autoslideshow
let slideIndex = 0;
showSlides();

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}    
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
  setTimeout(showSlides, 2000); // Change image every 2 seconds
}


// Handler untuk pengiriman form
document
  .getElementById("formulir")
  .addEventListener("submit", function (event) {
    // Mencegah tindakan default dari pengiriman formulir
    event.preventDefault();

    // tanggal dan waktu saat ini
    const now = new Date();
    const dateTimeString = now.toLocaleString();

    // mengambil nilai dari form
    const nama = document.getElementById("nama").value;
    const tanggalLahir = document.getElementById("tgl-lahir").value;
    const jenisKelamin = document.querySelector(
      "input[name=jenisKelamin]:checked"
    )?.value;
    const pesan = document.getElementById("pesan").value;

    const resultText = `Date/time: ${dateTimeString}\n\nNama: ${nama}\nTanggal Lahir: ${tanggalLahir}\nJenis Kelamin: ${jenisKelamin}\nPesan: ${pesan}\n`;

    // display hasil
    document.getElementById("result").value = resultText;

    // display  bahwa pesan telah dikirim
    alert("Pesan telah dikirim");

    document.getElementById("nama").value = "";
    document.getElementById("tgl-lahir").value = "";
    document.getElementById("pesan").value = "";
    if (document.querySelector("input[name=jenisKelamin]:checked")) {
      document.querySelector(
        "input[name=jenisKelamin]:checked"
      ).checked = false;
    }
  });



//declarasi buton untuk scrol ke atas
let mybutton = document.getElementById("myBtn");

window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

function topFunction() {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
}
// function untuk agar smooth perpindahan page
document.querySelectorAll(".nav-item").forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();

    const targetId = this.getAttribute("href").substring(1);
    const targetElement = document.getElementById(targetId);

    window.scrollTo({
      top: targetElement.offsetTop,
      behavior: "smooth",
    });
  });
});
