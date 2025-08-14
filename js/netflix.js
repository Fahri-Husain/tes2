// Jalankan animasi otomatis
setTimeout(() => {
  // Tandai animasi sudah selesai
  sessionStorage.setItem("netflixDone", "true");
  // Redirect ke Index.html
  window.location.href = "Index.html";
}, 5500); // durasi animasi
