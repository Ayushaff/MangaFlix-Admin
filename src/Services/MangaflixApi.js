class MangaflixApi {

    baseUrl = "http://localhost:3000";

    getAllManga = async ()=>{
        return await fetch (
            `${this.baseUrl}/v1/manga`
        ).then((data)=>data.json());
    }

    getCoverById = async (coverId)=>{
        return await fetch (
            `${this.baseUrl}/v1/cover/${coverId}`
        ).then((data)=>data.json());
    }
    
}


export default new MangaflixApi();