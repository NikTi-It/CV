/* Это объявление переменной, мы наши кнопку по тегу */
const button = document.querySelector('button');

/* Тут на кнопку навешиваем обрабочик, который ждёт клика и тогда запустит логику */
button.addEventListener('click', function() {
	alert('Зло — это зло. Меньшее, бо́льшее, среднее — всё едино, пропорции условны, а границы размыты. Но если приходится выбирать между одним злом и другим, я предпочитаю не выбирать вообще.')
})