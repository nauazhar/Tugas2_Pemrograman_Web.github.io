// script.js

document.getElementById('registrationForm').addEventListener('submit', function(event) {
    event.preventDefault();

    // Simpan data registrasi ke dalam objek JSON
    const formData = new FormData(this);
    const registrasiData = {
        nama: formData.get('nama'),
        email: formData.get('email'),
        telp: formData.get('telp'),
        alamat: formData.get('alamat'),
        identitas: formData.get('identitas')
    };

    // Convert ke JSON
    const jsonData = JSON.stringify(registrasiData);

    // Simpan ke file .json (contoh sederhana, biasanya dilakukan di server)
    downloadJson(jsonData, 'registrasi.json');

    // Redirect ke halaman form cetak ticket
    window.location.href = 'cetak.html';
});

// Fungsi untuk download file JSON
function downloadJson(jsonData, filename) {
    const blob = new Blob([jsonData], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = filename;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
}
