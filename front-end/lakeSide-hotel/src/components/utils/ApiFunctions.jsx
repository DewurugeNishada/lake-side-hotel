import axios from "axios"

export const api = axios.create({
    baseURL :"http://localhost:8080"
})

export const getHeader = () => {
	const token = localStorage.getItem("token")
	return {
		// Authorization: `Bearer ${token}`,
		"Content-Type": "application/json"
	}
}

export async function addRoom(photo, roomType, roomPrice) {
	
	const formData = new FormData()
	formData.append("photo", photo)
	formData.append("roomType", roomType)
	formData.append("roomPrice", roomPrice)
	const response = await api.post("/rooms/add/new-room", formData,{
		"Content-Type": "application/json"
	})
	if (response.status === 201) {
		console.log("response.status === 201")
		return true
	} else {
		return false
	}
}

/* This function gets all room types from thee database */
export async function getRoomTypes() {
	try {
		const response = await api.get("/rooms/room/types")
		console.log("1");
		return response.data
	} catch (error) {
		throw new Error("Error fetching room types")
	}
}

/* This function gets all rooms from the database */
export async function getAllRooms() {
	try {
		const result = await api.get("/rooms/all-rooms")
		return result.data
	} catch (error) {
		throw new Error("Error fetching rooms")
	}
}

/* This function deletes a room by the Id */
export async function deleteRoom(roomId) {
	try {
		const result = await api.delete(`/rooms/delete/room/${roomId}`, {
			headers: getHeader()
		})
		return result.data
	} catch (error) {
		throw new Error(`Error deleting room ${error.message}`)
	}
}

