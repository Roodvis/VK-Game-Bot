const { VK, Keyboard } = require('vk-io'); // Подключение vk-io
const mysql = require('mysql'); // Подключение mysql

let con = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'vk_bot'
});

const vk = new VK({
    token: "LONG POLL TOKEN" // Токен
});

vk.updates.on('message', (context, next) => {
    const { messagePayload } = context;

    context.state.command = messagePayload && messagePayload.command
        ? messagePayload.command
        : null;

    return next();
});

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

vk.updates.start().catch(console.error);

hearCommand('null', async (context) => {
    await context.send({
        message: "Это поле уже занято"
    });
});
hearCommand('начать игру', async (context) => {
    await context.send({
        message: `ᅠ`,
        keyboard: Keyboard.keyboard([
            [
                Keyboard.textButton({
                    label: '⬜',
                    payload: {
                        command: '1'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '⬜',
                    payload: {
                        command: '2'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '⬜',
                    payload: {
                        command: '3'
                    },
                    color: Keyboard.SECONDARY_COLOR
                })
            ],
            [
                Keyboard.textButton({
                    label: '⬜',
                    payload: {
                        command: '4'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '⬜',
                    payload: {
                        command: '5'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '⬜',
                    payload: {
                        command: '6'
                    },
                    color: Keyboard.SECONDARY_COLOR
                })
            ],
            [
                Keyboard.textButton({
                    label: '⬜',
                    payload: {
                        command: '7'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '⬜',
                    payload: {
                        command: '8'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '⬜',
                    payload: {
                        command: '9'
                    },
                    color: Keyboard.SECONDARY_COLOR
                })
            ]
        ])
    });
});
hearCommand('1', async (context) => {
    await context.send({
        message: `ᅠ`,
        keyboard: Keyboard.keyboard([
            [
                Keyboard.textButton({
                    label: '❌',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '⬜',
                    payload: {
                        command: '1_2'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '⬜',
                    payload: {
                        command: '1_3'
                    },
                    color: Keyboard.SECONDARY_COLOR
                })
            ],
            [
                Keyboard.textButton({
                    label: '⬜',
                    payload: {
                        command: '1_4'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '⭕',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '⬜',
                    payload: {
                        command: '1_6'
                    },
                    color: Keyboard.SECONDARY_COLOR
                })
            ],
            [
                Keyboard.textButton({
                    label: '⬜',
                    payload: {
                        command: '1_7'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '⬜',
                    payload: {
                        command: '1_8'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '⬜',
                    payload: {
                        command: '1_9'
                    },
                    color: Keyboard.SECONDARY_COLOR
                })
            ]
        ])
    });
});
hearCommand('1_2', async (context) => {
    await context.send({
        message: `ᅠ`,
        keyboard: Keyboard.keyboard([
            [
                Keyboard.textButton({
                    label: '❌',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '❌',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '⭕',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                })
            ],
            [
                Keyboard.textButton({
                    label: '⬜',
                    payload: {
                        command: '1_2_4'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '⭕',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '⬜',
                    payload: {
                        command: '1_2_6'
                    },
                    color: Keyboard.SECONDARY_COLOR
                })
            ],
            [
                Keyboard.textButton({
                    label: '⬜',
                    payload: {
                        command: '1_2_7'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '⬜',
                    payload: {
                        command: '1_2_8'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '⬜',
                    payload: {
                        command: '1_2_9'
                    },
                    color: Keyboard.SECONDARY_COLOR
                })
            ]
        ])
    });
});
hearCommand('1_3', async (context) => {
    await context.send({
        message: `ᅠ`,
        keyboard: Keyboard.keyboard([
            [
                Keyboard.textButton({
                    label: '❌',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '⭕',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '❌',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                })
            ],
            [
                Keyboard.textButton({
                    label: '⬜',
                    payload: {
                        command: '1_3_4'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '⭕',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '⬜',
                    payload: {
                        command: '1_3_6'
                    },
                    color: Keyboard.SECONDARY_COLOR
                })
            ],
            [
                Keyboard.textButton({
                    label: '⬜',
                    payload: {
                        command: '1_3_7'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '⬜',
                    payload: {
                        command: '1_3_8'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '⬜',
                    payload: {
                        command: '1_3_9'
                    },
                    color: Keyboard.SECONDARY_COLOR
                })
            ]
        ])
    });
});
hearCommand('1_4', async (context) => {
    await context.send({
        message: `ᅠ`,
        keyboard: Keyboard.keyboard([
            [
                Keyboard.textButton({
                    label: '❌',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '⬜',
                    payload: {
                        command: '1_4_2'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '⬜',
                    payload: {
                        command: '1_4_3'
                    },
                    color: Keyboard.SECONDARY_COLOR
                })
            ],
            [
                Keyboard.textButton({
                    label: '❌',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '⭕',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '⬜',
                    payload: {
                        command: '1_4_6'
                    },
                    color: Keyboard.SECONDARY_COLOR
                })
            ],
            [
                Keyboard.textButton({
                    label: '⭕',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '⬜',
                    payload: {
                        command: '1_4_8'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '⬜',
                    payload: {
                        command: '1_4_9'
                    },
                    color: Keyboard.SECONDARY_COLOR
                })
            ]
        ])
    });
});
hearCommand('1_6', async (context) => {
    await context.send({
        message: `ᅠ`,
        keyboard: Keyboard.keyboard([
            [
                Keyboard.textButton({
                    label: '❌',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '⬜',
                    payload: {
                        command: '1_6_2'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '⭕',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                })
            ],
            [
                Keyboard.textButton({
                    label: '⬜',
                    payload: {
                        command: '1_6_4'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '⭕',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '❌',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                })
            ],
            [
                Keyboard.textButton({
                    label: '⬜',
                    payload: {
                        command: '1_6_7'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '⬜',
                    payload: {
                        command: '1_6_8'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '⬜',
                    payload: {
                        command: '1_6_9'
                    },
                    color: Keyboard.SECONDARY_COLOR
                })
            ]
        ])
    });
});
hearCommand('1_7', async (context) => {
    await context.send({
        message: `ᅠ`,
        keyboard: Keyboard.keyboard([
            [
                Keyboard.textButton({
                    label: '❌',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '⬜',
                    payload: {
                        command: '1_7_2'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '⬜',
                    payload: {
                        command: '1_7_3'
                    },
                    color: Keyboard.SECONDARY_COLOR
                })
            ],
            [
                Keyboard.textButton({
                    label: '⭕',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '⭕',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '⬜',
                    payload: {
                        command: '1_7_6'
                    },
                    color: Keyboard.SECONDARY_COLOR
                })
            ],
            [
                Keyboard.textButton({
                    label: '❌',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '⬜',
                    payload: {
                        command: '1_7_8'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '⬜',
                    payload: {
                        command: '1_7_9'
                    },
                    color: Keyboard.SECONDARY_COLOR
                })
            ]
        ])
    });
});
hearCommand('1_8', async (context) => {
    await context.send({
        message: `ᅠ`,
        keyboard: Keyboard.keyboard([
            [
                Keyboard.textButton({
                    label: '❌',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '⬜',
                    payload: {
                        command: '1_8_2'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '⬜',
                    payload: {
                        command: '1_8_3'
                    },
                    color: Keyboard.SECONDARY_COLOR
                })
            ],
            [
                Keyboard.textButton({
                    label: '⬜',
                    payload: {
                        command: '1_8_4'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '⭕',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '⬜',
                    payload: {
                        command: '1_8_6'
                    },
                    color: Keyboard.SECONDARY_COLOR
                })
            ],
            [
                Keyboard.textButton({
                    label: '⭕',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '❌',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '⬜',
                    payload: {
                        command: '1_8_9'
                    },
                    color: Keyboard.SECONDARY_COLOR
                })
            ]
        ])
    });
});
hearCommand('1_9', async (context) => {
    await context.send({
        message: `ᅠ`,
        keyboard: Keyboard.keyboard([
            [
                Keyboard.textButton({
                    label: '❌',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '⭕',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '⬜',
                    payload: {
                        command: '1_9_3'
                    },
                    color: Keyboard.SECONDARY_COLOR
                })
            ],
            [
                Keyboard.textButton({
                    label: '⬜',
                    payload: {
                        command: '1_9_4'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '⭕',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '⬜',
                    payload: {
                        command: '1_9_6'
                    },
                    color: Keyboard.SECONDARY_COLOR
                })
            ],
            [
                Keyboard.textButton({
                    label: '⬜',
                    payload: {
                        command: '1_9_7'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '⬜',
                    payload: {
                        command: '1_9_8'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '❌',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                })
            ]
        ])
    });
});
hearCommand('1_2_4', async (context) => {
    await context.send({
        message: `К сожалению вы проиграли`,
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
                    label: '✅ Попробовать ещё раз',
                    payload: {
                        command: 'начать игру'
                    },
                    color: Keyboard.PRIMARY_COLOR
                })
            ]
        ])
    });
});
hearCommand('1_2_6', async (context) => {
    await context.send({
        message: `К сожалению вы проиграли`,
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
                    label: '✅ Попробовать ещё раз',
                    payload: {
                        command: 'начать игру'
                    },
                    color: Keyboard.PRIMARY_COLOR
                })
            ]
        ])
    });
});
hearCommand('1_2_7', async (context) => {
    await context.send({
        message: `ᅠ`,
        keyboard: Keyboard.keyboard([
            [
                Keyboard.textButton({
                    label: '❌',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '❌',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '⭕',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                })
            ],
            [
                Keyboard.textButton({
                    label: '⭕',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '⭕',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '⬜',
                    payload: {
                        command: '1_2_7_6'
                    },
                    color: Keyboard.SECONDARY_COLOR
                })
            ],
            [
                Keyboard.textButton({
                    label: '❌',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '⬜',
                    payload: {
                        command: '1_2_7_8'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '⬜',
                    payload: {
                        command: '1_2_7_9'
                    },
                    color: Keyboard.SECONDARY_COLOR
                })
            ]
        ])
    });
});
hearCommand('1_2_7_6', async (context) => {
    await context.send({
        message: `ᅠ`,
        keyboard: Keyboard.keyboard([
            [
                Keyboard.textButton({
                    label: '❌',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '❌',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '⭕',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                })
            ],
            [
                Keyboard.textButton({
                    label: '⭕',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '⭕',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '❌',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                })
            ],
            [
                Keyboard.textButton({
                    label: '❌',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '⭕',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '⬜',
                    payload: {
                        command: '1_2_7_6_9'
                    },
                    color: Keyboard.SECONDARY_COLOR
                })
            ]
        ])
    });
});
hearCommand('1_2_7_6_9', async (context) => {
    await context.send({
        message: `Игра закончилась ничьёй`,
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
                    label: '✅ Попробовать ещё раз',
                    payload: {
                        command: 'начать игру'
                    },
                    color: Keyboard.PRIMARY_COLOR
                })
            ]
        ])
    });
});
hearCommand('1_2_7_8', async (context) => {
    await context.send({
        message: `К сожалению вы проиграли`,
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
                    label: '✅ Попробовать ещё раз',
                    payload: {
                        command: 'начать игру'
                    },
                    color: Keyboard.PRIMARY_COLOR
                })
            ]
        ])
    });
});
hearCommand('1_2_7_9', async (context) => {
    await context.send({
        message: `К сожалению вы проиграли`,
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
                    label: '✅ Попробовать ещё раз',
                    payload: {
                        command: 'начать игру'
                    },
                    color: Keyboard.PRIMARY_COLOR
                })
            ]
        ])
    });
});
hearCommand('1_3_4', async (context) => {
    await context.send({
        message: `К сожалению вы проиграли`,
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
                    label: '✅ Попробовать ещё раз',
                    payload: {
                        command: 'начать игру'
                    },
                    color: Keyboard.PRIMARY_COLOR
                })
            ]
        ])
    });
});
hearCommand('1_3_6', async (context) => {
    await context.send({
        message: `К сожалению вы проиграли`,
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
                    label: '✅ Попробовать ещё раз',
                    payload: {
                        command: 'начать игру'
                    },
                    color: Keyboard.PRIMARY_COLOR
                })
            ]
        ])
    });
});
hearCommand('1_3_7', async (context) => {
    await context.send({
        message: `К сожалению вы проиграли`,
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
                    label: '✅ Попробовать ещё раз',
                    payload: {
                        command: 'начать игру'
                    },
                    color: Keyboard.PRIMARY_COLOR
                })
            ]
        ])
    });
});
hearCommand('1_3_8', async (context) => {
    await context.send({
        message: `ᅠ`,
        keyboard: Keyboard.keyboard([
            [
                Keyboard.textButton({
                    label: '❌',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '⭕',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '❌',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                })
            ],
            [
                Keyboard.textButton({
                    label: '⭕',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '⭕',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '⬜',
                    payload: {
                        command: '1_3_8_6'
                    },
                    color: Keyboard.SECONDARY_COLOR
                })
            ],
            [
                Keyboard.textButton({
                    label: '⬜',
                    payload: {
                        command: '1_3_8_7'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '❌',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '⬜',
                    payload: {
                        command: '1_3_8_9'
                    },
                    color: Keyboard.SECONDARY_COLOR
                })
            ]
        ])
    });
});
hearCommand('1_3_8_6', async (context) => {
    await context.send({
        message: `ᅠ`,
        keyboard: Keyboard.keyboard([
            [
                Keyboard.textButton({
                    label: '❌',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '⭕',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '❌',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                })
            ],
            [
                Keyboard.textButton({
                    label: '⭕',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '⭕',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '❌',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                })
            ],
            [
                Keyboard.textButton({
                    label: '⬜',
                    payload: {
                        command: '1_3_8_6_7'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '❌',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '⭕',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                })
            ]
        ])
    });
});
hearCommand('1_3_8_6_7', async (context) => {
    await context.send({
        message: `Игра закончилась ничьёй`,
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
                    label: '✅ Попробовать ещё раз',
                    payload: {
                        command: 'начать игру'
                    },
                    color: Keyboard.PRIMARY_COLOR
                })
            ]
        ])
    });
});
hearCommand('1_3_8_7', async (context) => {
    await context.send({
        message: `К сожалению вы проиграли`,
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
                    label: '✅ Попробовать ещё раз',
                    payload: {
                        command: 'начать игру'
                    },
                    color: Keyboard.PRIMARY_COLOR
                })
            ]
        ])
    });
});
hearCommand('1_3_8_9', async (context) => {
    await context.send({
        message: `К сожалению вы проиграли`,
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
                    label: '✅ Попробовать ещё раз',
                    payload: {
                        command: 'начать игру'
                    },
                    color: Keyboard.PRIMARY_COLOR
                })
            ]
        ])
    });
});
hearCommand('1_4_2', async (context) => {
    await context.send({
        message: `К сожалению вы проиграли`,
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
                    label: '✅ Попробовать ещё раз',
                    payload: {
                        command: 'начать игру'
                    },
                    color: Keyboard.PRIMARY_COLOR
                })
            ]
        ])
    });
});
hearCommand('1_4_3', async (context) => {
    await context.send({
        message: `ᅠ`,
        keyboard: Keyboard.keyboard([
            [
                Keyboard.textButton({
                    label: '❌',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '⭕',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '❌',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                })
            ],
            [
                Keyboard.textButton({
                    label: '❌',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '⭕',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '⬜',
                    payload: {
                        command: '1_4_3_6'
                    },
                    color: Keyboard.SECONDARY_COLOR
                })
            ],
            [
                Keyboard.textButton({
                    label: '⭕',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '⬜',
                    payload: {
                        command: '1_4_3_8'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '⬜',
                    payload: {
                        command: '1_4_3_9'
                    },
                    color: Keyboard.SECONDARY_COLOR
                })
            ]
        ])
    });
});
hearCommand('1_4_3_6', async (context) => {
    await context.send({
        message: `К сожалению вы проиграли`,
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
                    label: '✅ Попробовать ещё раз',
                    payload: {
                        command: 'начать игру'
                    },
                    color: Keyboard.PRIMARY_COLOR
                })
            ]
        ])
    });
});
hearCommand('1_4_3_8', async (context) => {
    await context.send({
        message: `ᅠ`,
        keyboard: Keyboard.keyboard([
            [
                Keyboard.textButton({
                    label: '❌',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '⭕',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '❌',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                })
            ],
            [
                Keyboard.textButton({
                    label: '❌',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '⭕',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '⭕',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                })
            ],
            [
                Keyboard.textButton({
                    label: '⭕',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '❌',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '⬜',
                    payload: {
                        command: '1_4_3_8_9'
                    },
                    color: Keyboard.SECONDARY_COLOR
                })
            ]
        ])
    });
});
hearCommand('1_4_3_8_9', async (context) => {
    await context.send({
        message: `Игра закончилась ничьёй`,
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
                    label: '✅ Попробовать ещё раз',
                    payload: {
                        command: 'начать игру'
                    },
                    color: Keyboard.PRIMARY_COLOR
                })
            ]
        ])
    });
});
hearCommand('1_4_6', async (context) => {
    await context.send({
        message: `К сожалению вы проиграли`,
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
                    label: '✅ Попробовать ещё раз',
                    payload: {
                        command: 'начать игру'
                    },
                    color: Keyboard.PRIMARY_COLOR
                })
            ]
        ])
    });
});
hearCommand('1_4_8', async (context) => {
    await context.send({
        message: `К сожалению вы проиграли`,
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
                    label: '✅ Попробовать ещё раз',
                    payload: {
                        command: 'начать игру'
                    },
                    color: Keyboard.PRIMARY_COLOR
                })
            ]
        ])
    });
});
hearCommand('1_4_9', async (context) => {
    await context.send({
        message: `К сожалению вы проиграли`,
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
                    label: '✅ Попробовать ещё раз',
                    payload: {
                        command: 'начать игру'
                    },
                    color: Keyboard.PRIMARY_COLOR
                })
            ]
        ])
    });
});
hearCommand('1_6_2', async (context) => {
    await context.send({
        message: `К сожалению вы проиграли`,
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
                    label: '✅ Попробовать ещё раз',
                    payload: {
                        command: 'начать игру'
                    },
                    color: Keyboard.PRIMARY_COLOR
                })
            ]
        ])
    });
});
hearCommand('1_6_4', async (context) => {
    await context.send({
        message: `К сожалению вы проиграли`,
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
                    label: '✅ Попробовать ещё раз',
                    payload: {
                        command: 'начать игру'
                    },
                    color: Keyboard.PRIMARY_COLOR
                })
            ]
        ])
    });
});
hearCommand('1_6_7', async (context) => {
    await context.send({
        message: `ᅠ`,
        keyboard: Keyboard.keyboard([
            [
                Keyboard.textButton({
                    label: '❌',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '⬜',
                    payload: {
                        command: '1_6_7_2'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '⭕',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                })
            ],
            [
                Keyboard.textButton({
                    label: '⭕',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '⭕',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '❌',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                })
            ],
            [
                Keyboard.textButton({
                    label: '❌',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '⬜',
                    payload: {
                        command: '1_6_7_8'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '⬜',
                    payload: {
                        command: '1_6_7_9'
                    },
                    color: Keyboard.SECONDARY_COLOR
                })
            ]
        ])
    });
});
hearCommand('1_6_7_2', async (context) => {
    await context.send({
        message: `ᅠ`,
        keyboard: Keyboard.keyboard([
            [
                Keyboard.textButton({
                    label: '❌',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '❌',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '⭕',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                })
            ],
            [
                Keyboard.textButton({
                    label: '⭕',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '⭕',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '❌',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                })
            ],
            [
                Keyboard.textButton({
                    label: '❌',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '⭕',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '⬜',
                    payload: {
                        command: '1_6_7_2_9'
                    },
                    color: Keyboard.SECONDARY_COLOR
                })
            ]
        ])
    });
});
hearCommand('1_6_7_2_9', async (context) => {
    await context.send({
        message: `Игра закончилась ничьёй`,
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
                    label: '✅ Попробовать ещё раз',
                    payload: {
                        command: 'начать игру'
                    },
                    color: Keyboard.PRIMARY_COLOR
                })
            ]
        ])
    });
});
hearCommand('1_6_7_8', async (context) => {
    await context.send({
        message: `ᅠ`,
        keyboard: Keyboard.keyboard([
            [
                Keyboard.textButton({
                    label: '❌',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '⬜',
                    payload: {
                        command: '1_6_7_8_2'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '⭕',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                })
            ],
            [
                Keyboard.textButton({
                    label: '⭕',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '⭕',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '❌',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                })
            ],
            [
                Keyboard.textButton({
                    label: '❌',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '❌',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '⭕',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                })
            ]
        ])
    });
});
hearCommand('1_6_7_8_2', async (context) => {
    await context.send({
        message: `Игра закончилась ничьёй`,
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
                    label: '✅ Попробовать ещё раз',
                    payload: {
                        command: 'начать игру'
                    },
                    color: Keyboard.PRIMARY_COLOR
                })
            ]
        ])
    });
});
hearCommand('1_6_7_9', async (context) => {
    await context.send({
        message: `ᅠ`,
        keyboard: Keyboard.keyboard([
            [
                Keyboard.textButton({
                    label: '❌',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '⬜',
                    payload: {
                        command: '1_6_7_9_2'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '⭕',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                })
            ],
            [
                Keyboard.textButton({
                    label: '⭕',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '⭕',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '❌',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                })
            ],
            [
                Keyboard.textButton({
                    label: '❌',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '⭕',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '❌',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                })
            ]
        ])
    });
});
hearCommand('1_6_7_9_2', async (context) => {
    await context.send({
        message: `Игра закончилась ничьёй`,
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
                    label: '✅ Попробовать ещё раз',
                    payload: {
                        command: 'начать игру'
                    },
                    color: Keyboard.PRIMARY_COLOR
                })
            ]
        ])
    });
});
hearCommand('1_6_8', async (context) => {
    await context.send({
        message: `К сожалению вы проиграли`,
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
                    label: '✅ Попробовать ещё раз',
                    payload: {
                        command: 'начать игру'
                    },
                    color: Keyboard.PRIMARY_COLOR
                })
            ]
        ])
    });
});
hearCommand('1_6_9', async (context) => {
    await context.send({
        message: `К сожалению вы проиграли`,
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
                    label: '✅ Попробовать ещё раз',
                    payload: {
                        command: 'начать игру'
                    },
                    color: Keyboard.PRIMARY_COLOR
                })
            ]
        ])
    });
});
hearCommand('1_7_2', async (context) => {
    await context.send({
        message: `К сожалению вы проиграли`,
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
                    label: '✅ Попробовать ещё раз',
                    payload: {
                        command: 'начать игру'
                    },
                    color: Keyboard.PRIMARY_COLOR
                })
            ]
        ])
    });
});
hearCommand('1_7_3', async (context) => {
    await context.send({
        message: `К сожалению вы проиграли`,
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
                    label: '✅ Попробовать ещё раз',
                    payload: {
                        command: 'начать игру'
                    },
                    color: Keyboard.PRIMARY_COLOR
                })
            ]
        ])
    });
});
hearCommand('1_7_6', async (context) => {
    await context.send({
        message: `ᅠ`,
        keyboard: Keyboard.keyboard([
            [
                Keyboard.textButton({
                    label: '❌',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '⭕',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '⬜',
                    payload: {
                        command: '1_7_6_3'
                    },
                    color: Keyboard.SECONDARY_COLOR
                })
            ],
            [
                Keyboard.textButton({
                    label: '⭕',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '⭕',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '❌',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                })
            ],
            [
                Keyboard.textButton({
                    label: '❌',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '⬜',
                    payload: {
                        command: '1_7_6_8'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '⬜',
                    payload: {
                        command: '1_7_6_9'
                    },
                    color: Keyboard.SECONDARY_COLOR
                })
            ]
        ])
    });
});
hearCommand('1_7_6_3', async (context) => {
    await context.send({
        message: `К сожалению вы проиграли`,
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
                    label: '✅ Попробовать ещё раз',
                    payload: {
                        command: 'начать игру'
                    },
                    color: Keyboard.PRIMARY_COLOR
                })
            ]
        ])
    });
});
hearCommand('1_7_6_8', async (context) => {
    await context.send({
        message: `ᅠ`,
        keyboard: Keyboard.keyboard([
            [
                Keyboard.textButton({
                    label: '❌',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '⭕',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '⬜',
                    payload: {
                        command: '1_7_6_8_3'
                    },
                    color: Keyboard.SECONDARY_COLOR
                })
            ],
            [
                Keyboard.textButton({
                    label: '⭕',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '⭕',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '❌',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                })
            ],
            [
                Keyboard.textButton({
                    label: '❌',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '❌',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '⭕',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                })
            ]
        ])
    });
});
hearCommand('1_7_6_8_3', async (context) => {
    await context.send({
        message: `Игра закончилась ничьёй`,
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
                    label: '✅ Попробовать ещё раз',
                    payload: {
                        command: 'начать игру'
                    },
                    color: Keyboard.PRIMARY_COLOR
                })
            ]
        ])
    });
});
hearCommand('1_7_6_9', async (context) => {
    await context.send({
        message: `К сожалению вы проиграли`,
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
                    label: '✅ Попробовать ещё раз',
                    payload: {
                        command: 'начать игру'
                    },
                    color: Keyboard.PRIMARY_COLOR
                })
            ]
        ])
    });
});
hearCommand('1_7_8', async (context) => {
    await context.send({
        message: `К сожалению вы проиграли`,
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
                    label: '✅ Попробовать ещё раз',
                    payload: {
                        command: 'начать игру'
                    },
                    color: Keyboard.PRIMARY_COLOR
                })
            ]
        ])
    });
});
hearCommand('1_7_9', async (context) => {
    await context.send({
        message: `К сожалению вы проиграли`,
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
                    label: '✅ Попробовать ещё раз',
                    payload: {
                        command: 'начать игру'
                    },
                    color: Keyboard.PRIMARY_COLOR
                })
            ]
        ])
    });
});
hearCommand('1_8_2', async (context) => {
    await context.send({
        message: `К сожалению вы проиграли`,
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
                    label: '✅ Попробовать ещё раз',
                    payload: {
                        command: 'начать игру'
                    },
                    color: Keyboard.PRIMARY_COLOR
                })
            ]
        ])
    });
});
hearCommand('1_8_3', async (context) => {
    await context.send({
        message: `ᅠ`,
        keyboard: Keyboard.keyboard([
            [
                Keyboard.textButton({
                    label: '❌',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '⭕',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '❌',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                })
            ],
            [
                Keyboard.textButton({
                    label: '⬜',
                    payload: {
                        command: '1_8_3_4'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '⭕',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '⬜',
                    payload: {
                        command: '1_8_3_6'
                    },
                    color: Keyboard.SECONDARY_COLOR
                })
            ],
            [
                Keyboard.textButton({
                    label: '⭕',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '❌',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '⬜',
                    payload: {
                        command: '1_8_3_9'
                    },
                    color: Keyboard.SECONDARY_COLOR
                })
            ]
        ])
    });
});
hearCommand('1_8_3_4', async (context) => {
    await context.send({
        message: `ᅠ`,
        keyboard: Keyboard.keyboard([
            [
                Keyboard.textButton({
                    label: '❌',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '⭕',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '❌',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                })
            ],
            [
                Keyboard.textButton({
                    label: '❌',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '⭕',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '⭕',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                })
            ],
            [
                Keyboard.textButton({
                    label: '⭕',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '❌',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '⬜',
                    payload: {
                        command: '1_8_3_4_9'
                    },
                    color: Keyboard.SECONDARY_COLOR
                })
            ]
        ])
    });
});
hearCommand('1_8_3_4_9', async (context) => {
    await context.send({
        message: `Игра закончилась ничьёй`,
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
                    label: '✅ Попробовать ещё раз',
                    payload: {
                        command: 'начать игру'
                    },
                    color: Keyboard.PRIMARY_COLOR
                })
            ]
        ])
    });
});
hearCommand('1_8_3_6', async (context) => {
    await context.send({
        message: `ᅠ`,
        keyboard: Keyboard.keyboard([
            [
                Keyboard.textButton({
                    label: '❌',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '⭕',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '❌',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                })
            ],
            [
                Keyboard.textButton({
                    label: '⬜',
                    payload: {
                        command: '1_8_3_6_4'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '⭕',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '❌',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                })
            ],
            [
                Keyboard.textButton({
                    label: '⭕',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '❌',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '⭕',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                })
            ]
        ])
    });
});
hearCommand('1_8_3_6_4', async (context) => {
    await context.send({
        message: `Игра закончилась ничьёй`,
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
                    label: '✅ Попробовать ещё раз',
                    payload: {
                        command: 'начать игру'
                    },
                    color: Keyboard.PRIMARY_COLOR
                })
            ]
        ])
    });
});
hearCommand('1_8_3_9', async (context) => {
    await context.send({
        message: `ᅠ`,
        keyboard: Keyboard.keyboard([
            [
                Keyboard.textButton({
                    label: '❌',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '⭕',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '❌',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                })
            ],
            [
                Keyboard.textButton({
                    label: '⬜',
                    payload: {
                        command: '1_8_3_9_4'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '⭕',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '⭕',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                })
            ],
            [
                Keyboard.textButton({
                    label: '⭕',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '❌',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '❌',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                })
            ]
        ])
    });
});
hearCommand('1_8_3_9_4', async (context) => {
    await context.send({
        message: `Игра закончилась ничьёй`,
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
                    label: '✅ Попробовать ещё раз',
                    payload: {
                        command: 'начать игру'
                    },
                    color: Keyboard.PRIMARY_COLOR
                })
            ]
        ])
    });
});
hearCommand('1_8_4', async (context) => {
    await context.send({
        message: `К сожалению вы проиграли`,
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
                    label: '✅ Попробовать ещё раз',
                    payload: {
                        command: 'начать игру'
                    },
                    color: Keyboard.PRIMARY_COLOR
                })
            ]
        ])
    });
});
hearCommand('1_8_6', async (context) => {
    await context.send({
        message: `К сожалению вы проиграли`,
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
                    label: '✅ Попробовать ещё раз',
                    payload: {
                        command: 'начать игру'
                    },
                    color: Keyboard.PRIMARY_COLOR
                })
            ]
        ])
    });
});
hearCommand('1_8_9', async (context) => {
    await context.send({
        message: `К сожалению вы проиграли`,
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
                    label: '✅ Попробовать ещё раз',
                    payload: {
                        command: 'начать игру'
                    },
                    color: Keyboard.PRIMARY_COLOR
                })
            ]
        ])
    });
});
hearCommand('1_9_3', async (context) => {
    await context.send({
        message: `К сожалению вы проиграли`,
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
                    label: '✅ Попробовать ещё раз',
                    payload: {
                        command: 'начать игру'
                    },
                    color: Keyboard.PRIMARY_COLOR
                })
            ]
        ])
    });
});
hearCommand('1_9_4', async (context) => {
    await context.send({
        message: `К сожалению вы проиграли`,
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
                    label: '✅ Попробовать ещё раз',
                    payload: {
                        command: 'начать игру'
                    },
                    color: Keyboard.PRIMARY_COLOR
                })
            ]
        ])
    });
});
hearCommand('1_9_6', async (context) => {
    await context.send({
        message: `К сожалению вы проиграли`,
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
                    label: '✅ Попробовать ещё раз',
                    payload: {
                        command: 'начать игру'
                    },
                    color: Keyboard.PRIMARY_COLOR
                })
            ]
        ])
    });
});
hearCommand('1_9_7', async (context) => {
    await context.send({
        message: `К сожалению вы проиграли`,
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
                    label: '✅ Попробовать ещё раз',
                    payload: {
                        command: 'начать игру'
                    },
                    color: Keyboard.PRIMARY_COLOR
                })
            ]
        ])
    });
});
hearCommand('1_9_8', async (context) => {
    await context.send({
        message: `ᅠ`,
        keyboard: Keyboard.keyboard([
            [
                Keyboard.textButton({
                    label: '❌',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '⭕',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '⬜',
                    payload: {
                        command: '1_9_8_3'
                    },
                    color: Keyboard.SECONDARY_COLOR
                })
            ],
            [
                Keyboard.textButton({
                    label: '⬜',
                    payload: {
                        command: '1_9_8_4'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '⭕',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '⬜',
                    payload: {
                        command: '1_9_8_6'
                    },
                    color: Keyboard.SECONDARY_COLOR
                })
            ],
            [
                Keyboard.textButton({
                    label: '⭕',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '❌',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '❌',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                })
            ]
        ])
    });
});
hearCommand('1_9_8_3', async (context) => {
    await context.send({
        message: `ᅠ`,
        keyboard: Keyboard.keyboard([
            [
                Keyboard.textButton({
                    label: '❌',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '⭕',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '❌',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                })
            ],
            [
                Keyboard.textButton({
                    label: '⬜',
                    payload: {
                        command: '1_9_8_3_4'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '⭕',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '⭕',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                })
            ],
            [
                Keyboard.textButton({
                    label: '⭕',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '❌',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '❌',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                })
            ]
        ])
    });
});
hearCommand('1_9_8_3_4', async (context) => {
    await context.send({
        message: `Игра закончилась ничьёй`,
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
                    label: '✅ Попробовать ещё раз',
                    payload: {
                        command: 'начать игру'
                    },
                    color: Keyboard.PRIMARY_COLOR
                })
            ]
        ])
    });
});
hearCommand('1_9_8_4', async (context) => {
    await context.send({
        message: `К сожалению вы проиграли`,
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
                    label: '✅ Попробовать ещё раз',
                    payload: {
                        command: 'начать игру'
                    },
                    color: Keyboard.PRIMARY_COLOR
                })
            ]
        ])
    });
});
hearCommand('1_9_8_6', async (context) => {
    await context.send({
        message: `К сожалению вы проиграли`,
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
                    label: '✅ Попробовать ещё раз',
                    payload: {
                        command: 'начать игру'
                    },
                    color: Keyboard.PRIMARY_COLOR
                })
            ]
        ])
    });
});
hearCommand('2', async (context) => {
    await context.send({
        message: `ᅠ`,
        keyboard: Keyboard.keyboard([
            [
                Keyboard.textButton({
                    label: '⬜',
                    payload: {
                        command: '2_1'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '❌',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '⬜',
                    payload: {
                        command: '2_3'
                    },
                    color: Keyboard.SECONDARY_COLOR
                })
            ],
            [
                Keyboard.textButton({
                    label: '⬜',
                    payload: {
                        command: '2_4'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '⭕',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '⬜',
                    payload: {
                        command: '2_6'
                    },
                    color: Keyboard.SECONDARY_COLOR
                })
            ],
            [
                Keyboard.textButton({
                    label: '⬜',
                    payload: {
                        command: '2_7'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '⬜',
                    payload: {
                        command: '2_8'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '⬜',
                    payload: {
                        command: '2_9'
                    },
                    color: Keyboard.SECONDARY_COLOR
                })
            ]
        ])
    });
});
hearCommand('2_1', async (context) => {
    await context.send({
        message: `ᅠ`,
        keyboard: Keyboard.keyboard([
            [
                Keyboard.textButton({
                    label: '❌',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '❌',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '⭕',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                })
            ],
            [
                Keyboard.textButton({
                    label: '⬜',
                    payload: {
                        command: '2_1_4'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '⭕',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '⬜',
                    payload: {
                        command: '2_1_6'
                    },
                    color: Keyboard.SECONDARY_COLOR
                })
            ],
            [
                Keyboard.textButton({
                    label: '⬜',
                    payload: {
                        command: '2_1_7'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '⬜',
                    payload: {
                        command: '2_1_8'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '⬜',
                    payload: {
                        command: '2_1_9'
                    },
                    color: Keyboard.SECONDARY_COLOR
                })
            ]
        ])
    });
});
hearCommand('2_1_4', async (context) => {
    await context.send({
        message: `К сожалению вы проиграли`,
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
                    label: '✅ Попробовать ещё раз',
                    payload: {
                        command: 'начать игру'
                    },
                    color: Keyboard.PRIMARY_COLOR
                })
            ]
        ])
    });
});
hearCommand('2_1_6', async (context) => {
    await context.send({
        message: `К сожалению вы проиграли`,
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
                    label: '✅ Попробовать ещё раз',
                    payload: {
                        command: 'начать игру'
                    },
                    color: Keyboard.PRIMARY_COLOR
                })
            ]
        ])
    });
});
hearCommand('2_1_7', async (context) => {
    await context.send({
        message: `ᅠ`,
        keyboard: Keyboard.keyboard([
            [
                Keyboard.textButton({
                    label: '❌',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '❌',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '⭕',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                })
            ],
            [
                Keyboard.textButton({
                    label: '⭕',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '⭕',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '⬜',
                    payload: {
                        command: '2_1_7_6'
                    },
                    color: Keyboard.SECONDARY_COLOR
                })
            ],
            [
                Keyboard.textButton({
                    label: '❌',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '⬜',
                    payload: {
                        command: '2_1_7_8'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '⬜',
                    payload: {
                        command: '2_1_7_9'
                    },
                    color: Keyboard.SECONDARY_COLOR
                })
            ]
        ])
    });
});
hearCommand('2_1_7_6', async (context) => {
    await context.send({
        message: `ᅠ`,
        keyboard: Keyboard.keyboard([
            [
                Keyboard.textButton({
                    label: '❌',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '❌',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '⭕',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                })
            ],
            [
                Keyboard.textButton({
                    label: '⭕',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '⭕',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '❌',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                })
            ],
            [
                Keyboard.textButton({
                    label: '❌',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '⭕',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '⬜',
                    payload: {
                        command: '2_1_7_6_9'
                    },
                    color: Keyboard.SECONDARY_COLOR
                })
            ]
        ])
    });
});
hearCommand('2_1_7_6_9', async (context) => {
    await context.send({
        message: `Игра закончилась ничьёй`,
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
                    label: '✅ Попробовать ещё раз',
                    payload: {
                        command: 'начать игру'
                    },
                    color: Keyboard.PRIMARY_COLOR
                })
            ]
        ])
    });
});
hearCommand('2_1_7_8', async (context) => {
    await context.send({
        message: `К сожалению вы проиграли`,
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
                    label: '✅ Попробовать ещё раз',
                    payload: {
                        command: 'начать игру'
                    },
                    color: Keyboard.PRIMARY_COLOR
                })
            ]
        ])
    });
});
hearCommand('2_1_7_9', async (context) => {
    await context.send({
        message: `К сожалению вы проиграли`,
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
                    label: '✅ Попробовать ещё раз',
                    payload: {
                        command: 'начать игру'
                    },
                    color: Keyboard.PRIMARY_COLOR
                })
            ]
        ])
    });
});
hearCommand('2_1_8', async (context) => {
    await context.send({
        message: `К сожалению вы проиграли`,
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
                    label: '✅ Попробовать ещё раз',
                    payload: {
                        command: 'начать игру'
                    },
                    color: Keyboard.PRIMARY_COLOR
                })
            ]
        ])
    });
});
hearCommand('2_1_9', async (context) => {
    await context.send({
        message: `К сожалению вы проиграли`,
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
                    label: '✅ Попробовать ещё раз',
                    payload: {
                        command: 'начать игру'
                    },
                    color: Keyboard.PRIMARY_COLOR
                })
            ]
        ])
    });
});
hearCommand('2_3', async (context) => {
    await context.send({
        message: `ᅠ`,
        keyboard: Keyboard.keyboard([
            [
                Keyboard.textButton({
                    label: '⭕',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '❌',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '❌',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                })
            ],
            [
                Keyboard.textButton({
                    label: '⬜',
                    payload: {
                        command: '2_3_4'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '⭕',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '⬜',
                    payload: {
                        command: '2_3_6'
                    },
                    color: Keyboard.SECONDARY_COLOR
                })
            ],
            [
                Keyboard.textButton({
                    label: '⬜',
                    payload: {
                        command: '2_3_7'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '⬜',
                    payload: {
                        command: '2_3_8'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '⬜',
                    payload: {
                        command: '2_3_9'
                    },
                    color: Keyboard.SECONDARY_COLOR
                })
            ]
        ])
    });
});
hearCommand('2_3_4', async (context) => {
    await context.send({
        message: `К сожалению вы проиграли`,
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
                    label: '✅ Попробовать ещё раз',
                    payload: {
                        command: 'начать игру'
                    },
                    color: Keyboard.PRIMARY_COLOR
                })
            ]
        ])
    });
});
hearCommand('2_3_6', async (context) => {
    await context.send({
        message: `К сожалению вы проиграли`,
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
                    label: '✅ Попробовать ещё раз',
                    payload: {
                        command: 'начать игру'
                    },
                    color: Keyboard.PRIMARY_COLOR
                })
            ]
        ])
    });
});
hearCommand('2_3_7', async (context) => {
    await context.send({
        message: `К сожалению вы проиграли`,
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
                    label: '✅ Попробовать ещё раз',
                    payload: {
                        command: 'начать игру'
                    },
                    color: Keyboard.PRIMARY_COLOR
                })
            ]
        ])
    });
});
hearCommand('2_3_8', async (context) => {
    await context.send({
        message: `К сожалению вы проиграли`,
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
                    label: '✅ Попробовать ещё раз',
                    payload: {
                        command: 'начать игру'
                    },
                    color: Keyboard.PRIMARY_COLOR
                })
            ]
        ])
    });
});
hearCommand('2_3_9', async (context) => {
    await context.send({
        message: `ᅠ`,
        keyboard: Keyboard.keyboard([
            [
                Keyboard.textButton({
                    label: '⭕',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '❌',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '❌',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                })
            ],
            [
                Keyboard.textButton({
                    label: '⬜',
                    payload: {
                        command: '2_3_9_4'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '⭕',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '⭕',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                })
            ],
            [
                Keyboard.textButton({
                    label: '⬜',
                    payload: {
                        command: '2_3_9_7'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '⬜',
                    payload: {
                        command: '2_3_9_8'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '❌',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                })
            ]
        ])
    });
});
hearCommand('2_3_9_4', async (context) => {
    await context.send({
        message: `ᅠ`,
        keyboard: Keyboard.keyboard([
            [
                Keyboard.textButton({
                    label: '⭕',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '❌',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '❌',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                })
            ],
            [
                Keyboard.textButton({
                    label: '❌',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '⭕',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '⭕',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                })
            ],
            [
                Keyboard.textButton({
                    label: '⭕',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '⬜',
                    payload: {
                        command: '2_3_9_4_8'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '❌',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                })
            ]
        ])
    });
});
hearCommand('2_3_9_4_8', async (context) => {
    await context.send({
        message: `Игра закончилась ничьёй`,
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
                    label: '✅ Попробовать ещё раз',
                    payload: {
                        command: 'начать игру'
                    },
                    color: Keyboard.PRIMARY_COLOR
                })
            ]
        ])
    });
});
hearCommand('2_3_9_7', async (context) => {
    await context.send({
        message: `К сожалению вы проиграли`,
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
                    label: '✅ Попробовать ещё раз',
                    payload: {
                        command: 'начать игру'
                    },
                    color: Keyboard.PRIMARY_COLOR
                })
            ]
        ])
    });
});
hearCommand('2_3_9_8', async (context) => {
    await context.send({
        message: `К сожалению вы проиграли`,
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
                    label: '✅ Попробовать ещё раз',
                    payload: {
                        command: 'начать игру'
                    },
                    color: Keyboard.PRIMARY_COLOR
                })
            ]
        ])
    });
});
hearCommand('2_4', async (context) => {
    await context.send({
        message: `ᅠ`,
        keyboard: Keyboard.keyboard([
            [
                Keyboard.textButton({
                    label: '⭕',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '❌',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '⬜',
                    payload: {
                        command: '2_4_3'
                    },
                    color: Keyboard.SECONDARY_COLOR
                })
            ],
            [
                Keyboard.textButton({
                    label: '❌',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '⭕',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '⬜',
                    payload: {
                        command: '2_4_6'
                    },
                    color: Keyboard.SECONDARY_COLOR
                })
            ],
            [
                Keyboard.textButton({
                    label: '⬜',
                    payload: {
                        command: '2_4_7'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '⬜',
                    payload: {
                        command: '2_4_8'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '⬜',
                    payload: {
                        command: '2_4_9'
                    },
                    color: Keyboard.SECONDARY_COLOR
                })
            ]
        ])
    });
});
hearCommand('2_4_3', async (context) => {
    await context.send({
        message: `К сожалению вы проиграли`,
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
                    label: '✅ Попробовать ещё раз',
                    payload: {
                        command: 'начать игру'
                    },
                    color: Keyboard.PRIMARY_COLOR
                })
            ]
        ])
    });
});
hearCommand('2_4_6', async (context) => {
    await context.send({
        message: `К сожалению вы проиграли`,
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
                    label: '✅ Попробовать ещё раз',
                    payload: {
                        command: 'начать игру'
                    },
                    color: Keyboard.PRIMARY_COLOR
                })
            ]
        ])
    });
});
hearCommand('2_4_7', async (context) => {
    await context.send({
        message: `К сожалению вы проиграли`,
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
                    label: '✅ Попробовать ещё раз',
                    payload: {
                        command: 'начать игру'
                    },
                    color: Keyboard.PRIMARY_COLOR
                })
            ]
        ])
    });
});
hearCommand('2_4_8', async (context) => {
    await context.send({
        message: `К сожалению вы проиграли`,
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
                    label: '✅ Попробовать ещё раз',
                    payload: {
                        command: 'начать игру'
                    },
                    color: Keyboard.PRIMARY_COLOR
                })
            ]
        ])
    });
});
hearCommand('2_4_9', async (context) => {
    await context.send({
        message: `ᅠ`,
        keyboard: Keyboard.keyboard([
            [
                Keyboard.textButton({
                    label: '⭕',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '❌',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '⭕',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                })
            ],
            [
                Keyboard.textButton({
                    label: '❌',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '⭕',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '⬜',
                    payload: {
                        command: '2_4_9_6'
                    },
                    color: Keyboard.SECONDARY_COLOR
                })
            ],
            [
                Keyboard.textButton({
                    label: '⬜',
                    payload: {
                        command: '2_4_9_7'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '⬜',
                    payload: {
                        command: '2_4_9_8'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '❌',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                })
            ]
        ])
    });
});
hearCommand('2_4_9_6', async (context) => {
    await context.send({
        message: `К сожалению вы проиграли`,
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
                    label: '✅ Попробовать ещё раз',
                    payload: {
                        command: 'начать игру'
                    },
                    color: Keyboard.PRIMARY_COLOR
                })
            ]
        ])
    });
});
hearCommand('2_4_9_7', async (context) => {
    await context.send({
        message: `ᅠ`,
        keyboard: Keyboard.keyboard([
            [
                Keyboard.textButton({
                    label: '⭕',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '❌',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '⭕',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                })
            ],
            [
                Keyboard.textButton({
                    label: '❌',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '⭕',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '⬜',
                    payload: {
                        command: '2_4_9_7_6'
                    },
                    color: Keyboard.SECONDARY_COLOR
                })
            ],
            [
                Keyboard.textButton({
                    label: '❌',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '⭕',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '❌',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                })
            ]
        ])
    });
});
hearCommand('2_4_9_7_6', async (context) => {
    await context.send({
        message: `Игра закончилась ничьёй`,
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
                    label: '✅ Попробовать ещё раз',
                    payload: {
                        command: 'начать игру'
                    },
                    color: Keyboard.PRIMARY_COLOR
                })
            ]
        ])
    });
});
hearCommand('2_4_9_8', async (context) => {
    await context.send({
        message: `К сожалению вы проиграли`,
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
                    label: '✅ Попробовать ещё раз',
                    payload: {
                        command: 'начать игру'
                    },
                    color: Keyboard.PRIMARY_COLOR
                })
            ]
        ])
    });
});
hearCommand('2_6', async (context) => {
    await context.send({
        message: `ᅠ`,
        keyboard: Keyboard.keyboard([
            [
                Keyboard.textButton({
                    label: '⬜',
                    payload: {
                        command: '2_6_1'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '❌',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '⭕',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                })
            ],
            [
                Keyboard.textButton({
                    label: '⬜',
                    payload: {
                        command: '2_6_4'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '⭕',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '❌',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                })
            ],
            [
                Keyboard.textButton({
                    label: '⬜',
                    payload: {
                        command: '2_6_7'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '⬜',
                    payload: {
                        command: '2_6_8'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '⬜',
                    payload: {
                        command: '2_6_9'
                    },
                    color: Keyboard.SECONDARY_COLOR
                })
            ]
        ])
    });
});
hearCommand('2_6_1', async (context) => {
    await context.send({
        message: `К сожалению вы проиграли`,
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
                    label: '✅ Попробовать ещё раз',
                    payload: {
                        command: 'начать игру'
                    },
                    color: Keyboard.PRIMARY_COLOR
                })
            ]
        ])
    });
});
hearCommand('2_6_4', async (context) => {
    await context.send({
        message: `К сожалению вы проиграли`,
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
                    label: '✅ Попробовать ещё раз',
                    payload: {
                        command: 'начать игру'
                    },
                    color: Keyboard.PRIMARY_COLOR
                })
            ]
        ])
    });
});
hearCommand('2_6_7', async (context) => {
    await context.send({
        message: `ᅠ`,
        keyboard: Keyboard.keyboard([
            [
                Keyboard.textButton({
                    label: '⭕',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '❌',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '⭕',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                })
            ],
            [
                Keyboard.textButton({
                    label: '⬜',
                    payload: {
                        command: '2_6_7_4'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '⭕',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '❌',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                })
            ],
            [
                Keyboard.textButton({
                    label: '❌',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '⬜',
                    payload: {
                        command: '2_6_7_8'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '⬜',
                    payload: {
                        command: '2_6_7_9'
                    },
                    color: Keyboard.SECONDARY_COLOR
                })
            ]
        ])
    });
});
hearCommand('2_6_7_4', async (context) => {
    await context.send({
        message: `К сожалению вы проиграли`,
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
                    label: '✅ Попробовать ещё раз',
                    payload: {
                        command: 'начать игру'
                    },
                    color: Keyboard.PRIMARY_COLOR
                })
            ]
        ])
    });
});
hearCommand('2_6_7_8', async (context) => {
    await context.send({
        message: `К сожалению вы проиграли`,
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
                    label: '✅ Попробовать ещё раз',
                    payload: {
                        command: 'начать игру'
                    },
                    color: Keyboard.PRIMARY_COLOR
                })
            ]
        ])
    });
});
hearCommand('2_6_7_9', async (context) => {
    await context.send({
        message: `ᅠ`,
        keyboard: Keyboard.keyboard([
            [
                Keyboard.textButton({
                    label: '⭕',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '❌',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '⭕',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                })
            ],
            [
                Keyboard.textButton({
                    label: '⬜',
                    payload: {
                        command: '2_6_7_9_4'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '⭕',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '❌',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                })
            ],
            [
                Keyboard.textButton({
                    label: '❌',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '⭕',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '❌',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                })
            ]
        ])
    });
});
hearCommand('2_6_7_9_4', async (context) => {
    await context.send({
        message: `Игра закончилась ничьёй`,
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
                    label: '✅ Попробовать ещё раз',
                    payload: {
                        command: 'начать игру'
                    },
                    color: Keyboard.PRIMARY_COLOR
                })
            ]
        ])
    });
});
hearCommand('2_6_8', async (context) => {
    await context.send({
        message: `К сожалению вы проиграли`,
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
                    label: '✅ Попробовать ещё раз',
                    payload: {
                        command: 'начать игру'
                    },
                    color: Keyboard.PRIMARY_COLOR
                })
            ]
        ])
    });
});
hearCommand('2_6_9', async (context) => {
    await context.send({
        message: `К сожалению вы проиграли`,
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
                    label: '✅ Попробовать ещё раз',
                    payload: {
                        command: 'начать игру'
                    },
                    color: Keyboard.PRIMARY_COLOR
                })
            ]
        ])
    });
});
hearCommand('2_7', async (context) => {
    await context.send({
        message: `ᅠ`,
        keyboard: Keyboard.keyboard([
            [
                Keyboard.textButton({
                    label: '⭕',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '❌',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '⬜',
                    payload: {
                        command: '2_7_3'
                    },
                    color: Keyboard.SECONDARY_COLOR
                })
            ],
            [
                Keyboard.textButton({
                    label: '⬜',
                    payload: {
                        command: '2_7_4'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '⭕',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '⬜',
                    payload: {
                        command: '2_7_6'
                    },
                    color: Keyboard.SECONDARY_COLOR
                })
            ],
            [
                Keyboard.textButton({
                    label: '❌',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '⬜',
                    payload: {
                        command: '2_7_8'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '⬜',
                    payload: {
                        command: '2_7_9'
                    },
                    color: Keyboard.SECONDARY_COLOR
                })
            ]
        ])
    });
});
hearCommand('2_7_3', async (context) => {
    await context.send({
        message: `К сожалению вы проиграли`,
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
                    label: '✅ Попробовать ещё раз',
                    payload: {
                        command: 'начать игру'
                    },
                    color: Keyboard.PRIMARY_COLOR
                })
            ]
        ])
    });
});
hearCommand('2_7_4', async (context) => {
    await context.send({
        message: `К сожалению вы проиграли`,
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
                    label: '✅ Попробовать ещё раз',
                    payload: {
                        command: 'начать игру'
                    },
                    color: Keyboard.PRIMARY_COLOR
                })
            ]
        ])
    });
});
hearCommand('2_7_6', async (context) => {
    await context.send({
        message: `К сожалению вы проиграли`,
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
                    label: '✅ Попробовать ещё раз',
                    payload: {
                        command: 'начать игру'
                    },
                    color: Keyboard.PRIMARY_COLOR
                })
            ]
        ])
    });
});
hearCommand('2_7_8', async (context) => {
    await context.send({
        message: `К сожалению вы проиграли`,
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
                    label: '✅ Попробовать ещё раз',
                    payload: {
                        command: 'начать игру'
                    },
                    color: Keyboard.PRIMARY_COLOR
                })
            ]
        ])
    });
});
hearCommand('2_7_9', async (context) => {
    await context.send({
        message: `ᅠ`,
        keyboard: Keyboard.keyboard([
            [
                Keyboard.textButton({
                    label: '⭕',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '❌',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '⬜',
                    payload: {
                        command: '2_7_9_3'
                    },
                    color: Keyboard.SECONDARY_COLOR
                })
            ],
            [
                Keyboard.textButton({
                    label: '⬜',
                    payload: {
                        command: '2_7_9_4'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '⭕',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '⬜',
                    payload: {
                        command: '2_7_9_6'
                    },
                    color: Keyboard.SECONDARY_COLOR
                })
            ],
            [
                Keyboard.textButton({
                    label: '❌',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '⭕',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '❌',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                })
            ]
        ])
    });
});
hearCommand('2_7_9_3', async (context) => {
    await context.send({
        message: `ᅠ`,
        keyboard: Keyboard.keyboard([
            [
                Keyboard.textButton({
                    label: '⭕',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '❌',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '❌',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                })
            ],
            [
                Keyboard.textButton({
                    label: '⬜',
                    payload: {
                        command: '2_7_9_3_4'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '⭕',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '⭕',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                })
            ],
            [
                Keyboard.textButton({
                    label: '❌',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '⭕',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '❌',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                })
            ]
        ])
    });
});
hearCommand('2_7_9_3_4', async (context) => {
    await context.send({
        message: `Игра закончилась ничьёй`,
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
                    label: '✅ Попробовать ещё раз',
                    payload: {
                        command: 'начать игру'
                    },
                    color: Keyboard.PRIMARY_COLOR
                })
            ]
        ])
    });
});
hearCommand('2_7_9_4', async (context) => {
    await context.send({
        message: `ᅠ`,
        keyboard: Keyboard.keyboard([
            [
                Keyboard.textButton({
                    label: '⭕',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '❌',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '⭕',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                })
            ],
            [
                Keyboard.textButton({
                    label: '❌',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '⭕',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '⬜',
                    payload: {
                        command: '2_7_9_4_6'
                    },
                    color: Keyboard.SECONDARY_COLOR
                })
            ],
            [
                Keyboard.textButton({
                    label: '❌',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '⭕',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '❌',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                })
            ]
        ])
    });
});
hearCommand('2_7_9_4_6', async (context) => {
    await context.send({
        message: `Игра закончилась ничьёй`,
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
                    label: '✅ Попробовать ещё раз',
                    payload: {
                        command: 'начать игру'
                    },
                    color: Keyboard.PRIMARY_COLOR
                })
            ]
        ])
    });
});
hearCommand('2_7_9_6', async (context) => {
    await context.send({
        message: `ᅠ`,
        keyboard: Keyboard.keyboard([
            [
                Keyboard.textButton({
                    label: '⭕',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '❌',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '⭕',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                })
            ],
            [
                Keyboard.textButton({
                    label: '⬜',
                    payload: {
                        command: '2_7_9_6_4'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '⭕',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '❌',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                })
            ],
            [
                Keyboard.textButton({
                    label: '❌',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '⭕',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '❌',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                })
            ]
        ])
    });
});
hearCommand('2_7_9_6_4', async (context) => {
    await context.send({
        message: `Игра закончилась ничьёй`,
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
                    label: '✅ Попробовать ещё раз',
                    payload: {
                        command: 'начать игру'
                    },
                    color: Keyboard.PRIMARY_COLOR
                })
            ]
        ])
    });
});
hearCommand('2_8', async (context) => {
    await context.send({
        message: `ᅠ`,
        keyboard: Keyboard.keyboard([
            [
                Keyboard.textButton({
                    label: '⭕',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '❌',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '⬜',
                    payload: {
                        command: '2_8_3'
                    },
                    color: Keyboard.SECONDARY_COLOR
                })
            ],
            [
                Keyboard.textButton({
                    label: '⬜',
                    payload: {
                        command: '2_8_4'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '⭕',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '⬜',
                    payload: {
                        command: '2_8_6'
                    },
                    color: Keyboard.SECONDARY_COLOR
                })
            ],
            [
                Keyboard.textButton({
                    label: '⬜',
                    payload: {
                        command: '2_8_7'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '❌',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '⬜',
                    payload: {
                        command: '2_8_9'
                    },
                    color: Keyboard.SECONDARY_COLOR
                })
            ]
        ])
    });
});
hearCommand('2_8_3', async (context) => {
    await context.send({
        message: `К сожалению вы проиграли`,
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
                    label: '✅ Попробовать ещё раз',
                    payload: {
                        command: 'начать игру'
                    },
                    color: Keyboard.PRIMARY_COLOR
                })
            ]
        ])
    });
});
hearCommand('2_8_4', async (context) => {
    await context.send({
        message: `К сожалению вы проиграли`,
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
                    label: '✅ Попробовать ещё раз',
                    payload: {
                        command: 'начать игру'
                    },
                    color: Keyboard.PRIMARY_COLOR
                })
            ]
        ])
    });
});
hearCommand('2_8_6', async (context) => {
    await context.send({
        message: `К сожалению вы проиграли`,
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
                    label: '✅ Попробовать ещё раз',
                    payload: {
                        command: 'начать игру'
                    },
                    color: Keyboard.PRIMARY_COLOR
                })
            ]
        ])
    });
});
hearCommand('2_8_7', async (context) => {
    await context.send({
        message: `К сожалению вы проиграли`,
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
                    label: '✅ Попробовать ещё раз',
                    payload: {
                        command: 'начать игру'
                    },
                    color: Keyboard.PRIMARY_COLOR
                })
            ]
        ])
    });
});
hearCommand('2_8_9', async (context) => {
    await context.send({
        message: `ᅠ`,
        keyboard: Keyboard.keyboard([
            [
                Keyboard.textButton({
                    label: '⭕',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '❌',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '⬜',
                    payload: {
                        command: '2_8_9_3'
                    },
                    color: Keyboard.SECONDARY_COLOR
                })
            ],
            [
                Keyboard.textButton({
                    label: '⬜',
                    payload: {
                        command: '2_8_9_4'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '⭕',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '⬜',
                    payload: {
                        command: '2_8_9_6'
                    },
                    color: Keyboard.SECONDARY_COLOR
                })
            ],
            [
                Keyboard.textButton({
                    label: '⭕',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '❌',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '❌',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                })
            ]
        ])
    });
});
hearCommand('2_8_9_3', async (context) => {
    await context.send({
        message: `К сожалению вы проиграли`,
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
                    label: '✅ Попробовать ещё раз',
                    payload: {
                        command: 'начать игру'
                    },
                    color: Keyboard.PRIMARY_COLOR
                })
            ]
        ])
    });
});
hearCommand('2_8_9_4', async (context) => {
    await context.send({
        message: `К сожалению вы проиграли`,
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
                    label: '✅ Попробовать ещё раз',
                    payload: {
                        command: 'начать игру'
                    },
                    color: Keyboard.PRIMARY_COLOR
                })
            ]
        ])
    });
});
hearCommand('2_8_9_6', async (context) => {
    await context.send({
        message: `К сожалению вы проиграли`,
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
                    label: '✅ Попробовать ещё раз',
                    payload: {
                        command: 'начать игру'
                    },
                    color: Keyboard.PRIMARY_COLOR
                })
            ]
        ])
    });
});
hearCommand('2_9', async (context) => {
    await context.send({
        message: `ᅠ`,
        keyboard: Keyboard.keyboard([
            [
                Keyboard.textButton({
                    label: '⬜',
                    payload: {
                        command: '2_9_1'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '❌',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '⭕',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                })
            ],
            [
                Keyboard.textButton({
                    label: '⬜',
                    payload: {
                        command: '2_9_4'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '⭕',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '⬜',
                    payload: {
                        command: '2_9_6'
                    },
                    color: Keyboard.SECONDARY_COLOR
                })
            ],
            [
                Keyboard.textButton({
                    label: '⬜',
                    payload: {
                        command: '2_9_7'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '⬜',
                    payload: {
                        command: '2_9_8'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '❌',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                })
            ]
        ])
    });
});
hearCommand('2_9_1', async (context) => {
    await context.send({
        message: `К сожалению вы проиграли`,
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
                    label: '✅ Попробовать ещё раз',
                    payload: {
                        command: 'начать игру'
                    },
                    color: Keyboard.PRIMARY_COLOR
                })
            ]
        ])
    });
});
hearCommand('2_9_4', async (context) => {
    await context.send({
        message: `К сожалению вы проиграли`,
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
                    label: '✅ Попробовать ещё раз',
                    payload: {
                        command: 'начать игру'
                    },
                    color: Keyboard.PRIMARY_COLOR
                })
            ]
        ])
    });
});
hearCommand('2_9_6', async (context) => {
    await context.send({
        message: `К сожалению вы проиграли`,
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
                    label: '✅ Попробовать ещё раз',
                    payload: {
                        command: 'начать игру'
                    },
                    color: Keyboard.PRIMARY_COLOR
                })
            ]
        ])
    });
});
hearCommand('2_9_7', async (context) => {
    await context.send({
        message: `ᅠ`,
        keyboard: Keyboard.keyboard([
            [
                Keyboard.textButton({
                    label: '⬜',
                    payload: {
                        command: '2_9_7_1'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '❌',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '⭕',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                })
            ],
            [
                Keyboard.textButton({
                    label: '⬜',
                    payload: {
                        command: '2_9_7_4'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '⭕',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '⬜',
                    payload: {
                        command: '2_9_7_6'
                    },
                    color: Keyboard.SECONDARY_COLOR
                })
            ],
            [
                Keyboard.textButton({
                    label: '❌',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '⭕',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '❌',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                })
            ]
        ])
    });
});
hearCommand('2_9_7_1', async (context) => {
    await context.send({
        message: `ᅠ`,
        keyboard: Keyboard.keyboard([
            [
                Keyboard.textButton({
                    label: '❌',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '❌',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '⭕',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                })
            ],
            [
                Keyboard.textButton({
                    label: '⭕',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '⭕',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '⬜',
                    payload: {
                        command: '2_9_7_1_6'
                    },
                    color: Keyboard.SECONDARY_COLOR
                })
            ],
            [
                Keyboard.textButton({
                    label: '❌',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '⭕',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '❌',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                })
            ]
        ])
    });
});
hearCommand('2_9_7_1_6', async (context) => {
    await context.send({
        message: `Игра закончилась ничьёй`,
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
                    label: '✅ Попробовать ещё раз',
                    payload: {
                        command: 'начать игру'
                    },
                    color: Keyboard.PRIMARY_COLOR
                })
            ]
        ])
    });
});
hearCommand('2_9_7_4', async (context) => {
    await context.send({
        message: `ᅠ`,
        keyboard: Keyboard.keyboard([
            [
                Keyboard.textButton({
                    label: '⭕',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '❌',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '⭕',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                })
            ],
            [
                Keyboard.textButton({
                    label: '❌',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '⭕',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '⬜',
                    payload: {
                        command: '2_9_7_4_6'
                    },
                    color: Keyboard.SECONDARY_COLOR
                })
            ],
            [
                Keyboard.textButton({
                    label: '❌',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '⭕',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '❌',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                })
            ]
        ])
    });
});
hearCommand('2_9_7_4_6', async (context) => {
    await context.send({
        message: `Игра закончилась ничьёй`,
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
                    label: '✅ Попробовать ещё раз',
                    payload: {
                        command: 'начать игру'
                    },
                    color: Keyboard.PRIMARY_COLOR
                })
            ]
        ])
    });
});
hearCommand('2_9_7_6', async (context) => {
    await context.send({
        message: `ᅠ`,
        keyboard: Keyboard.keyboard([
            [
                Keyboard.textButton({
                    label: '⭕',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '❌',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '⭕',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                })
            ],
            [
                Keyboard.textButton({
                    label: '⬜',
                    payload: {
                        command: '2_9_7_6_4'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '⭕',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '❌',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                })
            ],
            [
                Keyboard.textButton({
                    label: '❌',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '⭕',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '❌',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                })
            ]
        ])
    });
});
hearCommand('2_9_7_6_4', async (context) => {
    await context.send({
        message: `Игра закончилась ничьёй`,
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
                    label: '✅ Попробовать ещё раз',
                    payload: {
                        command: 'начать игру'
                    },
                    color: Keyboard.PRIMARY_COLOR
                })
            ]
        ])
    });
});
hearCommand('2_9_8', async (context) => {
    await context.send({
        message: `К сожалению вы проиграли`,
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
                    label: '✅ Попробовать ещё раз',
                    payload: {
                        command: 'начать игру'
                    },
                    color: Keyboard.PRIMARY_COLOR
                })
            ]
        ])
    });
});
hearCommand('3', async (context) => {
    await context.send({
        message: `ᅠ`,
        keyboard: Keyboard.keyboard([
            [
                Keyboard.textButton({
                    label: '⬜',
                    payload: {
                        command: '3_1'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '⬜',
                    payload: {
                        command: '3_2'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '❌',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                })
            ],
            [
                Keyboard.textButton({
                    label: '⬜',
                    payload: {
                        command: '3_4'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '⭕',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '⬜',
                    payload: {
                        command: '3_6'
                    },
                    color: Keyboard.SECONDARY_COLOR
                })
            ],
            [
                Keyboard.textButton({
                    label: '⬜',
                    payload: {
                        command: '3_7'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '⬜',
                    payload: {
                        command: '3_8'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '⬜',
                    payload: {
                        command: '3_9'
                    },
                    color: Keyboard.SECONDARY_COLOR
                })
            ]
        ])
    });
});
hearCommand('3_1', async (context) => {
    await context.send({
        message: `ᅠ`,
        keyboard: Keyboard.keyboard([
            [
                Keyboard.textButton({
                    label: '❌',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '⭕',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '❌',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                })
            ],
            [
                Keyboard.textButton({
                    label: '⬜',
                    payload: {
                        command: '3_1_4'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '⭕',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '⬜',
                    payload: {
                        command: '3_1_6'
                    },
                    color: Keyboard.SECONDARY_COLOR
                })
            ],
            [
                Keyboard.textButton({
                    label: '⬜',
                    payload: {
                        command: '3_1_7'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '⬜',
                    payload: {
                        command: '3_1_8'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '⬜',
                    payload: {
                        command: '3_1_9'
                    },
                    color: Keyboard.SECONDARY_COLOR
                })
            ]
        ])
    });
});
hearCommand('3_1_4', async (context) => {
    await context.send({
        message: `К сожалению вы проиграли`,
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
                    label: '✅ Попробовать ещё раз',
                    payload: {
                        command: 'начать игру'
                    },
                    color: Keyboard.PRIMARY_COLOR
                })
            ]
        ])
    });
});
hearCommand('3_1_6', async (context) => {
    await context.send({
        message: `К сожалению вы проиграли`,
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
                    label: '✅ Попробовать ещё раз',
                    payload: {
                        command: 'начать игру'
                    },
                    color: Keyboard.PRIMARY_COLOR
                })
            ]
        ])
    });
});
hearCommand('3_1_7', async (context) => {
    await context.send({
        message: `К сожалению вы проиграли`,
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
                    label: '✅ Попробовать ещё раз',
                    payload: {
                        command: 'начать игру'
                    },
                    color: Keyboard.PRIMARY_COLOR
                })
            ]
        ])
    });
});
hearCommand('3_1_8', async (context) => {
    await context.send({
        message: `ᅠ`,
        keyboard: Keyboard.keyboard([
            [
                Keyboard.textButton({
                    label: '❌',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '⭕',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '❌',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                })
            ],
            [
                Keyboard.textButton({
                    label: '⭕',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '⭕',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '⬜',
                    payload: {
                        command: '3_1_8_6'
                    },
                    color: Keyboard.SECONDARY_COLOR
                })
            ],
            [
                Keyboard.textButton({
                    label: '⬜',
                    payload: {
                        command: '3_1_8_7'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '❌',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '⬜',
                    payload: {
                        command: '3_1_8_9'
                    },
                    color: Keyboard.SECONDARY_COLOR
                })
            ]
        ])
    });
});
hearCommand('3_1_8_6', async (context) => {
    await context.send({
        message: `ᅠ`,
        keyboard: Keyboard.keyboard([
            [
                Keyboard.textButton({
                    label: '❌',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '⭕',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '❌',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                })
            ],
            [
                Keyboard.textButton({
                    label: '⭕',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '⭕',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '❌',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                })
            ],
            [
                Keyboard.textButton({
                    label: '⬜',
                    payload: {
                        command: '3_1_8_6_7'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '❌',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '⭕',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                })
            ]
        ])
    });
});
hearCommand('3_1_8_6_7', async (context) => {
    await context.send({
        message: `Игра закончилась ничьёй`,
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
                    label: '✅ Попробовать ещё раз',
                    payload: {
                        command: 'начать игру'
                    },
                    color: Keyboard.PRIMARY_COLOR
                })
            ]
        ])
    });
});
hearCommand('3_1_8_7', async (context) => {
    await context.send({
        message: `К сожалению вы проиграли`,
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
                    label: '✅ Попробовать ещё раз',
                    payload: {
                        command: 'начать игру'
                    },
                    color: Keyboard.PRIMARY_COLOR
                })
            ]
        ])
    });
});
hearCommand('3_1_8_9', async (context) => {
    await context.send({
        message: `К сожалению вы проиграли`,
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
                    label: '✅ Попробовать ещё раз',
                    payload: {
                        command: 'начать игру'
                    },
                    color: Keyboard.PRIMARY_COLOR
                })
            ]
        ])
    });
});
hearCommand('3_1_9', async (context) => {
    await context.send({
        message: `К сожалению вы проиграли`,
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
                    label: '✅ Попробовать ещё раз',
                    payload: {
                        command: 'начать игру'
                    },
                    color: Keyboard.PRIMARY_COLOR
                })
            ]
        ])
    });
});
hearCommand('3_2', async (context) => {
    await context.send({
        message: `ᅠ`,
        keyboard: Keyboard.keyboard([
            [
                Keyboard.textButton({
                    label: '⭕',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '❌',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '❌',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                })
            ],
            [
                Keyboard.textButton({
                    label: '⬜',
                    payload: {
                        command: '3_2_4'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '⭕',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '⬜',
                    payload: {
                        command: '3_2_6'
                    },
                    color: Keyboard.SECONDARY_COLOR
                })
            ],
            [
                Keyboard.textButton({
                    label: '⬜',
                    payload: {
                        command: '3_2_7'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '⬜',
                    payload: {
                        command: '3_2_8'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '⬜',
                    payload: {
                        command: '3_2_9'
                    },
                    color: Keyboard.SECONDARY_COLOR
                })
            ]
        ])
    });
});
hearCommand('3_2_4', async (context) => {
    await context.send({
        message: `К сожалению вы проиграли`,
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
                    label: '✅ Попробовать ещё раз',
                    payload: {
                        command: 'начать игру'
                    },
                    color: Keyboard.PRIMARY_COLOR
                })
            ]
        ])
    });
});
hearCommand('3_2_6', async (context) => {
    await context.send({
        message: `К сожалению вы проиграли`,
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
                    label: '✅ Попробовать ещё раз',
                    payload: {
                        command: 'начать игру'
                    },
                    color: Keyboard.PRIMARY_COLOR
                })
            ]
        ])
    });
});
hearCommand('3_2_7', async (context) => {
    await context.send({
        message: `К сожалению вы проиграли`,
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
                    label: '✅ Попробовать ещё раз',
                    payload: {
                        command: 'начать игру'
                    },
                    color: Keyboard.PRIMARY_COLOR
                })
            ]
        ])
    });
});
hearCommand('3_2_8', async (context) => {
    await context.send({
        message: `К сожалению вы проиграли`,
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
                    label: '✅ Попробовать ещё раз',
                    payload: {
                        command: 'начать игру'
                    },
                    color: Keyboard.PRIMARY_COLOR
                })
            ]
        ])
    });
});
hearCommand('3_2_9', async (context) => {
    await context.send({
        message: `ᅠ`,
        keyboard: Keyboard.keyboard([
            [
                Keyboard.textButton({
                    label: '⭕',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '❌',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '❌',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                })
            ],
            [
                Keyboard.textButton({
                    label: '⬜',
                    payload: {
                        command: '3_2_9_4'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '⭕',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '⭕',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                })
            ],
            [
                Keyboard.textButton({
                    label: '⬜',
                    payload: {
                        command: '3_2_9_7'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '⬜',
                    payload: {
                        command: '3_2_9_8'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '❌',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                })
            ]
        ])
    });
});
hearCommand('3_2_9_4', async (context) => {
    await context.send({
        message: `ᅠ`,
        keyboard: Keyboard.keyboard([
            [
                Keyboard.textButton({
                    label: '⭕',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '❌',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '❌',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                })
            ],
            [
                Keyboard.textButton({
                    label: '❌',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '⭕',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '⭕',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                })
            ],
            [
                Keyboard.textButton({
                    label: '⭕',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '⬜',
                    payload: {
                        command: '3_2_9_4_8'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '❌',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                })
            ]
        ])
    });
});
hearCommand('3_2_9_4_8', async (context) => {
    await context.send({
        message: `Игра закончилась ничьёй`,
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
                    label: '✅ Попробовать ещё раз',
                    payload: {
                        command: 'начать игру'
                    },
                    color: Keyboard.PRIMARY_COLOR
                })
            ]
        ])
    });
});
hearCommand('3_2_9_7', async (context) => {
    await context.send({
        message: `К сожалению вы проиграли`,
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
                    label: '✅ Попробовать ещё раз',
                    payload: {
                        command: 'начать игру'
                    },
                    color: Keyboard.PRIMARY_COLOR
                })
            ]
        ])
    });
});
hearCommand('3_2_9_8', async (context) => {
    await context.send({
        message: `К сожалению вы проиграли`,
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
                    label: '✅ Попробовать ещё раз',
                    payload: {
                        command: 'начать игру'
                    },
                    color: Keyboard.PRIMARY_COLOR
                })
            ]
        ])
    });
});
hearCommand('3_4', async (context) => {
    await context.send({
        message: `ᅠ`,
        keyboard: Keyboard.keyboard([
            [
                Keyboard.textButton({
                    label: '⭕',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '⬜',
                    payload: {
                        command: '3_4_2'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '❌',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                })
            ],
            [
                Keyboard.textButton({
                    label: '❌',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '⭕',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '⬜',
                    payload: {
                        command: '3_4_6'
                    },
                    color: Keyboard.SECONDARY_COLOR
                })
            ],
            [
                Keyboard.textButton({
                    label: '⬜',
                    payload: {
                        command: '3_4_7'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '⬜',
                    payload: {
                        command: '3_4_8'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '⬜',
                    payload: {
                        command: '3_4_9'
                    },
                    color: Keyboard.SECONDARY_COLOR
                })
            ]
        ])
    });
});
hearCommand('3_4_2', async (context) => {
    await context.send({
        message: `К сожалению вы проиграли`,
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
                    label: '✅ Попробовать ещё раз',
                    payload: {
                        command: 'начать игру'
                    },
                    color: Keyboard.PRIMARY_COLOR
                })
            ]
        ])
    });
});
hearCommand('3_4_6', async (context) => {
    await context.send({
        message: `К сожалению вы проиграли`,
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
                    label: '✅ Попробовать ещё раз',
                    payload: {
                        command: 'начать игру'
                    },
                    color: Keyboard.PRIMARY_COLOR
                })
            ]
        ])
    });
});
hearCommand('3_4_7', async (context) => {
    await context.send({
        message: `К сожалению вы проиграли`,
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
                    label: '✅ Попробовать ещё раз',
                    payload: {
                        command: 'начать игру'
                    },
                    color: Keyboard.PRIMARY_COLOR
                })
            ]
        ])
    });
});
hearCommand('3_4_8', async (context) => {
    await context.send({
        message: `К сожалению вы проиграли`,
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
                    label: '✅ Попробовать ещё раз',
                    payload: {
                        command: 'начать игру'
                    },
                    color: Keyboard.PRIMARY_COLOR
                })
            ]
        ])
    });
});
hearCommand('3_4_9', async (context) => {
    await context.send({
        message: `ᅠ`,
        keyboard: Keyboard.keyboard([
            [
                Keyboard.textButton({
                    label: '⭕',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '⬜',
                    payload: {
                        command: '3_4_9_2'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '❌',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                })
            ],
            [
                Keyboard.textButton({
                    label: '❌',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '⭕',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '⭕',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                })
            ],
            [
                Keyboard.textButton({
                    label: '⬜',
                    payload: {
                        command: '3_4_9_7'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '⬜',
                    payload: {
                        command: '3_4_9_8'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '❌',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                })
            ]
        ])
    });
});
hearCommand('3_4_9_2', async (context) => {
    await context.send({
        message: `ᅠ`,
        keyboard: Keyboard.keyboard([
            [
                Keyboard.textButton({
                    label: '⭕',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '❌',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '❌',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                })
            ],
            [
                Keyboard.textButton({
                    label: '❌',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '⭕',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '⭕',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                })
            ],
            [
                Keyboard.textButton({
                    label: '⭕',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '⬜',
                    payload: {
                        command: '3_4_9_2_7'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '❌',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                })
            ]
        ])
    });
});
hearCommand('3_4_9_2_7', async (context) => {
    await context.send({
        message: `Игра закончилась ничьёй`,
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
                    label: '✅ Попробовать ещё раз',
                    payload: {
                        command: 'начать игру'
                    },
                    color: Keyboard.PRIMARY_COLOR
                })
            ]
        ])
    });
});
hearCommand('3_4_9_7', async (context) => {
    await context.send({
        message: `ᅠ`,
        keyboard: Keyboard.keyboard([
            [
                Keyboard.textButton({
                    label: '⭕',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '⬜',
                    payload: {
                        command: '3_4_9_7_2'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '❌',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                })
            ],
            [
                Keyboard.textButton({
                    label: '❌',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '⭕',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '⭕',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                })
            ],
            [
                Keyboard.textButton({
                    label: '❌',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '⭕',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '❌',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                })
            ]
        ])
    });
});
hearCommand('3_4_9_7_2', async (context) => {
    await context.send({
        message: `Игра закончилась ничьёй`,
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
                    label: '✅ Попробовать ещё раз',
                    payload: {
                        command: 'начать игру'
                    },
                    color: Keyboard.PRIMARY_COLOR
                })
            ]
        ])
    });
});
hearCommand('3_4_9_8', async (context) => {
    await context.send({
        message: `ᅠ`,
        keyboard: Keyboard.keyboard([
            [
                Keyboard.textButton({
                    label: '⭕',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '⬜',
                    payload: {
                        command: '3_4_9_8_2'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '❌',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                })
            ],
            [
                Keyboard.textButton({
                    label: '❌',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '⭕',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '⭕',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                })
            ],
            [
                Keyboard.textButton({
                    label: '⭕',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '❌',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '❌',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                })
            ]
        ])
    });
});
hearCommand('3_4_9_8_2', async (context) => {
    await context.send({
        message: `Игра закончилась ничьёй`,
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
                    label: '✅ Попробовать ещё раз',
                    payload: {
                        command: 'начать игру'
                    },
                    color: Keyboard.PRIMARY_COLOR
                })
            ]
        ])
    });
});
hearCommand('3_6', async (context) => {
    await context.send({
        message: `ᅠ`,
        keyboard: Keyboard.keyboard([
            [
                Keyboard.textButton({
                    label: '⬜',
                    payload: {
                        command: '3_6_1'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '⬜',
                    payload: {
                        command: '3_6_2'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '❌',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                })
            ],
            [
                Keyboard.textButton({
                    label: '⬜',
                    payload: {
                        command: '3_6_4'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '⭕',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '❌',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                })
            ],
            [
                Keyboard.textButton({
                    label: '⬜',
                    payload: {
                        command: '3_6_7'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '⬜',
                    payload: {
                        command: '3_6_8'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '⭕',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                })
            ]
        ])
    });
});
hearCommand('3_6_1', async (context) => {
    await context.send({
        message: `ᅠ`,
        keyboard: Keyboard.keyboard([
            [
                Keyboard.textButton({
                    label: '❌',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '⭕',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '❌',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                })
            ],
            [
                Keyboard.textButton({
                    label: '⬜',
                    payload: {
                        command: '3_6_1_4'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '⭕',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '❌',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                })
            ],
            [
                Keyboard.textButton({
                    label: '⬜',
                    payload: {
                        command: '3_6_1_7'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '⬜',
                    payload: {
                        command: '3_6_1_8'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '⭕',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                })
            ]
        ])
    });
});
hearCommand('3_6_1_4', async (context) => {
    await context.send({
        message: `К сожалению вы проиграли`,
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
                    label: '✅ Попробовать ещё раз',
                    payload: {
                        command: 'начать игру'
                    },
                    color: Keyboard.PRIMARY_COLOR
                })
            ]
        ])
    });
});
hearCommand('3_6_1_7', async (context) => {
    await context.send({
        message: `К сожалению вы проиграли`,
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
                    label: '✅ Попробовать ещё раз',
                    payload: {
                        command: 'начать игру'
                    },
                    color: Keyboard.PRIMARY_COLOR
                })
            ]
        ])
    });
});
hearCommand('3_6_1_8', async (context) => {
    await context.send({
        message: `ᅠ`,
        keyboard: Keyboard.keyboard([
            [
                Keyboard.textButton({
                    label: '❌',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '⭕',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '❌',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                })
            ],
            [
                Keyboard.textButton({
                    label: '⭕',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '⭕',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '❌',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                })
            ],
            [
                Keyboard.textButton({
                    label: '⬜',
                    payload: {
                        command: '3_6_1_8_7'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '❌',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '⭕',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                })
            ]
        ])
    });
});
hearCommand('3_6_1_8_7', async (context) => {
    await context.send({
        message: `Игра закончилась ничьёй`,
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
                    label: '✅ Попробовать ещё раз',
                    payload: {
                        command: 'начать игру'
                    },
                    color: Keyboard.PRIMARY_COLOR
                })
            ]
        ])
    });
});
hearCommand('3_6_2', async (context) => {
    await context.send({
        message: `К сожалению вы проиграли`,
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
                    label: '✅ Попробовать ещё раз',
                    payload: {
                        command: 'начать игру'
                    },
                    color: Keyboard.PRIMARY_COLOR
                })
            ]
        ])
    });
});
hearCommand('3_6_4', async (context) => {
    await context.send({
        message: `К сожалению вы проиграли`,
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
                    label: '✅ Попробовать ещё раз',
                    payload: {
                        command: 'начать игру'
                    },
                    color: Keyboard.PRIMARY_COLOR
                })
            ]
        ])
    });
});
hearCommand('3_6_7', async (context) => {
    await context.send({
        message: `К сожалению вы проиграли`,
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
                    label: '✅ Попробовать ещё раз',
                    payload: {
                        command: 'начать игру'
                    },
                    color: Keyboard.PRIMARY_COLOR
                })
            ]
        ])
    });
});
hearCommand('3_6_8', async (context) => {
    await context.send({
        message: `К сожалению вы проиграли`,
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
                    label: '✅ Попробовать ещё раз',
                    payload: {
                        command: 'начать игру'
                    },
                    color: Keyboard.PRIMARY_COLOR
                })
            ]
        ])
    });
});
hearCommand('3_7', async (context) => {
    await context.send({
        message: `ᅠ`,
        keyboard: Keyboard.keyboard([
            [
                Keyboard.textButton({
                    label: '⬜',
                    payload: {
                        command: '3_7_1'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '⭕',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '❌',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                })
            ],
            [
                Keyboard.textButton({
                    label: '⬜',
                    payload: {
                        command: '3_7_4'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '⭕',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '⬜',
                    payload: {
                        command: '3_7_6'
                    },
                    color: Keyboard.SECONDARY_COLOR
                })
            ],
            [
                Keyboard.textButton({
                    label: '❌',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '⬜',
                    payload: {
                        command: '3_7_8'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '⬜',
                    payload: {
                        command: '3_7_9'
                    },
                    color: Keyboard.SECONDARY_COLOR
                })
            ]
        ])
    });
});
hearCommand('3_7_1', async (context) => {
    await context.send({
        message: `К сожалению вы проиграли`,
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
                    label: '✅ Попробовать ещё раз',
                    payload: {
                        command: 'начать игру'
                    },
                    color: Keyboard.PRIMARY_COLOR
                })
            ]
        ])
    });
});
hearCommand('3_7_4', async (context) => {
    await context.send({
        message: `К сожалению вы проиграли`,
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
                    label: '✅ Попробовать ещё раз',
                    payload: {
                        command: 'начать игру'
                    },
                    color: Keyboard.PRIMARY_COLOR
                })
            ]
        ])
    });
});
hearCommand('3_7_6', async (context) => {
    await context.send({
        message: `К сожалению вы проиграли`,
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
                    label: '✅ Попробовать ещё раз',
                    payload: {
                        command: 'начать игру'
                    },
                    color: Keyboard.PRIMARY_COLOR
                })
            ]
        ])
    });
});
hearCommand('3_7_8', async (context) => {
    await context.send({
        message: `ᅠ`,
        keyboard: Keyboard.keyboard([
            [
                Keyboard.textButton({
                    label: '⬜',
                    payload: {
                        command: '3_7_8_1'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '⭕',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '❌',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                })
            ],
            [
                Keyboard.textButton({
                    label: '⬜',
                    payload: {
                        command: '3_7_4'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '⭕',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '⬜',
                    payload: {
                        command: '3_7_6'
                    },
                    color: Keyboard.SECONDARY_COLOR
                })
            ],
            [
                Keyboard.textButton({
                    label: '❌',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '❌',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '⭕',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                })
            ]
        ])
    });
});
hearCommand('3_7_8_1', async (context) => {
    await context.send({
        message: `ᅠ`,
        keyboard: Keyboard.keyboard([
            [
                Keyboard.textButton({
                    label: '❌',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '⭕',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '❌',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                })
            ],
            [
                Keyboard.textButton({
                    label: '⭕',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '⭕',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '⬜',
                    payload: {
                        command: '3_7_8_1_6'
                    },
                    color: Keyboard.SECONDARY_COLOR
                })
            ],
            [
                Keyboard.textButton({
                    label: '❌',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '❌',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '⭕',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                })
            ]
        ])
    });
});
hearCommand('3_7_8_1_6', async (context) => {
    await context.send({
        message: `Игра закончилась ничьёй`,
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
                    label: '✅ Попробовать ещё раз',
                    payload: {
                        command: 'начать игру'
                    },
                    color: Keyboard.PRIMARY_COLOR
                })
            ]
        ])
    });
});
hearCommand('3_7_8_4', async (context) => {
    await context.send({
        message: `К сожалению вы проиграли`,
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
                    label: '✅ Попробовать ещё раз',
                    payload: {
                        command: 'начать игру'
                    },
                    color: Keyboard.PRIMARY_COLOR
                })
            ]
        ])
    });
});
hearCommand('3_7_8_6', async (context) => {
    await context.send({
        message: `К сожалению вы проиграли`,
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
                    label: '✅ Попробовать ещё раз',
                    payload: {
                        command: 'начать игру'
                    },
                    color: Keyboard.PRIMARY_COLOR
                })
            ]
        ])
    });
});
hearCommand('3_7_9', async (context) => {
    await context.send({
        message: `К сожалению вы проиграли`,
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
                    label: '✅ Попробовать ещё раз',
                    payload: {
                        command: 'начать игру'
                    },
                    color: Keyboard.PRIMARY_COLOR
                })
            ]
        ])
    });
});
hearCommand('3_8', async (context) => {
    await context.send({
        message: `ᅠ`,
        keyboard: Keyboard.keyboard([
            [
                Keyboard.textButton({
                    label: '⭕',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '⬜',
                    payload: {
                        command: '3_8_2'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '❌',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                })
            ],
            [
                Keyboard.textButton({
                    label: '⬜',
                    payload: {
                        command: '3_8_4'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '⭕',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '⬜',
                    payload: {
                        command: '3_8_6'
                    },
                    color: Keyboard.SECONDARY_COLOR
                })
            ],
            [
                Keyboard.textButton({
                    label: '⬜',
                    payload: {
                        command: '3_8_7'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '❌',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '⬜',
                    payload: {
                        command: '3_8_9'
                    },
                    color: Keyboard.SECONDARY_COLOR
                })
            ]
        ])
    });
});
hearCommand('3_8_2', async (context) => {
    await context.send({
        message: `К сожалению вы проиграли`,
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
                    label: '✅ Попробовать ещё раз',
                    payload: {
                        command: 'начать игру'
                    },
                    color: Keyboard.PRIMARY_COLOR
                })
            ]
        ])
    });
});
hearCommand('3_8_4', async (context) => {
    await context.send({
        message: `К сожалению вы проиграли`,
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
                    label: '✅ Попробовать ещё раз',
                    payload: {
                        command: 'начать игру'
                    },
                    color: Keyboard.PRIMARY_COLOR
                })
            ]
        ])
    });
});
hearCommand('3_8_6', async (context) => {
    await context.send({
        message: `К сожалению вы проиграли`,
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
                    label: '✅ Попробовать ещё раз',
                    payload: {
                        command: 'начать игру'
                    },
                    color: Keyboard.PRIMARY_COLOR
                })
            ]
        ])
    });
});
hearCommand('3_8_7', async (context) => {
    await context.send({
        message: `К сожалению вы проиграли`,
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
                    label: '✅ Попробовать ещё раз',
                    payload: {
                        command: 'начать игру'
                    },
                    color: Keyboard.PRIMARY_COLOR
                })
            ]
        ])
    });
});
hearCommand('3_8_9', async (context) => {
    await context.send({
        message: `ᅠ`,
        keyboard: Keyboard.keyboard([
            [
                Keyboard.textButton({
                    label: '⭕',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '⬜',
                    payload: {
                        command: '3_8_9_2'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '❌',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                })
            ],
            [
                Keyboard.textButton({
                    label: '⬜',
                    payload: {
                        command: '3_8_9_4'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '⭕',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '⬜',
                    payload: {
                        command: '3_8_9_6'
                    },
                    color: Keyboard.SECONDARY_COLOR
                })
            ],
            [
                Keyboard.textButton({
                    label: '⭕',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '❌',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '❌',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                })
            ]
        ])
    });
});
hearCommand('3_8_9_2', async (context) => {
    await context.send({
        message: `К сожалению вы проиграли`,
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
                    label: '✅ Попробовать ещё раз',
                    payload: {
                        command: 'начать игру'
                    },
                    color: Keyboard.PRIMARY_COLOR
                })
            ]
        ])
    });
});
hearCommand('3_8_9_4', async (context) => {
    await context.send({
        message: `ᅠ`,
        keyboard: Keyboard.keyboard([
            [
                Keyboard.textButton({
                    label: '⭕',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '⬜',
                    payload: {
                        command: '3_8_9_4_2'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '❌',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                })
            ],
            [
                Keyboard.textButton({
                    label: '❌',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '⭕',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '⭕',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                })
            ],
            [
                Keyboard.textButton({
                    label: '⭕',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '❌',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '❌',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                })
            ]
        ])
    });
});
hearCommand('3_8_9_4_2', async (context) => {
    await context.send({
        message: `Игра закончилась ничьёй`,
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
                    label: '✅ Попробовать ещё раз',
                    payload: {
                        command: 'начать игру'
                    },
                    color: Keyboard.PRIMARY_COLOR
                })
            ]
        ])
    });
});
hearCommand('3_8_9_6', async (context) => {
    await context.send({
        message: `К сожалению вы проиграли`,
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
                    label: '✅ Попробовать ещё раз',
                    payload: {
                        command: 'начать игру'
                    },
                    color: Keyboard.PRIMARY_COLOR
                })
            ]
        ])
    });
});
hearCommand('3_9', async (context) => {
    await context.send({
        message: `ᅠ`,
        keyboard: Keyboard.keyboard([
            [
                Keyboard.textButton({
                    label: '⬜',
                    payload: {
                        command: '3_9_1'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '⬜',
                    payload: {
                        command: '3_9_2'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '❌',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                })
            ],
            [
                Keyboard.textButton({
                    label: '⬜',
                    payload: {
                        command: '3_9_4'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '⭕',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '⭕',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                })
            ],
            [
                Keyboard.textButton({
                    label: '⬜',
                    payload: {
                        command: '3_9_7'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '⬜',
                    payload: {
                        command: '3_9_8'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '❌',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                })
            ]
        ])
    });
});
hearCommand('3_9_1', async (context) => {
    await context.send({
        message: `К сожалению вы проиграли`,
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
                    label: '✅ Попробовать ещё раз',
                    payload: {
                        command: 'начать игру'
                    },
                    color: Keyboard.PRIMARY_COLOR
                })
            ]
        ])
    });
});
hearCommand('3_9_2', async (context) => {
    await context.send({
        message: `К сожалению вы проиграли`,
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
                    label: '✅ Попробовать ещё раз',
                    payload: {
                        command: 'начать игру'
                    },
                    color: Keyboard.PRIMARY_COLOR
                })
            ]
        ])
    });
});
hearCommand('3_9_4', async (context) => {
    await context.send({
        message: `ᅠ`,
        keyboard: Keyboard.keyboard([
            [
                Keyboard.textButton({
                    label: '⭕',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '⬜',
                    payload: {
                        command: '3_9_4_2'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '❌',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                })
            ],
            [
                Keyboard.textButton({
                    label: '❌',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '⭕',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '⭕',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                })
            ],
            [
                Keyboard.textButton({
                    label: '⬜',
                    payload: {
                        command: '3_9_4_7'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '⬜',
                    payload: {
                        command: '3_9_4_8'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '❌',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                })
            ]
        ])
    });
});
hearCommand('3_9_4_2', async (context) => {
    await context.send({
        message: `ᅠ`,
        keyboard: Keyboard.keyboard([
            [
                Keyboard.textButton({
                    label: '⭕',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '❌',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '❌',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                })
            ],
            [
                Keyboard.textButton({
                    label: '❌',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '⭕',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '⭕',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                })
            ],
            [
                Keyboard.textButton({
                    label: '⭕',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '⬜',
                    payload: {
                        command: '3_9_4_2_8'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '❌',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                })
            ]
        ])
    });
});
hearCommand('3_9_4_2_8', async (context) => {
    await context.send({
        message: `Игра закончилась ничьёй`,
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
                    label: '✅ Попробовать ещё раз',
                    payload: {
                        command: 'начать игру'
                    },
                    color: Keyboard.PRIMARY_COLOR
                })
            ]
        ])
    });
});
hearCommand('3_9_4_7', async (context) => {
    await context.send({
        message: `ᅠ`,
        keyboard: Keyboard.keyboard([
            [
                Keyboard.textButton({
                    label: '⭕',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '⬜',
                    payload: {
                        command: '3_9_4_7_2'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '❌',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                })
            ],
            [
                Keyboard.textButton({
                    label: '❌',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '⭕',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '⭕',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                })
            ],
            [
                Keyboard.textButton({
                    label: '❌',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '⭕',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '❌',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                })
            ]
        ])
    });
});
hearCommand('3_9_4_7_2', async (context) => {
    await context.send({
        message: `Игра закончилась ничьёй`,
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
                    label: '✅ Попробовать ещё раз',
                    payload: {
                        command: 'начать игру'
                    },
                    color: Keyboard.PRIMARY_COLOR
                })
            ]
        ])
    });
});
hearCommand('3_9_4_8', async (context) => {
    await context.send({
        message: `ᅠ`,
        keyboard: Keyboard.keyboard([
            [
                Keyboard.textButton({
                    label: '⭕',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '⬜',
                    payload: {
                        command: '3_9_4_8_2'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '❌',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                })
            ],
            [
                Keyboard.textButton({
                    label: '❌',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '⭕',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '⭕',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                })
            ],
            [
                Keyboard.textButton({
                    label: '⭕',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '❌',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '❌',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                })
            ]
        ])
    });
});
hearCommand('3_9_4_8_2', async (context) => {
    await context.send({
        message: `Игра закончилась ничьёй`,
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
                    label: '✅ Попробовать ещё раз',
                    payload: {
                        command: 'начать игру'
                    },
                    color: Keyboard.PRIMARY_COLOR
                })
            ]
        ])
    });
});
hearCommand('3_9_7', async (context) => {
    await context.send({
        message: `К сожалению вы проиграли`,
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
                    label: '✅ Попробовать ещё раз',
                    payload: {
                        command: 'начать игру'
                    },
                    color: Keyboard.PRIMARY_COLOR
                })
            ]
        ])
    });
});
hearCommand('3_9_8', async (context) => {
    await context.send({
        message: `К сожалению вы проиграли`,
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
                    label: '✅ Попробовать ещё раз',
                    payload: {
                        command: 'начать игру'
                    },
                    color: Keyboard.PRIMARY_COLOR
                })
            ]
        ])
    });
});
hearCommand('4', async (context) => {
    await context.send({
        message: `ᅠ`,
        keyboard: Keyboard.keyboard([
            [
                Keyboard.textButton({
                    label: '⬜',
                    payload: {
                        command: '4_1'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '⬜',
                    payload: {
                        command: '4_2'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '⬜',
                    payload: {
                        command: '4_3'
                    },
                    color: Keyboard.SECONDARY_COLOR
                })
            ],
            [
                Keyboard.textButton({
                    label: '❌',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '⭕',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '⬜',
                    payload: {
                        command: '4_6'
                    },
                    color: Keyboard.SECONDARY_COLOR
                })
            ],
            [
                Keyboard.textButton({
                    label: '⬜',
                    payload: {
                        command: '4_7'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '⬜',
                    payload: {
                        command: '4_8'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '⬜',
                    payload: {
                        command: '4_9'
                    },
                    color: Keyboard.SECONDARY_COLOR
                })
            ]
        ])
    });
});
hearCommand('4_1', async (context) => {
    await context.send({
        message: `ᅠ`,
        keyboard: Keyboard.keyboard([
            [
                Keyboard.textButton({
                    label: '❌',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '⬜',
                    payload: {
                        command: '4_1_2'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '⬜',
                    payload: {
                        command: '4_1_3'
                    },
                    color: Keyboard.SECONDARY_COLOR
                })
            ],
            [
                Keyboard.textButton({
                    label: '❌',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '⭕',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '⬜',
                    payload: {
                        command: '4_1_6'
                    },
                    color: Keyboard.SECONDARY_COLOR
                })
            ],
            [
                Keyboard.textButton({
                    label: '⭕',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '⬜',
                    payload: {
                        command: '4_1_8'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '⬜',
                    payload: {
                        command: '4_1_9'
                    },
                    color: Keyboard.SECONDARY_COLOR
                })
            ]
        ])
    });
});
hearCommand('4_1_2', async (context) => {
    await context.send({
        message: `К сожалению вы проиграли`,
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
                    label: '✅ Попробовать ещё раз',
                    payload: {
                        command: 'начать игру'
                    },
                    color: Keyboard.PRIMARY_COLOR
                })
            ]
        ])
    });
});
hearCommand('4_1_3', async (context) => {
    await context.send({
        message: `ᅠ`,
        keyboard: Keyboard.keyboard([
            [
                Keyboard.textButton({
                    label: '❌',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '⭕',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '❌',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                })
            ],
            [
                Keyboard.textButton({
                    label: '❌',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '⭕',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '⬜',
                    payload: {
                        command: '4_1_3_6'
                    },
                    color: Keyboard.SECONDARY_COLOR
                })
            ],
            [
                Keyboard.textButton({
                    label: '⭕',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '⬜',
                    payload: {
                        command: '4_1_3_8'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '⬜',
                    payload: {
                        command: '4_1_3_9'
                    },
                    color: Keyboard.SECONDARY_COLOR
                })
            ]
        ])
    });
});
hearCommand('4_1_3_6', async (context) => {
    await context.send({
        message: `К сожалению вы проиграли`,
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
                    label: '✅ Попробовать ещё раз',
                    payload: {
                        command: 'начать игру'
                    },
                    color: Keyboard.PRIMARY_COLOR
                })
            ]
        ])
    });
});
hearCommand('4_1_3_8', async (context) => {
    await context.send({
        message: `ᅠ`,
        keyboard: Keyboard.keyboard([
            [
                Keyboard.textButton({
                    label: '❌',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '⭕',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '❌',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                })
            ],
            [
                Keyboard.textButton({
                    label: '❌',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '⭕',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '⭕',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                })
            ],
            [
                Keyboard.textButton({
                    label: '⭕',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '❌',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '⬜',
                    payload: {
                        command: '4_1_3_8_9'
                    },
                    color: Keyboard.SECONDARY_COLOR
                })
            ]
        ])
    });
});
hearCommand('4_1_3_8_9', async (context) => {
    await context.send({
        message: `Игра закончилась ничьёй`,
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
                    label: '✅ Попробовать ещё раз',
                    payload: {
                        command: 'начать игру'
                    },
                    color: Keyboard.PRIMARY_COLOR
                })
            ]
        ])
    });
});
hearCommand('4_1_3_9', async (context) => {
    await context.send({
        message: `К сожалению вы проиграли`,
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
                    label: '✅ Попробовать ещё раз',
                    payload: {
                        command: 'начать игру'
                    },
                    color: Keyboard.PRIMARY_COLOR
                })
            ]
        ])
    });
});
hearCommand('4_1_6', async (context) => {
    await context.send({
        message: `К сожалению вы проиграли`,
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
                    label: '✅ Попробовать ещё раз',
                    payload: {
                        command: 'начать игру'
                    },
                    color: Keyboard.PRIMARY_COLOR
                })
            ]
        ])
    });
});
hearCommand('4_1_8', async (context) => {
    await context.send({
        message: `К сожалению вы проиграли`,
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
                    label: '✅ Попробовать ещё раз',
                    payload: {
                        command: 'начать игру'
                    },
                    color: Keyboard.PRIMARY_COLOR
                })
            ]
        ])
    });
});
hearCommand('4_1_9', async (context) => {
    await context.send({
        message: `К сожалению вы проиграли`,
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
                    label: '✅ Попробовать ещё раз',
                    payload: {
                        command: 'начать игру'
                    },
                    color: Keyboard.PRIMARY_COLOR
                })
            ]
        ])
    });
});
hearCommand('4_2', async (context) => {
    await context.send({
        message: `ᅠ`,
        keyboard: Keyboard.keyboard([
            [
                Keyboard.textButton({
                    label: '⭕',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '❌',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '⬜',
                    payload: {
                        command: '4_2_3'
                    },
                    color: Keyboard.SECONDARY_COLOR
                })
            ],
            [
                Keyboard.textButton({
                    label: '❌',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '⭕',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '⬜',
                    payload: {
                        command: '4_2_6'
                    },
                    color: Keyboard.SECONDARY_COLOR
                })
            ],
            [
                Keyboard.textButton({
                    label: '⬜',
                    payload: {
                        command: '4_2_7'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '⬜',
                    payload: {
                        command: '4_2_8'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '⬜',
                    payload: {
                        command: '4_2_9'
                    },
                    color: Keyboard.SECONDARY_COLOR
                })
            ]
        ])
    });
});
hearCommand('4_2_3', async (context) => {
    await context.send({
        message: `К сожалению вы проиграли`,
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
                    label: '✅ Попробовать ещё раз',
                    payload: {
                        command: 'начать игру'
                    },
                    color: Keyboard.PRIMARY_COLOR
                })
            ]
        ])
    });
});
hearCommand('4_2_6', async (context) => {
    await context.send({
        message: `К сожалению вы проиграли`,
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
                    label: '✅ Попробовать ещё раз',
                    payload: {
                        command: 'начать игру'
                    },
                    color: Keyboard.PRIMARY_COLOR
                })
            ]
        ])
    });
});
hearCommand('4_2_7', async (context) => {
    await context.send({
        message: `К сожалению вы проиграли`,
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
                    label: '✅ Попробовать ещё раз',
                    payload: {
                        command: 'начать игру'
                    },
                    color: Keyboard.PRIMARY_COLOR
                })
            ]
        ])
    });
});
hearCommand('4_2_8', async (context) => {
    await context.send({
        message: `К сожалению вы проиграли`,
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
                    label: '✅ Попробовать ещё раз',
                    payload: {
                        command: 'начать игру'
                    },
                    color: Keyboard.PRIMARY_COLOR
                })
            ]
        ])
    });
});
hearCommand('4_2_9', async (context) => {
    await context.send({
        message: `ᅠ`,
        keyboard: Keyboard.keyboard([
            [
                Keyboard.textButton({
                    label: '⭕',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '❌',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '⭕',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                })
            ],
            [
                Keyboard.textButton({
                    label: '❌',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '⭕',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '⬜',
                    payload: {
                        command: '4_2_9_6'
                    },
                    color: Keyboard.SECONDARY_COLOR
                })
            ],
            [
                Keyboard.textButton({
                    label: '⬜',
                    payload: {
                        command: '4_2_9_7'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '⬜',
                    payload: {
                        command: '4_2_9_8'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '❌',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                })
            ]
        ])
    });
});
hearCommand('4_2_9_6', async (context) => {
    await context.send({
        message: `К сожалению вы проиграли`,
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
                    label: '✅ Попробовать ещё раз',
                    payload: {
                        command: 'начать игру'
                    },
                    color: Keyboard.PRIMARY_COLOR
                })
            ]
        ])
    });
});
hearCommand('4_2_9_7', async (context) => {
    await context.send({
        message: `ᅠ`,
        keyboard: Keyboard.keyboard([
            [
                Keyboard.textButton({
                    label: '⭕',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '❌',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '⭕',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                })
            ],
            [
                Keyboard.textButton({
                    label: '❌',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '⭕',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '⬜',
                    payload: {
                        command: '4_2_9_7_6'
                    },
                    color: Keyboard.SECONDARY_COLOR
                })
            ],
            [
                Keyboard.textButton({
                    label: '❌',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '⭕',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '❌',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                })
            ]
        ])
    });
});
hearCommand('4_2_9_7_6', async (context) => {
    await context.send({
        message: `Игра закончилась ничьёй`,
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
                    label: '✅ Попробовать ещё раз',
                    payload: {
                        command: 'начать игру'
                    },
                    color: Keyboard.PRIMARY_COLOR
                })
            ]
        ])
    });
});
hearCommand('4_2_9_8', async (context) => {
    await context.send({
        message: `К сожалению вы проиграли`,
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
                    label: '✅ Попробовать ещё раз',
                    payload: {
                        command: 'начать игру'
                    },
                    color: Keyboard.PRIMARY_COLOR
                })
            ]
        ])
    });
});
hearCommand('4_3', async (context) => {
    await context.send({
        message: `ᅠ`,
        keyboard: Keyboard.keyboard([
            [
                Keyboard.textButton({
                    label: '⭕',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '⬜',
                    payload: {
                        command: '4_3_2'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '❌',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                })
            ],
            [
                Keyboard.textButton({
                    label: '❌',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '⭕',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '⬜',
                    payload: {
                        command: '4_3_6'
                    },
                    color: Keyboard.SECONDARY_COLOR
                })
            ],
            [
                Keyboard.textButton({
                    label: '⬜',
                    payload: {
                        command: '4_3_7'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '⬜',
                    payload: {
                        command: '4_3_8'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '⬜',
                    payload: {
                        command: '4_3_9'
                    },
                    color: Keyboard.SECONDARY_COLOR
                })
            ]
        ])
    });
});
hearCommand('4_3_2', async (context) => {
    await context.send({
        message: `К сожалению вы проиграли`,
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
                    label: '✅ Попробовать ещё раз',
                    payload: {
                        command: 'начать игру'
                    },
                    color: Keyboard.PRIMARY_COLOR
                })
            ]
        ])
    });
});
hearCommand('4_3_6', async (context) => {
    await context.send({
        message: `К сожалению вы проиграли`,
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
                    label: '✅ Попробовать ещё раз',
                    payload: {
                        command: 'начать игру'
                    },
                    color: Keyboard.PRIMARY_COLOR
                })
            ]
        ])
    });
});
hearCommand('4_3_7', async (context) => {
    await context.send({
        message: `К сожалению вы проиграли`,
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
                    label: '✅ Попробовать ещё раз',
                    payload: {
                        command: 'начать игру'
                    },
                    color: Keyboard.PRIMARY_COLOR
                })
            ]
        ])
    });
});
hearCommand('4_3_8', async (context) => {
    await context.send({
        message: `К сожалению вы проиграли`,
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
                    label: '✅ Попробовать ещё раз',
                    payload: {
                        command: 'начать игру'
                    },
                    color: Keyboard.PRIMARY_COLOR
                })
            ]
        ])
    });
});
hearCommand('4_3_9', async (context) => {
    await context.send({
        message: `ᅠ`,
        keyboard: Keyboard.keyboard([
            [
                Keyboard.textButton({
                    label: '⭕',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '⬜',
                    payload: {
                        command: '4_3_9_2'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '❌',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                })
            ],
            [
                Keyboard.textButton({
                    label: '❌',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '⭕',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '⭕',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                })
            ],
            [
                Keyboard.textButton({
                    label: '⬜',
                    payload: {
                        command: '4_3_9_7'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '⬜',
                    payload: {
                        command: '4_3_9_8'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '❌',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                })
            ]
        ])
    });
});
hearCommand('4_3_9_2', async (context) => {
    await context.send({
        message: `ᅠ`,
        keyboard: Keyboard.keyboard([
            [
                Keyboard.textButton({
                    label: '⭕',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '❌',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '❌',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                })
            ],
            [
                Keyboard.textButton({
                    label: '❌',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '⭕',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '⭕',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                })
            ],
            [
                Keyboard.textButton({
                    label: '⭕',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '⬜',
                    payload: {
                        command: '4_3_9_2_8'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '❌',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                })
            ]
        ])
    });
});
hearCommand('4_3_9_2_8', async (context) => {
    await context.send({
        message: `Игра закончилась ничьёй`,
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
                    label: '✅ Попробовать ещё раз',
                    payload: {
                        command: 'начать игру'
                    },
                    color: Keyboard.PRIMARY_COLOR
                })
            ]
        ])
    });
});
hearCommand('4_3_9_7', async (context) => {
    await context.send({
        message: `ᅠ`,
        keyboard: Keyboard.keyboard([
            [
                Keyboard.textButton({
                    label: '⭕',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '⬜',
                    payload: {
                        command: '4_3_9_7_2'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '❌',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                })
            ],
            [
                Keyboard.textButton({
                    label: '❌',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '⭕',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '⭕',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                })
            ],
            [
                Keyboard.textButton({
                    label: '❌',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '⭕',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '❌',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                })
            ]
        ])
    });
});
hearCommand('4_3_9_7_2', async (context) => {
    await context.send({
        message: `Игра закончилась ничьёй`,
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
                    label: '✅ Попробовать ещё раз',
                    payload: {
                        command: 'начать игру'
                    },
                    color: Keyboard.PRIMARY_COLOR
                })
            ]
        ])
    });
});
hearCommand('4_3_9_8', async (context) => {
    await context.send({
        message: `ᅠ`,
        keyboard: Keyboard.keyboard([
            [
                Keyboard.textButton({
                    label: '⭕',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '⬜',
                    payload: {
                        command: '4_3_9_8_2'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '❌',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                })
            ],
            [
                Keyboard.textButton({
                    label: '❌',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '⭕',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '⭕',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                })
            ],
            [
                Keyboard.textButton({
                    label: '⭕',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '❌',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '❌',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                })
            ]
        ])
    });
});
hearCommand('4_3_9_8_2', async (context) => {
    await context.send({
        message: `Игра закончилась ничьёй`,
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
                    label: '✅ Попробовать ещё раз',
                    payload: {
                        command: 'начать игру'
                    },
                    color: Keyboard.PRIMARY_COLOR
                })
            ]
        ])
    });
});
hearCommand('4_6', async (context) => {
    await context.send({
        message: `ᅠ`,
        keyboard: Keyboard.keyboard([
            [
                Keyboard.textButton({
                    label: '⭕',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '⬜',
                    payload: {
                        command: '4_6_2'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '⬜',
                    payload: {
                        command: '4_6_3'
                    },
                    color: Keyboard.SECONDARY_COLOR
                })
            ],
            [
                Keyboard.textButton({
                    label: '❌',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '⭕',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '❌',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                })
            ],
            [
                Keyboard.textButton({
                    label: '⬜',
                    payload: {
                        command: '4_6_7'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '⬜',
                    payload: {
                        command: '4_6_8'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '⬜',
                    payload: {
                        command: '4_6_9'
                    },
                    color: Keyboard.SECONDARY_COLOR
                })
            ]
        ])
    });
});
hearCommand('4_6_2', async (context) => {
    await context.send({
        message: `К сожалению вы проиграли`,
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
                    label: '✅ Попробовать ещё раз',
                    payload: {
                        command: 'начать игру'
                    },
                    color: Keyboard.PRIMARY_COLOR
                })
            ]
        ])
    });
});
hearCommand('4_6_3', async (context) => {
    await context.send({
        message: `К сожалению вы проиграли`,
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
                    label: '✅ Попробовать ещё раз',
                    payload: {
                        command: 'начать игру'
                    },
                    color: Keyboard.PRIMARY_COLOR
                })
            ]
        ])
    });
});
hearCommand('4_6_7', async (context) => {
    await context.send({
        message: `К сожалению вы проиграли`,
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
                    label: '✅ Попробовать ещё раз',
                    payload: {
                        command: 'начать игру'
                    },
                    color: Keyboard.PRIMARY_COLOR
                })
            ]
        ])
    });
});
hearCommand('4_6_8', async (context) => {
    await context.send({
        message: `К сожалению вы проиграли`,
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
                    label: '✅ Попробовать ещё раз',
                    payload: {
                        command: 'начать игру'
                    },
                    color: Keyboard.PRIMARY_COLOR
                })
            ]
        ])
    });
});
hearCommand('4_6_9', async (context) => {
    await context.send({
        message: `ᅠ`,
        keyboard: Keyboard.keyboard([
            [
                Keyboard.textButton({
                    label: '⭕',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '⬜',
                    payload: {
                        command: '4_6_9_2'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '⭕',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                })
            ],
            [
                Keyboard.textButton({
                    label: '❌',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '⭕',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '❌',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                })
            ],
            [
                Keyboard.textButton({
                    label: '⬜',
                    payload: {
                        command: '4_6_9_7'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '⬜',
                    payload: {
                        command: '4_6_9_8'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '❌',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                })
            ]
        ])
    });
});
hearCommand('4_6_9_2', async (context) => {
    await context.send({
        message: `К сожалению вы проиграли`,
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
                    label: '✅ Попробовать ещё раз',
                    payload: {
                        command: 'начать игру'
                    },
                    color: Keyboard.PRIMARY_COLOR
                })
            ]
        ])
    });
});
hearCommand('4_6_9_7', async (context) => {
    await context.send({
        message: `К сожалению вы проиграли`,
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
                    label: '✅ Попробовать ещё раз',
                    payload: {
                        command: 'начать игру'
                    },
                    color: Keyboard.PRIMARY_COLOR
                })
            ]
        ])
    });
});
hearCommand('4_6_9_8', async (context) => {
    await context.send({
        message: `К сожалению вы проиграли`,
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
                    label: '✅ Попробовать ещё раз',
                    payload: {
                        command: 'начать игру'
                    },
                    color: Keyboard.PRIMARY_COLOR
                })
            ]
        ])
    });
});
hearCommand('4_7', async (context) => {
    await context.send({
        message: `ᅠ`,
        keyboard: Keyboard.keyboard([
            [
                Keyboard.textButton({
                    label: '⭕',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '⬜',
                    payload: {
                        command: '4_7_2'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '⬜',
                    payload: {
                        command: '4_7_3'
                    },
                    color: Keyboard.SECONDARY_COLOR
                })
            ],
            [
                Keyboard.textButton({
                    label: '❌',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '⭕',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '⬜',
                    payload: {
                        command: '4_7_6'
                    },
                    color: Keyboard.SECONDARY_COLOR
                })
            ],
            [
                Keyboard.textButton({
                    label: '❌',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '⬜',
                    payload: {
                        command: '4_7_8'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '⬜',
                    payload: {
                        command: '4_7_9'
                    },
                    color: Keyboard.SECONDARY_COLOR
                })
            ]
        ])
    });
});
hearCommand('4_7_2', async (context) => {
    await context.send({
        message: `К сожалению вы проиграли`,
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
                    label: '✅ Попробовать ещё раз',
                    payload: {
                        command: 'начать игру'
                    },
                    color: Keyboard.PRIMARY_COLOR
                })
            ]
        ])
    });
});
hearCommand('4_7_3', async (context) => {
    await context.send({
        message: `К сожалению вы проиграли`,
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
                    label: '✅ Попробовать ещё раз',
                    payload: {
                        command: 'начать игру'
                    },
                    color: Keyboard.PRIMARY_COLOR
                })
            ]
        ])
    });
});
hearCommand('4_7_6', async (context) => {
    await context.send({
        message: `К сожалению вы проиграли`,
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
                    label: '✅ Попробовать ещё раз',
                    payload: {
                        command: 'начать игру'
                    },
                    color: Keyboard.PRIMARY_COLOR
                })
            ]
        ])
    });
});
hearCommand('4_7_8', async (context) => {
    await context.send({
        message: `К сожалению вы проиграли`,
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
                    label: '✅ Попробовать ещё раз',
                    payload: {
                        command: 'начать игру'
                    },
                    color: Keyboard.PRIMARY_COLOR
                })
            ]
        ])
    });
});
hearCommand('4_7_9', async (context) => {
    await context.send({
        message: `ᅠ`,
        keyboard: Keyboard.keyboard([
            [
                Keyboard.textButton({
                    label: '⭕',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '⬜',
                    payload: {
                        command: '4_7_9_2'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '⬜',
                    payload: {
                        command: '4_7_9_3'
                    },
                    color: Keyboard.SECONDARY_COLOR
                })
            ],
            [
                Keyboard.textButton({
                    label: '❌',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '⭕',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '⬜',
                    payload: {
                        command: '4_7_9_6'
                    },
                    color: Keyboard.SECONDARY_COLOR
                })
            ],
            [
                Keyboard.textButton({
                    label: '❌',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '⭕',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '❌',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                })
            ]
        ])
    });
});
hearCommand('4_7_9_2', async (context) => {
    await context.send({
        message: `ᅠ`,
        keyboard: Keyboard.keyboard([
            [
                Keyboard.textButton({
                    label: '⭕',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '❌',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '⭕',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                })
            ],
            [
                Keyboard.textButton({
                    label: '❌',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '⭕',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '⬜',
                    payload: {
                        command: '4_7_9_2_6'
                    },
                    color: Keyboard.SECONDARY_COLOR
                })
            ],
            [
                Keyboard.textButton({
                    label: '❌',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '⭕',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '❌',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                })
            ]
        ])
    });
});
hearCommand('4_7_9_2_6', async (context) => {
    await context.send({
        message: `Игра закончилась ничьёй`,
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
                    label: '✅ Попробовать ещё раз',
                    payload: {
                        command: 'начать игру'
                    },
                    color: Keyboard.PRIMARY_COLOR
                })
            ]
        ])
    });
});
hearCommand('4_7_9_3', async (context) => {
    await context.send({
        message: `К сожалению вы проиграли`,
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
                    label: '✅ Попробовать ещё раз',
                    payload: {
                        command: 'начать игру'
                    },
                    color: Keyboard.PRIMARY_COLOR
                })
            ]
        ])
    });
});
hearCommand('4_7_9_6', async (context) => {
    await context.send({
        message: `К сожалению вы проиграли`,
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
                    label: '✅ Попробовать ещё раз',
                    payload: {
                        command: 'начать игру'
                    },
                    color: Keyboard.PRIMARY_COLOR
                })
            ]
        ])
    });
});
hearCommand('4_8', async (context) => {
    await context.send({
        message: `ᅠ`,
        keyboard: Keyboard.keyboard([
            [
                Keyboard.textButton({
                    label: '⬜',
                    payload: {
                        command: '4_8_1'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '⬜',
                    payload: {
                        command: '4_8_2'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '⬜',
                    payload: {
                        command: '4_8_3'
                    },
                    color: Keyboard.SECONDARY_COLOR
                })
            ],
            [
                Keyboard.textButton({
                    label: '❌',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '⭕',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '⬜',
                    payload: {
                        command: '4_8_6'
                    },
                    color: Keyboard.SECONDARY_COLOR
                })
            ],
            [
                Keyboard.textButton({
                    label: '⭕',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '❌',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '⬜',
                    payload: {
                        command: '4_8_9'
                    },
                    color: Keyboard.SECONDARY_COLOR
                })
            ]
        ])
    });
});
hearCommand('4_8_1', async (context) => {
    await context.send({
        message: `К сожалению вы проиграли`,
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
                    label: '✅ Попробовать ещё раз',
                    payload: {
                        command: 'начать игру'
                    },
                    color: Keyboard.PRIMARY_COLOR
                })
            ]
        ])
    });
});
hearCommand('4_8_2', async (context) => {
    await context.send({
        message: `К сожалению вы проиграли`,
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
                    label: '✅ Попробовать ещё раз',
                    payload: {
                        command: 'начать игру'
                    },
                    color: Keyboard.PRIMARY_COLOR
                })
            ]
        ])
    });
});
hearCommand('4_8_3', async (context) => {
    await context.send({
        message: `ᅠ`,
        keyboard: Keyboard.keyboard([
            [
                Keyboard.textButton({
                    label: '⭕',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '⬜',
                    payload: {
                        command: '4_8_3_2'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '❌',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                })
            ],
            [
                Keyboard.textButton({
                    label: '❌',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '⭕',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '⬜',
                    payload: {
                        command: '4_8_3_6'
                    },
                    color: Keyboard.SECONDARY_COLOR
                })
            ],
            [
                Keyboard.textButton({
                    label: '⭕',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '❌',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '⬜',
                    payload: {
                        command: '4_8_3_9'
                    },
                    color: Keyboard.SECONDARY_COLOR
                })
            ]
        ])
    });
});
hearCommand('4_8_3_2', async (context) => {
    await context.send({
        message: `К сожалению вы проиграли`,
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
                    label: '✅ Попробовать ещё раз',
                    payload: {
                        command: 'начать игру'
                    },
                    color: Keyboard.PRIMARY_COLOR
                })
            ]
        ])
    });
});
hearCommand('4_8_3_6', async (context) => {
    await context.send({
        message: `К сожалению вы проиграли`,
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
                    label: '✅ Попробовать ещё раз',
                    payload: {
                        command: 'начать игру'
                    },
                    color: Keyboard.PRIMARY_COLOR
                })
            ]
        ])
    });
});
hearCommand('4_8_3_9', async (context) => {
    await context.send({
        message: `ᅠ`,
        keyboard: Keyboard.keyboard([
            [
                Keyboard.textButton({
                    label: '⭕',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '⬜',
                    payload: {
                        command: '4_8_3_9_2'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '❌',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                })
            ],
            [
                Keyboard.textButton({
                    label: '❌',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '⭕',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '⭕',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                })
            ],
            [
                Keyboard.textButton({
                    label: '⭕',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '❌',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '❌',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                })
            ]
        ])
    });
});
hearCommand('4_8_3_9_2', async (context) => {
    await context.send({
        message: `Игра закончилась ничьёй`,
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
                    label: '✅ Попробовать ещё раз',
                    payload: {
                        command: 'начать игру'
                    },
                    color: Keyboard.PRIMARY_COLOR
                })
            ]
        ])
    });
});
hearCommand('4_8_6', async (context) => {
    await context.send({
        message: `К сожалению вы проиграли`,
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
                    label: '✅ Попробовать ещё раз',
                    payload: {
                        command: 'начать игру'
                    },
                    color: Keyboard.PRIMARY_COLOR
                })
            ]
        ])
    });
});
hearCommand('4_8_9', async (context) => {
    await context.send({
        message: `К сожалению вы проиграли`,
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
                    label: '✅ Попробовать ещё раз',
                    payload: {
                        command: 'начать игру'
                    },
                    color: Keyboard.PRIMARY_COLOR
                })
            ]
        ])
    });
});
hearCommand('4_9', async (context) => {
    await context.send({
        message: `ᅠ`,
        keyboard: Keyboard.keyboard([
            [
                Keyboard.textButton({
                    label: '⬜',
                    payload: {
                        command: '4_9_1'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '⬜',
                    payload: {
                        command: '4_9_2'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '⬜',
                    payload: {
                        command: '4_9_3'
                    },
                    color: Keyboard.SECONDARY_COLOR
                })
            ],
            [
                Keyboard.textButton({
                    label: '❌',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '⭕',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '⬜',
                    payload: {
                        command: '4_9_6'
                    },
                    color: Keyboard.SECONDARY_COLOR
                })
            ],
            [
                Keyboard.textButton({
                    label: '⭕',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '⬜',
                    payload: {
                        command: '4_9_8'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '❌',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                })
            ]
        ])
    });
});
hearCommand('4_9_1', async (context) => {
    await context.send({
        message: `К сожалению вы проиграли`,
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
                    label: '✅ Попробовать ещё раз',
                    payload: {
                        command: 'начать игру'
                    },
                    color: Keyboard.PRIMARY_COLOR
                })
            ]
        ])
    });
});
hearCommand('4_9_2', async (context) => {
    await context.send({
        message: `К сожалению вы проиграли`,
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
                    label: '✅ Попробовать ещё раз',
                    payload: {
                        command: 'начать игру'
                    },
                    color: Keyboard.PRIMARY_COLOR
                })
            ]
        ])
    });
});
hearCommand('4_9_3', async (context) => {
    await context.send({
        message: `ᅠ`,
        keyboard: Keyboard.keyboard([
            [
                Keyboard.textButton({
                    label: '⬜',
                    payload: {
                        command: '4_9_3_1'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '⬜',
                    payload: {
                        command: '4_9_3_2'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '❌',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                })
            ],
            [
                Keyboard.textButton({
                    label: '❌',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '⭕',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '⭕',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                })
            ],
            [
                Keyboard.textButton({
                    label: '⭕',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '⬜',
                    payload: {
                        command: '4_9_3_8'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '❌',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                })
            ]
        ])
    });
});
hearCommand('4_9_3_1', async (context) => {
    await context.send({
        message: `ᅠ`,
        keyboard: Keyboard.keyboard([
            [
                Keyboard.textButton({
                    label: '❌',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '⭕',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '❌',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                })
            ],
            [
                Keyboard.textButton({
                    label: '❌',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '⭕',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '⭕',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                })
            ],
            [
                Keyboard.textButton({
                    label: '⭕',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '⬜',
                    payload: {
                        command: '4_9_3_1_8'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '❌',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                })
            ]
        ])
    });
});
hearCommand('4_9_3_1_8', async (context) => {
    await context.send({
        message: `Игра закончилась ничьёй`,
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
                    label: '✅ Попробовать ещё раз',
                    payload: {
                        command: 'начать игру'
                    },
                    color: Keyboard.PRIMARY_COLOR
                })
            ]
        ])
    });
});
hearCommand('4_9_3_2', async (context) => {
    await context.send({
        message: `ᅠ`,
        keyboard: Keyboard.keyboard([
            [
                Keyboard.textButton({
                    label: '⭕',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '❌',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '❌',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                })
            ],
            [
                Keyboard.textButton({
                    label: '❌',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '⭕',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '⭕',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                })
            ],
            [
                Keyboard.textButton({
                    label: '⭕',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '⬜',
                    payload: {
                        command: '4_9_3_2_8'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '❌',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                })
            ]
        ])
    });
});
hearCommand('4_9_3_2_8', async (context) => {
    await context.send({
        message: `Игра закончилась ничьёй`,
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
                    label: '✅ Попробовать ещё раз',
                    payload: {
                        command: 'начать игру'
                    },
                    color: Keyboard.PRIMARY_COLOR
                })
            ]
        ])
    });
});
hearCommand('4_9_3_8', async (context) => {
    await context.send({
        message: `ᅠ`,
        keyboard: Keyboard.keyboard([
            [
                Keyboard.textButton({
                    label: '⭕',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '⬜',
                    payload: {
                        command: '4_9_3_8_2'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '❌',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                })
            ],
            [
                Keyboard.textButton({
                    label: '❌',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '⭕',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '⭕',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                })
            ],
            [
                Keyboard.textButton({
                    label: '⭕',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '❌',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '❌',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                })
            ]
        ])
    });
});
hearCommand('4_9_3_8_2', async (context) => {
    await context.send({
        message: `Игра закончилась ничьёй`,
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
                    label: '✅ Попробовать ещё раз',
                    payload: {
                        command: 'начать игру'
                    },
                    color: Keyboard.PRIMARY_COLOR
                })
            ]
        ])
    });
});
hearCommand('4_9_6', async (context) => {
    await context.send({
        message: `К сожалению вы проиграли`,
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
                    label: '✅ Попробовать ещё раз',
                    payload: {
                        command: 'начать игру'
                    },
                    color: Keyboard.PRIMARY_COLOR
                })
            ]
        ])
    });
});
hearCommand('4_9_8', async (context) => {
    await context.send({
        message: `К сожалению вы проиграли`,
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
                    label: '✅ Попробовать ещё раз',
                    payload: {
                        command: 'начать игру'
                    },
                    color: Keyboard.PRIMARY_COLOR
                })
            ]
        ])
    });
});
hearCommand('5', async (context) => {
    await context.send({
        message: `ᅠ`,
        keyboard: Keyboard.keyboard([
            [
                Keyboard.textButton({
                    label: '⭕',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '⬜',
                    payload: {
                        command: '5_2'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '⬜',
                    payload: {
                        command: '5_3'
                    },
                    color: Keyboard.SECONDARY_COLOR
                })
            ],
            [
                Keyboard.textButton({
                    label: '⬜',
                    payload: {
                        command: '5_4'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '❌',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '⬜',
                    payload: {
                        command: '5_6'
                    },
                    color: Keyboard.SECONDARY_COLOR
                })
            ],
            [
                Keyboard.textButton({
                    label: '⬜',
                    payload: {
                        command: '5_7'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '⬜',
                    payload: {
                        command: '5_8'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '⬜',
                    payload: {
                        command: '5_9'
                    },
                    color: Keyboard.SECONDARY_COLOR
                })
            ]
        ])
    });
});
hearCommand('5_2', async (context) => {
    await context.send({
        message: `ᅠ`,
        keyboard: Keyboard.keyboard([
            [
                Keyboard.textButton({
                    label: '⭕',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '❌',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '⬜',
                    payload: {
                        command: '5_2_3'
                    },
                    color: Keyboard.SECONDARY_COLOR
                })
            ],
            [
                Keyboard.textButton({
                    label: '⬜',
                    payload: {
                        command: '5_2_4'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '❌',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '⬜',
                    payload: {
                        command: '5_2_6'
                    },
                    color: Keyboard.SECONDARY_COLOR
                })
            ],
            [
                Keyboard.textButton({
                    label: '⬜',
                    payload: {
                        command: '5_2_7'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '⭕',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '⬜',
                    payload: {
                        command: '5_2_9'
                    },
                    color: Keyboard.SECONDARY_COLOR
                })
            ]
        ])
    });
});
hearCommand('5_2_3', async (context) => {
    await context.send({
        message: `ᅠ`,
        keyboard: Keyboard.keyboard([
            [
                Keyboard.textButton({
                    label: '⭕',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '❌',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '❌',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                })
            ],
            [
                Keyboard.textButton({
                    label: '⬜',
                    payload: {
                        command: '5_2_3_4'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '❌',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '⬜',
                    payload: {
                        command: '5_2_3_6'
                    },
                    color: Keyboard.SECONDARY_COLOR
                })
            ],
            [
                Keyboard.textButton({
                    label: '⭕',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '⭕',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '⬜',
                    payload: {
                        command: '5_2_3_9'
                    },
                    color: Keyboard.SECONDARY_COLOR
                })
            ]
        ])
    });
});
hearCommand('5_2_3_4', async (context) => {
    await context.send({
        message: `К сожалению вы проиграли`,
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
                    label: '✅ Попробовать ещё раз',
                    payload: {
                        command: 'начать игру'
                    },
                    color: Keyboard.PRIMARY_COLOR
                })
            ]
        ])
    });
});
hearCommand('5_2_3_6', async (context) => {
    await context.send({
        message: `К сожалению вы проиграли`,
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
                    label: '✅ Попробовать ещё раз',
                    payload: {
                        command: 'начать игру'
                    },
                    color: Keyboard.PRIMARY_COLOR
                })
            ]
        ])
    });
});
hearCommand('5_2_3_9', async (context) => {
    await context.send({
        message: `К сожалению вы проиграли`,
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
                    label: '✅ Попробовать ещё раз',
                    payload: {
                        command: 'начать игру'
                    },
                    color: Keyboard.PRIMARY_COLOR
                })
            ]
        ])
    });
});
hearCommand('5_2_4', async (context) => {
    await context.send({
        message: `ᅠ`,
        keyboard: Keyboard.keyboard([
            [
                Keyboard.textButton({
                    label: '⭕',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '❌',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '⬜',
                    payload: {
                        command: '5_2_4_3'
                    },
                    color: Keyboard.SECONDARY_COLOR
                })
            ],
            [
                Keyboard.textButton({
                    label: '❌',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '❌',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '⭕',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                })
            ],
            [
                Keyboard.textButton({
                    label: '⬜',
                    payload: {
                        command: '5_2_4_7'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '⭕',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '⬜',
                    payload: {
                        command: '5_2_4_9'
                    },
                    color: Keyboard.SECONDARY_COLOR
                })
            ]
        ])
    });
});
hearCommand('5_2_4_3', async (context) => {
    await context.send({
        message: `ᅠ`,
        keyboard: Keyboard.keyboard([
            [
                Keyboard.textButton({
                    label: '⭕',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '❌',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '❌',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                })
            ],
            [
                Keyboard.textButton({
                    label: '❌',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '❌',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '⭕',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                })
            ],
            [
                Keyboard.textButton({
                    label: '⭕',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '⭕',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '⬜',
                    payload: {
                        command: '5_2_4_3_9'
                    },
                    color: Keyboard.SECONDARY_COLOR
                })
            ]
        ])
    });
});
hearCommand('5_2_4_3_9', async (context) => {
    await context.send({
        message: `Игра закончилась ничьёй`,
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
                    label: '✅ Попробовать ещё раз',
                    payload: {
                        command: 'начать игру'
                    },
                    color: Keyboard.PRIMARY_COLOR
                })
            ]
        ])
    });
});
hearCommand('5_2_4_7', async (context) => {
    await context.send({
        message: `ᅠ`,
        keyboard: Keyboard.keyboard([
            [
                Keyboard.textButton({
                    label: '⭕',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '❌',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '⭕',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                })
            ],
            [
                Keyboard.textButton({
                    label: '❌',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '❌',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '⭕',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                })
            ],
            [
                Keyboard.textButton({
                    label: '❌',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '⭕',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '⬜',
                    payload: {
                        command: '5_2_4_7_9'
                    },
                    color: Keyboard.SECONDARY_COLOR
                })
            ]
        ])
    });
});
hearCommand('5_2_4_7_9', async (context) => {
    await context.send({
        message: `Игра закончилась ничьёй`,
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
                    label: '✅ Попробовать ещё раз',
                    payload: {
                        command: 'начать игру'
                    },
                    color: Keyboard.PRIMARY_COLOR
                })
            ]
        ])
    });
});
hearCommand('5_2_4_9', async (context) => {
    await context.send({
        message: `ᅠ`,
        keyboard: Keyboard.keyboard([
            [
                Keyboard.textButton({
                    label: '⭕',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '❌',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '⭕',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                })
            ],
            [
                Keyboard.textButton({
                    label: '❌',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '❌',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '⭕',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                })
            ],
            [
                Keyboard.textButton({
                    label: '⬜',
                    payload: {
                        command: '5_2_4_9_7'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '⭕',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '❌',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                })
            ]
        ])
    });
});
hearCommand('5_2_4_9_7', async (context) => {
    await context.send({
        message: `Игра закончилась ничьёй`,
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
                    label: '✅ Попробовать ещё раз',
                    payload: {
                        command: 'начать игру'
                    },
                    color: Keyboard.PRIMARY_COLOR
                })
            ]
        ])
    });
});
hearCommand('5_2_6', async (context) => {
    await context.send({
        message: `ᅠ`,
        keyboard: Keyboard.keyboard([
            [
                Keyboard.textButton({
                    label: '⭕',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '❌',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '⬜',
                    payload: {
                        command: '5_2_6_3'
                    },
                    color: Keyboard.SECONDARY_COLOR
                })
            ],
            [
                Keyboard.textButton({
                    label: '⭕',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '❌',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '❌',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                })
            ],
            [
                Keyboard.textButton({
                    label: '⬜',
                    payload: {
                        command: '5_2_6_7'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '⭕',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '⬜',
                    payload: {
                        command: '5_2_6_9'
                    },
                    color: Keyboard.SECONDARY_COLOR
                })
            ]
        ])
    });
});
hearCommand('5_2_6_3', async (context) => {
    await context.send({
        message: `К сожалению вы проиграли`,
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
                    label: '✅ Попробовать ещё раз',
                    payload: {
                        command: 'начать игру'
                    },
                    color: Keyboard.PRIMARY_COLOR
                })
            ]
        ])
    });
});
hearCommand('5_2_6_7', async (context) => {
    await context.send({
        message: `ᅠ`,
        keyboard: Keyboard.keyboard([
            [
                Keyboard.textButton({
                    label: '⭕',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '❌',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '⭕',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                })
            ],
            [
                Keyboard.textButton({
                    label: '⭕',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '❌',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '❌',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                })
            ],
            [
                Keyboard.textButton({
                    label: '❌',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '⭕',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '⬜',
                    payload: {
                        command: '5_2_6_7_9'
                    },
                    color: Keyboard.SECONDARY_COLOR
                })
            ]
        ])
    });
});
hearCommand('5_2_6_7_9', async (context) => {
    await context.send({
        message: `Игра закончилась ничьёй`,
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
                    label: '✅ Попробовать ещё раз',
                    payload: {
                        command: 'начать игру'
                    },
                    color: Keyboard.PRIMARY_COLOR
                })
            ]
        ])
    });
});
hearCommand('5_2_6_9', async (context) => {
    await context.send({
        message: `К сожалению вы проиграли`,
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
                    label: '✅ Попробовать ещё раз',
                    payload: {
                        command: 'начать игру'
                    },
                    color: Keyboard.PRIMARY_COLOR
                })
            ]
        ])
    });
});
hearCommand('5_2_7', async (context) => {
    await context.send({
        message: `ᅠ`,
        keyboard: Keyboard.keyboard([
            [
                Keyboard.textButton({
                    label: '⭕',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '❌',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '⭕',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                })
            ],
            [
                Keyboard.textButton({
                    label: '⬜',
                    payload: {
                        command: '5_2_7_4'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '❌',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '⬜',
                    payload: {
                        command: '5_2_7_6'
                    },
                    color: Keyboard.SECONDARY_COLOR
                })
            ],
            [
                Keyboard.textButton({
                    label: '❌',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '⭕',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '⬜',
                    payload: {
                        command: '5_2_7_9'
                    },
                    color: Keyboard.SECONDARY_COLOR
                })
            ]
        ])
    });
});
hearCommand('5_2_7_4', async (context) => {
    await context.send({
        message: `ᅠ`,
        keyboard: Keyboard.keyboard([
            [
                Keyboard.textButton({
                    label: '⭕',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '❌',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '⭕',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                })
            ],
            [
                Keyboard.textButton({
                    label: '❌',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '❌',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '⭕',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                })
            ],
            [
                Keyboard.textButton({
                    label: '❌',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '⭕',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '⬜',
                    payload: {
                        command: '5_2_7_4_9'
                    },
                    color: Keyboard.SECONDARY_COLOR
                })
            ]
        ])
    });
});
hearCommand('5_2_7_4_9', async (context) => {
    await context.send({
        message: `Игра закончилась ничьёй`,
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
                    label: '✅ Попробовать ещё раз',
                    payload: {
                        command: 'начать игру'
                    },
                    color: Keyboard.PRIMARY_COLOR
                })
            ]
        ])
    });
});
hearCommand('5_2_7_6', async (context) => {
    await context.send({
        message: `ᅠ`,
        keyboard: Keyboard.keyboard([
            [
                Keyboard.textButton({
                    label: '⭕',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '❌',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '⭕',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                })
            ],
            [
                Keyboard.textButton({
                    label: '⭕',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '❌',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '❌',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                })
            ],
            [
                Keyboard.textButton({
                    label: '❌',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '⭕',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '⬜',
                    payload: {
                        command: '5_2_7_6_9'
                    },
                    color: Keyboard.SECONDARY_COLOR
                })
            ]
        ])
    });
});
hearCommand('5_2_7_6_9', async (context) => {
    await context.send({
        message: `Игра закончилась ничьёй`,
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
                    label: '✅ Попробовать ещё раз',
                    payload: {
                        command: 'начать игру'
                    },
                    color: Keyboard.PRIMARY_COLOR
                })
            ]
        ])
    });
});
hearCommand('5_2_7_9', async (context) => {
    await context.send({
        message: `ᅠ`,
        keyboard: Keyboard.keyboard([
            [
                Keyboard.textButton({
                    label: '⭕',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '❌',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '⭕',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                })
            ],
            [
                Keyboard.textButton({
                    label: '⭕',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '❌',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '⬜',
                    payload: {
                        command: '5_2_7_9_6'
                    },
                    color: Keyboard.SECONDARY_COLOR
                })
            ],
            [
                Keyboard.textButton({
                    label: '❌',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '⭕',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '❌',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                })
            ]
        ])
    });
});
hearCommand('5_2_7_9_6', async (context) => {
    await context.send({
        message: `Игра закончилась ничьёй`,
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
                    label: '✅ Попробовать ещё раз',
                    payload: {
                        command: 'начать игру'
                    },
                    color: Keyboard.PRIMARY_COLOR
                })
            ]
        ])
    });
});
hearCommand('5_2_9', async (context) => {
    await context.send({
        message: `ᅠ`,
        keyboard: Keyboard.keyboard([
            [
                Keyboard.textButton({
                    label: '⭕',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '❌',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '⭕',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                })
            ],
            [
                Keyboard.textButton({
                    label: '⬜',
                    payload: {
                        command: '5_2_9_4'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '❌',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '⬜',
                    payload: {
                        command: '5_2_9_6'
                    },
                    color: Keyboard.SECONDARY_COLOR
                })
            ],
            [
                Keyboard.textButton({
                    label: '⬜',
                    payload: {
                        command: '5_2_9_7'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '⭕',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '❌',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                })
            ]
        ])
    });
});
hearCommand('5_2_9_4', async (context) => {
    await context.send({
        message: `ᅠ`,
        keyboard: Keyboard.keyboard([
            [
                Keyboard.textButton({
                    label: '⭕',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '❌',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '⭕',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                })
            ],
            [
                Keyboard.textButton({
                    label: '❌',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '❌',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '⭕',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                })
            ],
            [
                Keyboard.textButton({
                    label: '⬜',
                    payload: {
                        command: '5_2_9_4_7'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '⭕',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '❌',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                })
            ]
        ])
    });
});
hearCommand('5_2_9_4_7', async (context) => {
    await context.send({
        message: `Игра закончилась ничьёй`,
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
                    label: '✅ Попробовать ещё раз',
                    payload: {
                        command: 'начать игру'
                    },
                    color: Keyboard.PRIMARY_COLOR
                })
            ]
        ])
    });
});
hearCommand('5_2_9_6', async (context) => {
    await context.send({
        message: `ᅠ`,
        keyboard: Keyboard.keyboard([
            [
                Keyboard.textButton({
                    label: '⭕',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '❌',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '⭕',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                })
            ],
            [
                Keyboard.textButton({
                    label: '⭕',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '❌',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '❌',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                })
            ],
            [
                Keyboard.textButton({
                    label: '⬜',
                    payload: {
                        command: '5_2_9_6_7'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '⭕',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '❌',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                })
            ]
        ])
    });
});
hearCommand('5_2_9_6_7', async (context) => {
    await context.send({
        message: `Игра закончилась ничьёй`,
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
                    label: '✅ Попробовать ещё раз',
                    payload: {
                        command: 'начать игру'
                    },
                    color: Keyboard.PRIMARY_COLOR
                })
            ]
        ])
    });
});
hearCommand('5_2_9_7', async (context) => {
    await context.send({
        message: `ᅠ`,
        keyboard: Keyboard.keyboard([
            [
                Keyboard.textButton({
                    label: '⭕',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '❌',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '⭕',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                })
            ],
            [
                Keyboard.textButton({
                    label: '⭕',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '❌',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '⬜',
                    payload: {
                        command: '5_2_9_7_6'
                    },
                    color: Keyboard.SECONDARY_COLOR
                })
            ],
            [
                Keyboard.textButton({
                    label: '❌',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '⭕',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '❌',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                })
            ]
        ])
    });
});
hearCommand('5_2_9_7_6', async (context) => {
    await context.send({
        message: `Игра закончилась ничьёй`,
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
                    label: '✅ Попробовать ещё раз',
                    payload: {
                        command: 'начать игру'
                    },
                    color: Keyboard.PRIMARY_COLOR
                })
            ]
        ])
    });
});
hearCommand('5_3', async (context) => {
    await context.send({
        message: `ᅠ`,
        keyboard: Keyboard.keyboard([
            [
                Keyboard.textButton({
                    label: '⭕',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '⬜',
                    payload: {
                        command: '5_3_2'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '❌',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                })
            ],
            [
                Keyboard.textButton({
                    label: '⬜',
                    payload: {
                        command: '5_3_4'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '❌',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '⬜',
                    payload: {
                        command: '5_3_6'
                    },
                    color: Keyboard.SECONDARY_COLOR
                })
            ],
            [
                Keyboard.textButton({
                    label: '⭕',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '⬜',
                    payload: {
                        command: '5_3_8'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '⬜',
                    payload: {
                        command: '5_3_9'
                    },
                    color: Keyboard.SECONDARY_COLOR
                })
            ]
        ])
    });
});
hearCommand('5_3_2', async (context) => {
    await context.send({
        message: `К сожалению вы проиграли`,
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
                    label: '✅ Попробовать ещё раз',
                    payload: {
                        command: 'начать игру'
                    },
                    color: Keyboard.PRIMARY_COLOR
                })
            ]
        ])
    });
});
hearCommand('5_3_4', async (context) => {
    await context.send({
        message: `ᅠ`,
        keyboard: Keyboard.keyboard([
            [
                Keyboard.textButton({
                    label: '⭕',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '⬜',
                    payload: {
                        command: '5_3_4_2'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '❌',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                })
            ],
            [
                Keyboard.textButton({
                    label: '❌',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '❌',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '⭕',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                })
            ],
            [
                Keyboard.textButton({
                    label: '⭕',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '⬜',
                    payload: {
                        command: '5_3_4_8'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '⬜',
                    payload: {
                        command: '5_3_4_9'
                    },
                    color: Keyboard.SECONDARY_COLOR
                })
            ]
        ])
    });
});
hearCommand('5_3_4_2', async (context) => {
    await context.send({
        message: `ᅠ`,
        keyboard: Keyboard.keyboard([
            [
                Keyboard.textButton({
                    label: '⭕',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '❌',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '❌',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                })
            ],
            [
                Keyboard.textButton({
                    label: '❌',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '❌',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '⭕',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                })
            ],
            [
                Keyboard.textButton({
                    label: '⭕',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '⭕',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '⬜',
                    payload: {
                        command: '5_3_4_2_9'
                    },
                    color: Keyboard.SECONDARY_COLOR
                })
            ]
        ])
    });
});
hearCommand('5_3_4_2_9', async (context) => {
    await context.send({
        message: `Игра закончилась ничьёй`,
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
                    label: '✅ Попробовать ещё раз',
                    payload: {
                        command: 'начать игру'
                    },
                    color: Keyboard.PRIMARY_COLOR
                })
            ]
        ])
    });
});
hearCommand('5_3_4_8', async (context) => {
    await context.send({
        message: `ᅠ`,
        keyboard: Keyboard.keyboard([
            [
                Keyboard.textButton({
                    label: '⭕',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '⭕',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '❌',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                })
            ],
            [
                Keyboard.textButton({
                    label: '❌',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '❌',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '⭕',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                })
            ],
            [
                Keyboard.textButton({
                    label: '⭕',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '❌',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '⬜',
                    payload: {
                        command: '5_3_4_8_9'
                    },
                    color: Keyboard.SECONDARY_COLOR
                })
            ]
        ])
    });
});
hearCommand('5_3_4_8_9', async (context) => {
    await context.send({
        message: `Игра закончилась ничьёй`,
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
                    label: '✅ Попробовать ещё раз',
                    payload: {
                        command: 'начать игру'
                    },
                    color: Keyboard.PRIMARY_COLOR
                })
            ]
        ])
    });
});
hearCommand('5_3_4_9', async (context) => {
    await context.send({
        message: `ᅠ`,
        keyboard: Keyboard.keyboard([
            [
                Keyboard.textButton({
                    label: '⭕',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '⭕',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '❌',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                })
            ],
            [
                Keyboard.textButton({
                    label: '❌',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '❌',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '⭕',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                })
            ],
            [
                Keyboard.textButton({
                    label: '⭕',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '⬜',
                    payload: {
                        command: '5_3_4_9_8'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '❌',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                })
            ]
        ])
    });
});
hearCommand('5_3_4_9_8', async (context) => {
    await context.send({
        message: `Игра закончилась ничьёй`,
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
                    label: '✅ Попробовать ещё раз',
                    payload: {
                        command: 'начать игру'
                    },
                    color: Keyboard.PRIMARY_COLOR
                })
            ]
        ])
    });
});
hearCommand('5_3_6', async (context) => {
    await context.send({
        message: `К сожалению вы проиграли`,
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
                    label: '✅ Попробовать ещё раз',
                    payload: {
                        command: 'начать игру'
                    },
                    color: Keyboard.PRIMARY_COLOR
                })
            ]
        ])
    });
});
hearCommand('5_3_8', async (context) => {
    await context.send({
        message: `К сожалению вы проиграли`,
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
                    label: '✅ Попробовать ещё раз',
                    payload: {
                        command: 'начать игру'
                    },
                    color: Keyboard.PRIMARY_COLOR
                })
            ]
        ])
    });
});
hearCommand('5_3_9', async (context) => {
    await context.send({
        message: `К сожалению вы проиграли`,
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
                    label: '✅ Попробовать ещё раз',
                    payload: {
                        command: 'начать игру'
                    },
                    color: Keyboard.PRIMARY_COLOR
                })
            ]
        ])
    });
});
hearCommand('5_4', async (context) => {
    await context.send({
        message: `ᅠ`,
        keyboard: Keyboard.keyboard([
            [
                Keyboard.textButton({
                    label: '⭕',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '⬜',
                    payload: {
                        command: '5_4_2'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '⬜',
                    payload: {
                        command: '5_4_3'
                    },
                    color: Keyboard.SECONDARY_COLOR
                })
            ],
            [
                Keyboard.textButton({
                    label: '❌',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '❌',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '⭕',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                })
            ],
            [
                Keyboard.textButton({
                    label: '⬜',
                    payload: {
                        command: '5_4_7'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '⬜',
                    payload: {
                        command: '5_4_8'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '⬜',
                    payload: {
                        command: '5_4_9'
                    },
                    color: Keyboard.SECONDARY_COLOR
                })
            ]
        ])
    });
});
hearCommand('5_4_2', async (context) => {
    await context.send({
        message: `ᅠ`,
        keyboard: Keyboard.keyboard([
            [
                Keyboard.textButton({
                    label: '⭕',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '❌',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '⬜',
                    payload: {
                        command: '5_4_2_3'
                    },
                    color: Keyboard.SECONDARY_COLOR
                })
            ],
            [
                Keyboard.textButton({
                    label: '❌',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '❌',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '⭕',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                })
            ],
            [
                Keyboard.textButton({
                    label: '⬜',
                    payload: {
                        command: '5_4_2_7'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '⭕',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '⬜',
                    payload: {
                        command: '5_4_2_9'
                    },
                    color: Keyboard.SECONDARY_COLOR
                })
            ]
        ])
    });
});
hearCommand('5_4_2_3', async (context) => {
    await context.send({
        message: `ᅠ`,
        keyboard: Keyboard.keyboard([
            [
                Keyboard.textButton({
                    label: '⭕',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '❌',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '❌',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                })
            ],
            [
                Keyboard.textButton({
                    label: '❌',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '❌',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '⭕',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                })
            ],
            [
                Keyboard.textButton({
                    label: '⭕',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '⭕',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '⬜',
                    payload: {
                        command: '5_4_2_3_9'
                    },
                    color: Keyboard.SECONDARY_COLOR
                })
            ]
        ])
    });
});
hearCommand('5_4_2_3_9', async (context) => {
    await context.send({
        message: `Игра закончилась ничьёй`,
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
                    label: '✅ Попробовать ещё раз',
                    payload: {
                        command: 'начать игру'
                    },
                    color: Keyboard.PRIMARY_COLOR
                })
            ]
        ])
    });
});
hearCommand('5_4_2_7', async (context) => {
    await context.send({
        message: `ᅠ`,
        keyboard: Keyboard.keyboard([
            [
                Keyboard.textButton({
                    label: '⭕',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '❌',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '⭕',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                })
            ],
            [
                Keyboard.textButton({
                    label: '❌',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '❌',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '⭕',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                })
            ],
            [
                Keyboard.textButton({
                    label: '❌',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '⭕',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '⬜',
                    payload: {
                        command: '5_4_2_7_9'
                    },
                    color: Keyboard.SECONDARY_COLOR
                })
            ]
        ])
    });
});
hearCommand('5_4_2_7_9', async (context) => {
    await context.send({
        message: `Игра закончилась ничьёй`,
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
                    label: '✅ Попробовать ещё раз',
                    payload: {
                        command: 'начать игру'
                    },
                    color: Keyboard.PRIMARY_COLOR
                })
            ]
        ])
    });
});
hearCommand('5_4_2_9', async (context) => {
    await context.send({
        message: `ᅠ`,
        keyboard: Keyboard.keyboard([
            [
                Keyboard.textButton({
                    label: '⭕',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '❌',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '⭕',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                })
            ],
            [
                Keyboard.textButton({
                    label: '❌',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '❌',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '⭕',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                })
            ],
            [
                Keyboard.textButton({
                    label: '⬜',
                    payload: {
                        command: '5_4_2_9_7'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '⭕',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '❌',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                })
            ]
        ])
    });
});
hearCommand('5_4_2_9_7', async (context) => {
    await context.send({
        message: `Игра закончилась ничьёй`,
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
                    label: '✅ Попробовать ещё раз',
                    payload: {
                        command: 'начать игру'
                    },
                    color: Keyboard.PRIMARY_COLOR
                })
            ]
        ])
    });
});
hearCommand('5_4_3', async (context) => {
    await context.send({
        message: `ᅠ`,
        keyboard: Keyboard.keyboard([
            [
                Keyboard.textButton({
                    label: '⭕',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '⬜',
                    payload: {
                        command: '5_4_3_2'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '❌',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                })
            ],
            [
                Keyboard.textButton({
                    label: '❌',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '❌',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '⭕',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                })
            ],
            [
                Keyboard.textButton({
                    label: '⭕',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '⬜',
                    payload: {
                        command: '5_4_3_8'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '⬜',
                    payload: {
                        command: '5_4_3_9'
                    },
                    color: Keyboard.SECONDARY_COLOR
                })
            ]
        ])
    });
});
hearCommand('5_4_3_2', async (context) => {
    await context.send({
        message: `ᅠ`,
        keyboard: Keyboard.keyboard([
            [
                Keyboard.textButton({
                    label: '⭕',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '❌',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '❌',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                })
            ],
            [
                Keyboard.textButton({
                    label: '❌',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '❌',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '⭕',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                })
            ],
            [
                Keyboard.textButton({
                    label: '⭕',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '⭕',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '⬜',
                    payload: {
                        command: '5_4_3_2_9'
                    },
                    color: Keyboard.SECONDARY_COLOR
                })
            ]
        ])
    });
});
hearCommand('5_4_3_2_9', async (context) => {
    await context.send({
        message: `Игра закончилась ничьёй`,
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
                    label: '✅ Попробовать ещё раз',
                    payload: {
                        command: 'начать игру'
                    },
                    color: Keyboard.PRIMARY_COLOR
                })
            ]
        ])
    });
});
hearCommand('5_4_3_8', async (context) => {
    await context.send({
        message: `ᅠ`,
        keyboard: Keyboard.keyboard([
            [
                Keyboard.textButton({
                    label: '⭕',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '⭕',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '❌',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                })
            ],
            [
                Keyboard.textButton({
                    label: '❌',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '❌',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '⭕',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                })
            ],
            [
                Keyboard.textButton({
                    label: '⭕',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '❌',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '⬜',
                    payload: {
                        command: '5_4_3_8_9'
                    },
                    color: Keyboard.SECONDARY_COLOR
                })
            ]
        ])
    });
});
hearCommand('5_4_3_8_9', async (context) => {
    await context.send({
        message: `Игра закончилась ничьёй`,
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
                    label: '✅ Попробовать ещё раз',
                    payload: {
                        command: 'начать игру'
                    },
                    color: Keyboard.PRIMARY_COLOR
                })
            ]
        ])
    });
});
hearCommand('5_4_3_9', async (context) => {
    await context.send({
        message: `ᅠ`,
        keyboard: Keyboard.keyboard([
            [
                Keyboard.textButton({
                    label: '⭕',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '⭕',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '❌',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                })
            ],
            [
                Keyboard.textButton({
                    label: '❌',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '❌',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '⭕',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                })
            ],
            [
                Keyboard.textButton({
                    label: '⭕',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '⬜',
                    payload: {
                        command: '5_4_3_9_8'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '❌',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                })
            ]
        ])
    });
});
hearCommand('5_4_3_9_8', async (context) => {
    await context.send({
        message: `Игра закончилась ничьёй`,
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
                    label: '✅ Попробовать ещё раз',
                    payload: {
                        command: 'начать игру'
                    },
                    color: Keyboard.PRIMARY_COLOR
                })
            ]
        ])
    });
});
hearCommand('5_4_7', async (context) => {
    await context.send({
        message: `ᅠ`,
        keyboard: Keyboard.keyboard([
            [
                Keyboard.textButton({
                    label: '⭕',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '⬜',
                    payload: {
                        command: '5_4_7_2'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '⭕',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                })
            ],
            [
                Keyboard.textButton({
                    label: '❌',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '❌',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '⭕',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                })
            ],
            [
                Keyboard.textButton({
                    label: '❌',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '⬜',
                    payload: {
                        command: '5_4_7_8'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '⬜',
                    payload: {
                        command: '5_4_7_9'
                    },
                    color: Keyboard.SECONDARY_COLOR
                })
            ]
        ])
    });
});
hearCommand('5_4_7_2', async (context) => {
    await context.send({
        message: `К сожалению вы проиграли`,
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
                    label: '✅ Попробовать ещё раз',
                    payload: {
                        command: 'начать игру'
                    },
                    color: Keyboard.PRIMARY_COLOR
                })
            ]
        ])
    });
});
hearCommand('5_4_7_8', async (context) => {
    await context.send({
        message: `К сожалению вы проиграли`,
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
                    label: '✅ Попробовать ещё раз',
                    payload: {
                        command: 'начать игру'
                    },
                    color: Keyboard.PRIMARY_COLOR
                })
            ]
        ])
    });
});
hearCommand('5_4_7_9', async (context) => {
    await context.send({
        message: `К сожалению вы проиграли`,
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
                    label: '✅ Попробовать ещё раз',
                    payload: {
                        command: 'начать игру'
                    },
                    color: Keyboard.PRIMARY_COLOR
                })
            ]
        ])
    });
});
hearCommand('5_4_8', async (context) => {
    await context.send({
        message: `ᅠ`,
        keyboard: Keyboard.keyboard([
            [
                Keyboard.textButton({
                    label: '⭕',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '⭕',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '⬜',
                    payload: {
                        command: '5_4_8_3'
                    },
                    color: Keyboard.SECONDARY_COLOR
                })
            ],
            [
                Keyboard.textButton({
                    label: '❌',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '❌',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '⭕',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                })
            ],
            [
                Keyboard.textButton({
                    label: '⬜',
                    payload: {
                        command: '5_4_8_7'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '❌',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '⬜',
                    payload: {
                        command: '5_4_8_9'
                    },
                    color: Keyboard.SECONDARY_COLOR
                })
            ]
        ])
    });
});
hearCommand('5_4_8_3', async (context) => {
    await context.send({
        message: `ᅠ`,
        keyboard: Keyboard.keyboard([
            [
                Keyboard.textButton({
                    label: '⭕',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '⭕',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '❌',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                })
            ],
            [
                Keyboard.textButton({
                    label: '❌',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '❌',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '⭕',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                })
            ],
            [
                Keyboard.textButton({
                    label: '⭕',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '❌',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '⬜',
                    payload: {
                        command: '5_4_8_3_9'
                    },
                    color: Keyboard.SECONDARY_COLOR
                })
            ]
        ])
    });
});
hearCommand('5_4_8_3_9', async (context) => {
    await context.send({
        message: `Игра закончилась ничьёй`,
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
                    label: '✅ Попробовать ещё раз',
                    payload: {
                        command: 'начать игру'
                    },
                    color: Keyboard.PRIMARY_COLOR
                })
            ]
        ])
    });
});
hearCommand('5_4_8_7', async (context) => {
    await context.send({
        message: `К сожалению вы проиграли`,
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
                    label: '✅ Попробовать ещё раз',
                    payload: {
                        command: 'начать игру'
                    },
                    color: Keyboard.PRIMARY_COLOR
                })
            ]
        ])
    });
});
hearCommand('5_4_8_9', async (context) => {
    await context.send({
        message: `К сожалению вы проиграли`,
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
                    label: '✅ Попробовать ещё раз',
                    payload: {
                        command: 'начать игру'
                    },
                    color: Keyboard.PRIMARY_COLOR
                })
            ]
        ])
    });
});
hearCommand('5_4_9', async (context) => {
    await context.send({
        message: `ᅠ`,
        keyboard: Keyboard.keyboard([
            [
                Keyboard.textButton({
                    label: '⭕',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '⭕',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '⬜',
                    payload: {
                        command: '5_4_9_3'
                    },
                    color: Keyboard.SECONDARY_COLOR
                })
            ],
            [
                Keyboard.textButton({
                    label: '❌',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '❌',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '⭕',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                })
            ],
            [
                Keyboard.textButton({
                    label: '⬜',
                    payload: {
                        command: '5_4_9_7'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '⬜',
                    payload: {
                        command: '5_4_9_8'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '❌',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                })
            ]
        ])
    });
});
hearCommand('5_4_9_3', async (context) => {
    await context.send({
        message: `ᅠ`,
        keyboard: Keyboard.keyboard([
            [
                Keyboard.textButton({
                    label: '⭕',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '⭕',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '❌',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                })
            ],
            [
                Keyboard.textButton({
                    label: '❌',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '❌',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '⭕',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                })
            ],
            [
                Keyboard.textButton({
                    label: '⭕',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '⬜',
                    payload: {
                        command: '5_4_9_3_8'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '❌',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                })
            ]
        ])
    });
});
hearCommand('5_4_9_3_8', async (context) => {
    await context.send({
        message: `Игра закончилась ничьёй`,
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
                    label: '✅ Попробовать ещё раз',
                    payload: {
                        command: 'начать игру'
                    },
                    color: Keyboard.PRIMARY_COLOR
                })
            ]
        ])
    });
});
hearCommand('5_4_9_7', async (context) => {
    await context.send({
        message: `К сожалению вы проиграли`,
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
                    label: '✅ Попробовать ещё раз',
                    payload: {
                        command: 'начать игру'
                    },
                    color: Keyboard.PRIMARY_COLOR
                })
            ]
        ])
    });
});
hearCommand('5_4_9_8', async (context) => {
    await context.send({
        message: `К сожалению вы проиграли`,
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
                    label: '✅ Попробовать ещё раз',
                    payload: {
                        command: 'начать игру'
                    },
                    color: Keyboard.PRIMARY_COLOR
                })
            ]
        ])
    });
});
hearCommand('5_6', async (context) => {
    await context.send({
        message: `ᅠ`,
        keyboard: Keyboard.keyboard([
            [
                Keyboard.textButton({
                    label: '⭕',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '⬜',
                    payload: {
                        command: '5_6_2'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '⬜',
                    payload: {
                        command: '5_6_3'
                    },
                    color: Keyboard.SECONDARY_COLOR
                })
            ],
            [
                Keyboard.textButton({
                    label: '⭕',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '❌',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '❌',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                })
            ],
            [
                Keyboard.textButton({
                    label: '⬜',
                    payload: {
                        command: '5_6_7'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '⬜',
                    payload: {
                        command: '5_6_8'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '⬜',
                    payload: {
                        command: '5_6_9'
                    },
                    color: Keyboard.SECONDARY_COLOR
                })
            ]
        ])
    });
});
hearCommand('5_6_2', async (context) => {
    await context.send({
        message: `К сожалению вы проиграли`,
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
                    label: '✅ Попробовать ещё раз',
                    payload: {
                        command: 'начать игру'
                    },
                    color: Keyboard.PRIMARY_COLOR
                })
            ]
        ])
    });
});
hearCommand('5_6_3', async (context) => {
    await context.send({
        message: `К сожалению вы проиграли`,
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
                    label: '✅ Попробовать ещё раз',
                    payload: {
                        command: 'начать игру'
                    },
                    color: Keyboard.PRIMARY_COLOR
                })
            ]
        ])
    });
});
hearCommand('5_6_7', async (context) => {
    await context.send({
        message: `ᅠ`,
        keyboard: Keyboard.keyboard([
            [
                Keyboard.textButton({
                    label: '⭕',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '⬜',
                    payload: {
                        command: '5_6_7_2'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '⭕',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                })
            ],
            [
                Keyboard.textButton({
                    label: '⭕',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '❌',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '❌',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                })
            ],
            [
                Keyboard.textButton({
                    label: '❌',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '⬜',
                    payload: {
                        command: '5_6_7_8'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '⬜',
                    payload: {
                        command: '5_6_7_9'
                    },
                    color: Keyboard.SECONDARY_COLOR
                })
            ]
        ])
    });
});
hearCommand('5_6_7_2', async (context) => {
    await context.send({
        message: `ᅠ`,
        keyboard: Keyboard.keyboard([
            [
                Keyboard.textButton({
                    label: '⭕',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '❌',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '⭕',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                })
            ],
            [
                Keyboard.textButton({
                    label: '⭕',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '❌',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '❌',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                })
            ],
            [
                Keyboard.textButton({
                    label: '❌',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '⭕',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '⬜',
                    payload: {
                        command: '5_6_7_2_9'
                    },
                    color: Keyboard.SECONDARY_COLOR
                })
            ]
        ])
    });
});
hearCommand('5_6_7_2_9', async (context) => {
    await context.send({
        message: `Игра закончилась ничьёй`,
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
                    label: '✅ Попробовать ещё раз',
                    payload: {
                        command: 'начать игру'
                    },
                    color: Keyboard.PRIMARY_COLOR
                })
            ]
        ])
    });
});
hearCommand('5_6_7_8', async (context) => {
    await context.send({
        message: `К сожалению вы проиграли`,
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
                    label: '✅ Попробовать ещё раз',
                    payload: {
                        command: 'начать игру'
                    },
                    color: Keyboard.PRIMARY_COLOR
                })
            ]
        ])
    });
});
hearCommand('5_6_7_9', async (context) => {
    await context.send({
        message: `К сожалению вы проиграли`,
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
                    label: '✅ Попробовать ещё раз',
                    payload: {
                        command: 'начать игру'
                    },
                    color: Keyboard.PRIMARY_COLOR
                })
            ]
        ])
    });
});
hearCommand('5_6_8', async (context) => {
    await context.send({
        message: `К сожалению вы проиграли`,
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
                    label: '✅ Попробовать ещё раз',
                    payload: {
                        command: 'начать игру'
                    },
                    color: Keyboard.PRIMARY_COLOR
                })
            ]
        ])
    });
});
hearCommand('5_6_9', async (context) => {
    await context.send({
        message: `К сожалению вы проиграли`,
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
                    label: '✅ Попробовать ещё раз',
                    payload: {
                        command: 'начать игру'
                    },
                    color: Keyboard.PRIMARY_COLOR
                })
            ]
        ])
    });
});
hearCommand('5_7', async (context) => {
    await context.send({
        message: `ᅠ`,
        keyboard: Keyboard.keyboard([
            [
                Keyboard.textButton({
                    label: '⭕',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '⬜',
                    payload: {
                        command: '5_7_2'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '⭕',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                })
            ],
            [
                Keyboard.textButton({
                    label: '⬜',
                    payload: {
                        command: '5_7_4'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '❌',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '⬜',
                    payload: {
                        command: '5_7_6'
                    },
                    color: Keyboard.SECONDARY_COLOR
                })
            ],
            [
                Keyboard.textButton({
                    label: '❌',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '⬜',
                    payload: {
                        command: '5_7_8'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '⬜',
                    payload: {
                        command: '5_7_9'
                    },
                    color: Keyboard.SECONDARY_COLOR
                })
            ]
        ])
    });
});
hearCommand('5_7_2', async (context) => {
    await context.send({
        message: `ᅠ`,
        keyboard: Keyboard.keyboard([
            [
                Keyboard.textButton({
                    label: '⭕',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '❌',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '⭕',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                })
            ],
            [
                Keyboard.textButton({
                    label: '⬜',
                    payload: {
                        command: '5_7_2_4'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '❌',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '⬜',
                    payload: {
                        command: '5_7_2_6'
                    },
                    color: Keyboard.SECONDARY_COLOR
                })
            ],
            [
                Keyboard.textButton({
                    label: '❌',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '⭕',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '⬜',
                    payload: {
                        command: '5_7_2_9'
                    },
                    color: Keyboard.SECONDARY_COLOR
                })
            ]
        ])
    });
});
hearCommand('5_7_2_4', async (context) => {
    await context.send({
        message: `ᅠ`,
        keyboard: Keyboard.keyboard([
            [
                Keyboard.textButton({
                    label: '⭕',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '❌',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '⭕',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                })
            ],
            [
                Keyboard.textButton({
                    label: '❌',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '❌',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '⭕',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                })
            ],
            [
                Keyboard.textButton({
                    label: '❌',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '⭕',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '⬜',
                    payload: {
                        command: '5_7_2_4_9'
                    },
                    color: Keyboard.SECONDARY_COLOR
                })
            ]
        ])
    });
});
hearCommand('5_7_2_4_9', async (context) => {
    await context.send({
        message: `Игра закончилась ничьёй`,
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
                    label: '✅ Попробовать ещё раз',
                    payload: {
                        command: 'начать игру'
                    },
                    color: Keyboard.PRIMARY_COLOR
                })
            ]
        ])
    });
});
hearCommand('5_7_2_6', async (context) => {
    await context.send({
        message: `ᅠ`,
        keyboard: Keyboard.keyboard([
            [
                Keyboard.textButton({
                    label: '⭕',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '❌',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '⭕',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                })
            ],
            [
                Keyboard.textButton({
                    label: '⭕',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '❌',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '❌',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                })
            ],
            [
                Keyboard.textButton({
                    label: '❌',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '⭕',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '⬜',
                    payload: {
                        command: '5_7_2_6_9'
                    },
                    color: Keyboard.SECONDARY_COLOR
                })
            ]
        ])
    });
});
hearCommand('5_7_2_6_9', async (context) => {
    await context.send({
        message: `Игра закончилась ничьёй`,
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
                    label: '✅ Попробовать ещё раз',
                    payload: {
                        command: 'начать игру'
                    },
                    color: Keyboard.PRIMARY_COLOR
                })
            ]
        ])
    });
});
hearCommand('5_7_2_9', async (context) => {
    await context.send({
        message: `ᅠ`,
        keyboard: Keyboard.keyboard([
            [
                Keyboard.textButton({
                    label: '⭕',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '❌',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '⭕',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                })
            ],
            [
                Keyboard.textButton({
                    label: '⭕',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '❌',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '⬜',
                    payload: {
                        command: '5_7_2_9_6'
                    },
                    color: Keyboard.SECONDARY_COLOR
                })
            ],
            [
                Keyboard.textButton({
                    label: '❌',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '⭕',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '❌',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                })
            ]
        ])
    });
});
hearCommand('5_7_2_9_6', async (context) => {
    await context.send({
        message: `Игра закончилась ничьёй`,
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
                    label: '✅ Попробовать ещё раз',
                    payload: {
                        command: 'начать игру'
                    },
                    color: Keyboard.PRIMARY_COLOR
                })
            ]
        ])
    });
});
hearCommand('5_7_4', async (context) => {
    await context.send({
        message: `К сожалению вы проиграли`,
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
                    label: '✅ Попробовать ещё раз',
                    payload: {
                        command: 'начать игру'
                    },
                    color: Keyboard.PRIMARY_COLOR
                })
            ]
        ])
    });
});
hearCommand('5_7_6', async (context) => {
    await context.send({
        message: `К сожалению вы проиграли`,
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
                    label: '✅ Попробовать ещё раз',
                    payload: {
                        command: 'начать игру'
                    },
                    color: Keyboard.PRIMARY_COLOR
                })
            ]
        ])
    });
});
hearCommand('5_7_8', async (context) => {
    await context.send({
        message: `К сожалению вы проиграли`,
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
                    label: '✅ Попробовать ещё раз',
                    payload: {
                        command: 'начать игру'
                    },
                    color: Keyboard.PRIMARY_COLOR
                })
            ]
        ])
    });
});
hearCommand('5_7_9', async (context) => {
    await context.send({
        message: `К сожалению вы проиграли`,
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
                    label: '✅ Попробовать ещё раз',
                    payload: {
                        command: 'начать игру'
                    },
                    color: Keyboard.PRIMARY_COLOR
                })
            ]
        ])
    });
});
hearCommand('5_8', async (context) => {
    await context.send({
        message: `ᅠ`,
        keyboard: Keyboard.keyboard([
            [
                Keyboard.textButton({
                    label: '⭕',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '⭕',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '⬜',
                    payload: {
                        command: '5_8_3'
                    },
                    color: Keyboard.SECONDARY_COLOR
                })
            ],
            [
                Keyboard.textButton({
                    label: '⬜',
                    payload: {
                        command: '5_8_4'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '❌',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '⬜',
                    payload: {
                        command: '5_8_6'
                    },
                    color: Keyboard.SECONDARY_COLOR
                })
            ],
            [
                Keyboard.textButton({
                    label: '⬜',
                    payload: {
                        command: '5_8_7'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '❌',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '⬜',
                    payload: {
                        command: '5_8_9'
                    },
                    color: Keyboard.SECONDARY_COLOR
                })
            ]
        ])
    });
});
hearCommand('5_8_3', async (context) => {
    await context.send({
        message: `ᅠ`,
        keyboard: Keyboard.keyboard([
            [
                Keyboard.textButton({
                    label: '⭕',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '⭕',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '❌',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                })
            ],
            [
                Keyboard.textButton({
                    label: '⬜',
                    payload: {
                        command: '5_8_3_4'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '❌',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '⬜',
                    payload: {
                        command: '5_8_3_6'
                    },
                    color: Keyboard.SECONDARY_COLOR
                })
            ],
            [
                Keyboard.textButton({
                    label: '⭕',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '❌',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '⬜',
                    payload: {
                        command: '5_8_3_9'
                    },
                    color: Keyboard.SECONDARY_COLOR
                })
            ]
        ])
    });
});
hearCommand('5_8_3_4', async (context) => {
    await context.send({
        message: `ᅠ`,
        keyboard: Keyboard.keyboard([
            [
                Keyboard.textButton({
                    label: '⭕',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '⭕',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '❌',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                })
            ],
            [
                Keyboard.textButton({
                    label: '❌',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '❌',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '⭕',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                })
            ],
            [
                Keyboard.textButton({
                    label: '⭕',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '❌',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '⬜',
                    payload: {
                        command: '5_8_3_4_9'
                    },
                    color: Keyboard.SECONDARY_COLOR
                })
            ]
        ])
    });
});
hearCommand('5_8_3_4_9', async (context) => {
    await context.send({
        message: `Игра закончилась ничьёй`,
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
                    label: '✅ Попробовать ещё раз',
                    payload: {
                        command: 'начать игру'
                    },
                    color: Keyboard.PRIMARY_COLOR
                })
            ]
        ])
    });
});
hearCommand('5_8_3_6', async (context) => {
    await context.send({
        message: `К сожалению вы проиграли`,
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
                    label: '✅ Попробовать ещё раз',
                    payload: {
                        command: 'начать игру'
                    },
                    color: Keyboard.PRIMARY_COLOR
                })
            ]
        ])
    });
});
hearCommand('5_8_3_9', async (context) => {
    await context.send({
        message: `К сожалению вы проиграли`,
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
                    label: '✅ Попробовать ещё раз',
                    payload: {
                        command: 'начать игру'
                    },
                    color: Keyboard.PRIMARY_COLOR
                })
            ]
        ])
    });
});
hearCommand('5_8_4', async (context) => {
    await context.send({
        message: `К сожалению вы проиграли`,
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
                    label: '✅ Попробовать ещё раз',
                    payload: {
                        command: 'начать игру'
                    },
                    color: Keyboard.PRIMARY_COLOR
                })
            ]
        ])
    });
});
hearCommand('5_8_6', async (context) => {
    await context.send({
        message: `К сожалению вы проиграли`,
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
                    label: '✅ Попробовать ещё раз',
                    payload: {
                        command: 'начать игру'
                    },
                    color: Keyboard.PRIMARY_COLOR
                })
            ]
        ])
    });
});
hearCommand('5_8_7', async (context) => {
    await context.send({
        message: `К сожалению вы проиграли`,
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
                    label: '✅ Попробовать ещё раз',
                    payload: {
                        command: 'начать игру'
                    },
                    color: Keyboard.PRIMARY_COLOR
                })
            ]
        ])
    });
});
hearCommand('5_8_9', async (context) => {
    await context.send({
        message: `К сожалению вы проиграли`,
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
                    label: '✅ Попробовать ещё раз',
                    payload: {
                        command: 'начать игру'
                    },
                    color: Keyboard.PRIMARY_COLOR
                })
            ]
        ])
    });
});
hearCommand('5_9', async (context) => {
    await context.send({
        message: `ᅠ`,
        keyboard: Keyboard.keyboard([
            [
                Keyboard.textButton({
                    label: '⭕',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '⬜',
                    payload: {
                        command: '5_9_2'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '⭕',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                })
            ],
            [
                Keyboard.textButton({
                    label: '⬜',
                    payload: {
                        command: '5_9_4'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '❌',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '⬜',
                    payload: {
                        command: '5_9_6'
                    },
                    color: Keyboard.SECONDARY_COLOR
                })
            ],
            [
                Keyboard.textButton({
                    label: '⬜',
                    payload: {
                        command: '5_9_7'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '⬜',
                    payload: {
                        command: '5_9_8'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '❌',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                })
            ]
        ])
    });
});
hearCommand('5_9_2', async (context) => {
    await context.send({
        message: `ᅠ`,
        keyboard: Keyboard.keyboard([
            [
                Keyboard.textButton({
                    label: '⭕',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '❌',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '⭕',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                })
            ],
            [
                Keyboard.textButton({
                    label: '⬜',
                    payload: {
                        command: '5_9_2_4'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '❌',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '⬜',
                    payload: {
                        command: '5_9_2_6'
                    },
                    color: Keyboard.SECONDARY_COLOR
                })
            ],
            [
                Keyboard.textButton({
                    label: '⬜',
                    payload: {
                        command: '5_9_2_7'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '⭕',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '❌',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                })
            ]
        ])
    });
});
hearCommand('5_9_2_4', async (context) => {
    await context.send({
        message: `ᅠ`,
        keyboard: Keyboard.keyboard([
            [
                Keyboard.textButton({
                    label: '⭕',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '❌',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '⭕',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                })
            ],
            [
                Keyboard.textButton({
                    label: '❌',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '❌',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '⭕',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                })
            ],
            [
                Keyboard.textButton({
                    label: '⬜',
                    payload: {
                        command: '5_9_2_4_7'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '⭕',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '❌',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                })
            ]
        ])
    });
});
hearCommand('5_9_2_4_7', async (context) => {
    await context.send({
        message: `Игра закончилась ничьёй`,
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
                    label: '✅ Попробовать ещё раз',
                    payload: {
                        command: 'начать игру'
                    },
                    color: Keyboard.PRIMARY_COLOR
                })
            ]
        ])
    });
});
hearCommand('5_9_2_6', async (context) => {
    await context.send({
        message: `ᅠ`,
        keyboard: Keyboard.keyboard([
            [
                Keyboard.textButton({
                    label: '⭕',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '❌',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '⭕',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                })
            ],
            [
                Keyboard.textButton({
                    label: '⭕',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '❌',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '❌',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                })
            ],
            [
                Keyboard.textButton({
                    label: '⬜',
                    payload: {
                        command: '5_9_2_6_7'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '⭕',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '❌',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                })
            ]
        ])
    });
});
hearCommand('5_9_2_6_7', async (context) => {
    await context.send({
        message: `Игра закончилась ничьёй`,
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
                    label: '✅ Попробовать ещё раз',
                    payload: {
                        command: 'начать игру'
                    },
                    color: Keyboard.PRIMARY_COLOR
                })
            ]
        ])
    });
});
hearCommand('5_9_2_7', async (context) => {
    await context.send({
        message: `ᅠ`,
        keyboard: Keyboard.keyboard([
            [
                Keyboard.textButton({
                    label: '⭕',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '❌',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '⭕',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                })
            ],
            [
                Keyboard.textButton({
                    label: '⭕',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '❌',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '⬜',
                    payload: {
                        command: '5_9_2_7_6'
                    },
                    color: Keyboard.SECONDARY_COLOR
                })
            ],
            [
                Keyboard.textButton({
                    label: '❌',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '⭕',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '❌',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                })
            ]
        ])
    });
});
hearCommand('5_9_2_7_6', async (context) => {
    await context.send({
        message: `Игра закончилась ничьёй`,
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
                    label: '✅ Попробовать ещё раз',
                    payload: {
                        command: 'начать игру'
                    },
                    color: Keyboard.PRIMARY_COLOR
                })
            ]
        ])
    });
});
hearCommand('5_9_4', async (context) => {
    await context.send({
        message: `К сожалению вы проиграли`,
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
                    label: '✅ Попробовать ещё раз',
                    payload: {
                        command: 'начать игру'
                    },
                    color: Keyboard.PRIMARY_COLOR
                })
            ]
        ])
    });
});
hearCommand('5_9_6', async (context) => {
    await context.send({
        message: `К сожалению вы проиграли`,
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
                    label: '✅ Попробовать ещё раз',
                    payload: {
                        command: 'начать игру'
                    },
                    color: Keyboard.PRIMARY_COLOR
                })
            ]
        ])
    });
});
hearCommand('5_9_7', async (context) => {
    await context.send({
        message: `К сожалению вы проиграли`,
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
                    label: '✅ Попробовать ещё раз',
                    payload: {
                        command: 'начать игру'
                    },
                    color: Keyboard.PRIMARY_COLOR
                })
            ]
        ])
    });
});
hearCommand('5_9_8', async (context) => {
    await context.send({
        message: `К сожалению вы проиграли`,
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
                    label: '✅ Попробовать ещё раз',
                    payload: {
                        command: 'начать игру'
                    },
                    color: Keyboard.PRIMARY_COLOR
                })
            ]
        ])
    });
});
hearCommand('6', async (context) => {
    await context.send({
        message: `ᅠ`,
        keyboard: Keyboard.keyboard([
            [
                Keyboard.textButton({
                    label: '⬜',
                    payload: {
                        command: '6_1'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '⬜',
                    payload: {
                        command: '6_2'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '⬜',
                    payload: {
                        command: '6_3'
                    },
                    color: Keyboard.SECONDARY_COLOR
                })
            ],
            [
                Keyboard.textButton({
                    label: '⬜',
                    payload: {
                        command: '6_4'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '⭕',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '❌',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                })
            ],
            [
                Keyboard.textButton({
                    label: '⬜',
                    payload: {
                        command: '6_7'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '⬜',
                    payload: {
                        command: '6_8'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '⬜',
                    payload: {
                        command: '6_9'
                    },
                    color: Keyboard.SECONDARY_COLOR
                })
            ]
        ])
    });
});
hearCommand('6_1', async (context) => {
    await context.send({
        message: `ᅠ`,
        keyboard: Keyboard.keyboard([
            [
                Keyboard.textButton({
                    label: '❌',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '⬜',
                    payload: {
                        command: '6_1_2'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '⭕',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                })
            ],
            [
                Keyboard.textButton({
                    label: '⬜',
                    payload: {
                        command: '6_1_4'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '⭕',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '❌',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                })
            ],
            [
                Keyboard.textButton({
                    label: '⬜',
                    payload: {
                        command: '6_1_7'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '⬜',
                    payload: {
                        command: '6_1_8'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '⬜',
                    payload: {
                        command: '6_1_9'
                    },
                    color: Keyboard.SECONDARY_COLOR
                })
            ]
        ])
    });
});
hearCommand('6_1_2', async (context) => {
    await context.send({
        message: `К сожалению вы проиграли`,
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
                    label: '✅ Попробовать ещё раз',
                    payload: {
                        command: 'начать игру'
                    },
                    color: Keyboard.PRIMARY_COLOR
                })
            ]
        ])
    });
});
hearCommand('6_1_4', async (context) => {
    await context.send({
        message: `К сожалению вы проиграли`,
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
                    label: '✅ Попробовать ещё раз',
                    payload: {
                        command: 'начать игру'
                    },
                    color: Keyboard.PRIMARY_COLOR
                })
            ]
        ])
    });
});
hearCommand('6_1_7', async (context) => {
    await context.send({
        message: `ᅠ`,
        keyboard: Keyboard.keyboard([
            [
                Keyboard.textButton({
                    label: '❌',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '⬜',
                    payload: {
                        command: '6_1_7_2'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '⭕',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                })
            ],
            [
                Keyboard.textButton({
                    label: '⭕',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '⭕',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '❌',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                })
            ],
            [
                Keyboard.textButton({
                    label: '❌',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '⬜',
                    payload: {
                        command: '6_1_7_8'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '⬜',
                    payload: {
                        command: '6_1_7_9'
                    },
                    color: Keyboard.SECONDARY_COLOR
                })
            ]
        ])
    });
});
hearCommand('6_1_7_2', async (context) => {
    await context.send({
        message: `ᅠ`,
        keyboard: Keyboard.keyboard([
            [
                Keyboard.textButton({
                    label: '❌',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '❌',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '⭕',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                })
            ],
            [
                Keyboard.textButton({
                    label: '⭕',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '⭕',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '❌',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                })
            ],
            [
                Keyboard.textButton({
                    label: '❌',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '⭕',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '⬜',
                    payload: {
                        command: '6_1_7_2_9'
                    },
                    color: Keyboard.SECONDARY_COLOR
                })
            ]
        ])
    });
});
hearCommand('6_1_7_2_9', async (context) => {
    await context.send({
        message: `Игра закончилась ничьёй`,
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
                    label: '✅ Попробовать ещё раз',
                    payload: {
                        command: 'начать игру'
                    },
                    color: Keyboard.PRIMARY_COLOR
                })
            ]
        ])
    });
});
hearCommand('6_1_7_8', async (context) => {
    await context.send({
        message: `ᅠ`,
        keyboard: Keyboard.keyboard([
            [
                Keyboard.textButton({
                    label: '❌',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '⬜',
                    payload: {
                        command: '6_1_7_8_2'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '⭕',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                })
            ],
            [
                Keyboard.textButton({
                    label: '⭕',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '⭕',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '❌',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                })
            ],
            [
                Keyboard.textButton({
                    label: '❌',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '❌',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '⭕',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                })
            ]
        ])
    });
});
hearCommand('6_1_7_8_2', async (context) => {
    await context.send({
        message: `Игра закончилась ничьёй`,
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
                    label: '✅ Попробовать ещё раз',
                    payload: {
                        command: 'начать игру'
                    },
                    color: Keyboard.PRIMARY_COLOR
                })
            ]
        ])
    });
});
hearCommand('6_1_7_9', async (context) => {
    await context.send({
        message: `ᅠ`,
        keyboard: Keyboard.keyboard([
            [
                Keyboard.textButton({
                    label: '❌',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '⬜',
                    payload: {
                        command: '6_1_7_9_2'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '⭕',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                })
            ],
            [
                Keyboard.textButton({
                    label: '⭕',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '⭕',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '❌',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                })
            ],
            [
                Keyboard.textButton({
                    label: '❌',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '⭕',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '❌',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                })
            ]
        ])
    });
});
hearCommand('6_1_7_9_2', async (context) => {
    await context.send({
        message: `Игра закончилась ничьёй`,
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
                    label: '✅ Попробовать ещё раз',
                    payload: {
                        command: 'начать игру'
                    },
                    color: Keyboard.PRIMARY_COLOR
                })
            ]
        ])
    });
});
hearCommand('6_1_8', async (context) => {
    await context.send({
        message: `К сожалению вы проиграли`,
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
                    label: '✅ Попробовать ещё раз',
                    payload: {
                        command: 'начать игру'
                    },
                    color: Keyboard.PRIMARY_COLOR
                })
            ]
        ])
    });
});
hearCommand('6_1_9', async (context) => {
    await context.send({
        message: `К сожалению вы проиграли`,
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
                    label: '✅ Попробовать ещё раз',
                    payload: {
                        command: 'начать игру'
                    },
                    color: Keyboard.PRIMARY_COLOR
                })
            ]
        ])
    });
});
hearCommand('6_2', async (context) => {
    await context.send({
        message: `ᅠ`,
        keyboard: Keyboard.keyboard([
            [
                Keyboard.textButton({
                    label: '⬜',
                    payload: {
                        command: '6_2_1'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '❌',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '⭕',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                })
            ],
            [
                Keyboard.textButton({
                    label: '⬜',
                    payload: {
                        command: '6_2_4'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '⭕',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '❌',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                })
            ],
            [
                Keyboard.textButton({
                    label: '⬜',
                    payload: {
                        command: '6_2_7'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '⬜',
                    payload: {
                        command: '6_2_8'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '⬜',
                    payload: {
                        command: '6_2_9'
                    },
                    color: Keyboard.SECONDARY_COLOR
                })
            ]
        ])
    });
});
hearCommand('6_2_1', async (context) => {
    await context.send({
        message: `К сожалению вы проиграли`,
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
                    label: '✅ Попробовать ещё раз',
                    payload: {
                        command: 'начать игру'
                    },
                    color: Keyboard.PRIMARY_COLOR
                })
            ]
        ])
    });
});
hearCommand('6_2_4', async (context) => {
    await context.send({
        message: `К сожалению вы проиграли`,
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
                    label: '✅ Попробовать ещё раз',
                    payload: {
                        command: 'начать игру'
                    },
                    color: Keyboard.PRIMARY_COLOR
                })
            ]
        ])
    });
});
hearCommand('6_2_7', async (context) => {
    await context.send({
        message: `ᅠ`,
        keyboard: Keyboard.keyboard([
            [
                Keyboard.textButton({
                    label: '⭕',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '❌',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '⭕',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                })
            ],
            [
                Keyboard.textButton({
                    label: '⬜',
                    payload: {
                        command: '6_2_7_4'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '⭕',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '❌',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                })
            ],
            [
                Keyboard.textButton({
                    label: '❌',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '⬜',
                    payload: {
                        command: '6_2_7_8'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '⬜',
                    payload: {
                        command: '6_2_7_9'
                    },
                    color: Keyboard.SECONDARY_COLOR
                })
            ]
        ])
    });
});
hearCommand('6_2_7_4', async (context) => {
    await context.send({
        message: `К сожалению вы проиграли`,
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
                    label: '✅ Попробовать ещё раз',
                    payload: {
                        command: 'начать игру'
                    },
                    color: Keyboard.PRIMARY_COLOR
                })
            ]
        ])
    });
});
hearCommand('6_2_7_8', async (context) => {
    await context.send({
        message: `К сожалению вы проиграли`,
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
                    label: '✅ Попробовать ещё раз',
                    payload: {
                        command: 'начать игру'
                    },
                    color: Keyboard.PRIMARY_COLOR
                })
            ]
        ])
    });
});
hearCommand('6_2_7_9', async (context) => {
    await context.send({
        message: `ᅠ`,
        keyboard: Keyboard.keyboard([
            [
                Keyboard.textButton({
                    label: '⭕',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '❌',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '⭕',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                })
            ],
            [
                Keyboard.textButton({
                    label: '⬜',
                    payload: {
                        command: '6_2_7_9_4'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '⭕',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '❌',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                })
            ],
            [
                Keyboard.textButton({
                    label: '❌',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '⭕',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '❌',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                })
            ]
        ])
    });
});
hearCommand('6_2_7_9_4', async (context) => {
    await context.send({
        message: `Игра закончилась ничьёй`,
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
                    label: '✅ Попробовать ещё раз',
                    payload: {
                        command: 'начать игру'
                    },
                    color: Keyboard.PRIMARY_COLOR
                })
            ]
        ])
    });
});
hearCommand('6_2_8', async (context) => {
    await context.send({
        message: `К сожалению вы проиграли`,
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
                    label: '✅ Попробовать ещё раз',
                    payload: {
                        command: 'начать игру'
                    },
                    color: Keyboard.PRIMARY_COLOR
                })
            ]
        ])
    });
});
hearCommand('6_2_9', async (context) => {
    await context.send({
        message: `К сожалению вы проиграли`,
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
                    label: '✅ Попробовать ещё раз',
                    payload: {
                        command: 'начать игру'
                    },
                    color: Keyboard.PRIMARY_COLOR
                })
            ]
        ])
    });
});
hearCommand('6_3', async (context) => {
    await context.send({
        message: `ᅠ`,
        keyboard: Keyboard.keyboard([
            [
                Keyboard.textButton({
                    label: '⬜',
                    payload: {
                        command: '6_3_1'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '⬜',
                    payload: {
                        command: '6_3_2'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '❌',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                })
            ],
            [
                Keyboard.textButton({
                    label: '⬜',
                    payload: {
                        command: '6_3_4'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '⭕',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '❌',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                })
            ],
            [
                Keyboard.textButton({
                    label: '⬜',
                    payload: {
                        command: '6_3_7'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '⬜',
                    payload: {
                        command: '6_3_8'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '⭕',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                })
            ]
        ])
    });
});
hearCommand('6_3_1', async (context) => {
    await context.send({
        message: `ᅠ`,
        keyboard: Keyboard.keyboard([
            [
                Keyboard.textButton({
                    label: '❌',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '⭕',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '❌',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                })
            ],
            [
                Keyboard.textButton({
                    label: '⬜',
                    payload: {
                        command: '6_3_1_4'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '⭕',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '❌',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                })
            ],
            [
                Keyboard.textButton({
                    label: '⬜',
                    payload: {
                        command: '6_3_1_7'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '⬜',
                    payload: {
                        command: '6_3_1_8'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '⭕',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                })
            ]
        ])
    });
});
hearCommand('6_3_1_4', async (context) => {
    await context.send({
        message: `К сожалению вы проиграли`,
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
                    label: '✅ Попробовать ещё раз',
                    payload: {
                        command: 'начать игру'
                    },
                    color: Keyboard.PRIMARY_COLOR
                })
            ]
        ])
    });
});
hearCommand('6_3_1_7', async (context) => {
    await context.send({
        message: `К сожалению вы проиграли`,
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
                    label: '✅ Попробовать ещё раз',
                    payload: {
                        command: 'начать игру'
                    },
                    color: Keyboard.PRIMARY_COLOR
                })
            ]
        ])
    });
});
hearCommand('6_3_1_8', async (context) => {
    await context.send({
        message: `ᅠ`,
        keyboard: Keyboard.keyboard([
            [
                Keyboard.textButton({
                    label: '❌',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '⭕',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '❌',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                })
            ],
            [
                Keyboard.textButton({
                    label: '⭕',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '⭕',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '❌',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                })
            ],
            [
                Keyboard.textButton({
                    label: '⬜',
                    payload: {
                        command: '6_3_1_8_7'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '❌',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '⭕',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                })
            ]
        ])
    });
});
hearCommand('6_3_1_8_7', async (context) => {
    await context.send({
        message: `Игра закончилась ничьёй`,
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
                    label: '✅ Попробовать ещё раз',
                    payload: {
                        command: 'начать игру'
                    },
                    color: Keyboard.PRIMARY_COLOR
                })
            ]
        ])
    });
});
hearCommand('6_3_2', async (context) => {
    await context.send({
        message: `К сожалению вы проиграли`,
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
                    label: '✅ Попробовать ещё раз',
                    payload: {
                        command: 'начать игру'
                    },
                    color: Keyboard.PRIMARY_COLOR
                })
            ]
        ])
    });
});
hearCommand('6_3_4', async (context) => {
    await context.send({
        message: `К сожалению вы проиграли`,
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
                    label: '✅ Попробовать ещё раз',
                    payload: {
                        command: 'начать игру'
                    },
                    color: Keyboard.PRIMARY_COLOR
                })
            ]
        ])
    });
});
hearCommand('6_3_7', async (context) => {
    await context.send({
        message: `К сожалению вы проиграли`,
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
                    label: '✅ Попробовать ещё раз',
                    payload: {
                        command: 'начать игру'
                    },
                    color: Keyboard.PRIMARY_COLOR
                })
            ]
        ])
    });
});
hearCommand('6_3_8', async (context) => {
    await context.send({
        message: `К сожалению вы проиграли`,
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
                    label: '✅ Попробовать ещё раз',
                    payload: {
                        command: 'начать игру'
                    },
                    color: Keyboard.PRIMARY_COLOR
                })
            ]
        ])
    });
});
hearCommand('6_4', async (context) => {
    await context.send({
        message: `ᅠ`,
        keyboard: Keyboard.keyboard([
            [
                Keyboard.textButton({
                    label: '⭕',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '⬜',
                    payload: {
                        command: '6_4_2'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '⬜',
                    payload: {
                        command: '6_4_3'
                    },
                    color: Keyboard.SECONDARY_COLOR
                })
            ],
            [
                Keyboard.textButton({
                    label: '❌',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '⭕',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '❌',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                })
            ],
            [
                Keyboard.textButton({
                    label: '⬜',
                    payload: {
                        command: '6_4_7'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '⬜',
                    payload: {
                        command: '6_4_8'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '⬜',
                    payload: {
                        command: '6_4_9'
                    },
                    color: Keyboard.SECONDARY_COLOR
                })
            ]
        ])
    });
});
hearCommand('6_4_2', async (context) => {
    await context.send({
        message: `К сожалению вы проиграли`,
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
                    label: '✅ Попробовать ещё раз',
                    payload: {
                        command: 'начать игру'
                    },
                    color: Keyboard.PRIMARY_COLOR
                })
            ]
        ])
    });
});
hearCommand('6_4_3', async (context) => {
    await context.send({
        message: `К сожалению вы проиграли`,
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
                    label: '✅ Попробовать ещё раз',
                    payload: {
                        command: 'начать игру'
                    },
                    color: Keyboard.PRIMARY_COLOR
                })
            ]
        ])
    });
});
hearCommand('6_4_7', async (context) => {
    await context.send({
        message: `К сожалению вы проиграли`,
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
                    label: '✅ Попробовать ещё раз',
                    payload: {
                        command: 'начать игру'
                    },
                    color: Keyboard.PRIMARY_COLOR
                })
            ]
        ])
    });
});
hearCommand('6_4_8', async (context) => {
    await context.send({
        message: `К сожалению вы проиграли`,
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
                    label: '✅ Попробовать ещё раз',
                    payload: {
                        command: 'начать игру'
                    },
                    color: Keyboard.PRIMARY_COLOR
                })
            ]
        ])
    });
});
hearCommand('6_4_9', async (context) => {
    await context.send({
        message: `ᅠ`,
        keyboard: Keyboard.keyboard([
            [
                Keyboard.textButton({
                    label: '⭕',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '⬜',
                    payload: {
                        command: '6_4_9_2'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '⭕',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                })
            ],
            [
                Keyboard.textButton({
                    label: '❌',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '⭕',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '❌',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                })
            ],
            [
                Keyboard.textButton({
                    label: '⬜',
                    payload: {
                        command: '6_4_9_7'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '⬜',
                    payload: {
                        command: '6_4_9_8'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '❌',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                })
            ]
        ])
    });
});
hearCommand('6_4_9_2', async (context) => {
    await context.send({
        message: `К сожалению вы проиграли`,
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
                    label: '✅ Попробовать ещё раз',
                    payload: {
                        command: 'начать игру'
                    },
                    color: Keyboard.PRIMARY_COLOR
                })
            ]
        ])
    });
});
hearCommand('6_4_9_7', async (context) => {
    await context.send({
        message: `К сожалению вы проиграли`,
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
                    label: '✅ Попробовать ещё раз',
                    payload: {
                        command: 'начать игру'
                    },
                    color: Keyboard.PRIMARY_COLOR
                })
            ]
        ])
    });
});
hearCommand('6_4_9_8', async (context) => {
    await context.send({
        message: `К сожалению вы проиграли`,
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
                    label: '✅ Попробовать ещё раз',
                    payload: {
                        command: 'начать игру'
                    },
                    color: Keyboard.PRIMARY_COLOR
                })
            ]
        ])
    });
});
hearCommand('6_7', async (context) => {
    await context.send({
        message: `ᅠ`,
        keyboard: Keyboard.keyboard([
            [
                Keyboard.textButton({
                    label: '⬜',
                    payload: {
                        command: '6_7_1'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '⬜',
                    payload: {
                        command: '6_7_2'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '⬜',
                    payload: {
                        command: '6_7_3'
                    },
                    color: Keyboard.SECONDARY_COLOR
                })
            ],
            [
                Keyboard.textButton({
                    label: '⬜',
                    payload: {
                        command: '6_7_4'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '⭕',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '❌',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                })
            ],
            [
                Keyboard.textButton({
                    label: '❌',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '⬜',
                    payload: {
                        command: '6_7_8'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '⭕',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                })
            ]
        ])
    });
});
hearCommand('6_7_1', async (context) => {
    await context.send({
        message: `ᅠ`,
        keyboard: Keyboard.keyboard([
            [
                Keyboard.textButton({
                    label: '❌',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '⬜',
                    payload: {
                        command: '6_7_1_2'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '⬜',
                    payload: {
                        command: '6_7_1_3'
                    },
                    color: Keyboard.SECONDARY_COLOR
                })
            ],
            [
                Keyboard.textButton({
                    label: '⭕',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '⭕',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '❌',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                })
            ],
            [
                Keyboard.textButton({
                    label: '❌',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '⬜',
                    payload: {
                        command: '6_7_1_8'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '⭕',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                })
            ]
        ])
    });
});
hearCommand('6_7_1_2', async (context) => {
    await context.send({
        message: `ᅠ`,
        keyboard: Keyboard.keyboard([
            [
                Keyboard.textButton({
                    label: '❌',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '❌',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '⭕',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                })
            ],
            [
                Keyboard.textButton({
                    label: '⭕',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '⭕',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '❌',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                })
            ],
            [
                Keyboard.textButton({
                    label: '❌',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '⬜',
                    payload: {
                        command: '6_7_1_2_8'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '⭕',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                })
            ]
        ])
    });
});
hearCommand('6_7_1_2_8', async (context) => {
    await context.send({
        message: `Игра закончилась ничьёй`,
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
                    label: '✅ Попробовать ещё раз',
                    payload: {
                        command: 'начать игру'
                    },
                    color: Keyboard.PRIMARY_COLOR
                })
            ]
        ])
    });
});
hearCommand('6_7_1_3', async (context) => {
    await context.send({
        message: `ᅠ`,
        keyboard: Keyboard.keyboard([
            [
                Keyboard.textButton({
                    label: '❌',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '⭕',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '❌',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                })
            ],
            [
                Keyboard.textButton({
                    label: '⭕',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '⭕',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '❌',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                })
            ],
            [
                Keyboard.textButton({
                    label: '❌',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '⬜',
                    payload: {
                        command: '6_7_1_3_8'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '⭕',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                })
            ]
        ])
    });
});
hearCommand('6_7_1_3_8', async (context) => {
    await context.send({
        message: `Игра закончилась ничьёй`,
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
                    label: '✅ Попробовать ещё раз',
                    payload: {
                        command: 'начать игру'
                    },
                    color: Keyboard.PRIMARY_COLOR
                })
            ]
        ])
    });
});
hearCommand('6_7_1_8', async (context) => {
    await context.send({
        message: `ᅠ`,
        keyboard: Keyboard.keyboard([
            [
                Keyboard.textButton({
                    label: '❌',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '⭕',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '⬜',
                    payload: {
                        command: '6_7_1_8_3'
                    },
                    color: Keyboard.SECONDARY_COLOR
                })
            ],
            [
                Keyboard.textButton({
                    label: '⭕',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '⭕',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '❌',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                })
            ],
            [
                Keyboard.textButton({
                    label: '❌',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '❌',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '⭕',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                })
            ]
        ])
    });
});
hearCommand('6_7_1_8_3', async (context) => {
    await context.send({
        message: `Игра закончилась ничьёй`,
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
                    label: '✅ Попробовать ещё раз',
                    payload: {
                        command: 'начать игру'
                    },
                    color: Keyboard.PRIMARY_COLOR
                })
            ]
        ])
    });
});
hearCommand('6_7_2', async (context) => {
    await context.send({
        message: `К сожалению вы проиграли`,
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
                    label: '✅ Попробовать ещё раз',
                    payload: {
                        command: 'начать игру'
                    },
                    color: Keyboard.PRIMARY_COLOR
                })
            ]
        ])
    });
});
hearCommand('6_7_3', async (context) => {
    await context.send({
        message: `К сожалению вы проиграли`,
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
                    label: '✅ Попробовать ещё раз',
                    payload: {
                        command: 'начать игру'
                    },
                    color: Keyboard.PRIMARY_COLOR
                })
            ]
        ])
    });
});
hearCommand('6_7_4', async (context) => {
    await context.send({
        message: `К сожалению вы проиграли`,
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
                    label: '✅ Попробовать ещё раз',
                    payload: {
                        command: 'начать игру'
                    },
                    color: Keyboard.PRIMARY_COLOR
                })
            ]
        ])
    });
});
hearCommand('6_7_8', async (context) => {
    await context.send({
        message: `К сожалению вы проиграли`,
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
                    label: '✅ Попробовать ещё раз',
                    payload: {
                        command: 'начать игру'
                    },
                    color: Keyboard.PRIMARY_COLOR
                })
            ]
        ])
    });
});
hearCommand('6_8', async (context) => {
    await context.send({
        message: `ᅠ`,
        keyboard: Keyboard.keyboard([
            [
                Keyboard.textButton({
                    label: '⬜',
                    payload: {
                        command: '6_8_1'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '⬜',
                    payload: {
                        command: '6_8_2'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '⬜',
                    payload: {
                        command: '6_8_3'
                    },
                    color: Keyboard.SECONDARY_COLOR
                })
            ],
            [
                Keyboard.textButton({
                    label: '⬜',
                    payload: {
                        command: '6_8_4'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '⭕',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '❌',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                })
            ],
            [
                Keyboard.textButton({
                    label: '⬜',
                    payload: {
                        command: '6_8_7'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '❌',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '⭕',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                })
            ]
        ])
    });
});
hearCommand('6_8_1', async (context) => {
    await context.send({
        message: `ᅠ`,
        keyboard: Keyboard.keyboard([
            [
                Keyboard.textButton({
                    label: '❌',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '⭕',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '⬜',
                    payload: {
                        command: '6_8_1_3'
                    },
                    color: Keyboard.SECONDARY_COLOR
                })
            ],
            [
                Keyboard.textButton({
                    label: '⬜',
                    payload: {
                        command: '6_8_1_4'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '⭕',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '❌',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                })
            ],
            [
                Keyboard.textButton({
                    label: '⬜',
                    payload: {
                        command: '6_8_1_7'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '❌',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '⭕',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                })
            ]
        ])
    });
});
hearCommand('6_8_1_3', async (context) => {
    await context.send({
        message: `ᅠ`,
        keyboard: Keyboard.keyboard([
            [
                Keyboard.textButton({
                    label: '❌',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '⭕',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '❌',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                })
            ],
            [
                Keyboard.textButton({
                    label: '⭕',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '⭕',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '❌',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                })
            ],
            [
                Keyboard.textButton({
                    label: '⬜',
                    payload: {
                        command: '6_8_1_3_7'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '❌',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '⭕',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                })
            ]
        ])
    });
});
hearCommand('6_8_1_3_7', async (context) => {
    await context.send({
        message: `Игра закончилась ничьёй`,
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
                    label: '✅ Попробовать ещё раз',
                    payload: {
                        command: 'начать игру'
                    },
                    color: Keyboard.PRIMARY_COLOR
                })
            ]
        ])
    });
});
hearCommand('6_8_1_4', async (context) => {
    await context.send({
        message: `ᅠ`,
        keyboard: Keyboard.keyboard([
            [
                Keyboard.textButton({
                    label: '❌',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '⭕',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '⬜',
                    payload: {
                        command: '6_8_1_4_3'
                    },
                    color: Keyboard.SECONDARY_COLOR
                })
            ],
            [
                Keyboard.textButton({
                    label: '❌',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '⭕',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '❌',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                })
            ],
            [
                Keyboard.textButton({
                    label: '⭕',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '❌',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '⭕',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                })
            ]
        ])
    });
});
hearCommand('6_8_1_4_3', async (context) => {
    await context.send({
        message: `Игра закончилась ничьёй`,
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
                    label: '✅ Попробовать ещё раз',
                    payload: {
                        command: 'начать игру'
                    },
                    color: Keyboard.PRIMARY_COLOR
                })
            ]
        ])
    });
});
hearCommand('6_8_1_7', async (context) => {
    await context.send({
        message: `ᅠ`,
        keyboard: Keyboard.keyboard([
            [
                Keyboard.textButton({
                    label: '❌',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '⭕',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '⬜',
                    payload: {
                        command: '6_8_1_7_3'
                    },
                    color: Keyboard.SECONDARY_COLOR
                })
            ],
            [
                Keyboard.textButton({
                    label: '⭕',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '⭕',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '❌',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                })
            ],
            [
                Keyboard.textButton({
                    label: '❌',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '❌',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '⭕',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                })
            ]
        ])
    });
});
hearCommand('6_8_1_7_3', async (context) => {
    await context.send({
        message: `Игра закончилась ничьёй`,
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
                    label: '✅ Попробовать ещё раз',
                    payload: {
                        command: 'начать игру'
                    },
                    color: Keyboard.PRIMARY_COLOR
                })
            ]
        ])
    });
});
hearCommand('6_8_2', async (context) => {
    await context.send({
        message: `К сожалению вы проиграли`,
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
                    label: '✅ Попробовать ещё раз',
                    payload: {
                        command: 'начать игру'
                    },
                    color: Keyboard.PRIMARY_COLOR
                })
            ]
        ])
    });
});
hearCommand('6_8_3', async (context) => {
    await context.send({
        message: `К сожалению вы проиграли`,
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
                    label: '✅ Попробовать ещё раз',
                    payload: {
                        command: 'начать игру'
                    },
                    color: Keyboard.PRIMARY_COLOR
                })
            ]
        ])
    });
});
hearCommand('6_8_4', async (context) => {
    await context.send({
        message: `К сожалению вы проиграли`,
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
                    label: '✅ Попробовать ещё раз',
                    payload: {
                        command: 'начать игру'
                    },
                    color: Keyboard.PRIMARY_COLOR
                })
            ]
        ])
    });
});
hearCommand('6_8_7', async (context) => {
    await context.send({
        message: `К сожалению вы проиграли`,
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
                    label: '✅ Попробовать ещё раз',
                    payload: {
                        command: 'начать игру'
                    },
                    color: Keyboard.PRIMARY_COLOR
                })
            ]
        ])
    });
});
hearCommand('6_9', async (context) => {
    await context.send({
        message: `ᅠ`,
        keyboard: Keyboard.keyboard([
            [
                Keyboard.textButton({
                    label: '⬜',
                    payload: {
                        command: '6_9_1'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '⬜',
                    payload: {
                        command: '6_9_2'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '⭕',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                })
            ],
            [
                Keyboard.textButton({
                    label: '⬜',
                    payload: {
                        command: '6_9_4'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '⭕',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '❌',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                })
            ],
            [
                Keyboard.textButton({
                    label: '⬜',
                    payload: {
                        command: '6_9_7'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '⬜',
                    payload: {
                        command: '6_9_8'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '❌',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                })
            ]
        ])
    });
});
hearCommand('6_9_1', async (context) => {
    await context.send({
        message: `К сожалению вы проиграли`,
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
                    label: '✅ Попробовать ещё раз',
                    payload: {
                        command: 'начать игру'
                    },
                    color: Keyboard.PRIMARY_COLOR
                })
            ]
        ])
    });
});
hearCommand('6_9_2', async (context) => {
    await context.send({
        message: `К сожалению вы проиграли`,
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
                    label: '✅ Попробовать ещё раз',
                    payload: {
                        command: 'начать игру'
                    },
                    color: Keyboard.PRIMARY_COLOR
                })
            ]
        ])
    });
});
hearCommand('6_9_4', async (context) => {
    await context.send({
        message: `К сожалению вы проиграли`,
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
                    label: '✅ Попробовать ещё раз',
                    payload: {
                        command: 'начать игру'
                    },
                    color: Keyboard.PRIMARY_COLOR
                })
            ]
        ])
    });
});
hearCommand('6_9_7', async (context) => {
    await context.send({
        message: `ᅠ`,
        keyboard: Keyboard.keyboard([
            [
                Keyboard.textButton({
                    label: '⬜',
                    payload: {
                        command: '6_9_7_1'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '⬜',
                    payload: {
                        command: '6_9_7_2'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '⭕',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                })
            ],
            [
                Keyboard.textButton({
                    label: '⬜',
                    payload: {
                        command: '6_9_7_4'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '⭕',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '❌',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                })
            ],
            [
                Keyboard.textButton({
                    label: '❌',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '⭕',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '❌',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                })
            ]
        ])
    });
});
hearCommand('6_9_7_1', async (context) => {
    await context.send({
        message: `К сожалению вы проиграли`,
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
                    label: '✅ Попробовать ещё раз',
                    payload: {
                        command: 'начать игру'
                    },
                    color: Keyboard.PRIMARY_COLOR
                })
            ]
        ])
    });
});
hearCommand('6_9_7_2', async (context) => {
    await context.send({
        message: `ᅠ`,
        keyboard: Keyboard.keyboard([
            [
                Keyboard.textButton({
                    label: '⭕',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '❌',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '⭕',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                })
            ],
            [
                Keyboard.textButton({
                    label: '⬜',
                    payload: {
                        command: '6_9_7_2_4'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '⭕',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '❌',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                })
            ],
            [
                Keyboard.textButton({
                    label: '❌',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '⭕',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '❌',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                })
            ]
        ])
    });
});
hearCommand('6_9_7_2_4', async (context) => {
    await context.send({
        message: `Игра закончилась ничьёй`,
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
                    label: '✅ Попробовать ещё раз',
                    payload: {
                        command: 'начать игру'
                    },
                    color: Keyboard.PRIMARY_COLOR
                })
            ]
        ])
    });
});
hearCommand('6_9_7_4', async (context) => {
    await context.send({
        message: `К сожалению вы проиграли`,
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
                    label: '✅ Попробовать ещё раз',
                    payload: {
                        command: 'начать игру'
                    },
                    color: Keyboard.PRIMARY_COLOR
                })
            ]
        ])
    });
});
hearCommand('6_9_8', async (context) => {
    await context.send({
        message: `К сожалению вы проиграли`,
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
                    label: '✅ Попробовать ещё раз',
                    payload: {
                        command: 'начать игру'
                    },
                    color: Keyboard.PRIMARY_COLOR
                })
            ]
        ])
    });
});
hearCommand('7', async (context) => {
    await context.send({
        message: `ᅠ`,
        keyboard: Keyboard.keyboard([
            [
                Keyboard.textButton({
                    label: '⬜',
                    payload: {
                        command: '7_1'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '⬜',
                    payload: {
                        command: '7_2'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '⬜',
                    payload: {
                        command: '7_3'
                    },
                    color: Keyboard.SECONDARY_COLOR
                })
            ],
            [
                Keyboard.textButton({
                    label: '⬜',
                    payload: {
                        command: '7_4'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '⭕',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '⬜',
                    payload: {
                        command: '7_6'
                    },
                    color: Keyboard.SECONDARY_COLOR
                })
            ],
            [
                Keyboard.textButton({
                    label: '❌',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '⬜',
                    payload: {
                        command: '7_8'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '⬜',
                    payload: {
                        command: '7_9'
                    },
                    color: Keyboard.SECONDARY_COLOR
                })
            ]
        ])
    });
});
hearCommand('7_1', async (context) => {
    await context.send({
        message: `ᅠ`,
        keyboard: Keyboard.keyboard([
            [
                Keyboard.textButton({
                    label: '❌',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '⬜',
                    payload: {
                        command: '7_1_2'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '⬜',
                    payload: {
                        command: '7_1_3'
                    },
                    color: Keyboard.SECONDARY_COLOR
                })
            ],
            [
                Keyboard.textButton({
                    label: '⭕',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '⭕',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '⬜',
                    payload: {
                        command: '7_1_6'
                    },
                    color: Keyboard.SECONDARY_COLOR
                })
            ],
            [
                Keyboard.textButton({
                    label: '❌',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '⬜',
                    payload: {
                        command: '7_1_8'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '⬜',
                    payload: {
                        command: '7_1_9'
                    },
                    color: Keyboard.SECONDARY_COLOR
                })
            ]
        ])
    });
});
hearCommand('7_1_2', async (context) => {
    await context.send({
        message: `К сожалению вы проиграли`,
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
                    label: '✅ Попробовать ещё раз',
                    payload: {
                        command: 'начать игру'
                    },
                    color: Keyboard.PRIMARY_COLOR
                })
            ]
        ])
    });
});
hearCommand('7_1_3', async (context) => {
    await context.send({
        message: `К сожалению вы проиграли`,
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
                    label: '✅ Попробовать ещё раз',
                    payload: {
                        command: 'начать игру'
                    },
                    color: Keyboard.PRIMARY_COLOR
                })
            ]
        ])
    });
});
hearCommand('7_1_6', async (context) => {
    await context.send({
        message: `ᅠ`,
        keyboard: Keyboard.keyboard([
            [
                Keyboard.textButton({
                    label: '❌',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '⭕',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '⬜',
                    payload: {
                        command: '7_1_6_3'
                    },
                    color: Keyboard.SECONDARY_COLOR
                })
            ],
            [
                Keyboard.textButton({
                    label: '⭕',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '⭕',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '❌',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                })
            ],
            [
                Keyboard.textButton({
                    label: '❌',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '⬜',
                    payload: {
                        command: '7_1_6_8'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '⬜',
                    payload: {
                        command: '7_1_6_9'
                    },
                    color: Keyboard.SECONDARY_COLOR
                })
            ]
        ])
    });
});
hearCommand('7_1_6_3', async (context) => {
    await context.send({
        message: `К сожалению вы проиграли`,
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
                    label: '✅ Попробовать ещё раз',
                    payload: {
                        command: 'начать игру'
                    },
                    color: Keyboard.PRIMARY_COLOR
                })
            ]
        ])
    });
});
hearCommand('7_1_6_8', async (context) => {
    await context.send({
        message: `ᅠ`,
        keyboard: Keyboard.keyboard([
            [
                Keyboard.textButton({
                    label: '❌',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '⭕',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '⬜',
                    payload: {
                        command: '7_1_6_8_3'
                    },
                    color: Keyboard.SECONDARY_COLOR
                })
            ],
            [
                Keyboard.textButton({
                    label: '⭕',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '⭕',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '❌',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                })
            ],
            [
                Keyboard.textButton({
                    label: '❌',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '❌',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '⭕',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                })
            ]
        ])
    });
});
hearCommand('7_1_6_8_3', async (context) => {
    await context.send({
        message: `Игра закончилась ничьёй`,
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
                    label: '✅ Попробовать ещё раз',
                    payload: {
                        command: 'начать игру'
                    },
                    color: Keyboard.PRIMARY_COLOR
                })
            ]
        ])
    });
});
hearCommand('7_1_6_9', async (context) => {
    await context.send({
        message: `К сожалению вы проиграли`,
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
                    label: '✅ Попробовать ещё раз',
                    payload: {
                        command: 'начать игру'
                    },
                    color: Keyboard.PRIMARY_COLOR
                })
            ]
        ])
    });
});
hearCommand('7_1_8', async (context) => {
    await context.send({
        message: `К сожалению вы проиграли`,
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
                    label: '✅ Попробовать ещё раз',
                    payload: {
                        command: 'начать игру'
                    },
                    color: Keyboard.PRIMARY_COLOR
                })
            ]
        ])
    });
});
hearCommand('7_1_9', async (context) => {
    await context.send({
        message: `К сожалению вы проиграли`,
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
                    label: '✅ Попробовать ещё раз',
                    payload: {
                        command: 'начать игру'
                    },
                    color: Keyboard.PRIMARY_COLOR
                })
            ]
        ])
    });
});
hearCommand('7_2', async (context) => {
    await context.send({
        message: `ᅠ`,
        keyboard: Keyboard.keyboard([
            [
                Keyboard.textButton({
                    label: '⭕',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '❌',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '⬜',
                    payload: {
                        command: '7_2_3'
                    },
                    color: Keyboard.SECONDARY_COLOR
                })
            ],
            [
                Keyboard.textButton({
                    label: '⬜',
                    payload: {
                        command: '7_2_4'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '⭕',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '⬜',
                    payload: {
                        command: '7_2_6'
                    },
                    color: Keyboard.SECONDARY_COLOR
                })
            ],
            [
                Keyboard.textButton({
                    label: '❌',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '⬜',
                    payload: {
                        command: '7_2_8'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '⬜',
                    payload: {
                        command: '7_2_9'
                    },
                    color: Keyboard.SECONDARY_COLOR
                })
            ]
        ])
    });
});
hearCommand('7_2_3', async (context) => {
    await context.send({
        message: `К сожалению вы проиграли`,
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
                    label: '✅ Попробовать ещё раз',
                    payload: {
                        command: 'начать игру'
                    },
                    color: Keyboard.PRIMARY_COLOR
                })
            ]
        ])
    });
});
hearCommand('7_2_4', async (context) => {
    await context.send({
        message: `К сожалению вы проиграли`,
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
                    label: '✅ Попробовать ещё раз',
                    payload: {
                        command: 'начать игру'
                    },
                    color: Keyboard.PRIMARY_COLOR
                })
            ]
        ])
    });
});
hearCommand('7_2_6', async (context) => {
    await context.send({
        message: `К сожалению вы проиграли`,
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
                    label: '✅ Попробовать ещё раз',
                    payload: {
                        command: 'начать игру'
                    },
                    color: Keyboard.PRIMARY_COLOR
                })
            ]
        ])
    });
});
hearCommand('7_2_8', async (context) => {
    await context.send({
        message: `К сожалению вы проиграли`,
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
                    label: '✅ Попробовать ещё раз',
                    payload: {
                        command: 'начать игру'
                    },
                    color: Keyboard.PRIMARY_COLOR
                })
            ]
        ])
    });
});
hearCommand('7_2_9', async (context) => {
    await context.send({
        message: `ᅠ`,
        keyboard: Keyboard.keyboard([
            [
                Keyboard.textButton({
                    label: '⭕',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '❌',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '⬜',
                    payload: {
                        command: '7_2_9_3'
                    },
                    color: Keyboard.SECONDARY_COLOR
                })
            ],
            [
                Keyboard.textButton({
                    label: '⬜',
                    payload: {
                        command: '7_2_9_4'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '⭕',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '⬜',
                    payload: {
                        command: '7_2_9_6'
                    },
                    color: Keyboard.SECONDARY_COLOR
                })
            ],
            [
                Keyboard.textButton({
                    label: '❌',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '⭕',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '❌',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                })
            ]
        ])
    });
});
hearCommand('7_2_9_3', async (context) => {
    await context.send({
        message: `ᅠ`,
        keyboard: Keyboard.keyboard([
            [
                Keyboard.textButton({
                    label: '⭕',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '❌',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '❌',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                })
            ],
            [
                Keyboard.textButton({
                    label: '⬜',
                    payload: {
                        command: '7_2_9_3_4'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '⭕',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '⭕',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                })
            ],
            [
                Keyboard.textButton({
                    label: '❌',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '⭕',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '❌',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                })
            ]
        ])
    });
});
hearCommand('7_2_9_3_4', async (context) => {
    await context.send({
        message: `Игра закончилась ничьёй`,
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
                    label: '✅ Попробовать ещё раз',
                    payload: {
                        command: 'начать игру'
                    },
                    color: Keyboard.PRIMARY_COLOR
                })
            ]
        ])
    });
});
hearCommand('7_2_9_4', async (context) => {
    await context.send({
        message: `ᅠ`,
        keyboard: Keyboard.keyboard([
            [
                Keyboard.textButton({
                    label: '⭕',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '❌',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '⭕',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                })
            ],
            [
                Keyboard.textButton({
                    label: '❌',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '⭕',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '⬜',
                    payload: {
                        command: '7_2_9_4_6'
                    },
                    color: Keyboard.SECONDARY_COLOR
                })
            ],
            [
                Keyboard.textButton({
                    label: '❌',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '⭕',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '❌',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                })
            ]
        ])
    });
});
hearCommand('7_2_9_4_6', async (context) => {
    await context.send({
        message: `Игра закончилась ничьёй`,
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
                    label: '✅ Попробовать ещё раз',
                    payload: {
                        command: 'начать игру'
                    },
                    color: Keyboard.PRIMARY_COLOR
                })
            ]
        ])
    });
});
hearCommand('7_2_9_6', async (context) => {
    await context.send({
        message: `ᅠ`,
        keyboard: Keyboard.keyboard([
            [
                Keyboard.textButton({
                    label: '⭕',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '❌',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '⭕',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                })
            ],
            [
                Keyboard.textButton({
                    label: '⬜',
                    payload: {
                        command: '7_2_9_6_4'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '⭕',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '❌',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                })
            ],
            [
                Keyboard.textButton({
                    label: '❌',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '⭕',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '❌',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                })
            ]
        ])
    });
});
hearCommand('7_2_9_6_4', async (context) => {
    await context.send({
        message: `Игра закончилась ничьёй`,
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
                    label: '✅ Попробовать ещё раз',
                    payload: {
                        command: 'начать игру'
                    },
                    color: Keyboard.PRIMARY_COLOR
                })
            ]
        ])
    });
});
hearCommand('7_3', async (context) => {
    await context.send({
        message: `ᅠ`,
        keyboard: Keyboard.keyboard([
            [
                Keyboard.textButton({
                    label: '⬜',
                    payload: {
                        command: '7_3_1'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '⭕',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '❌',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                })
            ],
            [
                Keyboard.textButton({
                    label: '⬜',
                    payload: {
                        command: '7_3_4'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '⭕',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '⬜',
                    payload: {
                        command: '7_3_6'
                    },
                    color: Keyboard.SECONDARY_COLOR
                })
            ],
            [
                Keyboard.textButton({
                    label: '❌',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '⬜',
                    payload: {
                        command: '7_3_8'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '⬜',
                    payload: {
                        command: '7_3_9'
                    },
                    color: Keyboard.SECONDARY_COLOR
                })
            ]
        ])
    });
});
hearCommand('7_3_1', async (context) => {
    await context.send({
        message: `К сожалению вы проиграли`,
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
                    label: '✅ Попробовать ещё раз',
                    payload: {
                        command: 'начать игру'
                    },
                    color: Keyboard.PRIMARY_COLOR
                })
            ]
        ])
    });
});
hearCommand('7_3_4', async (context) => {
    await context.send({
        message: `К сожалению вы проиграли`,
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
                    label: '✅ Попробовать ещё раз',
                    payload: {
                        command: 'начать игру'
                    },
                    color: Keyboard.PRIMARY_COLOR
                })
            ]
        ])
    });
});
hearCommand('7_3_6', async (context) => {
    await context.send({
        message: `К сожалению вы проиграли`,
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
                    label: '✅ Попробовать ещё раз',
                    payload: {
                        command: 'начать игру'
                    },
                    color: Keyboard.PRIMARY_COLOR
                })
            ]
        ])
    });
});
hearCommand('7_3_8', async (context) => {
    await context.send({
        message: `ᅠ`,
        keyboard: Keyboard.keyboard([
            [
                Keyboard.textButton({
                    label: '⬜',
                    payload: {
                        command: '7_3_8_1'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '⭕',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '❌',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                })
            ],
            [
                Keyboard.textButton({
                    label: '⬜',
                    payload: {
                        command: '7_3_8_4'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '⭕',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '⬜',
                    payload: {
                        command: '7_3_8_6'
                    },
                    color: Keyboard.SECONDARY_COLOR
                })
            ],
            [
                Keyboard.textButton({
                    label: '❌',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '❌',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '⭕',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                })
            ]
        ])
    });
});
hearCommand('7_3_8_1', async (context) => {
    await context.send({
        message: `ᅠ`,
        keyboard: Keyboard.keyboard([
            [
                Keyboard.textButton({
                    label: '❌',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '⭕',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '❌',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                })
            ],
            [
                Keyboard.textButton({
                    label: '⭕',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '⭕',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '⬜',
                    payload: {
                        command: '7_3_8_1_6'
                    },
                    color: Keyboard.SECONDARY_COLOR
                })
            ],
            [
                Keyboard.textButton({
                    label: '❌',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '❌',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '⭕',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                })
            ]
        ])
    });
});
hearCommand('7_3_8_1_6', async (context) => {
    await context.send({
        message: `Игра закончилась ничьёй`,
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
                    label: '✅ Попробовать ещё раз',
                    payload: {
                        command: 'начать игру'
                    },
                    color: Keyboard.PRIMARY_COLOR
                })
            ]
        ])
    });
});
hearCommand('7_3_8_4', async (context) => {
    await context.send({
        message: `К сожалению вы проиграли`,
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
                    label: '✅ Попробовать ещё раз',
                    payload: {
                        command: 'начать игру'
                    },
                    color: Keyboard.PRIMARY_COLOR
                })
            ]
        ])
    });
});
hearCommand('7_3_8_6', async (context) => {
    await context.send({
        message: `К сожалению вы проиграли`,
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
                    label: '✅ Попробовать ещё раз',
                    payload: {
                        command: 'начать игру'
                    },
                    color: Keyboard.PRIMARY_COLOR
                })
            ]
        ])
    });
});
hearCommand('7_3_9', async (context) => {
    await context.send({
        message: `К сожалению вы проиграли`,
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
                    label: '✅ Попробовать ещё раз',
                    payload: {
                        command: 'начать игру'
                    },
                    color: Keyboard.PRIMARY_COLOR
                })
            ]
        ])
    });
});
hearCommand('7_4', async (context) => {
    await context.send({
        message: `ᅠ`,
        keyboard: Keyboard.keyboard([
            [
                Keyboard.textButton({
                    label: '⭕',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '⬜',
                    payload: {
                        command: '7_4_2'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '⬜',
                    payload: {
                        command: '7_4_3'
                    },
                    color: Keyboard.SECONDARY_COLOR
                })
            ],
            [
                Keyboard.textButton({
                    label: '❌',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '⭕',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '⬜',
                    payload: {
                        command: '7_4_6'
                    },
                    color: Keyboard.SECONDARY_COLOR
                })
            ],
            [
                Keyboard.textButton({
                    label: '❌',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '⬜',
                    payload: {
                        command: '7_4_8'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '⬜',
                    payload: {
                        command: '7_4_9'
                    },
                    color: Keyboard.SECONDARY_COLOR
                })
            ]
        ])
    });
});
hearCommand('7_4_2', async (context) => {
    await context.send({
        message: `К сожалению вы проиграли`,
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
                    label: '✅ Попробовать ещё раз',
                    payload: {
                        command: 'начать игру'
                    },
                    color: Keyboard.PRIMARY_COLOR
                })
            ]
        ])
    });
});
hearCommand('7_4_3', async (context) => {
    await context.send({
        message: `К сожалению вы проиграли`,
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
                    label: '✅ Попробовать ещё раз',
                    payload: {
                        command: 'начать игру'
                    },
                    color: Keyboard.PRIMARY_COLOR
                })
            ]
        ])
    });
});
hearCommand('7_4_6', async (context) => {
    await context.send({
        message: `К сожалению вы проиграли`,
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
                    label: '✅ Попробовать ещё раз',
                    payload: {
                        command: 'начать игру'
                    },
                    color: Keyboard.PRIMARY_COLOR
                })
            ]
        ])
    });
});
hearCommand('7_4_8', async (context) => {
    await context.send({
        message: `К сожалению вы проиграли`,
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
                    label: '✅ Попробовать ещё раз',
                    payload: {
                        command: 'начать игру'
                    },
                    color: Keyboard.PRIMARY_COLOR
                })
            ]
        ])
    });
});
hearCommand('7_4_9', async (context) => {
    await context.send({
        message: `ᅠ`,
        keyboard: Keyboard.keyboard([
            [
                Keyboard.textButton({
                    label: '⭕',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '⬜',
                    payload: {
                        command: '7_4_9_2'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '⬜',
                    payload: {
                        command: '7_4_9_3'
                    },
                    color: Keyboard.SECONDARY_COLOR
                })
            ],
            [
                Keyboard.textButton({
                    label: '❌',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '⭕',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '⬜',
                    payload: {
                        command: '7_4_9_6'
                    },
                    color: Keyboard.SECONDARY_COLOR
                })
            ],
            [
                Keyboard.textButton({
                    label: '❌',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '⭕',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '❌',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                })
            ]
        ])
    });
});
hearCommand('7_4_9_2', async (context) => {
    await context.send({
        message: `ᅠ`,
        keyboard: Keyboard.keyboard([
            [
                Keyboard.textButton({
                    label: '⭕',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '❌',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '⭕',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                })
            ],
            [
                Keyboard.textButton({
                    label: '❌',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '⭕',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '⬜',
                    payload: {
                        command: '7_4_9_2_6'
                    },
                    color: Keyboard.SECONDARY_COLOR
                })
            ],
            [
                Keyboard.textButton({
                    label: '❌',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '⭕',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '❌',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                })
            ]
        ])
    });
});
hearCommand('7_4_9_2_6', async (context) => {
    await context.send({
        message: `Игра закончилась ничьёй`,
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
                    label: '✅ Попробовать ещё раз',
                    payload: {
                        command: 'начать игру'
                    },
                    color: Keyboard.PRIMARY_COLOR
                })
            ]
        ])
    });
});
hearCommand('7_4_9_3', async (context) => {
    await context.send({
        message: `К сожалению вы проиграли`,
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
                    label: '✅ Попробовать ещё раз',
                    payload: {
                        command: 'начать игру'
                    },
                    color: Keyboard.PRIMARY_COLOR
                })
            ]
        ])
    });
});
hearCommand('7_4_9_6', async (context) => {
    await context.send({
        message: `К сожалению вы проиграли`,
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
                    label: '✅ Попробовать ещё раз',
                    payload: {
                        command: 'начать игру'
                    },
                    color: Keyboard.PRIMARY_COLOR
                })
            ]
        ])
    });
});
hearCommand('7_6', async (context) => {
    await context.send({
        message: `ᅠ`,
        keyboard: Keyboard.keyboard([
            [
                Keyboard.textButton({
                    label: '⬜',
                    payload: {
                        command: '7_6_1'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '⬜',
                    payload: {
                        command: '7_6_2'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '⬜',
                    payload: {
                        command: '7_6_3'
                    },
                    color: Keyboard.SECONDARY_COLOR
                })
            ],
            [
                Keyboard.textButton({
                    label: '⬜',
                    payload: {
                        command: '7_6_4'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '⭕',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '❌',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                })
            ],
            [
                Keyboard.textButton({
                    label: '❌',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '⬜',
                    payload: {
                        command: '7_6_8'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '⭕',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                })
            ]
        ])
    });
});
hearCommand('7_6_1', async (context) => {
    await context.send({
        message: `ᅠ`,
        keyboard: Keyboard.keyboard([
            [
                Keyboard.textButton({
                    label: '❌',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '⬜',
                    payload: {
                        command: '7_6_1_2'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '⬜',
                    payload: {
                        command: '7_6_1_3'
                    },
                    color: Keyboard.SECONDARY_COLOR
                })
            ],
            [
                Keyboard.textButton({
                    label: '⭕',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '⭕',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '❌',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                })
            ],
            [
                Keyboard.textButton({
                    label: '❌',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '⬜',
                    payload: {
                        command: '7_6_1_8'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '⭕',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                })
            ]
        ])
    });
});
hearCommand('7_6_1_2', async (context) => {
    await context.send({
        message: `ᅠ`,
        keyboard: Keyboard.keyboard([
            [
                Keyboard.textButton({
                    label: '❌',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '❌',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '⭕',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                })
            ],
            [
                Keyboard.textButton({
                    label: '⭕',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '⭕',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '❌',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                })
            ],
            [
                Keyboard.textButton({
                    label: '❌',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '⬜',
                    payload: {
                        command: '7_6_1_2_8'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '⭕',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                })
            ]
        ])
    });
});
hearCommand('7_6_1_2_8', async (context) => {
    await context.send({
        message: `Игра закончилась ничьёй`,
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
                    label: '✅ Попробовать ещё раз',
                    payload: {
                        command: 'начать игру'
                    },
                    color: Keyboard.PRIMARY_COLOR
                })
            ]
        ])
    });
});
hearCommand('7_6_1_3', async (context) => {
    await context.send({
        message: `ᅠ`,
        keyboard: Keyboard.keyboard([
            [
                Keyboard.textButton({
                    label: '❌',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '⭕',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '❌',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                })
            ],
            [
                Keyboard.textButton({
                    label: '⭕',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '⭕',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '❌',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                })
            ],
            [
                Keyboard.textButton({
                    label: '❌',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '⬜',
                    payload: {
                        command: '7_6_1_3_8'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '⭕',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                })
            ]
        ])
    });
});
hearCommand('7_6_1_3_8', async (context) => {
    await context.send({
        message: `Игра закончилась ничьёй`,
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
                    label: '✅ Попробовать ещё раз',
                    payload: {
                        command: 'начать игру'
                    },
                    color: Keyboard.PRIMARY_COLOR
                })
            ]
        ])
    });
});
hearCommand('7_6_1_8', async (context) => {
    await context.send({
        message: `ᅠ`,
        keyboard: Keyboard.keyboard([
            [
                Keyboard.textButton({
                    label: '❌',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '⭕',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '⬜',
                    payload: {
                        command: '7_6_1_8_3'
                    },
                    color: Keyboard.SECONDARY_COLOR
                })
            ],
            [
                Keyboard.textButton({
                    label: '⭕',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '⭕',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '❌',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                })
            ],
            [
                Keyboard.textButton({
                    label: '❌',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '❌',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '⭕',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                })
            ]
        ])
    });
});
hearCommand('7_6_1_8_3', async (context) => {
    await context.send({
        message: `Игра закончилась ничьёй`,
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
                    label: '✅ Попробовать ещё раз',
                    payload: {
                        command: 'начать игру'
                    },
                    color: Keyboard.PRIMARY_COLOR
                })
            ]
        ])
    });
});
hearCommand('7_6_2', async (context) => {
    await context.send({
        message: `К сожалению вы проиграли`,
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
                    label: '✅ Попробовать ещё раз',
                    payload: {
                        command: 'начать игру'
                    },
                    color: Keyboard.PRIMARY_COLOR
                })
            ]
        ])
    });
});
hearCommand('7_6_3', async (context) => {
    await context.send({
        message: `К сожалению вы проиграли`,
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
                    label: '✅ Попробовать ещё раз',
                    payload: {
                        command: 'начать игру'
                    },
                    color: Keyboard.PRIMARY_COLOR
                })
            ]
        ])
    });
});
hearCommand('7_6_4', async (context) => {
    await context.send({
        message: `К сожалению вы проиграли`,
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
                    label: '✅ Попробовать ещё раз',
                    payload: {
                        command: 'начать игру'
                    },
                    color: Keyboard.PRIMARY_COLOR
                })
            ]
        ])
    });
});
hearCommand('7_6_8', async (context) => {
    await context.send({
        message: `К сожалению вы проиграли`,
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
                    label: '✅ Попробовать ещё раз',
                    payload: {
                        command: 'начать игру'
                    },
                    color: Keyboard.PRIMARY_COLOR
                })
            ]
        ])
    });
});
hearCommand('7_8', async (context) => {
    await context.send({
        message: `ᅠ`,
        keyboard: Keyboard.keyboard([
            [
                Keyboard.textButton({
                    label: '⬜',
                    payload: {
                        command: '7_8_1'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '⬜',
                    payload: {
                        command: '7_8_2'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '⬜',
                    payload: {
                        command: '7_8_3'
                    },
                    color: Keyboard.SECONDARY_COLOR
                })
            ],
            [
                Keyboard.textButton({
                    label: '⬜',
                    payload: {
                        command: '7_8_4'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '⭕',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '⬜',
                    payload: {
                        command: '7_8_6'
                    },
                    color: Keyboard.SECONDARY_COLOR
                })
            ],
            [
                Keyboard.textButton({
                    label: '❌',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '❌',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '⭕',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                })
            ]
        ])
    });
});
hearCommand('7_8_1', async (context) => {
    await context.send({
        message: `ᅠ`,
        keyboard: Keyboard.keyboard([
            [
                Keyboard.textButton({
                    label: '❌',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '⬜',
                    payload: {
                        command: '7_8_1_2'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '⬜',
                    payload: {
                        command: '7_8_1_3'
                    },
                    color: Keyboard.SECONDARY_COLOR
                })
            ],
            [
                Keyboard.textButton({
                    label: '⭕',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '⭕',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '⬜',
                    payload: {
                        command: '7_8_1_6'
                    },
                    color: Keyboard.SECONDARY_COLOR
                })
            ],
            [
                Keyboard.textButton({
                    label: '❌',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '❌',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '⭕',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                })
            ]
        ])
    });
});
hearCommand('7_8_1_2', async (context) => {
    await context.send({
        message: `К сожалению вы проиграли`,
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
                    label: '✅ Попробовать ещё раз',
                    payload: {
                        command: 'начать игру'
                    },
                    color: Keyboard.PRIMARY_COLOR
                })
            ]
        ])
    });
});
hearCommand('7_8_1_3', async (context) => {
    await context.send({
        message: `К сожалению вы проиграли`,
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
                    label: '✅ Попробовать ещё раз',
                    payload: {
                        command: 'начать игру'
                    },
                    color: Keyboard.PRIMARY_COLOR
                })
            ]
        ])
    });
});
hearCommand('7_8_1_6', async (context) => {
    await context.send({
        message: `ᅠ`,
        keyboard: Keyboard.keyboard([
            [
                Keyboard.textButton({
                    label: '❌',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '⭕',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '⬜',
                    payload: {
                        command: '7_8_1_6_3'
                    },
                    color: Keyboard.SECONDARY_COLOR
                })
            ],
            [
                Keyboard.textButton({
                    label: '⭕',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '⭕',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '❌',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                })
            ],
            [
                Keyboard.textButton({
                    label: '❌',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '❌',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '⭕',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                })
            ]
        ])
    });
});
hearCommand('7_8_1_6_3', async (context) => {
    await context.send({
        message: `Игра закончилась ничьёй`,
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
                    label: '✅ Попробовать ещё раз',
                    payload: {
                        command: 'начать игру'
                    },
                    color: Keyboard.PRIMARY_COLOR
                })
            ]
        ])
    });
});
hearCommand('7_8_2', async (context) => {
    await context.send({
        message: `К сожалению вы проиграли`,
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
                    label: '✅ Попробовать ещё раз',
                    payload: {
                        command: 'начать игру'
                    },
                    color: Keyboard.PRIMARY_COLOR
                })
            ]
        ])
    });
});
hearCommand('7_8_3', async (context) => {
    await context.send({
        message: `К сожалению вы проиграли`,
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
                    label: '✅ Попробовать ещё раз',
                    payload: {
                        command: 'начать игру'
                    },
                    color: Keyboard.PRIMARY_COLOR
                })
            ]
        ])
    });
});
hearCommand('7_8_4', async (context) => {
    await context.send({
        message: `К сожалению вы проиграли`,
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
                    label: '✅ Попробовать ещё раз',
                    payload: {
                        command: 'начать игру'
                    },
                    color: Keyboard.PRIMARY_COLOR
                })
            ]
        ])
    });
});
hearCommand('7_8_6', async (context) => {
    await context.send({
        message: `К сожалению вы проиграли`,
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
                    label: '✅ Попробовать ещё раз',
                    payload: {
                        command: 'начать игру'
                    },
                    color: Keyboard.PRIMARY_COLOR
                })
            ]
        ])
    });
});
hearCommand('7_9', async (context) => {
    await context.send({
        message: `ᅠ`,
        keyboard: Keyboard.keyboard([
            [
                Keyboard.textButton({
                    label: '⬜',
                    payload: {
                        command: '7_9_1'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '⬜',
                    payload: {
                        command: '7_9_2'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '⬜',
                    payload: {
                        command: '7_9_3'
                    },
                    color: Keyboard.SECONDARY_COLOR
                })
            ],
            [
                Keyboard.textButton({
                    label: '⬜',
                    payload: {
                        command: '7_9_4'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '⭕',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '⬜',
                    payload: {
                        command: '7_9_6'
                    },
                    color: Keyboard.SECONDARY_COLOR
                })
            ],
            [
                Keyboard.textButton({
                    label: '❌',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '⭕',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '❌',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                })
            ]
        ])
    });
});
hearCommand('7_9_1', async (context) => {
    await context.send({
        message: `К сожалению вы проиграли`,
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
                    label: '✅ Попробовать ещё раз',
                    payload: {
                        command: 'начать игру'
                    },
                    color: Keyboard.PRIMARY_COLOR
                })
            ]
        ])
    });
});
hearCommand('7_9_2', async (context) => {
    await context.send({
        message: `ᅠ`,
        keyboard: Keyboard.keyboard([
            [
                Keyboard.textButton({
                    label: '⭕',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '❌',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '⬜',
                    payload: {
                        command: '7_9_2_3'
                    },
                    color: Keyboard.SECONDARY_COLOR
                })
            ],
            [
                Keyboard.textButton({
                    label: '⬜',
                    payload: {
                        command: '7_9_2_4'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '⭕',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '⬜',
                    payload: {
                        command: '7_9_2_6'
                    },
                    color: Keyboard.SECONDARY_COLOR
                })
            ],
            [
                Keyboard.textButton({
                    label: '❌',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '⭕',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '❌',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                })
            ]
        ])
    });
});
hearCommand('7_9_2_3', async (context) => {
    await context.send({
        message: `ᅠ`,
        keyboard: Keyboard.keyboard([
            [
                Keyboard.textButton({
                    label: '⭕',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '❌',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '❌',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                })
            ],
            [
                Keyboard.textButton({
                    label: '⬜',
                    payload: {
                        command: '7_9_2_3_4'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '⭕',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '⭕',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                })
            ],
            [
                Keyboard.textButton({
                    label: '❌',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '⭕',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '❌',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                })
            ]
        ])
    });
});
hearCommand('7_9_2_3_4', async (context) => {
    await context.send({
        message: `Игра закончилась ничьёй`,
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
                    label: '✅ Попробовать ещё раз',
                    payload: {
                        command: 'начать игру'
                    },
                    color: Keyboard.PRIMARY_COLOR
                })
            ]
        ])
    });
});
hearCommand('7_9_2_4', async (context) => {
    await context.send({
        message: `ᅠ`,
        keyboard: Keyboard.keyboard([
            [
                Keyboard.textButton({
                    label: '⭕',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '❌',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '⭕',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                })
            ],
            [
                Keyboard.textButton({
                    label: '❌',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '⭕',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '⬜',
                    payload: {
                        command: '7_9_2_4_6'
                    },
                    color: Keyboard.SECONDARY_COLOR
                })
            ],
            [
                Keyboard.textButton({
                    label: '❌',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '⭕',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '❌',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                })
            ]
        ])
    });
});
hearCommand('7_9_2_4_6', async (context) => {
    await context.send({
        message: `Игра закончилась ничьёй`,
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
                    label: '✅ Попробовать ещё раз',
                    payload: {
                        command: 'начать игру'
                    },
                    color: Keyboard.PRIMARY_COLOR
                })
            ]
        ])
    });
});
hearCommand('7_9_2_6', async (context) => {
    await context.send({
        message: `ᅠ`,
        keyboard: Keyboard.keyboard([
            [
                Keyboard.textButton({
                    label: '⭕',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '❌',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '⭕',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                })
            ],
            [
                Keyboard.textButton({
                    label: '⬜',
                    payload: {
                        command: '7_9_2_6_4'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '⭕',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '❌',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                })
            ],
            [
                Keyboard.textButton({
                    label: '❌',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '⭕',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '❌',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                })
            ]
        ])
    });
});
hearCommand('7_9_2_6_4', async (context) => {
    await context.send({
        message: `Игра закончилась ничьёй`,
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
                    label: '✅ Попробовать ещё раз',
                    payload: {
                        command: 'начать игру'
                    },
                    color: Keyboard.PRIMARY_COLOR
                })
            ]
        ])
    });
});
hearCommand('7_9_3', async (context) => {
    await context.send({
        message: `К сожалению вы проиграли`,
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
                    label: '✅ Попробовать ещё раз',
                    payload: {
                        command: 'начать игру'
                    },
                    color: Keyboard.PRIMARY_COLOR
                })
            ]
        ])
    });
});
hearCommand('7_9_4', async (context) => {
    await context.send({
        message: `К сожалению вы проиграли`,
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
                    label: '✅ Попробовать ещё раз',
                    payload: {
                        command: 'начать игру'
                    },
                    color: Keyboard.PRIMARY_COLOR
                })
            ]
        ])
    });
});
hearCommand('7_9_6', async (context) => {
    await context.send({
        message: `К сожалению вы проиграли`,
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
                    label: '✅ Попробовать ещё раз',
                    payload: {
                        command: 'начать игру'
                    },
                    color: Keyboard.PRIMARY_COLOR
                })
            ]
        ])
    });
});
hearCommand('8', async (context) => {
    await context.send({
        message: `ᅠ`,
        keyboard: Keyboard.keyboard([
            [
                Keyboard.textButton({
                    label: '⬜',
                    payload: {
                        command: '8_1'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '⬜',
                    payload: {
                        command: '8_2'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '⬜',
                    payload: {
                        command: '8_3'
                    },
                    color: Keyboard.SECONDARY_COLOR
                })
            ],
            [
                Keyboard.textButton({
                    label: '⬜',
                    payload: {
                        command: '8_4'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '⭕',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '⬜',
                    payload: {
                        command: '8_6'
                    },
                    color: Keyboard.SECONDARY_COLOR
                })
            ],
            [
                Keyboard.textButton({
                    label: '⬜',
                    payload: {
                        command: '8_7'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '❌',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '⬜',
                    payload: {
                        command: '8_9'
                    },
                    color: Keyboard.SECONDARY_COLOR
                })
            ]
        ])
    });
});
hearCommand('8_1', async (context) => {
    await context.send({
        message: `ᅠ`,
        keyboard: Keyboard.keyboard([
            [
                Keyboard.textButton({
                    label: '❌',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '⬜',
                    payload: {
                        command: '8_1_2'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '⬜',
                    payload: {
                        command: '8_1_3'
                    },
                    color: Keyboard.SECONDARY_COLOR
                })
            ],
            [
                Keyboard.textButton({
                    label: '⬜',
                    payload: {
                        command: '8_1_4'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '⭕',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '⬜',
                    payload: {
                        command: '8_1_6'
                    },
                    color: Keyboard.SECONDARY_COLOR
                })
            ],
            [
                Keyboard.textButton({
                    label: '⭕',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '❌',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '⬜',
                    payload: {
                        command: '8_1_9'
                    },
                    color: Keyboard.SECONDARY_COLOR
                })
            ]
        ])
    });
});
hearCommand('8_1_2', async (context) => {
    await context.send({
        message: `К сожалению вы проиграли`,
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
                    label: '✅ Попробовать ещё раз',
                    payload: {
                        command: 'начать игру'
                    },
                    color: Keyboard.PRIMARY_COLOR
                })
            ]
        ])
    });
});
hearCommand('8_1_3', async (context) => {
    await context.send({
        message: `ᅠ`,
        keyboard: Keyboard.keyboard([
            [
                Keyboard.textButton({
                    label: '❌',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '⬜',
                    payload: {
                        command: '8_1_3_2'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '❌',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                })
            ],
            [
                Keyboard.textButton({
                    label: '⭕',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '⭕',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '⬜',
                    payload: {
                        command: '8_1_3_6'
                    },
                    color: Keyboard.SECONDARY_COLOR
                })
            ],
            [
                Keyboard.textButton({
                    label: '⭕',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '❌',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '⬜',
                    payload: {
                        command: '8_1_3_9'
                    },
                    color: Keyboard.SECONDARY_COLOR
                })
            ]
        ])
    });
});
hearCommand('8_1_3_2', async (context) => {
    let get_money_sql = "SELECT money FROM accounts WHERE vk_id = ?";
    con.query(get_money_sql, [context.senderId], function(err, result){
        let new_user_balance_sql = "UPDATE accounts SET money = ? WHERE vk_id = ?";
        con.query(new_user_balance_sql, [result[0].money + 50, context.senderId]);
    });
    await context.send(
    {
        message: `Поздравляем! Вы выиграли 50 рублей.`,
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
                    label: '✅ Попробовать ещё раз',
                    payload: {
                        command: 'начать игру'
                    },
                    color: Keyboard.PRIMARY_COLOR
                })
            ]
        ])
    });
});
hearCommand('8_1_3_6', async (context) => {
    await context.send({
        message: `ᅠ`,
        keyboard: Keyboard.keyboard([
            [
                Keyboard.textButton({
                    label: '❌',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '⭕',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '❌',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                })
            ],
            [
                Keyboard.textButton({
                    label: '⭕',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '⭕',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '❌',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                })
            ],
            [
                Keyboard.textButton({
                    label: '⭕',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '❌',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '⬜',
                    payload: {
                        command: '8_1_3_6_9'
                    },
                    color: Keyboard.SECONDARY_COLOR
                })
            ]
        ])
    });
});
hearCommand('8_1_3_6_9', async (context) => {
    let get_money_sql = "SELECT money FROM accounts WHERE vk_id = ?";
    con.query(get_money_sql, [context.senderId], function(err, result){
        let new_user_balance_sql = "UPDATE accounts SET money = ? WHERE vk_id = ?";
        con.query(new_user_balance_sql, [result[0].money + 50, context.senderId]);
    });
    await context.send(
    {
        message: `Поздравляем! Вы выиграли 50 рублей.`,
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
                    label: '✅ Попробовать ещё раз',
                    payload: {
                        command: 'начать игру'
                    },
                    color: Keyboard.PRIMARY_COLOR
                })
            ]
        ])
    });
});
hearCommand('8_1_3_9', async (context) => {
    await context.send({
        message: `К сожалению вы проиграли`,
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
                    label: '✅ Попробовать ещё раз',
                    payload: {
                        command: 'начать игру'
                    },
                    color: Keyboard.PRIMARY_COLOR
                })
            ]
        ])
    });
});
hearCommand('8_1_4', async (context) => {
    await context.send({
        message: `К сожалению вы проиграли`,
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
                    label: '✅ Попробовать ещё раз',
                    payload: {
                        command: 'начать игру'
                    },
                    color: Keyboard.PRIMARY_COLOR
                })
            ]
        ])
    });
});
hearCommand('8_1_6', async (context) => {
    await context.send({
        message: `К сожалению вы проиграли`,
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
                    label: '✅ Попробовать ещё раз',
                    payload: {
                        command: 'начать игру'
                    },
                    color: Keyboard.PRIMARY_COLOR
                })
            ]
        ])
    });
});
hearCommand('8_1_9', async (context) => {
    await context.send({
        message: `К сожалению вы проиграли`,
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
                    label: '✅ Попробовать ещё раз',
                    payload: {
                        command: 'начать игру'
                    },
                    color: Keyboard.PRIMARY_COLOR
                })
            ]
        ])
    });
});
hearCommand('8_2', async (context) => {
    await context.send({
        message: `ᅠ`,
        keyboard: Keyboard.keyboard([
            [
                Keyboard.textButton({
                    label: '⬜',
                    payload: {
                        command: '8_2_1'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '❌',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '⬜',
                    payload: {
                        command: '8_2_3'
                    },
                    color: Keyboard.SECONDARY_COLOR
                })
            ],
            [
                Keyboard.textButton({
                    label: '⬜',
                    payload: {
                        command: '8_2_4'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '⭕',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '⬜',
                    payload: {
                        command: '8_2_6'
                    },
                    color: Keyboard.SECONDARY_COLOR
                })
            ],
            [
                Keyboard.textButton({
                    label: '⭕',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '❌',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '⬜',
                    payload: {
                        command: '8_2_9'
                    },
                    color: Keyboard.SECONDARY_COLOR
                })
            ]
        ])
    });
});
hearCommand('8_2_1', async (context) => {
    await context.send({
        message: `К сожалению вы проиграли`,
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
                    label: '✅ Попробовать ещё раз',
                    payload: {
                        command: 'начать игру'
                    },
                    color: Keyboard.PRIMARY_COLOR
                })
            ]
        ])
    });
});
hearCommand('8_2_3', async (context) => {
    await context.send({
        message: `ᅠ`,
        keyboard: Keyboard.keyboard([
            [
                Keyboard.textButton({
                    label: '⭕',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '❌',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '❌',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                })
            ],
            [
                Keyboard.textButton({
                    label: '⬜',
                    payload: {
                        command: '8_2_3_4'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '⭕',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '⬜',
                    payload: {
                        command: '8_2_3_6'
                    },
                    color: Keyboard.SECONDARY_COLOR
                })
            ],
            [
                Keyboard.textButton({
                    label: '⭕',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '❌',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '⬜',
                    payload: {
                        command: '8_2_3_9'
                    },
                    color: Keyboard.SECONDARY_COLOR
                })
            ]
        ])
    });
});
hearCommand('8_2_3_4', async (context) => {
    await context.send({
        message: `К сожалению вы проиграли`,
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
                    label: '✅ Попробовать ещё раз',
                    payload: {
                        command: 'начать игру'
                    },
                    color: Keyboard.PRIMARY_COLOR
                })
            ]
        ])
    });
});
hearCommand('8_2_3_6', async (context) => {
    await context.send({
        message: `К сожалению вы проиграли`,
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
                    label: '✅ Попробовать ещё раз',
                    payload: {
                        command: 'начать игру'
                    },
                    color: Keyboard.PRIMARY_COLOR
                })
            ]
        ])
    });
});
hearCommand('8_2_3_9', async (context) => {
    await context.send({
        message: `К сожалению вы проиграли`,
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
                    label: '✅ Попробовать ещё раз',
                    payload: {
                        command: 'начать игру'
                    },
                    color: Keyboard.PRIMARY_COLOR
                })
            ]
        ])
    });
});
hearCommand('8_2_4', async (context) => {
    await context.send({
        message: `К сожалению вы проиграли`,
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
                    label: '✅ Попробовать ещё раз',
                    payload: {
                        command: 'начать игру'
                    },
                    color: Keyboard.PRIMARY_COLOR
                })
            ]
        ])
    });
});
hearCommand('8_2_6', async (context) => {
    await context.send({
        message: `К сожалению вы проиграли`,
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
                    label: '✅ Попробовать ещё раз',
                    payload: {
                        command: 'начать игру'
                    },
                    color: Keyboard.PRIMARY_COLOR
                })
            ]
        ])
    });
});
hearCommand('8_2_9', async (context) => {
    await context.send({
        message: `К сожалению вы проиграли`,
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
                    label: '✅ Попробовать ещё раз',
                    payload: {
                        command: 'начать игру'
                    },
                    color: Keyboard.PRIMARY_COLOR
                })
            ]
        ])
    });
});
hearCommand('8_3', async (context) => {
    await context.send({
        message: `ᅠ`,
        keyboard: Keyboard.keyboard([
            [
                Keyboard.textButton({
                    label: '⭕',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '⬜',
                    payload: {
                        command: '8_3_2'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '❌',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                })
            ],
            [
                Keyboard.textButton({
                    label: '⬜',
                    payload: {
                        command: '8_3_4'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '⭕',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '⬜',
                    payload: {
                        command: '8_3_6'
                    },
                    color: Keyboard.SECONDARY_COLOR
                })
            ],
            [
                Keyboard.textButton({
                    label: '⬜',
                    payload: {
                        command: '8_3_7'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '❌',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '⬜',
                    payload: {
                        command: '8_3_9'
                    },
                    color: Keyboard.SECONDARY_COLOR
                })
            ]
        ])
    });
});
hearCommand('8_3_2', async (context) => {
    await context.send({
        message: `К сожалению вы проиграли`,
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
                    label: '✅ Попробовать ещё раз',
                    payload: {
                        command: 'начать игру'
                    },
                    color: Keyboard.PRIMARY_COLOR
                })
            ]
        ])
    });
});
hearCommand('8_3_4', async (context) => {
    await context.send({
        message: `К сожалению вы проиграли`,
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
                    label: '✅ Попробовать ещё раз',
                    payload: {
                        command: 'начать игру'
                    },
                    color: Keyboard.PRIMARY_COLOR
                })
            ]
        ])
    });
});
hearCommand('8_3_6', async (context) => {
    await context.send({
        message: `К сожалению вы проиграли`,
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
                    label: '✅ Попробовать ещё раз',
                    payload: {
                        command: 'начать игру'
                    },
                    color: Keyboard.PRIMARY_COLOR
                })
            ]
        ])
    });
});
hearCommand('8_3_7', async (context) => {
    await context.send({
        message: `К сожалению вы проиграли`,
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
                    label: '✅ Попробовать ещё раз',
                    payload: {
                        command: 'начать игру'
                    },
                    color: Keyboard.PRIMARY_COLOR
                })
            ]
        ])
    });
});
hearCommand('8_3_9', async (context) => {
    await context.send({
        message: `ᅠ`,
        keyboard: Keyboard.keyboard([
            [
                Keyboard.textButton({
                    label: '⭕',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '⬜',
                    payload: {
                        command: '8_3_9_2'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '❌',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                })
            ],
            [
                Keyboard.textButton({
                    label: '⬜',
                    payload: {
                        command: '8_3_9_4'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '⭕',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '⬜',
                    payload: {
                        command: '8_3_9_6'
                    },
                    color: Keyboard.SECONDARY_COLOR
                })
            ],
            [
                Keyboard.textButton({
                    label: '⭕',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '❌',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '❌',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                })
            ]
        ])
    });
});
hearCommand('8_3_9_2', async (context) => {
    await context.send({
        message: `К сожалению вы проиграли`,
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
                    label: '✅ Попробовать ещё раз',
                    payload: {
                        command: 'начать игру'
                    },
                    color: Keyboard.PRIMARY_COLOR
                })
            ]
        ])
    });
});
hearCommand('8_3_9_4', async (context) => {
    await context.send({
        message: `ᅠ`,
        keyboard: Keyboard.keyboard([
            [
                Keyboard.textButton({
                    label: '⭕',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '⬜',
                    payload: {
                        command: '8_3_9_4_2'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '❌',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                })
            ],
            [
                Keyboard.textButton({
                    label: '❌',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '⭕',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '⭕',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                })
            ],
            [
                Keyboard.textButton({
                    label: '⭕',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '❌',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '❌',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                })
            ]
        ])
    });
});
hearCommand('8_3_9_4_2', async (context) => {
    await context.send({
        message: `Игра закончилась ничьёй`,
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
                    label: '✅ Попробовать ещё раз',
                    payload: {
                        command: 'начать игру'
                    },
                    color: Keyboard.PRIMARY_COLOR
                })
            ]
        ])
    });
});
hearCommand('8_3_9_6', async (context) => {
    await context.send({
        message: `К сожалению вы проиграли`,
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
                    label: '✅ Попробовать ещё раз',
                    payload: {
                        command: 'начать игру'
                    },
                    color: Keyboard.PRIMARY_COLOR
                })
            ]
        ])
    });
});
hearCommand('8_4', async (context) => {
    await context.send({
        message: `ᅠ`,
        keyboard: Keyboard.keyboard([
            [
                Keyboard.textButton({
                    label: '⬜',
                    payload: {
                        command: '8_4_1'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '⬜',
                    payload: {
                        command: '8_4_2'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '⬜',
                    payload: {
                        command: '8_4_3'
                    },
                    color: Keyboard.SECONDARY_COLOR
                })
            ],
            [
                Keyboard.textButton({
                    label: '❌',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '⭕',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '⬜',
                    payload: {
                        command: '8_4_6'
                    },
                    color: Keyboard.SECONDARY_COLOR
                })
            ],
            [
                Keyboard.textButton({
                    label: '⭕',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '❌',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '⬜',
                    payload: {
                        command: '8_4_9'
                    },
                    color: Keyboard.SECONDARY_COLOR
                })
            ]
        ])
    });
});
hearCommand('8_4_1', async (context) => {
    await context.send({
        message: `К сожалению вы проиграли`,
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
                    label: '✅ Попробовать ещё раз',
                    payload: {
                        command: 'начать игру'
                    },
                    color: Keyboard.PRIMARY_COLOR
                })
            ]
        ])
    });
});
hearCommand('8_4_2', async (context) => {
    await context.send({
        message: `К сожалению вы проиграли`,
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
                    label: '✅ Попробовать ещё раз',
                    payload: {
                        command: 'начать игру'
                    },
                    color: Keyboard.PRIMARY_COLOR
                })
            ]
        ])
    });
});
hearCommand('8_4_3', async (context) => {
    await context.send({
        message: `ᅠ`,
        keyboard: Keyboard.keyboard([
            [
                Keyboard.textButton({
                    label: '⭕',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '⬜',
                    payload: {
                        command: '8_4_3_2'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '❌',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                })
            ],
            [
                Keyboard.textButton({
                    label: '❌',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '⭕',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '⬜',
                    payload: {
                        command: '8_4_3_6'
                    },
                    color: Keyboard.SECONDARY_COLOR
                })
            ],
            [
                Keyboard.textButton({
                    label: '⭕',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '❌',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '⬜',
                    payload: {
                        command: '8_4_3_9'
                    },
                    color: Keyboard.SECONDARY_COLOR
                })
            ]
        ])
    });
});
hearCommand('8_4_3_2', async (context) => {
    await context.send({
        message: `К сожалению вы проиграли`,
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
                    label: '✅ Попробовать ещё раз',
                    payload: {
                        command: 'начать игру'
                    },
                    color: Keyboard.PRIMARY_COLOR
                })
            ]
        ])
    });
});
hearCommand('8_4_3_6', async (context) => {
    await context.send({
        message: `К сожалению вы проиграли`,
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
                    label: '✅ Попробовать ещё раз',
                    payload: {
                        command: 'начать игру'
                    },
                    color: Keyboard.PRIMARY_COLOR
                })
            ]
        ])
    });
});
hearCommand('8_4_3_9', async (context) => {
    await context.send({
        message: `ᅠ`,
        keyboard: Keyboard.keyboard([
            [
                Keyboard.textButton({
                    label: '⭕',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '⬜',
                    payload: {
                        command: '8_4_3_9_2'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '❌',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                })
            ],
            [
                Keyboard.textButton({
                    label: '❌',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '⭕',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '⭕',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                })
            ],
            [
                Keyboard.textButton({
                    label: '⭕',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '❌',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '❌',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                })
            ]
        ])
    });
});
hearCommand('8_4_3_9_2', async (context) => {
    await context.send({
        message: `Игра закончилась ничьёй`,
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
                    label: '✅ Попробовать ещё раз',
                    payload: {
                        command: 'начать игру'
                    },
                    color: Keyboard.PRIMARY_COLOR
                })
            ]
        ])
    });
});
hearCommand('8_4_6', async (context) => {
    await context.send({
        message: `К сожалению вы проиграли`,
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
                    label: '✅ Попробовать ещё раз',
                    payload: {
                        command: 'начать игру'
                    },
                    color: Keyboard.PRIMARY_COLOR
                })
            ]
        ])
    });
});
hearCommand('8_4_9', async (context) => {
    await context.send({
        message: `К сожалению вы проиграли`,
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
                    label: '✅ Попробовать ещё раз',
                    payload: {
                        command: 'начать игру'
                    },
                    color: Keyboard.PRIMARY_COLOR
                })
            ]
        ])
    });
});
hearCommand('8_6', async (context) => {
    await context.send({
        message: `ᅠ`,
        keyboard: Keyboard.keyboard([
            [
                Keyboard.textButton({
                    label: '⬜',
                    payload: {
                        command: '8_6_1'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '⬜',
                    payload: {
                        command: '8_6_2'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '⬜',
                    payload: {
                        command: '8_6_3'
                    },
                    color: Keyboard.SECONDARY_COLOR
                })
            ],
            [
                Keyboard.textButton({
                    label: '⬜',
                    payload: {
                        command: '8_6_4'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '⭕',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '❌',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                })
            ],
            [
                Keyboard.textButton({
                    label: '⬜',
                    payload: {
                        command: '8_6_7'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '❌',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '⭕',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                })
            ]
        ])
    });
});
hearCommand('8_6_1', async (context) => {
    await context.send({
        message: `ᅠ`,
        keyboard: Keyboard.keyboard([
            [
                Keyboard.textButton({
                    label: '❌',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '⭕',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '⬜',
                    payload: {
                        command: '8_6_1_3'
                    },
                    color: Keyboard.SECONDARY_COLOR
                })
            ],
            [
                Keyboard.textButton({
                    label: '⬜',
                    payload: {
                        command: '8_6_1_4'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '⭕',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '❌',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                })
            ],
            [
                Keyboard.textButton({
                    label: '⬜',
                    payload: {
                        command: '8_6_1_7'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '❌',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '⭕',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                })
            ]
        ])
    });
});
hearCommand('8_6_1_3', async (context) => {
    await context.send({
        message: `ᅠ`,
        keyboard: Keyboard.keyboard([
            [
                Keyboard.textButton({
                    label: '❌',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '⭕',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '❌',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                })
            ],
            [
                Keyboard.textButton({
                    label: '⭕',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '⭕',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '❌',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                })
            ],
            [
                Keyboard.textButton({
                    label: '⬜',
                    payload: {
                        command: '8_6_1_3_7'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '❌',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '⭕',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                })
            ]
        ])
    });
});
hearCommand('8_6_1_3_7', async (context) => {
    await context.send({
        message: `Игра закончилась ничьёй`,
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
                    label: '✅ Попробовать ещё раз',
                    payload: {
                        command: 'начать игру'
                    },
                    color: Keyboard.PRIMARY_COLOR
                })
            ]
        ])
    });
});
hearCommand('8_6_1_4', async (context) => {
    await context.send({
        message: `ᅠ`,
        keyboard: Keyboard.keyboard([
            [
                Keyboard.textButton({
                    label: '❌',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '⭕',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '⬜',
                    payload: {
                        command: '8_6_1_4_3'
                    },
                    color: Keyboard.SECONDARY_COLOR
                })
            ],
            [
                Keyboard.textButton({
                    label: '❌',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '⭕',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '❌',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                })
            ],
            [
                Keyboard.textButton({
                    label: '⭕',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '❌',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '⭕',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                })
            ]
        ])
    });
});
hearCommand('8_6_1_4_3', async (context) => {
    await context.send({
        message: `Игра закончилась ничьёй`,
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
                    label: '✅ Попробовать ещё раз',
                    payload: {
                        command: 'начать игру'
                    },
                    color: Keyboard.PRIMARY_COLOR
                })
            ]
        ])
    });
});
hearCommand('8_6_1_7', async (context) => {
    await context.send({
        message: `ᅠ`,
        keyboard: Keyboard.keyboard([
            [
                Keyboard.textButton({
                    label: '❌',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '⭕',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '⬜',
                    payload: {
                        command: '8_6_1_7_3'
                    },
                    color: Keyboard.SECONDARY_COLOR
                })
            ],
            [
                Keyboard.textButton({
                    label: '⭕',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '⭕',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '❌',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                })
            ],
            [
                Keyboard.textButton({
                    label: '❌',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '❌',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '⭕',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                })
            ]
        ])
    });
});
hearCommand('8_6_1_7_3', async (context) => {
    await context.send({
        message: `Игра закончилась ничьёй`,
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
                    label: '✅ Попробовать ещё раз',
                    payload: {
                        command: 'начать игру'
                    },
                    color: Keyboard.PRIMARY_COLOR
                })
            ]
        ])
    });
});
hearCommand('8_6_2', async (context) => {
    await context.send({
        message: `К сожалению вы проиграли`,
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
                    label: '✅ Попробовать ещё раз',
                    payload: {
                        command: 'начать игру'
                    },
                    color: Keyboard.PRIMARY_COLOR
                })
            ]
        ])
    });
});
hearCommand('8_6_3', async (context) => {
    await context.send({
        message: `К сожалению вы проиграли`,
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
                    label: '✅ Попробовать ещё раз',
                    payload: {
                        command: 'начать игру'
                    },
                    color: Keyboard.PRIMARY_COLOR
                })
            ]
        ])
    });
});
hearCommand('8_6_4', async (context) => {
    await context.send({
        message: `К сожалению вы проиграли`,
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
                    label: '✅ Попробовать ещё раз',
                    payload: {
                        command: 'начать игру'
                    },
                    color: Keyboard.PRIMARY_COLOR
                })
            ]
        ])
    });
});
hearCommand('8_6_7', async (context) => {
    await context.send({
        message: `К сожалению вы проиграли`,
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
                    label: '✅ Попробовать ещё раз',
                    payload: {
                        command: 'начать игру'
                    },
                    color: Keyboard.PRIMARY_COLOR
                })
            ]
        ])
    });
});
hearCommand('8_7', async (context) => {
    await context.send({
        message: `ᅠ`,
        keyboard: Keyboard.keyboard([
            [
                Keyboard.textButton({
                    label: '⬜',
                    payload: {
                        command: '8_7_1'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '⬜',
                    payload: {
                        command: '8_7_2'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '⬜',
                    payload: {
                        command: '8_7_3'
                    },
                    color: Keyboard.SECONDARY_COLOR
                })
            ],
            [
                Keyboard.textButton({
                    label: '⬜',
                    payload: {
                        command: '8_7_4'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '⭕',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '⬜',
                    payload: {
                        command: '8_7_6'
                    },
                    color: Keyboard.SECONDARY_COLOR
                })
            ],
            [
                Keyboard.textButton({
                    label: '❌',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '❌',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '⭕',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                })
            ]
        ])
    });
});
hearCommand('8_7_1', async (context) => {
    await context.send({
        message: `ᅠ`,
        keyboard: Keyboard.keyboard([
            [
                Keyboard.textButton({
                    label: '❌',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '⬜',
                    payload: {
                        command: '8_7_1_2'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '⬜',
                    payload: {
                        command: '8_7_1_3'
                    },
                    color: Keyboard.SECONDARY_COLOR
                })
            ],
            [
                Keyboard.textButton({
                    label: '⭕',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '⭕',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '⬜',
                    payload: {
                        command: '8_7_1_6'
                    },
                    color: Keyboard.SECONDARY_COLOR
                })
            ],
            [
                Keyboard.textButton({
                    label: '❌',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '❌',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '⭕',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                })
            ]
        ])
    });
});
hearCommand('8_7_1_2', async (context) => {
    await context.send({
        message: `К сожалению вы проиграли`,
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
                    label: '✅ Попробовать ещё раз',
                    payload: {
                        command: 'начать игру'
                    },
                    color: Keyboard.PRIMARY_COLOR
                })
            ]
        ])
    });
});
hearCommand('8_7_1_3', async (context) => {
    await context.send({
        message: `К сожалению вы проиграли`,
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
                    label: '✅ Попробовать ещё раз',
                    payload: {
                        command: 'начать игру'
                    },
                    color: Keyboard.PRIMARY_COLOR
                })
            ]
        ])
    });
});
hearCommand('8_7_1_6', async (context) => {
    await context.send({
        message: `ᅠ`,
        keyboard: Keyboard.keyboard([
            [
                Keyboard.textButton({
                    label: '❌',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '⭕',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '⬜',
                    payload: {
                        command: '8_7_1_6_3'
                    },
                    color: Keyboard.SECONDARY_COLOR
                })
            ],
            [
                Keyboard.textButton({
                    label: '⭕',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '⭕',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '❌',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                })
            ],
            [
                Keyboard.textButton({
                    label: '❌',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '❌',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '⭕',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                })
            ]
        ])
    });
});
hearCommand('8_7_1_6_3', async (context) => {
    await context.send({
        message: `Игра закончилась ничьёй`,
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
                    label: '✅ Попробовать ещё раз',
                    payload: {
                        command: 'начать игру'
                    },
                    color: Keyboard.PRIMARY_COLOR
                })
            ]
        ])
    });
});
hearCommand('8_7_2', async (context) => {
    await context.send({
        message: `К сожалению вы проиграли`,
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
                    label: '✅ Попробовать ещё раз',
                    payload: {
                        command: 'начать игру'
                    },
                    color: Keyboard.PRIMARY_COLOR
                })
            ]
        ])
    });
});
hearCommand('8_7_3', async (context) => {
    await context.send({
        message: `К сожалению вы проиграли`,
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
                    label: '✅ Попробовать ещё раз',
                    payload: {
                        command: 'начать игру'
                    },
                    color: Keyboard.PRIMARY_COLOR
                })
            ]
        ])
    });
});
hearCommand('8_7_4', async (context) => {
    await context.send({
        message: `К сожалению вы проиграли`,
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
                    label: '✅ Попробовать ещё раз',
                    payload: {
                        command: 'начать игру'
                    },
                    color: Keyboard.PRIMARY_COLOR
                })
            ]
        ])
    });
});
hearCommand('8_7_6', async (context) => {
    await context.send({
        message: `К сожалению вы проиграли`,
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
                    label: '✅ Попробовать ещё раз',
                    payload: {
                        command: 'начать игру'
                    },
                    color: Keyboard.PRIMARY_COLOR
                })
            ]
        ])
    });
});
hearCommand('8_9', async (context) => {
    await context.send({
        message: `ᅠ`,
        keyboard: Keyboard.keyboard([
            [
                Keyboard.textButton({
                    label: '⬜',
                    payload: {
                        command: '8_9_1'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '⬜',
                    payload: {
                        command: '8_9_2'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '⬜',
                    payload: {
                        command: '8_9_3'
                    },
                    color: Keyboard.SECONDARY_COLOR
                })
            ],
            [
                Keyboard.textButton({
                    label: '⬜',
                    payload: {
                        command: '8_9_4'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '⭕',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '⬜',
                    payload: {
                        command: '8_9_6'
                    },
                    color: Keyboard.SECONDARY_COLOR
                })
            ],
            [
                Keyboard.textButton({
                    label: '⭕',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '❌',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '❌',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                })
            ]
        ])
    });
});
hearCommand('8_9_1', async (context) => {
    await context.send({
        message: `К сожалению вы проиграли`,
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
                    label: '✅ Попробовать ещё раз',
                    payload: {
                        command: 'начать игру'
                    },
                    color: Keyboard.PRIMARY_COLOR
                })
            ]
        ])
    });
});
hearCommand('8_9_2', async (context) => {
    await context.send({
        message: `К сожалению вы проиграли`,
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
                    label: '✅ Попробовать ещё раз',
                    payload: {
                        command: 'начать игру'
                    },
                    color: Keyboard.PRIMARY_COLOR
                })
            ]
        ])
    });
});
hearCommand('8_9_3', async (context) => {
    await context.send({
        message: `ᅠ`,
        keyboard: Keyboard.keyboard([
            [
                Keyboard.textButton({
                    label: '⬜',
                    payload: {
                        command: '8_9_3_1'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '⬜',
                    payload: {
                        command: '8_9_3_2'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '❌',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                })
            ],
            [
                Keyboard.textButton({
                    label: '⬜',
                    payload: {
                        command: '8_9_3_4'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '⭕',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '⭕',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                })
            ],
            [
                Keyboard.textButton({
                    label: '⭕',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '❌',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '❌',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                })
            ]
        ])
    });
});
hearCommand('8_9_3_1', async (context) => {
    await context.send({
        message: `К сожалению вы проиграли`,
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
                    label: '✅ Попробовать ещё раз',
                    payload: {
                        command: 'начать игру'
                    },
                    color: Keyboard.PRIMARY_COLOR
                })
            ]
        ])
    });
});
hearCommand('8_9_3_2', async (context) => {
    await context.send({
        message: `К сожалению вы проиграли`,
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
                    label: '✅ Попробовать ещё раз',
                    payload: {
                        command: 'начать игру'
                    },
                    color: Keyboard.PRIMARY_COLOR
                })
            ]
        ])
    });
});
hearCommand('8_9_3_4', async (context) => {
    await context.send({
        message: `ᅠ`,
        keyboard: Keyboard.keyboard([
            [
                Keyboard.textButton({
                    label: '⭕',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '⬜',
                    payload: {
                        command: '8_9_3_4_2'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '❌',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                })
            ],
            [
                Keyboard.textButton({
                    label: '❌',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '⭕',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '⭕',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                })
            ],
            [
                Keyboard.textButton({
                    label: '⭕',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '❌',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '❌',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                })
            ]
        ])
    });
});
hearCommand('8_9_3_4_2', async (context) => {
    await context.send({
        message: `Игра закончилась ничьёй`,
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
                    label: '✅ Попробовать ещё раз',
                    payload: {
                        command: 'начать игру'
                    },
                    color: Keyboard.PRIMARY_COLOR
                })
            ]
        ])
    });
});
hearCommand('8_9_4', async (context) => {
    await context.send({
        message: `Игра закончилась ничьёй`,
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
                    label: '✅ Попробовать ещё раз',
                    payload: {
                        command: 'начать игру'
                    },
                    color: Keyboard.PRIMARY_COLOR
                })
            ]
        ])
    });
});
hearCommand('8_9_6', async (context) => {
    await context.send({
        message: `Игра закончилась ничьёй`,
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
                    label: '✅ Попробовать ещё раз',
                    payload: {
                        command: 'начать игру'
                    },
                    color: Keyboard.PRIMARY_COLOR
                })
            ]
        ])
    });
});
hearCommand('9', async (context) => {
    await context.send({
        message: `ᅠ`,
        keyboard: Keyboard.keyboard([
            [
                Keyboard.textButton({
                    label: '⬜',
                    payload: {
                        command: '9_1'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '⬜',
                    payload: {
                        command: '9_2'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '⬜',
                    payload: {
                        command: '9_3'
                    },
                    color: Keyboard.SECONDARY_COLOR
                })
            ],
            [
                Keyboard.textButton({
                    label: '⬜',
                    payload: {
                        command: '9_4'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '⭕',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '⬜',
                    payload: {
                        command: '9_6'
                    },
                    color: Keyboard.SECONDARY_COLOR
                })
            ],
            [
                Keyboard.textButton({
                    label: '⬜',
                    payload: {
                        command: '9_7'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '⬜',
                    payload: {
                        command: '9_8'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '❌',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                })
            ]
        ])
    });
});
hearCommand('9_1', async (context) => {
    await context.send({
        message: `ᅠ`,
        keyboard: Keyboard.keyboard([
            [
                Keyboard.textButton({
                    label: '❌',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '⭕',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '⬜',
                    payload: {
                        command: '9_1_3'
                    },
                    color: Keyboard.SECONDARY_COLOR
                })
            ],
            [
                Keyboard.textButton({
                    label: '⬜',
                    payload: {
                        command: '9_1_4'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '⭕',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '⬜',
                    payload: {
                        command: '9_1_6'
                    },
                    color: Keyboard.SECONDARY_COLOR
                })
            ],
            [
                Keyboard.textButton({
                    label: '⬜',
                    payload: {
                        command: '9_1_7'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '⬜',
                    payload: {
                        command: '9_1_8'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '❌',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                })
            ]
        ])
    });
});
hearCommand('9_1_3', async (context) => {
    await context.send({
        message: `К сожалению вы проиграли`,
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
                    label: '✅ Попробовать ещё раз',
                    payload: {
                        command: 'начать игру'
                    },
                    color: Keyboard.PRIMARY_COLOR
                })
            ]
        ])
    });
});
hearCommand('9_1_4', async (context) => {
    await context.send({
        message: `К сожалению вы проиграли`,
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
                    label: '✅ Попробовать ещё раз',
                    payload: {
                        command: 'начать игру'
                    },
                    color: Keyboard.PRIMARY_COLOR
                })
            ]
        ])
    });
});
hearCommand('9_1_6', async (context) => {
    await context.send({
        message: `К сожалению вы проиграли`,
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
                    label: '✅ Попробовать ещё раз',
                    payload: {
                        command: 'начать игру'
                    },
                    color: Keyboard.PRIMARY_COLOR
                })
            ]
        ])
    });
});
hearCommand('9_1_7', async (context) => {
    await context.send({
        message: `К сожалению вы проиграли`,
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
                    label: '✅ Попробовать ещё раз',
                    payload: {
                        command: 'начать игру'
                    },
                    color: Keyboard.PRIMARY_COLOR
                })
            ]
        ])
    });
});
hearCommand('9_1_8', async (context) => {
    await context.send({
        message: `ᅠ`,
        keyboard: Keyboard.keyboard([
            [
                Keyboard.textButton({
                    label: '❌',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '⭕',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '⬜',
                    payload: {
                        command: '9_1_8_3'
                    },
                    color: Keyboard.SECONDARY_COLOR
                })
            ],
            [
                Keyboard.textButton({
                    label: '⬜',
                    payload: {
                        command: '9_1_8_4'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '⭕',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '⬜',
                    payload: {
                        command: '9_1_8_6'
                    },
                    color: Keyboard.SECONDARY_COLOR
                })
            ],
            [
                Keyboard.textButton({
                    label: '⭕',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '❌',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '❌',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                })
            ]
        ])
    });
});
hearCommand('9_1_8_3', async (context) => {
    await context.send({
        message: `ᅠ`,
        keyboard: Keyboard.keyboard([
            [
                Keyboard.textButton({
                    label: '❌',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '⭕',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '❌',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                })
            ],
            [
                Keyboard.textButton({
                    label: '⬜',
                    payload: {
                        command: '9_1_8_3_4'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '⭕',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '⭕',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                })
            ],
            [
                Keyboard.textButton({
                    label: '⭕',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '❌',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '❌',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                })
            ]
        ])
    });
});
hearCommand('9_1_8_3_4', async (context) => {
    await context.send({
        message: `Игра закончилась ничьёй`,
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
                    label: '✅ Попробовать ещё раз',
                    payload: {
                        command: 'начать игру'
                    },
                    color: Keyboard.PRIMARY_COLOR
                })
            ]
        ])
    });
});
hearCommand('9_1_8_4', async (context) => {
    await context.send({
        message: `К сожалению вы проиграли`,
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
                    label: '✅ Попробовать ещё раз',
                    payload: {
                        command: 'начать игру'
                    },
                    color: Keyboard.PRIMARY_COLOR
                })
            ]
        ])
    });
});
hearCommand('9_1_8_6', async (context) => {
    await context.send({
        message: `К сожалению вы проиграли`,
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
                    label: '✅ Попробовать ещё раз',
                    payload: {
                        command: 'начать игру'
                    },
                    color: Keyboard.PRIMARY_COLOR
                })
            ]
        ])
    });
});
hearCommand('9_2', async (context) => {
    await context.send({
        message: `ᅠ`,
        keyboard: Keyboard.keyboard([
            [
                Keyboard.textButton({
                    label: '⬜',
                    payload: {
                        command: '9_2_1'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '❌',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '⭕',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                })
            ],
            [
                Keyboard.textButton({
                    label: '⬜',
                    payload: {
                        command: '9_2_4'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '⭕',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '⬜',
                    payload: {
                        command: '9_2_6'
                    },
                    color: Keyboard.SECONDARY_COLOR
                })
            ],
            [
                Keyboard.textButton({
                    label: '⬜',
                    payload: {
                        command: '9_2_7'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '⬜',
                    payload: {
                        command: '9_2_8'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '❌',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                })
            ]
        ])
    });
});
hearCommand('9_2_1', async (context) => {
    await context.send({
        message: `К сожалению вы проиграли`,
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
                    label: '✅ Попробовать ещё раз',
                    payload: {
                        command: 'начать игру'
                    },
                    color: Keyboard.PRIMARY_COLOR
                })
            ]
        ])
    });
});
hearCommand('9_2_4', async (context) => {
    await context.send({
        message: `К сожалению вы проиграли`,
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
                    label: '✅ Попробовать ещё раз',
                    payload: {
                        command: 'начать игру'
                    },
                    color: Keyboard.PRIMARY_COLOR
                })
            ]
        ])
    });
});
hearCommand('9_2_6', async (context) => {
    await context.send({
        message: `К сожалению вы проиграли`,
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
                    label: '✅ Попробовать ещё раз',
                    payload: {
                        command: 'начать игру'
                    },
                    color: Keyboard.PRIMARY_COLOR
                })
            ]
        ])
    });
});
hearCommand('9_2_7', async (context) => {
    await context.send({
        message: `ᅠ`,
        keyboard: Keyboard.keyboard([
            [
                Keyboard.textButton({
                    label: '⬜',
                    payload: {
                        command: '9_2_7_1'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '❌',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '⭕',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                })
            ],
            [
                Keyboard.textButton({
                    label: '⬜',
                    payload: {
                        command: '9_2_7_4'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '⭕',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '⬜',
                    payload: {
                        command: '9_2_7_6'
                    },
                    color: Keyboard.SECONDARY_COLOR
                })
            ],
            [
                Keyboard.textButton({
                    label: '❌',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '⭕',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '❌',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                })
            ]
        ])
    });
});
hearCommand('9_2_7_1', async (context) => {
    await context.send({
        message: `ᅠ`,
        keyboard: Keyboard.keyboard([
            [
                Keyboard.textButton({
                    label: '❌',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '❌',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '⭕',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                })
            ],
            [
                Keyboard.textButton({
                    label: '⭕',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '⭕',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '⬜',
                    payload: {
                        command: '9_2_7_1_6'
                    },
                    color: Keyboard.SECONDARY_COLOR
                })
            ],
            [
                Keyboard.textButton({
                    label: '❌',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '⭕',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '❌',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                })
            ]
        ])
    });
});
hearCommand('9_2_7_1_6', async (context) => {
    await context.send({
        message: `Игра закончилась ничьёй`,
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
                    label: '✅ Попробовать ещё раз',
                    payload: {
                        command: 'начать игру'
                    },
                    color: Keyboard.PRIMARY_COLOR
                })
            ]
        ])
    });
});
hearCommand('9_2_7_4', async (context) => {
    await context.send({
        message: `ᅠ`,
        keyboard: Keyboard.keyboard([
            [
                Keyboard.textButton({
                    label: '⭕',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '❌',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '⭕',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                })
            ],
            [
                Keyboard.textButton({
                    label: '❌',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '⭕',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '⬜',
                    payload: {
                        command: '9_2_7_4_6'
                    },
                    color: Keyboard.SECONDARY_COLOR
                })
            ],
            [
                Keyboard.textButton({
                    label: '❌',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '⭕',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '❌',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                })
            ]
        ])
    });
});
hearCommand('9_2_7_4_6', async (context) => {
    await context.send({
        message: `Игра закончилась ничьёй`,
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
                    label: '✅ Попробовать ещё раз',
                    payload: {
                        command: 'начать игру'
                    },
                    color: Keyboard.PRIMARY_COLOR
                })
            ]
        ])
    });
});
hearCommand('9_2_7_6', async (context) => {
    await context.send({
        message: `ᅠ`,
        keyboard: Keyboard.keyboard([
            [
                Keyboard.textButton({
                    label: '⭕',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '❌',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '⭕',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                })
            ],
            [
                Keyboard.textButton({
                    label: '⬜',
                    payload: {
                        command: '9_2_7_6_4'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '⭕',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '❌',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                })
            ],
            [
                Keyboard.textButton({
                    label: '❌',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '⭕',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '❌',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                })
            ]
        ])
    });
});
hearCommand('9_2_7_6_4', async (context) => {
    await context.send({
        message: `Игра закончилась ничьёй`,
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
                    label: '✅ Попробовать ещё раз',
                    payload: {
                        command: 'начать игру'
                    },
                    color: Keyboard.PRIMARY_COLOR
                })
            ]
        ])
    });
});
hearCommand('9_2_8', async (context) => {
    await context.send({
        message: `К сожалению вы проиграли`,
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
                    label: '✅ Попробовать ещё раз',
                    payload: {
                        command: 'начать игру'
                    },
                    color: Keyboard.PRIMARY_COLOR
                })
            ]
        ])
    });
});
hearCommand('9_3', async (context) => {
    await context.send({
        message: `ᅠ`,
        keyboard: Keyboard.keyboard([
            [
                Keyboard.textButton({
                    label: '⬜',
                    payload: {
                        command: '9_3_1'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '⬜',
                    payload: {
                        command: '9_3_2'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '❌',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                })
            ],
            [
                Keyboard.textButton({
                    label: '⬜',
                    payload: {
                        command: '9_3_4'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '⭕',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '⭕',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                })
            ],
            [
                Keyboard.textButton({
                    label: '⬜',
                    payload: {
                        command: '9_3_7'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '⬜',
                    payload: {
                        command: '9_3_8'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '❌',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                })
            ]
        ])
    });
});
hearCommand('9_3_1', async (context) => {
    await context.send({
        message: `К сожалению вы проиграли`,
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
                    label: '✅ Попробовать ещё раз',
                    payload: {
                        command: 'начать игру'
                    },
                    color: Keyboard.PRIMARY_COLOR
                })
            ]
        ])
    });
});
hearCommand('9_3_2', async (context) => {
    await context.send({
        message: `К сожалению вы проиграли`,
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
                    label: '✅ Попробовать ещё раз',
                    payload: {
                        command: 'начать игру'
                    },
                    color: Keyboard.PRIMARY_COLOR
                })
            ]
        ])
    });
});
hearCommand('9_3_4', async (context) => {
    await context.send({
        message: `ᅠ`,
        keyboard: Keyboard.keyboard([
            [
                Keyboard.textButton({
                    label: '⭕',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '⬜',
                    payload: {
                        command: '9_3_4_2'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '❌',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                })
            ],
            [
                Keyboard.textButton({
                    label: '❌',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '⭕',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '⭕',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                })
            ],
            [
                Keyboard.textButton({
                    label: '⬜',
                    payload: {
                        command: '9_3_4_7'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '⬜',
                    payload: {
                        command: '9_3_4_8'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '❌',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                })
            ]
        ])
    });
});
hearCommand('9_3_4_2', async (context) => {
    await context.send({
        message: `ᅠ`,
        keyboard: Keyboard.keyboard([
            [
                Keyboard.textButton({
                    label: '⭕',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '❌',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '❌',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                })
            ],
            [
                Keyboard.textButton({
                    label: '❌',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '⭕',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '⭕',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                })
            ],
            [
                Keyboard.textButton({
                    label: '⭕',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '⬜',
                    payload: {
                        command: '9_3_4_2_8'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '❌',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                })
            ]
        ])
    });
});
hearCommand('9_3_4_2_8', async (context) => {
    await context.send({
        message: `Игра закончилась ничьёй`,
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
                    label: '✅ Попробовать ещё раз',
                    payload: {
                        command: 'начать игру'
                    },
                    color: Keyboard.PRIMARY_COLOR
                })
            ]
        ])
    });
});
hearCommand('9_3_4_7', async (context) => {
    await context.send({
        message: `ᅠ`,
        keyboard: Keyboard.keyboard([
            [
                Keyboard.textButton({
                    label: '⭕',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '⬜',
                    payload: {
                        command: '9_3_4_7_2'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '❌',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                })
            ],
            [
                Keyboard.textButton({
                    label: '❌',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '⭕',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '⭕',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                })
            ],
            [
                Keyboard.textButton({
                    label: '❌',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '⭕',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '❌',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                })
            ]
        ])
    });
});
hearCommand('9_3_4_7_2', async (context) => {
    await context.send({
        message: `Игра закончилась ничьёй`,
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
                    label: '✅ Попробовать ещё раз',
                    payload: {
                        command: 'начать игру'
                    },
                    color: Keyboard.PRIMARY_COLOR
                })
            ]
        ])
    });
});
hearCommand('9_3_4_8', async (context) => {
    await context.send({
        message: `ᅠ`,
        keyboard: Keyboard.keyboard([
            [
                Keyboard.textButton({
                    label: '⭕',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '⬜',
                    payload: {
                        command: '9_3_4_8_2'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '❌',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                })
            ],
            [
                Keyboard.textButton({
                    label: '❌',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '⭕',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '⭕',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                })
            ],
            [
                Keyboard.textButton({
                    label: '⭕',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '❌',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '❌',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                })
            ]
        ])
    });
});
hearCommand('9_3_4_8_2', async (context) => {
    await context.send({
        message: `Игра закончилась ничьёй`,
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
                    label: '✅ Попробовать ещё раз',
                    payload: {
                        command: 'начать игру'
                    },
                    color: Keyboard.PRIMARY_COLOR
                })
            ]
        ])
    });
});
hearCommand('9_3_7', async (context) => {
    await context.send({
        message: `К сожалению вы проиграли`,
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
                    label: '✅ Попробовать ещё раз',
                    payload: {
                        command: 'начать игру'
                    },
                    color: Keyboard.PRIMARY_COLOR
                })
            ]
        ])
    });
});
hearCommand('9_3_8', async (context) => {
    await context.send({
        message: `К сожалению вы проиграли`,
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
                    label: '✅ Попробовать ещё раз',
                    payload: {
                        command: 'начать игру'
                    },
                    color: Keyboard.PRIMARY_COLOR
                })
            ]
        ])
    });
});
hearCommand('9_4', async (context) => {
    await context.send({
        message: `ᅠ`,
        keyboard: Keyboard.keyboard([
            [
                Keyboard.textButton({
                    label: '⬜',
                    payload: {
                        command: '9_4_1'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '⬜',
                    payload: {
                        command: '9_4_2'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '⬜',
                    payload: {
                        command: '9_4_3'
                    },
                    color: Keyboard.SECONDARY_COLOR
                })
            ],
            [
                Keyboard.textButton({
                    label: '❌',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '⭕',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '⬜',
                    payload: {
                        command: '9_4_6'
                    },
                    color: Keyboard.SECONDARY_COLOR
                })
            ],
            [
                Keyboard.textButton({
                    label: '⭕',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '⬜',
                    payload: {
                        command: '9_4_8'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '❌',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                })
            ]
        ])
    });
});
hearCommand('9_4_1', async (context) => {
    await context.send({
        message: `К сожалению вы проиграли`,
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
                    label: '✅ Попробовать ещё раз',
                    payload: {
                        command: 'начать игру'
                    },
                    color: Keyboard.PRIMARY_COLOR
                })
            ]
        ])
    });
});
hearCommand('9_4_2', async (context) => {
    await context.send({
        message: `К сожалению вы проиграли`,
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
                    label: '✅ Попробовать ещё раз',
                    payload: {
                        command: 'начать игру'
                    },
                    color: Keyboard.PRIMARY_COLOR
                })
            ]
        ])
    });
});
hearCommand('9_4_3', async (context) => {
    await context.send({
        message: `ᅠ`,
        keyboard: Keyboard.keyboard([
            [
                Keyboard.textButton({
                    label: '⬜',
                    payload: {
                        command: '9_4_3_1'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '⬜',
                    payload: {
                        command: '9_4_3_2'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '❌',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                })
            ],
            [
                Keyboard.textButton({
                    label: '❌',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '⭕',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '⭕',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                })
            ],
            [
                Keyboard.textButton({
                    label: '⭕',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '⬜',
                    payload: {
                        command: '9_4_3_8'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '❌',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                })
            ]
        ])
    });
});
hearCommand('9_4_3_1', async (context) => {
    await context.send({
        message: `ᅠ`,
        keyboard: Keyboard.keyboard([
            [
                Keyboard.textButton({
                    label: '❌',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '⭕',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '❌',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                })
            ],
            [
                Keyboard.textButton({
                    label: '❌',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '⭕',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '⭕',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                })
            ],
            [
                Keyboard.textButton({
                    label: '⭕',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '⬜',
                    payload: {
                        command: '9_4_3_1_8'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '❌',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                })
            ]
        ])
    });
});
hearCommand('9_4_3_1_8', async (context) => {
    await context.send({
        message: `Игра закончилась ничьёй`,
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
                    label: '✅ Попробовать ещё раз',
                    payload: {
                        command: 'начать игру'
                    },
                    color: Keyboard.PRIMARY_COLOR
                })
            ]
        ])
    });
});
hearCommand('9_4_3_2', async (context) => {
    await context.send({
        message: `ᅠ`,
        keyboard: Keyboard.keyboard([
            [
                Keyboard.textButton({
                    label: '⭕',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '❌',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '❌',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                })
            ],
            [
                Keyboard.textButton({
                    label: '❌',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '⭕',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '⭕',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                })
            ],
            [
                Keyboard.textButton({
                    label: '⭕',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '⬜',
                    payload: {
                        command: '9_4_3_2_8'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '❌',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                })
            ]
        ])
    });
});
hearCommand('9_4_3_2_8', async (context) => {
    await context.send({
        message: `Игра закончилась ничьёй`,
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
                    label: '✅ Попробовать ещё раз',
                    payload: {
                        command: 'начать игру'
                    },
                    color: Keyboard.PRIMARY_COLOR
                })
            ]
        ])
    });
});
hearCommand('9_4_3_8', async (context) => {
    await context.send({
        message: `ᅠ`,
        keyboard: Keyboard.keyboard([
            [
                Keyboard.textButton({
                    label: '⭕',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '⬜',
                    payload: {
                        command: '9_4_3_8_2'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '❌',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                })
            ],
            [
                Keyboard.textButton({
                    label: '❌',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '⭕',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '⭕',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                })
            ],
            [
                Keyboard.textButton({
                    label: '⭕',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '❌',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '❌',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                })
            ]
        ])
    });
});
hearCommand('9_4_3_8_2', async (context) => {
    await context.send({
        message: `Игра закончилась ничьёй`,
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
                    label: '✅ Попробовать ещё раз',
                    payload: {
                        command: 'начать игру'
                    },
                    color: Keyboard.PRIMARY_COLOR
                })
            ]
        ])
    });
});
hearCommand('9_4_6', async (context) => {
    await context.send({
        message: `К сожалению вы проиграли`,
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
                    label: '✅ Попробовать ещё раз',
                    payload: {
                        command: 'начать игру'
                    },
                    color: Keyboard.PRIMARY_COLOR
                })
            ]
        ])
    });
});
hearCommand('9_4_8', async (context) => {
    await context.send({
        message: `К сожалению вы проиграли`,
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
                    label: '✅ Попробовать ещё раз',
                    payload: {
                        command: 'начать игру'
                    },
                    color: Keyboard.PRIMARY_COLOR
                })
            ]
        ])
    });
});
hearCommand('9_6', async (context) => {
    await context.send({
        message: `ᅠ`,
        keyboard: Keyboard.keyboard([
            [
                Keyboard.textButton({
                    label: '⬜',
                    payload: {
                        command: '9_6_1'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '⬜',
                    payload: {
                        command: '9_6_2'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '⭕',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                })
            ],
            [
                Keyboard.textButton({
                    label: '⬜',
                    payload: {
                        command: '9_6_4'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '⭕',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '❌',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                })
            ],
            [
                Keyboard.textButton({
                    label: '⬜',
                    payload: {
                        command: '9_6_7'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '⬜',
                    payload: {
                        command: '9_6_8'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '❌',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                })
            ]
        ])
    });
});
hearCommand('9_6_1', async (context) => {
    await context.send({
        message: `К сожалению вы проиграли`,
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
                    label: '✅ Попробовать ещё раз',
                    payload: {
                        command: 'начать игру'
                    },
                    color: Keyboard.PRIMARY_COLOR
                })
            ]
        ])
    });
});
hearCommand('9_6_2', async (context) => {
    await context.send({
        message: `К сожалению вы проиграли`,
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
                    label: '✅ Попробовать ещё раз',
                    payload: {
                        command: 'начать игру'
                    },
                    color: Keyboard.PRIMARY_COLOR
                })
            ]
        ])
    });
});
hearCommand('9_6_4', async (context) => {
    await context.send({
        message: `К сожалению вы проиграли`,
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
                    label: '✅ Попробовать ещё раз',
                    payload: {
                        command: 'начать игру'
                    },
                    color: Keyboard.PRIMARY_COLOR
                })
            ]
        ])
    });
});
hearCommand('9_6_7', async (context) => {
    await context.send({
        message: `ᅠ`,
        keyboard: Keyboard.keyboard([
            [
                Keyboard.textButton({
                    label: '⬜',
                    payload: {
                        command: '9_6_7_1'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '⬜',
                    payload: {
                        command: '9_6_7_2'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '⭕',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                })
            ],
            [
                Keyboard.textButton({
                    label: '⬜',
                    payload: {
                        command: '9_6_7_4'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '⭕',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '❌',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                })
            ],
            [
                Keyboard.textButton({
                    label: '❌',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '⭕',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '❌',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                })
            ]
        ])
    });
});
hearCommand('9_6_7_1', async (context) => {
    await context.send({
        message: `К сожалению вы проиграли`,
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
                    label: '✅ Попробовать ещё раз',
                    payload: {
                        command: 'начать игру'
                    },
                    color: Keyboard.PRIMARY_COLOR
                })
            ]
        ])
    });
});
hearCommand('9_6_7_2', async (context) => {
    await context.send({
        message: `ᅠ`,
        keyboard: Keyboard.keyboard([
            [
                Keyboard.textButton({
                    label: '⭕',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '❌',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '⭕',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                })
            ],
            [
                Keyboard.textButton({
                    label: '⬜',
                    payload: {
                        command: '9_6_7_2_4'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '⭕',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '❌',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                })
            ],
            [
                Keyboard.textButton({
                    label: '❌',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '⭕',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '❌',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                })
            ]
        ])
    });
});
hearCommand('9_6_7_2_4', async (context) => {
    await context.send({
        message: `Игра закончилась ничьёй`,
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
                    label: '✅ Попробовать ещё раз',
                    payload: {
                        command: 'начать игру'
                    },
                    color: Keyboard.PRIMARY_COLOR
                })
            ]
        ])
    });
});
hearCommand('9_6_7_4', async (context) => {
    await context.send({
        message: `К сожалению вы проиграли`,
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
                    label: '✅ Попробовать ещё раз',
                    payload: {
                        command: 'начать игру'
                    },
                    color: Keyboard.PRIMARY_COLOR
                })
            ]
        ])
    });
});
hearCommand('9_6_8', async (context) => {
    await context.send({
        message: `К сожалению вы проиграли`,
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
                    label: '✅ Попробовать ещё раз',
                    payload: {
                        command: 'начать игру'
                    },
                    color: Keyboard.PRIMARY_COLOR
                })
            ]
        ])
    });
});
hearCommand('9_7', async (context) => {
    await context.send({
        message: `ᅠ`,
        keyboard: Keyboard.keyboard([
            [
                Keyboard.textButton({
                    label: '⬜',
                    payload: {
                        command: '9_7_1'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '⬜',
                    payload: {
                        command: '9_7_2'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '⬜',
                    payload: {
                        command: '9_7_3'
                    },
                    color: Keyboard.SECONDARY_COLOR
                })
            ],
            [
                Keyboard.textButton({
                    label: '⬜',
                    payload: {
                        command: '9_7_4'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '⭕',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '⬜',
                    payload: {
                        command: '9_7_6'
                    },
                    color: Keyboard.SECONDARY_COLOR
                })
            ],
            [
                Keyboard.textButton({
                    label: '❌',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '⭕',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '❌',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                })
            ]
        ])
    });
});
hearCommand('9_7_1', async (context) => {
    await context.send({
        message: `К сожалению вы проиграли`,
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
                    label: '✅ Попробовать ещё раз',
                    payload: {
                        command: 'начать игру'
                    },
                    color: Keyboard.PRIMARY_COLOR
                })
            ]
        ])
    });
});
hearCommand('9_7_2', async (context) => {
    await context.send({
        message: `ᅠ`,
        keyboard: Keyboard.keyboard([
            [
                Keyboard.textButton({
                    label: '⭕',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '❌',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '⬜',
                    payload: {
                        command: '9_7_2_3'
                    },
                    color: Keyboard.SECONDARY_COLOR
                })
            ],
            [
                Keyboard.textButton({
                    label: '⬜',
                    payload: {
                        command: '9_7_2_4'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '⭕',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '⬜',
                    payload: {
                        command: '9_7_2_6'
                    },
                    color: Keyboard.SECONDARY_COLOR
                })
            ],
            [
                Keyboard.textButton({
                    label: '❌',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '⭕',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '❌',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                })
            ]
        ])
    });
});
hearCommand('9_7_2_3', async (context) => {
    await context.send({
        message: `ᅠ`,
        keyboard: Keyboard.keyboard([
            [
                Keyboard.textButton({
                    label: '⭕',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '❌',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '❌',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                })
            ],
            [
                Keyboard.textButton({
                    label: '⬜',
                    payload: {
                        command: '9_7_2_3_4'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '⭕',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '⭕',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                })
            ],
            [
                Keyboard.textButton({
                    label: '❌',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '⭕',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '❌',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                })
            ]
        ])
    });
});
hearCommand('9_7_2_3_4', async (context) => {
    await context.send({
        message: `Игра закончилась ничьёй`,
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
                    label: '✅ Попробовать ещё раз',
                    payload: {
                        command: 'начать игру'
                    },
                    color: Keyboard.PRIMARY_COLOR
                })
            ]
        ])
    });
});
hearCommand('9_7_2_4', async (context) => {
    await context.send({
        message: `ᅠ`,
        keyboard: Keyboard.keyboard([
            [
                Keyboard.textButton({
                    label: '⭕',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '❌',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '⭕',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                })
            ],
            [
                Keyboard.textButton({
                    label: '❌',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '⭕',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '⬜',
                    payload: {
                        command: '9_7_2_4_6'
                    },
                    color: Keyboard.SECONDARY_COLOR
                })
            ],
            [
                Keyboard.textButton({
                    label: '❌',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '⭕',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '❌',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                })
            ]
        ])
    });
});
hearCommand('9_7_2_4_6', async (context) => {
    await context.send({
        message: `Игра закончилась ничьёй`,
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
                    label: '✅ Попробовать ещё раз',
                    payload: {
                        command: 'начать игру'
                    },
                    color: Keyboard.PRIMARY_COLOR
                })
            ]
        ])
    });
});
hearCommand('9_7_2_6', async (context) => {
    await context.send({
        message: `ᅠ`,
        keyboard: Keyboard.keyboard([
            [
                Keyboard.textButton({
                    label: '⭕',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '❌',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '⭕',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                })
            ],
            [
                Keyboard.textButton({
                    label: '⬜',
                    payload: {
                        command: '9_7_2_6_4'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '⭕',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '❌',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                })
            ],
            [
                Keyboard.textButton({
                    label: '❌',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '⭕',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '❌',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                })
            ]
        ])
    });
});
hearCommand('9_7_2_6_4', async (context) => {
    await context.send({
        message: `Игра закончилась ничьёй`,
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
                    label: '✅ Попробовать ещё раз',
                    payload: {
                        command: 'начать игру'
                    },
                    color: Keyboard.PRIMARY_COLOR
                })
            ]
        ])
    });
});
hearCommand('9_7_3', async (context) => {
    await context.send({
        message: `К сожалению вы проиграли`,
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
                    label: '✅ Попробовать ещё раз',
                    payload: {
                        command: 'начать игру'
                    },
                    color: Keyboard.PRIMARY_COLOR
                })
            ]
        ])
    });
});
hearCommand('9_7_4', async (context) => {
    await context.send({
        message: `К сожалению вы проиграли`,
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
                    label: '✅ Попробовать ещё раз',
                    payload: {
                        command: 'начать игру'
                    },
                    color: Keyboard.PRIMARY_COLOR
                })
            ]
        ])
    });
});
hearCommand('9_7_6', async (context) => {
    await context.send({
        message: `К сожалению вы проиграли`,
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
                    label: '✅ Попробовать ещё раз',
                    payload: {
                        command: 'начать игру'
                    },
                    color: Keyboard.PRIMARY_COLOR
                })
            ]
        ])
    });
});
hearCommand('9_8', async (context) => {
    await context.send({
        message: `ᅠ`,
        keyboard: Keyboard.keyboard([
            [
                Keyboard.textButton({
                    label: '⬜',
                    payload: {
                        command: '9_8_1'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '⬜',
                    payload: {
                        command: '9_8_2'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '⬜',
                    payload: {
                        command: '9_8_3'
                    },
                    color: Keyboard.SECONDARY_COLOR
                })
            ],
            [
                Keyboard.textButton({
                    label: '⬜',
                    payload: {
                        command: '9_8_4'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '⭕',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '⬜',
                    payload: {
                        command: '9_8_6'
                    },
                    color: Keyboard.SECONDARY_COLOR
                })
            ],
            [
                Keyboard.textButton({
                    label: '⭕',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '❌',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '❌',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                })
            ]
        ])
    });
});
hearCommand('9_8_1', async (context) => {
    await context.send({
        message: `К сожалению вы проиграли`,
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
                    label: '✅ Попробовать ещё раз',
                    payload: {
                        command: 'начать игру'
                    },
                    color: Keyboard.PRIMARY_COLOR
                })
            ]
        ])
    });
});
hearCommand('9_8_2', async (context) => {
    await context.send({
        message: `К сожалению вы проиграли`,
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
                    label: '✅ Попробовать ещё раз',
                    payload: {
                        command: 'начать игру'
                    },
                    color: Keyboard.PRIMARY_COLOR
                })
            ]
        ])
    });
});
hearCommand('9_8_3', async (context) => {
    await context.send({
        message: `ᅠ`,
        keyboard: Keyboard.keyboard([
            [
                Keyboard.textButton({
                    label: '⬜',
                    payload: {
                        command: '9_8_3_1'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '⬜',
                    payload: {
                        command: '9_8_3_2'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '❌',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                })
            ],
            [
                Keyboard.textButton({
                    label: '⬜',
                    payload: {
                        command: '9_8_3_4'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '⭕',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '⭕',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                })
            ],
            [
                Keyboard.textButton({
                    label: '⭕',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '❌',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '❌',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                })
            ]
        ])
    });
});
hearCommand('9_8_3_1', async (context) => {
    await context.send({
        message: `К сожалению вы проиграли`,
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
                    label: '✅ Попробовать ещё раз',
                    payload: {
                        command: 'начать игру'
                    },
                    color: Keyboard.PRIMARY_COLOR
                })
            ]
        ])
    });
});
hearCommand('9_8_3_2', async (context) => {
    await context.send({
        message: `К сожалению вы проиграли`,
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
                    label: '✅ Попробовать ещё раз',
                    payload: {
                        command: 'начать игру'
                    },
                    color: Keyboard.PRIMARY_COLOR
                })
            ]
        ])
    });
});
hearCommand('9_8_3_4', async (context) => {
    await context.send({
        message: `ᅠ`,
        keyboard: Keyboard.keyboard([
            [
                Keyboard.textButton({
                    label: '⭕',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '⬜',
                    payload: {
                        command: '9_8_3_4_2'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '❌',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                })
            ],
            [
                Keyboard.textButton({
                    label: '❌',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '⭕',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '⭕',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                })
            ],
            [
                Keyboard.textButton({
                    label: '⭕',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '❌',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                }),
                Keyboard.textButton({
                    label: '❌',
                    payload: {
                        command: 'null'
                    },
                    color: Keyboard.SECONDARY_COLOR
                })
            ]
        ])
    });
});
hearCommand('9_8_3_4_2', async (context) => {
    await context.send({
        message: `Игра закончилась ничьёй`,
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
                    label: '✅ Попробовать ещё раз',
                    payload: {
                        command: 'начать игру'
                    },
                    color: Keyboard.PRIMARY_COLOR
                })
            ]
        ])
    });
});
hearCommand('9_8_4', async (context) => {
    await context.send({
        message: `К сожалению вы проиграли`,
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
                    label: '✅ Попробовать ещё раз',
                    payload: {
                        command: 'начать игру'
                    },
                    color: Keyboard.PRIMARY_COLOR
                })
            ]
        ])
    });
});
hearCommand('9_8_6', async (context) => {
    await context.send({
        message: `К сожалению вы проиграли`,
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
                    label: '✅ Попробовать ещё раз',
                    payload: {
                        command: 'начать игру'
                    },
                    color: Keyboard.PRIMARY_COLOR
                })
            ]
        ])
    });
});