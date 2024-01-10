export type TCategoryData = {
    smartphones: {
      label1: string;
      label2: string;
      label3: string;
    };
    tv: {
      label1: string;
      label2: string;
      label3: string;
    };
    WashMachine: {
      label1: string;
      label2: string;
      label3: string;
    };
    vacuum:{
        label1: string;
        label2: string;
        label3: string;
    };
    Fridge:{
        label1: string;
        label2: string;
        label3: string;
    };
    Bake:{
        label1: string;
        label2: string;
        label3: string;
    };
    HeadPhones:{
        label1: string;
        label2: string;
        label3: string;
    };
    Streamers:{
        label1: string;
        label2: string;
        label3: string;
    };
    NoteBooks:{
        label1: string;
        label2: string;
        label3: string;
    };
};

export const categoryData: TCategoryData = {
    smartphones: {
      label1: "Бренд",
      label2: "Тип",
      label3: "Год выхода"
    },
    tv: {
      label1: "Бренд",
      label2: "Тип экрана",
      label3: "Форма экрана"
    },
    WashMachine: {
      label1: "Бренд",
      label2: "Встраиваемая",
      label3: "Тип мотора"
    },
    vacuum:{
        label1: "Тип пылесоса",
        label2: "Тип уборки",
        label3: "Тип пылесборника"
    },
    Fridge:{
        label1: "Бренд",
        label2: "Исполнение",
        label3: "Тип холодильника"
    },
    Bake:{
        label1: "Тип",
        label2: "Исполнение",
        label3: "Тип"
    },
    HeadPhones:{
        label1: "Бренд",
        label2: "Тип устройства",
        label3: "Тип подключения"
    },
    Streamers:{
        label1: "Бренд",
        label2: "Назначение",
        label3: "Конструктивное исполнение"
    },
    NoteBooks:{
        label1: "Бренд",
        label2: "Тип ноутбука",
        label3: "Серия"
    }
};