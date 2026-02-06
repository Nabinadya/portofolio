// Memantau section yang masuk ke layar
const observerOptions = {
    threshold: 0.5 // Aktif jika 50% section sudah terlihat
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            // Tambahkan class 'active' saat section terlihat
            entry.target.classList.add('active');
            console.log(`Sekarang di: ${entry.target.id}`);
        } else {
            // Opsional: hapus class saat keluar layar jika ingin animasi berulang
            entry.target.classList.remove('active');
        }
    });
}, observerOptions);

// Daftarkan semua panel ke observer
document.querySelectorAll('.panel').forEach(panel => {
    observer.observe(panel);
});