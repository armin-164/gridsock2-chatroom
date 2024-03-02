import displayMainPage from "./displayMainPage";

export default function displayChatRoom(room) {
    document.body.innerHTML = "";

    const chatPage = document.createElement("div");
    chatPage.classList.add("chat_page");

    chatPage.innerHTML = `
    <nav class="nav_bar">
        <h2>friendHub</h2>
        <h3>${room}</h3>
        <button class="leave_room_btn">Leave Room</button>
    </nav>
    <div class="chat_main_section">
        <div class="send_message_container">
            <div>
                <label>Message:</label>
                <input type="text" class="input_message">
            </div>
            <button class="send_message_button">SEND</button>
        </div>

        <div class="chat_box">
        </div>
    </div>
    `
    document.body.appendChild(chatPage);

    const leaveRoomBtn = document.querySelector(".leave_room_btn");
    leaveRoomBtn.addEventListener("click", displayMainPage);
}