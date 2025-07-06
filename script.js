// Array berisi kata-kata seperti sedang mengetik hacking/terminal
const slogans = [
  "Initializing protocol override...",
  "Bypassing firewall...",
  "Accessing secure mainframe...",
  "Decrypting data packets...",
  "Injecting payload...",
  "Establishing backdoor...",
  "Compiling exploit scripts...",
  "Uploading virus.exe...",
  "Erasing digital footprints...",
  "System breach successful. We're in.",
];

let index = 0; // Indeks untuk memilih slogan saat ini
let charIndex = 0; // Indeks huruf yang sedang diketik
let isDeleting = false; // Status: apakah sedang menghapus teks?

// Ambil elemen HTML dengan id "hacking" untuk ditampilkan teksnya
const sloganElement = document.getElementById("hacking");

// Fungsi untuk efek mengetik dan menghapus secara otomatis
function typeWriter() {
  const currentSlogan = slogans[index]; // Ambil slogan saat ini dari array

  // Jika sedang menghapus, kurangi panjang teks
  if (isDeleting) {
    sloganElement.textContent = currentSlogan.substring(0, charIndex--);
  }
  // Jika sedang mengetik, tambah panjang teks
  else {
    sloganElement.textContent = currentSlogan.substring(0, charIndex++);
  }

  // Jika selesai mengetik seluruh kalimat
  if (!isDeleting && charIndex === currentSlogan.length + 1) {
    isDeleting = true; // Ganti status jadi menghapus
    setTimeout(typeWriter, 2000); // Tunggu 2 detik sebelum mulai menghapus
  }
  // Jika sudah selesai menghapus
  else if (isDeleting && charIndex === 0) {
    isDeleting = false; // Ganti status jadi mengetik
    index = (index + 1) % slogans.length; // Pindah ke slogan berikutnya
    setTimeout(typeWriter, 500); // Tunggu 0.5 detik sebelum mulai ketik lagi
  }
  // Jika masih proses mengetik atau menghapus
  else {
    setTimeout(typeWriter, isDeleting ? 30 : 60);
    // Kecepatan: lebih cepat saat menghapus (30ms), lebih lambat saat mengetik (60ms)
  }
}

// Jalankan fungsi pertama kali
typeWriter();
