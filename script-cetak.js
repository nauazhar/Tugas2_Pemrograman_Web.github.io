// script-cetak.js

document.getElementById('cetakTicketForm').addEventListener('submit', function(event) {
    event.preventDefault();

    // Ambil nilai inputan email dan nomor ticket
    const inputEmail = document.getElementById('inputEmail').value.trim();
    const inputNoTicket = document.getElementById('inputNoTicket').value.trim();

    // Baca file JSON (contoh sederhana, biasanya dari server)
    fetch('registrasi.json')
        .then(response => response.json())
        .then(data => {
            // Cocokkan email dan nomor ticket dengan data yang ada
            if (data.email === inputEmail && data.nomorTicket === inputNoTicket) {
                // Jika cocok, tampilkan e-ticket
                document.getElementById('nomorTicket').textContent = inputNoTicket;
                document.getElementById('namaPemesan').textContent = data.nama;
                document.getElementById('emailPemesan').textContent = data.email;
                document.getElementById('ticketResult').style.display = 'block';
            } else {
                // Jika tidak cocok, beri pesan error atau tindakan sesuai kebutuhan
                alert('Email atau Nomor Ticket tidak valid!');
            }
        })
        .catch(error => console.error('Error:', error));
});
