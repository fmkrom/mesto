# Проект "МЕСТО"
(Проектная работа №6)
## Версия 1.0 от 28.10.2020

### Романенко Е.К.

Сайт типа **социальная сеть** с элементами фотохостинга, с настроенными интерактивными элементами (включая всплывающие окна и формы для заполнения), но без анимации.

Используемые технологии: **HTML, CSS** (включая **grid** и **flex**), **JavaScript**.
Используется **адаптивная верстка** для корректного отображения на экранах различной ширины в диапазоне от 320px до 1280px.
Используются технологии **JavaScript** для создания всплывающих окон, взаимодействующих с пользователем.

Ссылка на GitHub Pages: https://fmkrom.github.io/mesto/index.html

### Функции, реализованные в проекте:

1. Функция добавления новых карточек с фотографиями
2. Функция удаления карточки с фотографиями
3. Функция лайка карточки
4. Функция выведения во всплывающее окно полномасштабного изображения из карточки

### 08-22.10.2020 Внесены изменения после итераций:

1. В коде JavaScript все переменные объявлены через const т.к. не перезаписываются
2. В коде JavaScript в функции открытия полномасштабных изображений добавлена функция, задающая изображению аттрибут alt. (стр. 188)
3. В коде JavaScript функциям с чрезмерно длинными названиями заданы короткие имена
4. В коде JavaScript функция добавления карточек на страницу разделена на три независимых: функция-геттер, функция-рендерер и функция, удаляющая карточку
5. В коде JavaScript функции открытия и закрытия всплывающих окон прописаны отдельно и применяются к соотв. окнам
6. В HTML, CSS и JacaScript проведен рефакторинг кода: изменены некоторые из названий классов и переменных
7. Внесены стилистические исправления
8. Прочие изменения в соответствие с замечаниями ревьюэра (19-20.10.2020)

### Изменения внесенные в код в процессе работы над ПР6 (с 26.10.2020):
1. Для экономии места в файле script.js данные для массива карточек вынесены в index.html в отдельный JS файл: <script src="./scripts/initial-cards.js"></script>
2. Функции валидации вынесены в отдельный JS файл: <script src="./scripts/validations.js"></script>
 




