# Установка
1. Установите Node.js версии <strong>10.16.3 LTS</strong>
2. Создайте папку, в которую поместите все скачанные файлы
3. Запустите консоль и пропишите <strong>npm i</strong>
4. Настройте бота
5. Запустите бота командой <strong>npm start</strong>
# Настройка
### 1. Получение токенов:
  1) Получите <strong>Long Poll API Token</strong> в настройках сообщества
  2) Получите <strong>Standalone-APP Access Token</strong>, <a href="https://vk.com/dev/implicit_flow_user">детальнее</a> (в параметре <strong>display</strong> укажите свойства <strong>wall</strong> и <strong>offline</strong>)
### 2. Настройка Базы Данных:
  1) Откройте вашу СУБД (в примере использовался <strong>phpmyadmin</strong>)
  2) Создайте Базу Данных под именем <strong>vk_bot</strong>
  3) Откройте вашу базу данных
  4) Откройте вкладку <strong>"Импорт"</strong>
  5) Выберите файл <strong>import_me.sql</strong>
  6) Нажмите <strong>"Вперёд"</strong>
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
  2) На 16-ой строке укажите ваш <strong>Long Poll API Token</strong>:
```js
const vk = new VK({
	token: "LONG POLL TOKEN" // Токен
});
```
  3) На 20-ой строке укажите ваш <strong>Standalone-App Access Token</strong>:
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
  2) На 12-ой строке укажите ваш <strong>Long Poll API Token</strong>:
```js
const vk = new VK({
      token: "LONG POLL TOKEN" // Токен
});
```
