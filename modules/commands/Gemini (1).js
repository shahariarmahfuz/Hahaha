module.exports.config = {
	name: "gemi",
	version: "1.0.1",
	hasPermssion: 0,
	credits: "Yan Maglinte",
	description: "chat with ai",
  usePrefix: true,
	commandCategory: "chatting",
	usages: "[Chatbots]",
	cooldowns: 5
};  
  
module.exports.run = async ({ api, event, args }) => {
    const axios = require("axios");
    let prompt = args.join(" "),
      uid = event.senderID,
      url;
    if (!prompt) return api.sendMessage(`Please enter a prompt.`, event.threadID, event.messageID);
    
    try {
      const apis = `https://api.easy-api.online/api/sfw/kiss`;
      if (event.type == "message_reply"){
        if (event.messageReply.attachments[0]?.type == "photo"){
        url = encodeURIComponent(event.messageReply.attachments[0].url);
        const res = (curl -X 'GET' \
  'https://api.easy-api.online/api/sfw/kiss' \
  -H 'accept: */*').data;
        return api.sendMessage(`${res.gemini}`, event.threadID, event.messageID)
        } else {
          return api.sendMessage('Please reply to an image.', event.threadID, event.messageID)
        }
      }
      const rest = (curl -X 'GET' \
  'https://api.easy-api.online/api/sfw/kiss' \
  -H 'accept: */*').data;
      return api.sendMessage(rest.gemini, event.threadID, event.messageID)
    } catch (e) {
      console.log(e);
      return api.sendMessage(e.message, event.threadID, event.messageID);
    } //end of catch
  };
