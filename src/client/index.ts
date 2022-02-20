import "./index.css"
import { ChatClient } from "@twurple/chat"
import * as $ from "jquery"
const eMsgs = $("#messages")
const eCont = $("#messages-container")


const client = new ChatClient({ channels: ["sennyk4"] })
client.connect()

client.onMessage((channel, user, message, msg) => {
  eMsgs.append(`<div class="text-white"><span class="font-semibold" style="color: ${msg.userInfo.color}">${user}</span>: <span class="font-medium ">${message}</span></div>`)
  eCont.scrollTop(eCont.prop("scrollHeight"))
})