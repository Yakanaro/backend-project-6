// @ts-check

export default {
  translation: {
    appName: 'Менеджер задач',
    flash: {
      session: {
        create: {
          success: 'Вы залогинены',
          error: 'Неправильный емейл или пароль',
        },
        delete: {
          success: 'Вы разлогинены',
        },
      },
      users: {
        create: {
          error: 'Не удалось зарегистрировать',
          success: 'Пользователь успешно зарегистрирован',
        },
        delete: {
          error: 'Не удалось удалить пользователя',
          success: 'Пользователь удален',
        },
        edit: {
          error: 'Не удалось изменить пользователя',
          success: 'Пользователь изменен',
        },
      },
      statuses: {
        create: {
          error: 'Не удалось создать статус',
          success: 'Статус успешно создан',
        },
        delete: {
          error: 'Не удалось удалить статус',
          success: 'Статус удален',
        },
        edit: {
          error: 'Не удалось изменить статус',
          success: 'Статус изменен',
        },
      },
      authError: 'Доступ запрещён! Пожалуйста, авторизируйтесь.',
    },
    layouts: {
      application: {
        users: 'Пользователи',
        signIn: 'Вход',
        signUp: 'Регистрация',
        signOut: 'Выход',
        statuses: 'Статус',
      },
    },
    views: {
      session: {
        new: {
          email: 'Email',
          password: 'Пароль',
          signIn: 'Вход',
          submit: 'Войти',
        },
      errors: {
        email: 'Некорректный email'
      }
      },
      users: {
        id: 'ID',
        fullName:'Полное имя',
        email: 'Email',
        action:'Действия',
        createdAt: 'Дата создания',
          actions: {
            delete: 'Удалить',
            edit:'Изменить',
          },
        new: {
          email: 'Введите вашу почту',
          password: 'Придумайте пароль',
          firstName: 'Введите ваше имя',
          lastName: 'Введите вашу фамилию',
          submit: 'Сохранить',
          signUp: 'Регистрация',
        },
        edit: {
          editButton: 'Изменить',
          firstName: 'Имя',
          lastName: 'Фамилия',
          email: 'Почта',
          password: 'Пароль',
          submit: 'Принять',
        }
      },
      statuses: {
        title: 'Изменение статуса',
        index: {
          id: 'ID',
          name: 'Наименование',
          createdAt: 'Дата создания',
          create: 'Создать',
      },
        new: {
          createStatus: 'Введите статус',
          name: 'Наименование',
          create: 'Создать статус',
        },
        actions: {
          edit: 'Изменить',
          delete: 'Удалить',
          submit: 'Принять',
        },

    },
        welcome: {
          index: {
            hello: 'Привет от Хекслета!',
            description: 'Практические курсы по программированию',
            more: 'Узнать Больше',
          },
      },
    },
  },
};
