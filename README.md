# Установка
1. Установите Node.js версии <strong>10.16.3 LTS</strong>
2. Создайте папку, в которую поместите все скачанные файлы
3. Запустите консоль и пропишите <strong>npm i</strong>
4. Настройте бота
5. Запустите бота командой <strong>npm start</strong>
# Настройка
### 1. Получение токенов:
  1) Получите Long Poll API Token в настройках сообщества
  2) Получите Standalone APP Access Token, <a href="https://vk.com/dev/implicit_flow_user">детальнее</a> (в параметре display укажите свойства <strong>wall</strong> и <strong>offline</strong>)
### 2. Настройка Базы Данных:
  1) Откройте вашу СУБД (советую phpmyadmin)
  2) Создайте Базу Данных под именем vk_bot
  3) Откройте вашу базу данных
  4) Откройте вкладку "Импорт"
  5) Выберите файл import_me.sql
  6) Нажмите "Вперёд"
### 3. Настройка скрипта
  #### 1. Откройте файл index.js
  1) Создайте соединение с базой данных на 6-ой строке
```js
let con = mysql.createPool({
	host: 'localhost', // Хост
	user: 'root', // Логин
	password: '', // Пароль
	database: 'vk_bot' // Название базы данных
});
```
  2) На 16-ой строке укажите ваш Long Poll API Token:
```js
const vk = new VK({
	token: "LONG POLL TOKEN" // Токен
});
```
  3) На 20-ой строке укажите ваш Standalone-App Access Token:
```js
const standalone_vk = new VK({
      token: "STANDALONE APP TOKEN" // Токен
});
```
  4) На 324-ой строке укажите ID вашей страницы:
  #####
  	user_id: "Ваш ID"
  #### 2. Откройте файл game.js
  1) Создайте соединение с базой данных на 4-ой строке
```js
let con = mysql.createPool({
	host: 'localhost', // Хост
	user: 'root', // Логин
	password: '', // Пароль
	database: 'vk_bot' // Название базы данных
});
```
  2) На 12-ой строке укажите ваш Long Poll API Token:
```js
const vk = new VK({
      token: "LONG POLL TOKEN" // Токен
});
```
