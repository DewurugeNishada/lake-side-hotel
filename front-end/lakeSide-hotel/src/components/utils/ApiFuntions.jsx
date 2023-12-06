import axios from "axios"

export const api = axios.create({
    baseURL :"http://localhost:8080"
})

// add a a new room to the database
export async function addRoom(photo, roomType, roomPrice){
    const formData = new FormData();
    formData.append("photo",photo)
    formData.append("roomType",roomType)
    formData.append("roomPrice",roomPrice)

    const response = await api.post("/rooms/add/new-room", formData)
    if(response.status === 201){
        return true;
    }
    else{
        return false;
    }

}

// get All Rooms Types from data base
export async function getRoomTypes(){
     try{

          const response = await api.get("/rooms/room-types")
          return response.data;
        }catch(error){
          throw new Error("Error fecthing room types")

      }
    
}