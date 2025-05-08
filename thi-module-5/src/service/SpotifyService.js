import axios from "axios";

export async function getAllSpotify(){
    try {
        const response= await axios.get('http://localhost:8080/spotify')
        return response.data;
    }catch (e){
        console.log('Lỗi: '+e)
    }
}

export async function createSpotify(newMusic){
    try {
        const response= await axios.post('http://localhost:8080/spotify',newMusic)

    }catch (e){
        console.log('Lỗi: '+e)
    }
}

export async function updateSpotify(id,newMusic){
    try {
        const response= await axios.put('http://localhost:8080/spotify/'+id,newMusic);
        return response.data
    }catch (e){
        console.log('Lỗi: '+e)
    }
}
export async function findById(id){
    try {
        const response= await axios.get('http://localhost:8080/spotify/'+id);
        return response.data
    }catch (e){
        console.log('Lỗi: '+e)
    }
}
export async function searchMusic(songName){
    try {
        const response= await axios.get('http://localhost:8080/spotify?songName_like='+songName);
        return response.data
    }catch (e){
        console.log('Lỗi: '+e)
    }
}

