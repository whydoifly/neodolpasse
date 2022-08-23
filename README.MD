Команды запуска сборки:
gulp / nmp run dev - запуск dev-версии сайта (без сжатия css, js фалов, без конвертации изображений в формат webp)

gulp build --build / npm run build - запуск prod-версии сайта (все, чего не было в dev, теперь будет)

gulp deployFTP --build / npm run deploy - отправить проект на ftp (ftp путь настраивается в файле по адресу gulp/config/path.js в ключе ftp объекта path)
