//RCD code
const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });

//=======[dependencies]====================//
global.SESSION_ID = process.env.SESSION_ID || "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiUU1hRm9SY0FCcXlObmVPS0MrTjk5Wkk0RWZUQVNRcm9oQjdodnR6dEtHVT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiVTFiOStzZDAyQkZmVnVmc2I1OU85ZWEwdWRmMmNzNkIvMTdaUjVrMUtHUT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiIyTVB3VnN4K0cvT2pnaHgvMGJ2Z29kbXllcmcybE1ib0tIWjVIYkZQdjFJPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJIc2tkTkE1S1RCY09tSE05SHJhWExubjhHemhMcmRqTGM1Q04rMUdPUm5rPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjhJQktJYjBlS1BlNkpiSnhBanVNaTlNQjA4akpyUGdjZXhlVWc0RHR0VkE9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImVkaUY0WTk3Z2hWQndjZjVsRFlMcFMyeFRNMnMyaDhrQ1o2OHNFeUxpR1U9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiZUx0WDZlK0lHQ1J1cnh1U3VzYzZIcGYrOEpwWkVqWko1cnNjMXhMcituVT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiRS9JTG9NcWdZTXdKN0VESlRzMEh5S2c5S1FPZlMyVXhBc1ZqSjhaeUFYZz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IklVYlY1ZG9mNkN1bC9MU280SW1RQlhqS0xqNWIvZmxqTkkrS3Y4Und2RDkvMjNFN2tjUlc0TWpFWHlmOVRiOWJCZFpGMDFuUnVLWXBlYTBWYjkxa0NBPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MjU1LCJhZHZTZWNyZXRLZXkiOiJLV1FxRVdiMjNkUzNvS0I4S0c5eFJIRUsySU16L0lrdXIwSm4rSStvbnY0PSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJRWll3azBBM1RrV3I3bjhPZGhDZ2xRIiwicGhvbmVJZCI6IjQ2YjhhYzQ5LTJjYmItNDZkZi1iODM3LTk4MzA0MTk4YTM1OSIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiIxU0VnSmZ4ZmtGb3h5RlZ6cHRLa0VPbkovM0E9In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiMlY3RzY0RlFCYktRSWYwcThTeWJhSEZwTFNVPSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6IjhYVEtZM0NDIiwibWUiOnsiaWQiOiI5NDcwMjcyMjc2Njo0MUBzLndoYXRzYXBwLm5ldCIsIm5hbWUiOiLwnZG68J2Rh/CdkLTwnZGH8J2RiPCdkbog4Lisx7bhj4bIvvCdkLgg8J2XpvCdmLzwnZi+8J2Zg/CdmYTwnZmJXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cbsOXXG5cblxuXG5cblxuXG5cblxuIPCdlJLwnZSJ8J2UieKEkeKEreKEkfCdlITwnZSPIn0sImFjY291bnQiOnsiZGV0YWlscyI6IkNPSHlxTmdIRUptbDdiVUdHQUlnQUNnQSIsImFjY291bnRTaWduYXR1cmVLZXkiOiJhRHBTeDZIUDZDL09XM3Q5MFV1NGNqcEJNeE5VRmhjRkJ6eGJIaWtFaDFnPSIsImFjY291bnRTaWduYXR1cmUiOiJHYXlKSmZ3cWkyaXJBNmNaNk1JSWQ1YndqdjZiYUliYTNlYnUvYVZwdkZuY3Bld2ROczRHZ2xGQlNYMndnQWlwTUZWNTFRcURWSXFvRFhEQ2NDS2ZCZz09IiwiZGV2aWNlU2lnbmF0dXJlIjoiUVdmV3ZpUVFQU1B2TkpSQmNZQnJ1SUwwd0ZDMEhiSTJBSGZBYzVXaVgwUExLdTBaNzZ3QWxWcGgzQnlWTGJBL1dZc0lTWDY2ZkVoZ3RTSWI2T3N1RHc9PSJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiI5NDcwMjcyMjc2Njo0MUBzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJXZzZVc2VoeitndnpsdDdmZEZMdUhJNlFUTVRWQllYQlFjOFd4NHBCSWRZIn19XSwicGxhdGZvcm0iOiJzbWJhIiwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzIzNTUyNDIzLCJteUFwcFN0YXRlS2V5SWQiOiJBQUFBQUZyYiJ9";
global.MONGODB = process.env.MONGODB_URI || "";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.sudo = process.env.SUDO
  ? process.env.SUDO.replace(/[\s+]/g, "")
  : "null";
global.owner = process.env.OWNER_NUMBER
  ? process.env.OWNER_NUMBER.replace(/[\s+]/g, "")
  : "94789958225";
global.THUMB_IMAGE =
  process.env.THUMB_IMAGE ||
  process.env.IMAGE ||
  "https://i.postimg.cc/FssKzLK7/20240622-140407.jpg,https://i.postimg.cc/FssKzLK7/20240622-140407.jpg";
global.userImages =
  process.env.USER_IMAGES ||
  "https://i.postimg.cc/3wrf9ccK/IMG-20240804-WA0000.jpg";
///===========[global iMPORTS]====================//

module.exports = {
  menu: process.env.MENU || "",
  HANDLERS: process.env.PREFIX || ".",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "`RCD-MD`",
  author: process.env.PACK_AUTHER || "RCD-MD",
  packname: process.env.PACK_NAME || "SACHIN",
  botname: process.env.BOT_NAME || "RCD-MD",
  ownername: process.env.OWNER_NAME || "RCD",
  errorChat: process.env.ERROR_CHAT || "",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "public",
  LANG: (process.env.THEME || "WhatsApp").toUpperCase(),
};
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "";
global.location = "";
global.allowJids = process.env.ALLOW_JID || "null";
global.blockJids = process.env.BLOCK_JID || "null";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Africa/Lagos";
global.github = process.env.GITHUB || "https://github.com/DEXTER-BOTS/RCD-MD";
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029Vag1WQFJf05dF0pQeU3u/161";
global.website = process.env.GURL || "https://chat.whatsapp.com/Cry8eSzZqW27t9H8uOcRIR";
global.devs = "94789958225,94757660788,94778668193,94785274495";
global.msg_style = process.env.STYLE || "4";
global.session_reset = process.env.SS_RESET || "false";
global.gdbye = process.env.GOODBYE || "false";
global.wlcm = process.env.WELCOME || "false";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
(global.disablegroup = process.env.DISABLE_GROUPS || "false"),
  (global.MsgsInLog = process.env.MSGS_IN_LOG || "true");
global.waPresence = process.env.WAPRESENCE || "recording";
global.readcmds = process.env.READ_COMMAND || "false";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null";
global.read_status = process.env.AUTO_READ_STATUS || "ture";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "null";
global.read_status_from = process.env.READ_STATUS_FROM || "null";
global.api_smd = "https://api-smd-1.vercel.app";
global.scan = "https://mainv2-f66485a0f702.herokuapp.com/";
global.isMongodb = false;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
});
