# react-books-mongodb
Тестовое приложение для обучения работы с mongodb и cloudinary.

Сервер: node, express, mongoose.

Клиент: react, redux, dropzone (работа с файлами).

Необходимо склонировать проект, в корневом каталоге выполнить:
```shell 
npm install
```
Далее перейти в каталог api и выполнить:
```shell 
npm install
```

Установка БД: скачать mongodb-win32-x86_64-2008plus-ssl-4.0.6-signed.

Запустить Mongodb Compass Community, создать базу данных db и коллекцию books.

Затем
```shell 
nodemon server
```

Для старта клиентской части выполнить:
```shell 
npm run start
```

Настройки серверной части в файле config.json 