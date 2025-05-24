document.addEventListener("DOMContentLoaded", () => {
    const questions = document.querySelectorAll('.faq-question');

    questions.forEach(button => {
        button.addEventListener('click', () => {
            const answer = button.nextElementSibling;
            const icon = button.querySelector('i');
            const isVisible = answer.classList.contains('open');

            if (isVisible) {
                answer.classList.remove('open');
                icon.className = 'fas fa-chevron-right';
            } else {
                answer.classList.add('open');
                icon.className = 'fas fa-chevron-down';
            }
        });
    });
});