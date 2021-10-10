export default function setupForm() {
    const form = document.getElementById('form');
    const textfield = <HTMLInputElement>document.getElementById('textfield');
    const number = <HTMLInputElement>document.getElementById('number');
    const password = <HTMLInputElement>document.getElementById('password');
    const email = <HTMLInputElement>document.getElementById('email');

    function makeFieldValid(element: HTMLInputElement): void {
        element.classList.add("border-black");
        element.classList.remove("border-red-500");
    }

    function makeFieldInvalid(element: HTMLInputElement): void {
        element.classList.remove("border-black");
        element.classList.add("border-red-500");
    }

    function isFieldValid(field: HTMLInputElement): boolean {
        return field.value !== '' && field.className.split(' ').indexOf('border-red-500') < 0 ;
    }

    textfield.addEventListener('focusout', () => {
        textfield.classList.add('bg-pink');
    });

    textfield.addEventListener('focusout', () => {
        /^[A-Za-z]{5,}$/.test(textfield.value)
            ? makeFieldValid(textfield)
            : makeFieldInvalid(textfield);
    });

    number.addEventListener('focusout', () => {
        /^[0-9]+$/.test(number.value)
            ? makeFieldValid(number)
            : makeFieldInvalid(number);
    });

    password.addEventListener('focusout', () => {
        /^[0-9]/.test(password.value)
            ? makeFieldValid(password)
            : makeFieldInvalid(password);
    });

    email.addEventListener('focusout', () => {
        /[@]+/.test(email.value)
            ? makeFieldValid(email)
            : makeFieldInvalid(email);
    });
    
    form!.onsubmit = () => {
        let invalid = ([textfield, number, password, email]
            .map(field => isFieldValid(field)) as unknown as boolean[])
            .includes(false);

        alert(invalid ? 'Error: Form is invalid' : 'Success: From is valid');
        return !invalid;
    }
}