import displayMainPage from "./displayMainPage";

export default function displayChatRoom(room) {
    document.body.innerHTML = "";

    const chatPage = document.createElement("div");
    chatPage.classList.add("chat-page");

    chatPage.innerHTML = `
    <nav class="nav-bar">
        <h2>friendHub</h2>
        <h3>${room}</h3>
        <button class="leave-room-btn">Leave Room</button>
    </nav>
    <div class="chat-main-section">
        <div class="send-message-container">
            <div>
                <label>Message:</label>
                <input type="text" class="input-message">
            </div>
            <button class="send-message-button">SEND</button>
        </div>

        <div class="chat-box">
        </div>
    </div>
    `
    document.body.appendChild(chatPage);

    const leaveRoomBtn = document.querySelector(".leave-room-btn");
    leaveRoomBtn.addEventListener("click", displayMainPage);
}