document.addEventListener("DOMContentLoaded", () => {
    const sendBtn = document.getElementById('send-btn');
    const msg = document.getElementById('success-message');

    if (sendBtn && msg) {
        sendBtn.addEventListener('click', function () {
            msg.style.display = 'block';
            msg.style.opacity = '0';
            msg.style.transition = 'opacity 0.5s ease';

            setTimeout(() => {
                msg.style.opacity = '1';
            }, 50);

            // Optional: hide after 5 seconds
            setTimeout(() => {
                msg.style.opacity = '0';
                setTimeout(() => {
                    msg.style.display = 'none';
                }, 500);
            }, 5000);
        });
    }
});
