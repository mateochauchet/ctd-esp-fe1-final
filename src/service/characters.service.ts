
export async function getCharactersByName(name:string,page:number=1) {
    const  response = await fetch(`https://rickandmortyapi.com/api/character/?page=${page}&name=${name}`);
    const resJson = await response.json();
    return resJson;
} 

