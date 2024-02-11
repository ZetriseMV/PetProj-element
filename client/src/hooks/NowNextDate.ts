const dateNow = new Date();

export const useGetDateNow = (): string => {
    const day: string = dateNow.getDate().toString().padStart(2, '0');
    const month: string = (dateNow.getMonth() + 1).toString().padStart(2, '0');
    const year: number = dateNow.getFullYear();
    
    return `${day}.${month}.${year}`;
};

export const useGetDateNext = (): string => {
    const nextDay = new Date(dateNow);
    nextDay.setDate(dateNow.getDate() + 1);

    const day: string = nextDay.getDate().toString().padStart(2, '0');
    const month: string = (nextDay.getMonth() + 1).toString().padStart(2, '0');
    const year: number = nextDay.getFullYear();

    return `${day}.${month}.${year}`;
};
