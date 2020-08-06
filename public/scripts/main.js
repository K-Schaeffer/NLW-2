document.querySelector("#add-time").addEventListener('click', () => {
    const newFieldContainer = document.querySelector('.schedule-item').cloneNode(true);

    const fields = newFieldContainer.querySelectorAll('input');
    fields.forEach((field) => {
        field.value = "";
    });

    document.querySelector('#schedule-items').appendChild(newFieldContainer);
})