import { io } from "socket.io-client";
import updateRoomList from "./updateRoomList";
const socket = io("http://localhost:3000");

export default function displayMainPage() {
    const mainContainer = document.createElement("div");
    mainContainer.classList.add("main-container");

    mainContainer.innerHTML = `
        <h1>friendHub</h1>
        <span>Enter a room</span>
        <div class="rooms-container"></div>
        <div class="create-room-section">
            <span class="create-room-text">Or create a new room</span>
            <input type="text" class="input-room-name">
            <button class="create-room-btn">Create and Enter</button>
        </div>
    `;

    // Change this when a proper html structure has been agreed upon
    document.body.appendChild(mainContainer);

    const createRoomBtn = document.querySelector(".create-room-btn");
    const inputRoomName = document.querySelector(".input-room-name");

    // Request room list initially and update UI
    socket.emit("get rooms");
    socket.on("room list", updateRoomList);

    // Create a room and then join it
    createRoomBtn.addEventListener("click", () => {
        const roomName = inputRoomName.value;
        if (roomName) {
            socket.emit("create room", roomName); 
            socket.emit("join room", roomName); 
        }
    });
}
