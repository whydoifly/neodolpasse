Команды запуска сборки:
gulp / nmp run dev ИЛИ node ./node_modules/gulp/bin/gulp.js (если вдруг нет прав администратора) - запуск dev-версии сайта (без сжатия css, js фалов, без конвертации изображений в формат webp)

gulp build --build / npm run build - запуск prod-версии сайта (все, чего не было в dev, теперь будет)

gulp deployFTP --build / npm run deploy - отправить проект на ftp (ftp путь настраивается в файле по адресу gulp/config/path.js в ключе ftp объекта path)
