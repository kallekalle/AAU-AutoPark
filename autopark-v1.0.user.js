// ==UserScript==
// @name         AAU Autopark
// @description  Starter automatisk en parkering på Cassiopeias og AAU Sunds parkeringsplads
// @author       Kalle Siegenfeldt
// @namespace    aau-parking
// @version      1.0
// @description  Opretter automatisk AAU-gæsteparkering
// @match        https://guestparkingsite.test.hub.mobilparkering.dk/da/de27f01d-defe-46e3-8571-37e44ff35ce3*
// @grant        none
// @inject-into  content
// ==/UserScript==

(function () {
    'use strict';

    let PLATE = localStorage.getItem('aau_autopark_plate');
    let EMAIL = localStorage.getItem('aau_autopark_email');
    let PHONE = localStorage.getItem('aau_autopark_phone');

    if (!PLATE) {
        PLATE = prompt('AAU AutoPark\n\nIndtast din nummerplade:');

        if (PLATE) {
            PLATE = PLATE.trim().toUpperCase();
            localStorage.setItem('aau_autopark_plate', PLATE);
        }
    }

    if (!EMAIL) {
        EMAIL = prompt('AAU AutoPark\n\nIndtast din e-mailadresse:');

        if (EMAIL) {
            EMAIL = EMAIL.trim();
            localStorage.setItem('aau_autopark_email', EMAIL);
        }
    }

    if (!PHONE) {
        PHONE = prompt('AAU AutoPark\n\nIndtast dit telefonnummer:');

        if (PHONE) {
            PHONE = PHONE.trim();
            localStorage.setItem('aau_autopark_phone', PHONE);
        }
    }

    if (!PLATE || !EMAIL || !PHONE) {
        console.log('AAU AutoPark: Opsætning blev ikke gennemført.');
        return;
    }

    let continueClicked = false;
    let confirmClicked = false;

    function setInputValue(element, value) {
        if (!element) return;

        const setter = Object.getOwnPropertyDescriptor(
            HTMLInputElement.prototype,
            'value'
        ).set;

        setter.call(element, value);

        element.dispatchEvent(new Event('input', { bubbles: true }));
        element.dispatchEvent(new Event('change', { bubbles: true }));
        element.dispatchEvent(new Event('blur', { bubbles: true }));
    }

    function findButton(text) {
        return [...document.querySelectorAll('button')]
            .find(button =>
                button.innerText
                    ?.trim()
                    .toUpperCase()
                    .includes(text.toUpperCase())
            );
    }

    function run() {

        const path = window.location.pathname;

        // ==========================================
        // BEKRÆFTELSESSIDEN
        // ==========================================

        if (path.includes('/confirm')) {

            const button = findButton('BEKRÆFT OG OPRET');

            if (
                button &&
                !button.disabled &&
                !confirmClicked
            ) {
                confirmClicked = true;

                console.log(
                    'AAU Parking: Bekræftelsesknap fundet:',
                    button
                );

                console.log(
                    'AAU Parking: Bekræfter og opretter parkering...'
                );

                setTimeout(() => {
                    button.click();
                }, 500);
            }

            return;
        }

        // ==========================================
        // FØRSTE SIDE
        // ==========================================

        const inputs = [...document.querySelectorAll('input')];

        const plateInput = inputs.find(input => {
            const text = [
                input.placeholder,
                input.name,
                input.id,
                input.getAttribute('aria-label')
            ]
                .join(' ')
                .toLowerCase();

            return (
                text.includes('registreringsnummer') ||
                text.includes('nummerplade') ||
                text.includes('registration')
            );
        });

        const phoneInput = inputs.find(input => {
            const text = [
                input.placeholder,
                input.name,
                input.id,
                input.getAttribute('aria-label')
            ]
                .join(' ')
                .toLowerCase();

            return (
                input.name === 'phoneNumber' ||
                text.includes('mobilnummer')
            );
        });

        const emailInput = inputs.find(input => {

            const text = [
                input.placeholder,
                input.name,
                input.id,
                input.getAttribute('aria-label')
            ]
                .join(' ')
                .toLowerCase();

            return (
                input.type === 'email' ||
                text.includes('mail')
            );
        });

        if (!plateInput) {
            return;
        }

        // Udfyld kun hvis feltet ikke allerede er korrekt
        if (plateInput.value !== PLATE) {
            setInputValue(plateInput, PLATE);
        }

        if (emailInput && emailInput.value !== EMAIL) {
            setInputValue(emailInput, EMAIL);
        }

        if (phoneInput && phoneInput.value !== PHONE) {
            setInputValue(phoneInput, PHONE);
        }

        // Find checkbox
        const checkbox = inputs.find(
            input => input.type === 'checkbox'
        );

        if (checkbox && !checkbox.checked) {
            checkbox.click();
        }

        // Find fortsæt-knappen
        const continueButton = findButton('FORTSÆT');

        if (
            continueButton &&
            !continueButton.disabled &&
            !continueClicked
        ) {
            continueClicked = true;

            console.log(
                'AAU Parking: Udfyldt – fortsætter til bekræftelse...'
            );

            setTimeout(() => {
                continueButton.click();
            }, 500);
        }
    }
    setInterval(run, 300);
    run();

})();
