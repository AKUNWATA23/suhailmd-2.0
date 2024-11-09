const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT 
global.appUrl=process.env.APP_URL || ""     // put your deploy app/bot url here, for 24/7 for (render , koyeb, glitch)
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || "false" || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || "false" || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/suhailmd-2.0";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://i.ibb.co/TgwRyHR/Ephoto360-com-166de101e03cd7.jpg" || "https://i.ibb.co/bH1kbX0/a4c0b1af253197d4837ff6760d5b81c0.jpg" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "© SuhailTechInfo" 


global.devs = "" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "2348106175304";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || Math.floor(Math.random()*3)  === 1 ?  "true" : "false" ;  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "https://i.ibb.co/pXyNHj8/suhail.jpg" // "image" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923444844060,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com/" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_12_24_11_09_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNDAsXG4gICAgICAgIDE1MixcbiAgICAgICAgMixcbiAgICAgICAgOTYsXG4gICAgICAgIDI3LFxuICAgICAgICA2LFxuICAgICAgICA0LFxuICAgICAgICA0MCxcbiAgICAgICAgMjA0LFxuICAgICAgICAxNzEsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMTA4LFxuICAgICAgICAxMTAsXG4gICAgICAgIDEyMCxcbiAgICAgICAgMTkxLFxuICAgICAgICA4OCxcbiAgICAgICAgMTE4LFxuICAgICAgICAxNjAsXG4gICAgICAgIDExMCxcbiAgICAgICAgNTUsXG4gICAgICAgIDY0LFxuICAgICAgICAxNTIsXG4gICAgICAgIDEyOSxcbiAgICAgICAgMTUzLFxuICAgICAgICAxNTAsXG4gICAgICAgIDY2LFxuICAgICAgICAyMSxcbiAgICAgICAgMTc4LFxuICAgICAgICAyMjEsXG4gICAgICAgIDE3MCxcbiAgICAgICAgMTYsXG4gICAgICAgIDkxXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDcwLFxuICAgICAgICAxNTQsXG4gICAgICAgIDIzMyxcbiAgICAgICAgMTI2LFxuICAgICAgICAxNjEsXG4gICAgICAgIDEzMSxcbiAgICAgICAgMjQ2LFxuICAgICAgICAxNjQsXG4gICAgICAgIDg2LFxuICAgICAgICAxMTEsXG4gICAgICAgIDU1LFxuICAgICAgICAyMjEsXG4gICAgICAgIDg4LFxuICAgICAgICAyNTQsXG4gICAgICAgIDIzLFxuICAgICAgICAzOSxcbiAgICAgICAgNzcsXG4gICAgICAgIDIzNixcbiAgICAgICAgOTMsXG4gICAgICAgIDEyNyxcbiAgICAgICAgMTI3LFxuICAgICAgICA5MyxcbiAgICAgICAgNjksXG4gICAgICAgIDIyNyxcbiAgICAgICAgMTMzLFxuICAgICAgICAxNzcsXG4gICAgICAgIDIxNSxcbiAgICAgICAgMjQsXG4gICAgICAgIDIzMyxcbiAgICAgICAgMjAsXG4gICAgICAgIDI1NSxcbiAgICAgICAgNDlcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDAsXG4gICAgICAgIDEzNSxcbiAgICAgICAgNzYsXG4gICAgICAgIDQ0LFxuICAgICAgICA5MSxcbiAgICAgICAgNjksXG4gICAgICAgIDEyOSxcbiAgICAgICAgMjM2LFxuICAgICAgICAxMjMsXG4gICAgICAgIDEwMSxcbiAgICAgICAgMTAwLFxuICAgICAgICAxOTQsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMjE5LFxuICAgICAgICAyNDEsXG4gICAgICAgIDE1MCxcbiAgICAgICAgMTgxLFxuICAgICAgICAxMzgsXG4gICAgICAgIDE3NixcbiAgICAgICAgMjM0LFxuICAgICAgICA3MCxcbiAgICAgICAgOTYsXG4gICAgICAgIDE2NixcbiAgICAgICAgNTEsXG4gICAgICAgIDE2LFxuICAgICAgICAxLFxuICAgICAgICAyMzksXG4gICAgICAgIDE3OSxcbiAgICAgICAgODIsXG4gICAgICAgIDIyMyxcbiAgICAgICAgMjMzLFxuICAgICAgICA4NVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxOTYsXG4gICAgICAgIDEzLFxuICAgICAgICAyMjgsXG4gICAgICAgIDIyNyxcbiAgICAgICAgMTAsXG4gICAgICAgIDMyLFxuICAgICAgICAxODIsXG4gICAgICAgIDIwMSxcbiAgICAgICAgMjQsXG4gICAgICAgIDE1MSxcbiAgICAgICAgNTEsXG4gICAgICAgIDM3LFxuICAgICAgICA3MixcbiAgICAgICAgMTk0LFxuICAgICAgICAxNjgsXG4gICAgICAgIDM2LFxuICAgICAgICA3LFxuICAgICAgICAyMzYsXG4gICAgICAgIDI3LFxuICAgICAgICAyMTAsXG4gICAgICAgIDg1LFxuICAgICAgICAzLFxuICAgICAgICAxOSxcbiAgICAgICAgMTE4LFxuICAgICAgICA5OCxcbiAgICAgICAgOTgsXG4gICAgICAgIDIxMixcbiAgICAgICAgMTA3LFxuICAgICAgICAyNTEsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMTM1LFxuICAgICAgICA4N1xuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjA4LFxuICAgICAgICAxMixcbiAgICAgICAgNzAsXG4gICAgICAgIDI1LFxuICAgICAgICAyMzEsXG4gICAgICAgIDEyNixcbiAgICAgICAgMjE0LFxuICAgICAgICAxMTUsXG4gICAgICAgIDM3LFxuICAgICAgICAxMjEsXG4gICAgICAgIDE2LFxuICAgICAgICAxNzksXG4gICAgICAgIDY0LFxuICAgICAgICAyMzQsXG4gICAgICAgIDEyLFxuICAgICAgICAyOSxcbiAgICAgICAgMTQ0LFxuICAgICAgICA5MyxcbiAgICAgICAgMjAzLFxuICAgICAgICAxMjMsXG4gICAgICAgIDE2NixcbiAgICAgICAgMTUxLFxuICAgICAgICAxMzIsXG4gICAgICAgIDIwNyxcbiAgICAgICAgMTIyLFxuICAgICAgICAxMjgsXG4gICAgICAgIDE0MixcbiAgICAgICAgNCxcbiAgICAgICAgMTQ5LFxuICAgICAgICAxNDUsXG4gICAgICAgIDE3OSxcbiAgICAgICAgOTJcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNDMsXG4gICAgICAgIDgsXG4gICAgICAgIDIyMCxcbiAgICAgICAgNzEsXG4gICAgICAgIDEyLFxuICAgICAgICAzMCxcbiAgICAgICAgOTIsXG4gICAgICAgIDE5NSxcbiAgICAgICAgODgsXG4gICAgICAgIDI1MSxcbiAgICAgICAgMjA1LFxuICAgICAgICAxNjEsXG4gICAgICAgIDEsXG4gICAgICAgIDEyNSxcbiAgICAgICAgMzAsXG4gICAgICAgIDg0LFxuICAgICAgICA3OSxcbiAgICAgICAgMjMsXG4gICAgICAgIDczLFxuICAgICAgICA4NSxcbiAgICAgICAgOTQsXG4gICAgICAgIDE2LFxuICAgICAgICAxNzUsXG4gICAgICAgIDg3LFxuICAgICAgICAxMDUsXG4gICAgICAgIDE5MixcbiAgICAgICAgNDIsXG4gICAgICAgIDE0OSxcbiAgICAgICAgNTksXG4gICAgICAgIDEyMSxcbiAgICAgICAgMTk2LFxuICAgICAgICAyM1xuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxOTIsXG4gICAgICAgICAgMTM3LFxuICAgICAgICAgIDg1LFxuICAgICAgICAgIDIyNSxcbiAgICAgICAgICAyMDEsXG4gICAgICAgICAgMTcyLFxuICAgICAgICAgIDg0LFxuICAgICAgICAgIDc0LFxuICAgICAgICAgIDE0MixcbiAgICAgICAgICAxMTAsXG4gICAgICAgICAgMTEsXG4gICAgICAgICAgOTUsXG4gICAgICAgICAgMjgsXG4gICAgICAgICAgMTE2LFxuICAgICAgICAgIDk0LFxuICAgICAgICAgIDQzLFxuICAgICAgICAgIDI1MSxcbiAgICAgICAgICAxOTMsXG4gICAgICAgICAgMjQzLFxuICAgICAgICAgIDIxOCxcbiAgICAgICAgICAxNzksXG4gICAgICAgICAgMTE4LFxuICAgICAgICAgIDE2NCxcbiAgICAgICAgICAxNzcsXG4gICAgICAgICAgNzMsXG4gICAgICAgICAgNDgsXG4gICAgICAgICAgMTQ2LFxuICAgICAgICAgIDE4OSxcbiAgICAgICAgICA1OCxcbiAgICAgICAgICA4LFxuICAgICAgICAgIDEzLFxuICAgICAgICAgIDExOVxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAyNyxcbiAgICAgICAgICAyNDcsXG4gICAgICAgICAgMjI3LFxuICAgICAgICAgIDg5LFxuICAgICAgICAgIDU0LFxuICAgICAgICAgIDY5LFxuICAgICAgICAgIDI2LFxuICAgICAgICAgIDI4LFxuICAgICAgICAgIDE0MyxcbiAgICAgICAgICAxODYsXG4gICAgICAgICAgMTQwLFxuICAgICAgICAgIDIwMixcbiAgICAgICAgICA5MixcbiAgICAgICAgICA2NCxcbiAgICAgICAgICA4NSxcbiAgICAgICAgICA2MixcbiAgICAgICAgICA4MCxcbiAgICAgICAgICA4MSxcbiAgICAgICAgICA1OCxcbiAgICAgICAgICA1LFxuICAgICAgICAgIDE2NSxcbiAgICAgICAgICAyMTcsXG4gICAgICAgICAgMjQsXG4gICAgICAgICAgOTAsXG4gICAgICAgICAgMTc3LFxuICAgICAgICAgIDIzMixcbiAgICAgICAgICAxNjUsXG4gICAgICAgICAgMjQ5LFxuICAgICAgICAgIDIyNixcbiAgICAgICAgICAyMjYsXG4gICAgICAgICAgMTU3LFxuICAgICAgICAgIDM3XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNTEsXG4gICAgICAgIDIwOCxcbiAgICAgICAgNjEsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMTQ3LFxuICAgICAgICAxNTksXG4gICAgICAgIDEwNyxcbiAgICAgICAgODUsXG4gICAgICAgIDE0NixcbiAgICAgICAgNzUsXG4gICAgICAgIDE4NixcbiAgICAgICAgMTIsXG4gICAgICAgIDkxLFxuICAgICAgICA2NCxcbiAgICAgICAgMjA4LFxuICAgICAgICAxNTAsXG4gICAgICAgIDI0MyxcbiAgICAgICAgMTk2LFxuICAgICAgICA3NyxcbiAgICAgICAgNjYsXG4gICAgICAgIDE4MCxcbiAgICAgICAgMjUwLFxuICAgICAgICAzMixcbiAgICAgICAgMTY4LFxuICAgICAgICAxNDQsXG4gICAgICAgIDkxLFxuICAgICAgICAxNjQsXG4gICAgICAgIDMxLFxuICAgICAgICAxMzgsXG4gICAgICAgIDY1LFxuICAgICAgICA0MyxcbiAgICAgICAgMTI2LFxuICAgICAgICAxODksXG4gICAgICAgIDIxLFxuICAgICAgICAxMzAsXG4gICAgICAgIDUwLFxuICAgICAgICAyMjYsXG4gICAgICAgIDIwMixcbiAgICAgICAgMjUsXG4gICAgICAgIDEyNCxcbiAgICAgICAgODEsXG4gICAgICAgIDIzMCxcbiAgICAgICAgODYsXG4gICAgICAgIDIxLFxuICAgICAgICA1LFxuICAgICAgICA2NixcbiAgICAgICAgMjAsXG4gICAgICAgIDE3NCxcbiAgICAgICAgMTg0LFxuICAgICAgICAxMjMsXG4gICAgICAgIDEzNixcbiAgICAgICAgMTc3LFxuICAgICAgICAyMixcbiAgICAgICAgMTksXG4gICAgICAgIDg0LFxuICAgICAgICAyMTgsXG4gICAgICAgIDE2OCxcbiAgICAgICAgMjMwLFxuICAgICAgICAyMjAsXG4gICAgICAgIDIzOSxcbiAgICAgICAgMjQxLFxuICAgICAgICAyNDgsXG4gICAgICAgIDM5LFxuICAgICAgICAxNDBcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDEwOSxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJyeitLaEt0ak82bm5oTCtGQ2hCZ3FsNzBOVjQ5RmpMNmFtUTgzeGZscVhRPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJkQnBzakN6LVI2YU9hSXNJZExab1pBXCIsXG4gIFwicGhvbmVJZFwiOiBcImVmYzY1Y2VhLTRjNjMtNDQzNC1hNzcwLTgzYjM3ZDk0YjVjYVwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICA1NyxcbiAgICAgIDE4NyxcbiAgICAgIDExMyxcbiAgICAgIDQ2LFxuICAgICAgMzYsXG4gICAgICA1NCxcbiAgICAgIDE2NSxcbiAgICAgIDEwOSxcbiAgICAgIDEyNCxcbiAgICAgIDI5LFxuICAgICAgMjU1LFxuICAgICAgOTMsXG4gICAgICAyMDYsXG4gICAgICAyOSxcbiAgICAgIDE5LFxuICAgICAgMTE5LFxuICAgICAgMTgwLFxuICAgICAgMTI2LFxuICAgICAgMjEsXG4gICAgICAzMFxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAyMTIsXG4gICAgICAxMjUsXG4gICAgICA4OSxcbiAgICAgIDIxNyxcbiAgICAgIDIwMyxcbiAgICAgIDM3LFxuICAgICAgMTgsXG4gICAgICAyMTAsXG4gICAgICAxMzAsXG4gICAgICAyMDksXG4gICAgICAzMSxcbiAgICAgIDkxLFxuICAgICAgMzUsXG4gICAgICAyMjksXG4gICAgICAyMTgsXG4gICAgICAyMDIsXG4gICAgICAxNTcsXG4gICAgICAyNyxcbiAgICAgIDEwNSxcbiAgICAgIDE4MlxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCJQS0VWTENMU1wiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiMjM0ODEwNjE3NTMwNDoyQHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJsaWRcIjogXCIyNzk4MDA0MDkyNDc4NzU6MkBsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNLNit2ZDhGRVB1b3Zia0dHQUlnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIlRxVkJGbk85aGRhTU8vcmhnZndqZnVQNHV4V01oN2RKQ1dtT0hqNitlRU09XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiTi9VZzlwRzkrNm9odC9mZHd5SUl4SGR5cExKTlJ6TCtmc1UybGRlV3VrZXZzL09VbGxML2lyUUJ5eDIyTEc2YlpHV3Rpb3NrYUxGWmE4bWZyRWRPQ1E9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiWHQwaVpuUW5CNmtybjBwYmdSZFN0dWNwNldHTGxMVEJnK2oxVVloakFwaytIVklyVXR0aGV1Wm9pNlRDYzg5djZNUkdhM2FlaUdLYktVTzdUS1JFaHc9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMjM0ODEwNjE3NTMwNDoyQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgNzgsXG4gICAgICAgICAgMTY1LFxuICAgICAgICAgIDY1LFxuICAgICAgICAgIDIyLFxuICAgICAgICAgIDExNSxcbiAgICAgICAgICAxODksXG4gICAgICAgICAgMTMzLFxuICAgICAgICAgIDIxNCxcbiAgICAgICAgICAxNDAsXG4gICAgICAgICAgNTksXG4gICAgICAgICAgMjUwLFxuICAgICAgICAgIDIyNSxcbiAgICAgICAgICAxMjksXG4gICAgICAgICAgMjUyLFxuICAgICAgICAgIDM1LFxuICAgICAgICAgIDEyNixcbiAgICAgICAgICAyMjcsXG4gICAgICAgICAgMjQ4LFxuICAgICAgICAgIDE4NyxcbiAgICAgICAgICAyMSxcbiAgICAgICAgICAxNDAsXG4gICAgICAgICAgMTM1LFxuICAgICAgICAgIDE4MyxcbiAgICAgICAgICA3MyxcbiAgICAgICAgICA5LFxuICAgICAgICAgIDEwNSxcbiAgICAgICAgICAxNDIsXG4gICAgICAgICAgMzAsXG4gICAgICAgICAgNjIsXG4gICAgICAgICAgMTkwLFxuICAgICAgICAgIDEyMCxcbiAgICAgICAgICA2N1xuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwiYW5kcm9pZFwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzMxMTU1MDcxLFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBQWg3XCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFBaDcuanNvbiI6IHt9Cn0="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.0.1-developement-x",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ GlobalTechInfo ® 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@GlobalTechInfo"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "Suhail-XMD",
  ownername:process.env.OWNER_NAME|| "Suhail-X",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "yepeTQaFk7r9ymusihgXYvdN",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "0cdb1aed858329b9793413672094ce0d";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
