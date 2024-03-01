export default function updateRoomList(rooms) {
    const roomsContainer = document.querySelector(".rooms-container");
    roomsContainer.innerHTML = "";
    rooms.forEach(room => {
        const roomName = document.createElement("div");
        roomName.textContent = room;
        roomsContainer.appendChild(roomName);
    });
}