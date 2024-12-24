// Müzik Kontrolü
const playMusicBtn = document.getElementById('play-music-btn');
const audio = document.getElementById('background-music');

// Müzik oynat/durdur
playMusicBtn.addEventListener('click', () => {
    if (audio.paused) {
        audio.play();
        playMusicBtn.textContent = "Müziği Durdur";
    } else {
        audio.pause();
        playMusicBtn.textContent = "Müzik Oynat";
    }
});

// "Mesaj At" butonu iletişim formuna yönlendirme yapar
const messageBtn = document.getElementById('message-btn');
messageBtn.addEventListener('click', () => {
    const contactSection = document.getElementById('iletişim');
    if (contactSection) {
        contactSection.scrollIntoView({ behavior: 'smooth' });
    } else {
        console.error('İletişim bölümü bulunamadı!');
    }
});

// Sayfa yüklendiğinde müziği durdur ve buton metnini ayarla
window.addEventListener('load', () => {
    audio.pause();
    playMusicBtn.textContent = "Müzik Oynat";
});

// Form doğrulama ve bildirim işlevi
function validateForm(event) {
    event.preventDefault(); // Sayfa yenilenmesini engeller

    // Form alanlarını kontrol et
    const fullname = document.getElementById('fullname').value.trim();
    const email = document.getElementById('email').value.trim();
    const phone = document.getElementById('phone').value.trim();
    const message = document.getElementById('message').value.trim();

    // Formda eksik alan olup olmadığını kontrol et
    if (!fullname || !email || !phone || !message) {
        alert("Lütfen tüm alanları doldurun!");
        return false;
    }

    // Başarı bildirimi göster
    const notification = document.getElementById('notification');
    if (notification) {
        notification.classList.add('visible');

        // Bildirimi birkaç saniye sonra gizle
        setTimeout(() => {
            notification.classList.remove('visible');
        }, 3000); // Bildirim 3 saniye sonra kaybolur
    }

    // Formu temizle
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        contactForm.reset();
    }

    return false; // Sayfa yenilenmesini engellemeye devam et
}
