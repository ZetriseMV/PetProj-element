
export interface IFilterStateSuccess {
    category: string;
    [key:string]: string;
}

export interface IFilterStateDelete {
    [key:string]: string;
}

export interface IFilterPrice {
    min:number;
    max:number;
}