export interface Character {
    id:number;
    name: string;
    status: string;
    species: string;
    image: string;
    episode: string[];
    origin:{
        name:string;
    }
    gender:string;
    favorite:boolean;
}


export interface Episode {
    id:number;
    name:string;
    air_date:string;
    episode:string;
}
