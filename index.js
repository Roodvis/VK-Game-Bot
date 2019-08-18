const { VK, Keyboard } = require('vk-io'); // Подключение модуля vk-io
const mysql = require('mysql'); // Подключение модуля mysql

// Настройка mysql (создание соединения с БД)

let con = mysql.createPool({
	host: 'localhost', // Хост
	user: 'root', // Логин
	password: '', // Пароль
	database: 'vk_bot' // Название базы данных
});

// Настройка vk-io (отправка токена)

const vk = new VK({
	token: "0cef66f9560391ad9e901be947f053fe343c2fc1732c8a37d52c039e490664f4c0790ec13e2c4fdca784a" // Токен
});

const standalone_vk = new VK({
	token: "847cdf44b8400bc834ff9d6f20a78a9ef5da343f9581a13f26df2a6cad759a00b8408bb189942677df614" // Токен
});

// Доступ к VK Api Methods

const {api} = vk;

// Месседж пейлоад

vk.updates.on('message', (context, next) => {
	const { messagePayload } = context;

	context.state.command = messagePayload && messagePayload.command
		? messagePayload.command
		: null;

	return next();
});

// Изменение синтаксиса функции сообщения на hearCommand

const hearCommand = (name, conditions, handle) => {
	if (typeof handle !== 'function') {
		handle = conditions;
		conditions = [`${name}`];
	}

	if (!Array.isArray(conditions)) {
		conditions = [conditions];
	}

	vk.updates.hear(
		[
			(text, { state }) => (
				state.command === name
			),
			...conditions
		],
		handle
	);
};

// Команда "Помощь", вывод сообщений с коммандами и вывод кнопок, создание пользователя в БД

hearCommand('помощь', async (context, next) => {
	await context.send({
		message: `
			Команды:
			
			играть - Начать игру
			помощь - Список комманд
			помощь по игре - Помощь по игре
			вывод - Вывести средства
			баланс - Ваш баланс
		`,
		keyboard: Keyboard.keyboard([
			[
				Keyboard.textButton({
					label: 'Играть',
					payload: {
						command: 'играть'
					},
					color: Keyboard.POSITIVE_COLOR
				}),
			],

			[
				Keyboard.textButton({
					label: 'Помощь',
					payload: {
						command: 'помощь'
					},
					color: Keyboard.PRIMARY_COLOR
				}),
				Keyboard.textButton({
					label: 'Помощь по игре',
					payload: {
						command: 'помощь по игре'
					},
					color: Keyboard.PRIMARY_COLOR
				}),
			],

			[
				Keyboard.textButton({
					label: 'Баланс',
					payload: {
						command: 'баланс'
					},
					color: Keyboard.SECONDARY_COLOR
				}),
				Keyboard.textButton({
					label: 'Вывод средств',
					payload: {
						command: 'вывод'
					},
					color: Keyboard.SECONDARY_COLOR
				}),
			],
		]),
	});

	// Создание пользователя в БД (Если пользователь уже создан, то ничего не создается)

	let get_user_sql = "SELECT vk_id FROM accounts WHERE vk_id = ?";
	let vk_id = [
		[context.senderId]
	];
	con.query(get_user_sql, [vk_id], function(err, result){
		if(result.length == 0){
			let create_user_sql = "INSERT INTO accounts (vk_id) VALUES ?";
			con.query(create_user_sql, [vk_id], function(){
				console.log('Аккаунт создан --> Успешно');
			});
		};
	});
});

// Сообщение при команде "Помощь по игре"

hearCommand('помощь по игре', async (context, next) => {
	await context.send({
		message: `Для начала игры нажмите кнопку "Играть".
				  Правила игры: после того, как игра началась, вы должны выбрать одно из 9-ти полей, чтобы поставить 'крестик'.
				  После чего ваш противник поставит 'нолик'. Чтобы выиграть, вам нужно заполнить три клетки в ряд.
				  При выиграше вы получаете 50 рублей.
		`
	});
});

// Вывод баланса командой "Баланс"

hearCommand('баланс', async (context, next) => {
	let get_user_balance_sql = "SELECT money FROM accounts WHERE vk_id = ?";
	let vk_id = [
		[context.senderId]
	];
	con.query(get_user_balance_sql, [vk_id], function(err, result){
		let balance = result[0].money;
		context.send({
			message: "На вашем балансе: " + balance + " рублей"
		});
	});
});

// Команда "Вывод средств" (QIWI, Номер телефона, карточка)

hearCommand('вывод', async (context, next) => {
	let get_user_balance_sql = "SELECT money FROM accounts WHERE vk_id = ?";
	let vk_id = [
		[context.senderId]
	];
	con.query(get_user_balance_sql, [vk_id], async function(err, result){
		if(result[0].money < 1000){
			await context.send({
				message: `Для вывода на вашем балансе должно быть не меньше 1000 рублей.`
			});
		}
		else{
			await context.send({
				message: "Куда выводить?",
				keyboard: Keyboard.keyboard([
					[
						Keyboard.textButton({
							label: 'QIWI-Кошелёк',
							payload: {
								command: 'вывести_qiwi'
							},
							color: Keyboard.SECONDARY_COLOR
						})
					]
				]),
			});
		};
	});
});

// Вывод на киви

hearCommand('вывести_qiwi', async (context, next) => {
	await context.send({
		message: 'Введите: /вывод киви "номер киви-кошелька" "количество рублей" (без ковычек)',
		keyboard: Keyboard.keyboard([
			[
				Keyboard.textButton({
					label: 'Играть',
					payload: {
						command: 'играть'
					},
					color: Keyboard.POSITIVE_COLOR
				}),
			],

			[
				Keyboard.textButton({
					label: 'Помощь',
					payload: {
						command: 'помощь'
					},
					color: Keyboard.PRIMARY_COLOR
				}),
				Keyboard.textButton({
					label: 'Помощь по игре',
					payload: {
						command: 'помощь по игре'
					},
					color: Keyboard.PRIMARY_COLOR
				}),
			],

			[
				Keyboard.textButton({
					label: 'Баланс',
					payload: {
						command: 'баланс'
					},
					color: Keyboard.SECONDARY_COLOR
				}),
				Keyboard.textButton({
					label: 'Вывод средств',
					payload: {
						command: 'вывод'
					},
					color: Keyboard.SECONDARY_COLOR
				}),
			],
		]),
	});
});

vk.updates.hear(/^\/вывод киви (.+) (.+)/, (context) => {
	let qiwi_number = context.$match[1];
	let money_get = context.$match[2];
	if(money_get < 1000 || money_get > 50000){
		context.send({
			message: `Минимальная сумма вывода: 1000 рублей.
					  Максимальная сумма вывода: 50000 рублей.`,
			keyboard: Keyboard.keyboard([
				[
					Keyboard.textButton({
						label: 'Играть',
						payload: {
							command: 'играть'
						},
						color: Keyboard.POSITIVE_COLOR
					}),
				],

				[
					Keyboard.textButton({
						label: 'Помощь',
						payload: {
							command: 'помощь'
						},
						color: Keyboard.PRIMARY_COLOR
					}),
					Keyboard.textButton({
						label: 'Помощь по игре',
						payload: {
							command: 'помощь по игре'
						},
						color: Keyboard.PRIMARY_COLOR
					}),
				],

				[
					Keyboard.textButton({
						label: 'Баланс',
						payload: {
							command: 'баланс'
						},
						color: Keyboard.SECONDARY_COLOR
					}),
					Keyboard.textButton({
						label: 'Вывод средств',
						payload: {
							command: 'вывод'
						},
						color: Keyboard.SECONDARY_COLOR
					})
				]
			])
		});
	}
	else{
		let get_money_sql = "SELECT money FROM accounts WHERE vk_id = ?";
		let vk_id = [
			[context.senderId]
		];
		// Проврека, не меньше ли количество денег чем сумма вывода
		con.query(get_money_sql, [vk_id], function(err, result){
			if(result[0].money < money_get){
				context.send({
					message: 'На вашем балансе недостаточно средств'
				});
			}
			else{
				let new_user_balance = result[0].money - money_get; // Отминусование денег при выводе
				let money_getInt = parseInt(money_get); // Проверка на правильность числа
				let new_user_balance_sql = "UPDATE accounts SET money = ? WHERE vk_id = ?"; // Отправка нового баланса в БД
				
				if(money_get == money_getInt){
					con.query(new_user_balance_sql, [new_user_balance, context.senderId]);
					api.call('messages.send', {
						user_id: "Ваш ID",
						random_id: Math.random() * 10000000000,
						message: `Поступил новый запрос на получение денег:
								  Способ оплаты: QIWI
								  Номер QIWI-Кошелька: ` + qiwi_number +
								 `\nКоличество денег: ` + money_get + " рублей" +
								 `\nID человека: ` + context.senderId
					});
					context.send({
						message: `Запрос на вывод денег отправлен.
								  Деньги придут в течении 24-х часов.
								  
								  Если при отправке денег будут вопросы, то
								  администратор напишет вам.`,
					});
				}
				else{
					context.send({
						message: 'Вывести можно только полное число'
					});
				}
			};
		});
	};
});

// Команда "Играть"

hearCommand('играть', async (context) => {
    await context.send({
        message: `
        	Меню игры:

			⬅ - Выйти в меню.
			✅ - Запустить игру.
        `,
        keyboard: Keyboard.keyboard([
            [
                Keyboard.textButton({
                    label: '⬅ Назад',
                    payload: {
                        command: 'помощь'
                    },
                    color: Keyboard.PRIMARY_COLOR
                }),
                Keyboard.textButton({
                    label: '✅ Начать игру',
                    payload: {
                        command: 'начать игру'
                    },
                    color: Keyboard.PRIMARY_COLOR
                })
            ]
        ])
    });
});

// Команда "начать игру"

require('./game'); // Запуск игры

// Вывод уведомления при старте бота

vk.updates.startPolling() // Поллинг
.then(() => {
	console.log('[BOT] --> Запущен успешно!'); // Вывод сообщения в консоль
});

// Запуск бота и проверка на ошибки

vk.updates.start().catch(console.error);
