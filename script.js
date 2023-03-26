alert('Привет! Нажми на слово друг, когда откроется страничка!');

const friendName = document.getElementById('name');

friendName.addEventListener('click', () => {
    const userName = prompt('Как тебя зовут?', 'Ирина');
    if (userName) {
        friendName.textContent = userName;
    }
});