type CategoryLabels = {
    label1: string;
    label2: string;
    label3: string;
    label4: string;
    label5: string;
    label6: string;
    label7: string;
};
export type TCategoryData = {
    smartphones: CategoryLabels;
    tv: CategoryLabels;
    WashMachine: CategoryLabels;
    vacuum: CategoryLabels;
    Fridge: CategoryLabels;
    Bake: CategoryLabels;
    HeadPhones: CategoryLabels;
    Streamers: CategoryLabels;
    NoteBooks: CategoryLabels;
    smartphonecovers:CategoryLabels,
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
};