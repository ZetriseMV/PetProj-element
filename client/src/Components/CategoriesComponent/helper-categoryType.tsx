type CategoryLabels = {
    label1: string;
    label2: string;
    label3: string;
    label4: string;
    label5: string;
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
}
export const categoryData: TCategoryData = {
    smartphones: {
      label1: "Бренд",
      label2: "Тип",
      label3: "Год выхода",
      label4:"Стандарты связи",
      label5:"Операционная система"
    },
    tv: {
      label1: "Бренд",
      label2: "Тип экрана",
      label3: "Форма экрана",
      label4:"Год выхода",
      label5:"Операционная система"
    },
    WashMachine: {
      label1: "Бренд",
      label2: "Встраиваемая",
      label3: "Тип мотора",
      label4:"Тип загрузки",
      label5:"Встроенная сушилка"
    },
    vacuum:{
        label1: "Бренд",
        label2: "Тип уборки",
        label3: "Тип пылесборника",
        label4:"Цвет",
        label5:"Потребляемая мощность"
    },
    Fridge:{
        label1: "Бренд",
        label2: "Исполнение",
        label3: "Тип холодильника",
        label4:"Конструкция",
        label5:"Количество камер"
    },
    Bake:{
        label1: "Бренд",
        label2: "Исполнение",
        label3: "Тип",
        label4:"Объем",
        label5:"Цвет"
    },
    HeadPhones:{
        label1: "Бренд",
        label2: "Тип устройства",
        label3: "Тип подключения",
        label4:"Беспроводной интерфейс",
        label5:"Радиус действия"
    },
    Streamers:{
        label1: "Бренд",
        label2: "Назначение",
        label3: "Конструктивное исполнение",
        label4:"Мощность",
        label5:"Цвет"
    },
    NoteBooks:{
        label1: "Бренд",
        label2: "Тип ноутбука",
        label3: "Серия",
        label4:"Год выхода",
        label5:"Материал"
    }
};