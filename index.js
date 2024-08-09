let getRandomNumber = function (size) {
    return Math.floor(Math.random() * size);
};

let getDistance = function (event, target) {
    const rect = event.target.getBoundingClientRect();
    const offsetX = event.clientX - rect.left;
    const offsetY = event.clientY - rect.top;
    const diffX = offsetX - target.x;
    const diffY = offsetY - target.y;
    return Math.sqrt((diffX * diffX) + (diffY * diffY));
};

const getDistanceHint = function (distance) {
    if (distance < 30) {
        return "Піздець гаряче!";
    } else if (distance < 50) {
        return "Дуже гаряче!";
    } else if (distance < 100) {
        return "Гаряче!";
    } else if (distance < 250) {
        return "Тепло!";
    } else if (distance < 500) {
        return "Холодно!";
    } else if (distance < 800) {
        return "Дуже холодно!";
    } else {
        return "Піздець холодно!";
    }
};

const width = 1230;
const height = 650;
let clicks = 0;

let target = {
    x: getRandomNumber(width),
    y: getRandomNumber(height)
};

document.getElementById('map').addEventListener('click', function (event) {
    clicks += 1;
    
    // Отримання координат кліку відносно сторінки
    const offsetX = event.pageX;
    const offsetY = event.pageY;

    const distance = getDistance(event, target);
    let distanceHint = getDistanceHint(distance);
    document.getElementById('distance').textContent = distanceHint;

    // Переміщення персонажа на місце кліку
    const character = document.getElementById('character');
    character.style.left = `${offsetX}px`;
    character.style.top = `${offsetY}px`;
    character.style.transform = 'translate(-50%, -50%)'; // Центрування персонажа відносно кліку
    character.style.display = 'block';

    if (distance < 20) {
        alert(`Вітаю ти знайшов скарб всього за ${clicks} кліків!`);
        document.getElementById('distance').innerHTML = `
            Ось твоя винагорода: 
            <a href="https://l1ghtsh0t.github.io" target="_blank">ТИК!</a>`;
    }
    
});

document.getElementById('map').addEventListener('dragstart', function(event) {
    event.preventDefault();
});

