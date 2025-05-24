document.addEventListener('DOMContentLoaded', function () {
    const dropdowns = [
        {
            dropBtn: document.querySelector('.about-btn'),
            dropdown: document.querySelector('.about-dropdown'),
            icon: document.getElementById('about-icon'),
        },
        {
            dropBtn: document.querySelector('.products-btn'),
            dropdown: document.querySelector('.products-dropdown'),
            icon: document.getElementById('products-icon'),
        },
        {
            dropBtn: document.querySelector('.contacts-btn'),
            dropdown: document.querySelector('.contacts-dropdown'),
            icon: document.getElementById('contacts-icon'),
        }
    ];


    dropdowns.forEach(({ dropBtn, dropdown, icon }) => {
        let isDropdownOpen = false;
        let closeTimeout;
        let hideTimeout;

        // Fade in dropdown
        function fadeInDropdown() {
            clearTimeout(hideTimeout);
            dropdown.style.display = 'block';
            void dropdown.offsetWidth; // force reflow
            dropdown.classList.remove('hide');
            dropdown.classList.add('show');
            icon.classList.add('rotate');
            isDropdownOpen = true;
        }

        // Fade out dropdown
        function fadeOutDropdown() {
            dropdown.classList.remove('show');
            dropdown.classList.add('hide');
            icon.classList.remove('rotate');
            isDropdownOpen = false;

            requestAnimationFrame(() => {
                setTimeout(() => {
                    dropdown.style.display = 'none';
                }, 300); // match CSS transition
            });
        }

        // Toggle on click
        dropBtn.addEventListener('click', function (e) {
            e.stopPropagation();
            isDropdownOpen ? fadeOutDropdown() : fadeInDropdown();
        });

        // Close on outside click
        document.addEventListener('click', function (e) {
            if (
                isDropdownOpen &&
                !dropdown.contains(e.target) &&
                !dropBtn.contains(e.target)
            ) {
                fadeOutDropdown();
            }
        });

        // Auto-close on mouse leave
        dropdown.addEventListener('mouseleave', () => {
            closeTimeout = setTimeout(fadeOutDropdown, 300);
        });

        // Cancel auto-close on mouse re-enter
        dropdown.addEventListener('mouseenter', () => clearTimeout(closeTimeout));
        dropBtn.addEventListener('mouseenter', () => clearTimeout(closeTimeout));
    });
});
