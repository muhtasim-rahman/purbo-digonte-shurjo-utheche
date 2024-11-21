function copyLink() {
    const link = window.location.href;
    navigator.clipboard.writeText(link);

    const popup = document.getElementById('copyPopup');
    const copiedLink = document.getElementById('copiedLink');
    copiedLink.textContent = link;

    popup.style.display = 'block';
    setTimeout(() => {
        popup.style.display = 'none';
    }, 3000);
}

function printCard() {
    window.print();
}

function downloadImage() {
    const card = document.getElementById('card');
    html2canvas(card, {
        scale: 2, // Higher resolution
        useCORS: true
    }).then(canvas => {
        const link = document.createElement('a');
        link.download = 'পূর্ব দিগন্তে সূর্য উঠেছে - (সংক্ষিপ্ত এবং পরিমার্জিত).jpg';
        link.href = canvas.toDataURL('image/jpg');
        link.click();
    });
}

function toggleMode() {
    const body = document.body;
    const toggle = document.getElementById('modeToggle');
    if (body.classList.contains('day-mode')) {
        body.classList.remove('day-mode');
        toggle.innerHTML = '<i class="fas fa-moon"></i> Night Mode';
    } else {
        body.classList.add('day-mode');
        toggle.innerHTML = '<i class="fas fa-sun"></i> Day Mode';
    }
}
