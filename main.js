const generateBtn = document.getElementById('generate');
const numbersContainer = document.getElementById('numbers');
const themeSwitcher = document.getElementById('theme-switcher');

generateBtn.addEventListener('click', () => {
    numbersContainer.innerHTML = '';
    const numbers = new Set();
    while (numbers.size < 6) {
        numbers.add(Math.floor(Math.random() * 45) + 1);
    }

    for (const number of [...numbers].sort((a, b) => a - b)) {
        const numberDiv = document.createElement('div');
        numberDiv.classList.add('number');
        numberDiv.textContent = number;
        numbersContainer.appendChild(numberDiv);
    }
});

themeSwitcher.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    if (document.body.classList.contains('dark-mode')) {
        localStorage.setItem('theme', 'dark-mode');
    } else {
        localStorage.removeItem('theme');
    }
});

// Check for saved theme preference

const savedTheme = localStorage.getItem('theme');

if (savedTheme) {

    document.body.classList.add(savedTheme);

}



// Partnership Inquiry Form handling

const form = document.querySelector('#partnership-inquiry form');

const formMessages = document.getElementById('form-messages');



if (form) {

    form.addEventListener('submit', async (event) => {

        event.preventDefault(); // Prevent default form submission



        const formData = new FormData(form);

        const actionUrl = form.action;



        try {

            const response = await fetch(actionUrl, {

                method: 'POST',

                body: formData,

                headers: {

                    'Accept': 'application/json'

                }

            });



            if (response.ok) {

                formMessages.textContent = 'Thank you for your inquiry! We will get back to you soon.';

                formMessages.style.color = 'green';

                form.reset(); // Clear the form

            } else {

                const data = await response.json();

                if (data.errors) {

                    formMessages.textContent = data.errors.map(error => error.message).join(', ');

                } else {

                    formMessages.textContent = 'Oops! There was a problem submitting your form.';

                }

                formMessages.style.color = 'red';

            }

        } catch (error) {

            formMessages.textContent = 'Oops! There was a network error. Please try again later.';

            formMessages.style.color = 'red';

            console.error('Form submission error:', error);

        }

    });

}
