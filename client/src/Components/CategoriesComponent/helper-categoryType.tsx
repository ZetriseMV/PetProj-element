type CategoryLabels = {
    label1: string;
    label2: string;
    label3: string;
    label4: string;
    label5: string;
    label6?: string;
    label7?: string;
    label8?:string,
    label9?:string,
    label10?:string,
};

export interface CategoryMap {
    [key: string]: string;
}
export type TCategoryData = {
    [key:string]:CategoryLabels
}

export const categoryData: TCategoryData = {
    smartphones: {
      label1: "Бренд",
      label2: "Тип",
      label3: "Год выхода",
      label4: "Стандарты связи",
      label5: "Операционная система",
      label6: "Версия операционной системы",
      label7: "Линейка"
    },
    tv: {
      label1: "Бренд",
      label2: "Тип экрана",
      label3: "Форма экрана",
      label4: "Год выхода",
      label5: "Операционная система",
      label6: "TV-тюнер",
      label7: "Smart TV"
    },
    WashMachine: {
      label1: "Бренд",
      label2: "Встраиваемая",
      label3: "Тип мотора",
      label4: "Тип загрузки",
      label5: "Встроенная сушилка",
      label6: "Вес загрузки белья",
      label7: "Управление"
    },
    vacuum:{
        label1: "Бренд",
        label2: "Тип уборки",
        label3: "Тип пылесборника",
        label4: "Тип питания",
        label5: "Потребляемая мощность",
        label6: "Цвет",
        label7: "Дополнительно"
    },
    Fridge:{
        label1: "Бренд",
        label2: "Исполнение",
        label3: "Тип холодильника",
        label4: "Конструкция",
        label5: "Количество камер",
        label6: "No Frost",
        label7: "Вид компрессора"
    },
    Bake:{
        label1: "Бренд",
        label2: "Исполнение",
        label3: "Тип",
        label4: "Объем",
        label5: "Внутреннее покрытие стенок",
        label6: "Количество уровней мощности",
        label7: "Диаметр тарелки"
    },
    HeadPhones:{
        label1: "Бренд",
        label2: "Тип устройства",
        label3: "Тип подключения",
        label4: "Беспроводной интерфейс",
        label5: "Радиус действия",
        label6: "Беспроводная зарядка",
        label7: "Комплектация"
    },
    Streamers:{
        label1: "Бренд",
        label2: "Назначение",
        label3: "Конструктивное исполнение",
        label4: "Мощность",
        label5: "Мощность подачи пара",
        label6: "Количество режимов подачи пара",
        label7: "Регулировка подачи пара"
    },
    NoteBooks:{
        label1: "Бренд",
        label2: "Тип ноутбука",
        label3: "Серия",
        label4: "Год выхода",
        label5: "Материал",
        label6: "Фактура поверхности корпуса",
        label7: "Цвет"
    },
    smartphonecovers:{
        label1: "Бренд",
        label2: "Для диагонали",
        label3: "Совместимость с",
        label4: "Тип",
        label5: "Тип крепления",
        label6: "Материал",
        label7: "Цвет"
    },
    headphonesWplayers:{
        label1: "Бренд",
        label2: "Тип устройства",
        label3: "Тип подключения",
        label4: "Беспроводной интерфейс",
        label5: "Тип разъемов",
        label6: "Беспроводная зарядка",
        label7: "Дополнительно"
    },
    wirelessheadphones:{
        label1: "Бренд",
        label2: "Тип устройства",
        label3: "Тип подключения",
        label4: "Беспроводной интерфейс",
        label5: "Макс. длина кабеля (радиус действия) ",
        label6: "Тип разъемов",
        label7: "Беспроводная зарядка"
    },
    'cables-and-adapters':{
        label1: "Бренд",
        label2: "Тип",
        label3: "Коннектор с одной стороныя",
        label4: "Коннектор с другой стороны",
        label5: "Форма кабеля",
        label6: "Обмотка кабеля",
        label7: "Длина кабеля"
    },
    'stands-and-tripods-for-tablets':{
        label1: "Бренд",
        label2: "Диагональ устройства",
        label3: "Тип",
        label4: "Цвет",
        label5: "Материал корпуса",
        label6: "Регулировка наклона",
        label7: "Фиксация"
    },
    'cases-and-keyboards-for-tablets':{
        label1: "Бренд",
        label2: "Совместимость",
        label3: "Диагональ",
        label4: "Тип чехла",
        label5: "Возможность работы в чехле",
        label6: "Материал",
        label7: "Цвет"
    },
    'protective-glasses':{
        label1: "Бренд",
        label2: "Материал",
        label3: "Назначение",
        label4: "Цвет",
        label5: "Совместимость",
        label6: "Размер",
        label7: "Гарантия"
    },
    'portable-chargers':{
        label1: "Бренд",
        label2: "Входной ток",
        label3: "Количество выходов",
        label4: "Тип входного разъёма",
        label5: "Тип выходного разъёма",
        label6: "Входное напряжение",
        label7: "Выходное напряжение"
    },
    'docking-stations':{
        label1: "Бренд",
        label2: "Тип ",
        label3: "Материал корпуса",
        label4: "Цвет",
        label5: "Страна происхождения (производства)",
    },
    monoblocks:{
        label1: "Бренд",
        label2: "Материал корпуса",
        label3: "Цвет",
        label4: "Тип операционной системы",
        label5: "Версия операционной системы",
        label6: "Комплект поставки",
        label7: "Диагональ экрана"
    },
    systemblocks:{
        label1: "Бренд",
        label2: "Тип",
        label3: "Назначение",
        label4: "Серия",
        label5: "Операционная система",
        label6: "Блок питания",
        label7: "Бренд процессора"
    },
    monitors:{
        label1: "Бренд",
        label2: "Цвет",
        label3: "Комплектация",
        label4: "Технологии",
        label5: "Комплектация",
        label6: "Диагональ экрана",
        label7: "Соотношение сторон экрана"
    },
    tablets:{
        label1: "Бренд",
        label2: "Год выхода модели",
        label3: "Линейка",
        label4: "Тип операционной системы",
        label5: "Версия операционной системы",
        label6: "Модуль сотовой связи",
        label7: "Поддержка двух SIM-карт"
    },
    printers:{
        label1: "Бренд",
        label2: "Тип печати",
        label3: "Технология печати",
        label4: "Дисплей",
        label5: "Интерфейсы подключения",
        label6: "Цвет",
        label7: "Тип устройства"
    },
    'e-books':{
        label1: "Бренд",
        label2: "Цвет",
        label3: "Комплектация",
        label4: "Оперативная память",
        label5: "Размер экрана",
        label6: "Технология экрана",
        label7: "Подсветка"
    },
    memoryCards:{
        label1: "Бренд",
        label2: "Тип карты памяти ",
        label3: "Объем ",
        label4: "Класс скорости",
        label5: "Шина UHS",
        label6: "Класс UHS",
        label7: "Скорость чтения данных"
    },
    keyboards:{
        label1: "Бренд",
        label2: "Тип клавиатуры ",
        label3: "Тип соединения клавиатуры ",
        label4: "Интерфейс подключения клавиатуры",
        label5: "Технология переключателя",
        label6: "Материал ",
        label7: "Цвет клавиатуры"
        /* label8:"Комплектация" */
    },
    mices:{
        label1: "Бренд",
        label2: "Тип мыши ",
        label3: "Материал  ",
        label4: "Коврик в комплекте",
        label5: "Дополнительно ",
        label6: "Тип соединения мыши",
        label7: "Тип беспроводной связи мыши"
    },
    'mice-pads':{
        label1: "Бренд",
        label2: "Игровой ",
        label3: "Подушка под запястье",
        label4: "Материал ",
        label5: "Цвет  ",
        label6: "Ширина ",
        label7: "Длина "
    },
    'SSD-disks':{
        label1: "Бренд",
        label2: "Тип накопителя ",
        label3: "Объем",
        label4: "Форм-фактор",
        label5: "Цвет",
        label6: "Интерфейс",
        label7: "Флеш память "
    },
    'computer-chairs':{
        label1: "Бренд",
        label2: "Тип   ",
        label3: "Цвет ",
        label4: "Материал обивки ",
        label5: "Материал набивки кресла",
        label6: "Материал крестовины",
        label7: "Каркас"
    },
    'video-cards':{
        label1: "Бренд",
        label2: "Производитель графического процессора",
        label3: "Графический процессор",
        label4: "Интерфейс шины",
        label5: "Дополнительно",
        label6: "Частота графического процессора",
        label7: "Turbo-частота графического процессора"
    },
    ram:{
        label1: "Бренд",
        label2: "Тип",
        label3: "Количество модулей",
        label4: "Объем",
        label5: "Частота  ",
        label6: "PC-индекс",
        label7: "CAS Latency"
    },
    'pc-cases':{
        label1: "Бренд",
        label2: "Тип корпуса",
        label3: "Охлаждение",
        label4: "Слоты расширения",
        label5: "Материал ",
        label6: "Цвет ",
        label7: "Поддерживаемые материнские платы"
    },
    'power-supplies':{
        label1: "Бренд",
        label2: "Мощность",
        label3: "Стандарт блока питания",
        label4: "Питание материнской платы",
        label5: "Фактор мощности (PFC)",
        label6: "Модульное подключение кабелей питания",
        label7: "Вентиляторы"
    },
    motherboards:{
        label1: "Бренд",
        label2: "Сокет (гнездо процессора)",
        label3: "Чипсет",
        label4: "Форм-фактор",
        label5: "Встроенный звук",
        label6: "Звуковая схема",
        label7: "Bluetooth"
    },
    'cctv-cameras':{
        label1: "Бренд",
        label2: "Тип ",
        label3: "Тип матрицы",
        label4: "Цвет ",
        label5: "Конструкция ",
        label6: "Размещение  ",
        label7: "Сетевой интерфейс"
    },
    '3d-printers':{
        label1: "Бренд",
        label2: "Тип ",
        label3: "Тип матрицы",
        label4: "Цвет ",
        label5: "Конструкция ",
        label6: "Размещение  ",
        label7: "Сетевой интерфейс"
    },
    freezers:{
        label1: "Бренд",
        label2: "Исполнение",
        label3: "Тип холодильника",
        label4: "Конструкция",
        label5: "Количество камер",
        label6: "No Frost",
        label7: "Количество компрессоров"
    },
    'wine-coolers':{
        label1: "Бренд",
        label2: "Исполнение",
        label3: "Тип холодильника",
        label4: "Цвет",
        label5: "Количество камер",
        label6: "Возможность перевешивания двери",
        label7: "Общий полезный объем"
    },
    blenders:{
        label1: "Бренд",
        label2: "Тип блендера",
        label3: "Тип питания",
        label4: "Мощность ",
        label5: "Емкость чаши измельчителя",
        label6: "Материал чаши",
        label7: "Материал корпуса"
    },
    'meat-grinders':{
        label1: "Бренд",
        label2: "Мощность",
        label3: "Максимальная мощность при блокировке вала",
        label4: "Производительность ",
        label5: "Цвет ",
        label6: "Реверс ",
        label7: "Защита от перегрузки"
    },
    mixers:{
        label1: "Бренд",
        label2: "Тип миксера ",
        label3: "Мощность",
        label4: "Импульсный режим ",
        label5: "Цвет  ",
        label6: "Количество скоростей ",
        label7: "Турборежим "
    },
    'kitchen-scales':{
        label1: "Бренд",
        label2: "Тип  ",
        label3: "Предельная масса взвешивания",
        label4: "Конструкция   ",
        label5: "Материал чаши/платформы  ",
        label6: "Материал корпуса ",
        label7: "Питание "
    },
    choppers:{
        label1: "Бренд",
        label2: "Мощность",
        label3: "Цвет ",
        label4: "Количество скоростей",
        label5: "Турборежим ",
        label6: "Импульсный режим",
        label7: "Объем чаши"
    },
    'coffee-machines':{
        label1: "Бренд",
        label2: "Тип кофемашины",
        label3: "Возможность встраивания",
        label4: "Возможность подключения к водопроводу",
        label5: "Приготовление эспрессо",
        label6: "Тип используемого кофе",
        label7: "Мощность"
    },
    'water-filters':{
        label1: "Бренд",
        label2: "Тип",
        label3: "Объем ",
        label4: "Количество ступеней очистки",
        label5: "Ионный обмен",
        label6: "Умягчение",
        label7: "Календарь замены фильтрующего модуля"
    },
    'air-grills':{
        label1: "Бренд",
        label2: "Мощность",
        label3: "Тип нагревательного элемента",
        label4: "Цвет",
        label5: "Управление",
        label6: "Объем чаши",
        label7: "Материал чаши"
    },
    'icecream-makers':{
        label1: "Бренд",
        label2: "Мощность",
        label3: "Тип нагревательного элемента",
        label4: "Цвет",
        label5: "Управление",
        label6: "Объем чаши",
        label7: "Материал чаши"
    },
    'electric-grills':{
        label1: "Бренд",
        label2: "Тип  ",
        label3: "Мощность  ",
        label4: "Цвет ",
        label5: "Регулируемый термостат",
        label6: "Индикатор нагрева",
        label7: "Материал корпуса "
    },
    'sandwich-makers':{
        label1: "Бренд",
        label2: "Тип  ",
        label3: "Мощность  ",
        label4: "Вместимость",
        label5: "Разделитель ",
        label6: "Антипригарное покрытие",
        label7: "Цвет"
    },
    'dinnerware-sets':{
        label1: "Бренд",
        label2: "Тип  ",
        label3: "Материал",
        label4: "Объем ",
        label5: "Цвет",
        label6: "Диаметр ",
        label7: "Назначение"
    },
    'coffee-and-teaware':{
        label1: "Бренд",
        label2: "Тип  ",
        label3: "Коллекция ",
        label4: "Количество предметов в наборе ",
        label5: "Количество порций",
        label6: "Объем",
        label7: "Материал"
    },
    'soundbars-and-soundbars':{
        label1: "Бренд",
        label2: "Акустическая система ",
        label3: "Суммарная мощность",
        label4: "Цвет",
        label5: "Беспроводной сабвуфер",
        label6: "Радиоприемник",
        label7: "Поддержка 3D видео"
    },
    'portable-acoustics':{
        label1: "Бренд",
        label2: "Умная колонка",
        label3: "Дисплей",
        label4: "Материал корпуса ",
        label5: "Подсветка ",
        label6: "Дополнительно ",
        label7: "Акустическое исполнение"
    },
    'computer-speakers':{
        label1: "Бренд",
        label2: "Дисплей",
        label3: "Материал корпуса",
        label4: "Цвет ",
        label5: "Премиум класс ",
        label6: "Совместимость с iPhone, iPod",
        label7: "Совместимость с Android "
    },
    'MP3-players':{
        label1: "Бренд",
        label2: "Объем встроенной памяти",
        label3: "Поддержка карт памяти",
        label4: "Диктофон  ",
        label5: "FM-радио ",
        label6: "Материал корпуса ",
        label7: "Цвет  "
    },
    'dictaphones':{
        label1: "Бренд",
        label2: "Встроенный микрофон",
        label3: "Объем встроенной памяти ",
        label4: "Поддержка карт памяти",
        label5: "Материал корпуса",
        label6: "Цвет ",
        label7: "Дополнительно"
    },
    'carspeakers':{
        label1: "Бренд",
        label2: "Тип ",
        label3: "Цвет  ",
        label4: "Номинальная мощность",
        label5: "Максимальная мощность",
        label6: "Диапазон частот",
        label7: "Форма корпуса"
    },
    'car-radios':{
        label1: "Бренд",
        label2: "Тип магнитолы",
        label3: "Количество каналов",
        label4: "Мощность (общая)",
        label5: "Усилитель ",
        label6: "Звуковая система",
        label7: "Эквалайзер  "
    },
    'cd-dvd-discs':{
        label1: "Бренд",
        label2: "Тип ",
        label3: "Тип диска",
        label4: "Количество дисков",
        label5: "Гарантия  ",
        label6: "Страна происхождения (производства)",
    },
    'hi-fi-acoustics':{
        label1: "Бренд",
        label2: "Количество полос",
        label3: "Дисплей",
        label4: "Совместимость с iPhone, iPod",
        label5: "Совместимость с Android ",
        label6: "Дополнительно ",
    },
    'games-ps5':{
        label1: "Совместимость",
        label2: "Коллекционное издание",
        label3: "Хиты Playstation",
        label4: "Издатель",
        label5: "Жанр игры",
        label6: "Singleplayer ",
        label7: "Multiplayer ",
        label8: "Игра через Интернет (нужна подписка)",
        label9: "Год выпуска",
        label10: "Возрастное ограничение"
    },
    'games-ps4':{
        label1: "Совместимость",
        label2: "Коллекционное издание",
        label3: "Хиты Playstation",
        label4: "Издатель",
        label5: "Жанр игры",
        label6: "Singleplayer ",
        label7: "Multiplayer ",
        label8: "Игра через Интернет (нужна подписка)",
    },
    'games-xbox-series-xs':{
        label1: "Совместимость",
        label2: "Коллекционное издание",
        label3: "Издатель",
        label4: "Жанр игры",
        label5: "Singleplayer",
        label6: "Multiplayer  ",
        label7: "Год выпуска ",
        label8: "Возрастное ограничение",
    },
    'games-xbox1':{
        label1: "Совместимость",
        label2: "Коллекционное издание",
        label3: "Издатель",
        label4: "Жанр игры",
        label5: "Singleplayer",
        label6: "Multiplayer  ",
        label7: "Год выпуска ",
        label8: "Возрастное ограничение",
    },
    'games-nintendo':{
        label1: "Совместимость",
        label2: "Коллекционное издание",
        label3: "Издатель",
        label4: "Жанр игры",
        label5: "Singleplayer",
        label6: "Multiplayer  ",
        label7: "Год выпуска ",
        label8: "Возрастное ограничение",
    },
    'microphones-streaming':{/* поправить в компоненте */
        label1: "Бренд ",
        label2: "Вид ",
        label3: "Исполнение ",
        label4: "Подключение ",
        label5: "Назначение ",
        label6: "Дополнительно   ",
        label7: "Направленность ",
        label8: "Нижняя частотная характеристика",
    },
    'steering-wheels':{
        label1: "Бренд ",
        label2: "Тип   ",
        label3: "Совместимость   ",
        label4: "Цвет  ",
        label5: "Диаметр руля  ",
        label6: "Полный угол поворота руля",
        label7: "Блок переключения передач",
        label8: "Количество педалей ",
    },
    'gamepads-joysticks':{
        label1: "Бренд",
        label2: "Тип",
        label3: "Совместимость  ",
        label4: "Цвет   ",
        label5: "Джойстики  ",
        label6: "Количество кнопок ",
        label7: "Обратная связь (вибрация)",
        label8: "Интерфейс  ",
    },
    'virtual-reality-glasses':{
        label1: "Бренд",
        label2: "Тип",
        label3: "Угол обзора",
        label4: "Материал",
        label5: "Цвет",
        label6: "Вес ",
        label7: "Гарантия ",
        label8: "Страна происхождения (производства) ",
    }
};

export const categoryMap:CategoryMap = {
    WashMachine: 'Стиральные Машины',
    tv: 'Телевизоры',
    smartphones: 'Смартфоны',
    vacuum: 'Пылесосы',
    Fridge: 'Холодильники',
    Bake: 'Микроволнновые печи',
    HeadPhones:'Наушники',
    NoteBooks:'Ноутбуки',
    Streamers:'Отпариватели',
    smartphonecovers:'Чехлы для телефонов',
    wirelessheadphones:'Наушники беспроводные',
    'cables-and-adapters':'Кабели и переходники',
    'stands-and-tripods-for-tablets':'Подставки и штативы для планшетов',
    'cases-and-keyboards-for-tablets':'Чехлы для планшетов',
    'protective-glasses':'Защитные стекла',
    'portable-chargers':'Портативные зарядные устройства',
    'docking-stations':'Док-станции',
    monoblocks:'Моноблоки',
    systemblocks:'Системные блоки',
    monitors:'Мониторы',
    tablets:'Планешты',
    printers:'Принтеры',
    'e-books':'Электронные книги',
    memoryCards:'Карты памяти',
    keyboards:'Клавиатуры',
    mices:'Мыши',
    'mice-pads':'Коврик для мыши', 
    'SSD-disks':'Жесткие диски, SSD',
    'computer-chairs':'Компьютерные кресла',
    'video-cards':'Видеокарты',
    ram:'Оперативная память',
    'pc-cases':'ПК корпусы',
    'power-supplies':'Блоки питания',
    motherboards:'Материнские платы',
    'cctv-cameras':'Камеры видеонаблюдения',
    '3d-printers':'3д принтеры',
    freezers:'Морозильники',
    'wine-coolers':'Винные шкафы',
    blenders:'Блендеры',
    'meat-grinders':'Мясорубки',
    mixers:'Миксеры',
    'kitchen-scales':'Кухонные весы',
    choppers:'Измельчители',
    'coffee-machines':'Кофемашины',
    'water-filters':'Фильтры для воды',
    'air-grills':'Аэрогрили',
    'icecream-makers':'Мороженницы',
    'electric-grills':'Электрогрили',
    'sandwich-makers':'Бутербродницы',
    'dinnerware-sets':'Наборы столовой посуды',
    'coffee-and-teaware':'Посуда для кофе и чая',
    'soundbars-and-soundbars':'Звуковые панели и саундбары',
    'portable-acoustics':'Портативная акустика',
    'computer-speakers':'Компьютерные колонки',
    'MP3-players':'МП3 плееры',
    'dictaphones':'Диктафоны',
    'carspeakers':'Автомобильные колонки',
    'car-radios':'Автомагнитолы',
    'cd-dvd-discs':'CD и DVD диски',
    'hi-fi-acoustics':'Hi-fi Акустика',
    'games-ps5':'Игры для PlayStation 5',
    'games-ps4':'Игры для PlayStation 4',
    'games-xbox-series-xs':'Игры для Xbox Series X|S',
    'games-xbox1':'Игры для Xbox One',
    'games-nintendo':'Игры для Nintendo',
    'microphones-streaming':'Микрофоны для компьютера',
    'steering-wheels':'Рули для PC',
    'gamepads-joysticks':'Геймпады и джойстики',
    'virtual-reality-glasses':'Очки виртуальной реальности'
};