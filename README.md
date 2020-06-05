#  https://grushainn.github.io/Newplace.github.io/
## v0.0.1	
###Учебный проект по использованию сборщика Webpack и взаимодействия с Github.

Скачать данный проект к себе на компьютер можно пройдя по ссылке https://github.com/GrushaiNN/Newplace.github.io/tree/develop.
Нажимаем кнопку "Clone or download" и скачиваем архив с проектом, либо  по протоколу git подключаясь по SSH, тк в этом случае
при скачивании и вливании изменений не нужно вводить логин/пароль.
Распаковываем данный архив.
Локально проект разворачивается при помощи локального сервера.
Устанавливаем следующие пакеты с NPM: 

"devDependencies": 
    "@babel/cli": "^7.10.1",
    "@babel/core": "^7.10.2",
    "@babel/preset-env": "^7.10.2",
    "autoprefixer": "^9.8.0",
    "babel-loader": "^8.1.0",
    "cross-env": "^7.0.2",
    "css-loader": "^3.5.3",
    "cssnano": "^4.1.10",
    "file-loader": "^6.0.0",
    "gh-pages": "~2.0.1",
    "html-webpack-plugin": "^4.3.0",
    "image-webpack-loader": "^6.0.0",
    "mini-css-extract-plugin": "^0.9.0",
    "optimize-css-assets-webpack-plugin": "^5.0.3",
    "postcss-loader": "^3.0.0",
    "style-loader": "^1.2.1",
    "webpack": "^4.43.0",
    "webpack-cli": "^3.3.11",
    "webpack-dev-server": "^3.11.0",
    "webpack-md5-hash": "0.0.6"
 
  "dependencies": 
    "babel-polyfill": "^6.26.0",
    "copy-webpack-plugin": "^6.0.2",
    "core-js": "^3.4.1" 

Варианты запуска: 
"scripts": {
    "build": "rimraf dist && cross-env NODE_ENV=production webpack --mode production",
    "dev": "cross-env NODE_ENV=development webpack-dev-server --mode development --open --watch",
    "deploy": "cross-env NODE_ENV=production gh-pages -d dist"
  }