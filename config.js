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
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "";




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


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_21_19_12_18_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNDgsXG4gICAgICAgIDE0MixcbiAgICAgICAgMjAzLFxuICAgICAgICAxMDksXG4gICAgICAgIDcsXG4gICAgICAgIDEwNCxcbiAgICAgICAgMTA0LFxuICAgICAgICAxMzUsXG4gICAgICAgIDc0LFxuICAgICAgICAxMTcsXG4gICAgICAgIDIwLFxuICAgICAgICAyNDAsXG4gICAgICAgIDMsXG4gICAgICAgIDU2LFxuICAgICAgICA0MCxcbiAgICAgICAgNTUsXG4gICAgICAgIDEzOSxcbiAgICAgICAgMTU1LFxuICAgICAgICAxNDQsXG4gICAgICAgIDExNSxcbiAgICAgICAgMTk5LFxuICAgICAgICAxMzcsXG4gICAgICAgIDIxOCxcbiAgICAgICAgNTQsXG4gICAgICAgIDIwMCxcbiAgICAgICAgMTAxLFxuICAgICAgICAxNTEsXG4gICAgICAgIDE2MixcbiAgICAgICAgMjMyLFxuICAgICAgICAyMDUsXG4gICAgICAgIDI1NCxcbiAgICAgICAgNjZcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTA4LFxuICAgICAgICAzNyxcbiAgICAgICAgMzgsXG4gICAgICAgIDE5NCxcbiAgICAgICAgMTA0LFxuICAgICAgICAzOSxcbiAgICAgICAgMjQxLFxuICAgICAgICA5NyxcbiAgICAgICAgMTE2LFxuICAgICAgICAxOTIsXG4gICAgICAgIDE3MyxcbiAgICAgICAgMTEwLFxuICAgICAgICA2NyxcbiAgICAgICAgNzgsXG4gICAgICAgIDE4NSxcbiAgICAgICAgNjcsXG4gICAgICAgIDE4NyxcbiAgICAgICAgMjIsXG4gICAgICAgIDE0MSxcbiAgICAgICAgMSxcbiAgICAgICAgMjI5LFxuICAgICAgICA0MSxcbiAgICAgICAgMjA0LFxuICAgICAgICAyNTEsXG4gICAgICAgIDExNSxcbiAgICAgICAgMTU2LFxuICAgICAgICAxNyxcbiAgICAgICAgMTIxLFxuICAgICAgICAyNDgsXG4gICAgICAgIDIxOCxcbiAgICAgICAgMTM2LFxuICAgICAgICAxMDZcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIyNCxcbiAgICAgICAgOTUsXG4gICAgICAgIDc5LFxuICAgICAgICAyNDQsXG4gICAgICAgIDEyMSxcbiAgICAgICAgMTY4LFxuICAgICAgICAxMCxcbiAgICAgICAgMTI0LFxuICAgICAgICAyNDAsXG4gICAgICAgIDIwLFxuICAgICAgICAyMTUsXG4gICAgICAgIDEzMyxcbiAgICAgICAgODEsXG4gICAgICAgIDEyOCxcbiAgICAgICAgMyxcbiAgICAgICAgMTQzLFxuICAgICAgICAxNDAsXG4gICAgICAgIDE4OCxcbiAgICAgICAgMjM2LFxuICAgICAgICAyOSxcbiAgICAgICAgMjMsXG4gICAgICAgIDIyLFxuICAgICAgICAyMCxcbiAgICAgICAgMTUzLFxuICAgICAgICA5NSxcbiAgICAgICAgODYsXG4gICAgICAgIDIwNyxcbiAgICAgICAgMTk1LFxuICAgICAgICAxMTMsXG4gICAgICAgIDUyLFxuICAgICAgICA4OCxcbiAgICAgICAgODJcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgOTksXG4gICAgICAgIDIxOCxcbiAgICAgICAgMTk2LFxuICAgICAgICAyMDcsXG4gICAgICAgIDE3NyxcbiAgICAgICAgMjM3LFxuICAgICAgICA4MCxcbiAgICAgICAgMjMzLFxuICAgICAgICAxNjQsXG4gICAgICAgIDE4NSxcbiAgICAgICAgNzIsXG4gICAgICAgIDU2LFxuICAgICAgICA1NyxcbiAgICAgICAgMixcbiAgICAgICAgMTkwLFxuICAgICAgICAwLFxuICAgICAgICA5NyxcbiAgICAgICAgMTU1LFxuICAgICAgICA4OCxcbiAgICAgICAgMjI2LFxuICAgICAgICAxNyxcbiAgICAgICAgNDEsXG4gICAgICAgIDIxNCxcbiAgICAgICAgNzQsXG4gICAgICAgIDQ3LFxuICAgICAgICAxNzksXG4gICAgICAgIDE3NCxcbiAgICAgICAgMTgsXG4gICAgICAgIDI1MCxcbiAgICAgICAgMjIyLFxuICAgICAgICAyNDIsXG4gICAgICAgIDc3XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMTIsXG4gICAgICAgIDUxLFxuICAgICAgICAxNTAsXG4gICAgICAgIDI0MSxcbiAgICAgICAgMTQsXG4gICAgICAgIDksXG4gICAgICAgIDIxOSxcbiAgICAgICAgMjMwLFxuICAgICAgICAxNTIsXG4gICAgICAgIDEwLFxuICAgICAgICAwLFxuICAgICAgICAzOCxcbiAgICAgICAgMjI2LFxuICAgICAgICA1NyxcbiAgICAgICAgMjUwLFxuICAgICAgICA3OCxcbiAgICAgICAgMjE3LFxuICAgICAgICAxNzksXG4gICAgICAgIDYzLFxuICAgICAgICAyMDksXG4gICAgICAgIDEwNSxcbiAgICAgICAgOTAsXG4gICAgICAgIDExLFxuICAgICAgICA0NixcbiAgICAgICAgMTY0LFxuICAgICAgICAzNSxcbiAgICAgICAgMjIsXG4gICAgICAgIDI0NixcbiAgICAgICAgMTc5LFxuICAgICAgICAxOTAsXG4gICAgICAgIDI0MCxcbiAgICAgICAgODBcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTIyLFxuICAgICAgICA2OSxcbiAgICAgICAgMTQ4LFxuICAgICAgICA0LFxuICAgICAgICAyMCxcbiAgICAgICAgMjEsXG4gICAgICAgIDE3OSxcbiAgICAgICAgNDMsXG4gICAgICAgIDE5MCxcbiAgICAgICAgNjYsXG4gICAgICAgIDEwOSxcbiAgICAgICAgNzIsXG4gICAgICAgIDIxNCxcbiAgICAgICAgOTcsXG4gICAgICAgIDM4LFxuICAgICAgICAxMjMsXG4gICAgICAgIDcyLFxuICAgICAgICAzNSxcbiAgICAgICAgNzMsXG4gICAgICAgIDI0NixcbiAgICAgICAgMjE4LFxuICAgICAgICA2NixcbiAgICAgICAgNTMsXG4gICAgICAgIDEyNyxcbiAgICAgICAgOTUsXG4gICAgICAgIDExLFxuICAgICAgICAxNzQsXG4gICAgICAgIDIwOCxcbiAgICAgICAgMTAwLFxuICAgICAgICAyMyxcbiAgICAgICAgNTAsXG4gICAgICAgIDdcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMjA4LFxuICAgICAgICAgIDE1LFxuICAgICAgICAgIDYxLFxuICAgICAgICAgIDI0NCxcbiAgICAgICAgICAxNjQsXG4gICAgICAgICAgNDIsXG4gICAgICAgICAgMTUsXG4gICAgICAgICAgMTIsXG4gICAgICAgICAgMTc2LFxuICAgICAgICAgIDI1LFxuICAgICAgICAgIDE0MyxcbiAgICAgICAgICAyNDUsXG4gICAgICAgICAgNTMsXG4gICAgICAgICAgNzAsXG4gICAgICAgICAgMzIsXG4gICAgICAgICAgMzgsXG4gICAgICAgICAgMTMwLFxuICAgICAgICAgIDE3NCxcbiAgICAgICAgICAxMzksXG4gICAgICAgICAgMjUyLFxuICAgICAgICAgIDIwNixcbiAgICAgICAgICAxOTcsXG4gICAgICAgICAgMTczLFxuICAgICAgICAgIDI1MCxcbiAgICAgICAgICAxODEsXG4gICAgICAgICAgMTU4LFxuICAgICAgICAgIDE1NixcbiAgICAgICAgICAyMTEsXG4gICAgICAgICAgMTc3LFxuICAgICAgICAgIDEwOCxcbiAgICAgICAgICAyMjcsXG4gICAgICAgICAgODZcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNjUsXG4gICAgICAgICAgNjEsXG4gICAgICAgICAgMTQ4LFxuICAgICAgICAgIDE1MSxcbiAgICAgICAgICAzNCxcbiAgICAgICAgICAxOTUsXG4gICAgICAgICAgMjMyLFxuICAgICAgICAgIDE0NSxcbiAgICAgICAgICA5NCxcbiAgICAgICAgICAxMTQsXG4gICAgICAgICAgMTIsXG4gICAgICAgICAgMTA3LFxuICAgICAgICAgIDE0NixcbiAgICAgICAgICAxOTksXG4gICAgICAgICAgMTQ2LFxuICAgICAgICAgIDE3NSxcbiAgICAgICAgICAxNjQsXG4gICAgICAgICAgMjM4LFxuICAgICAgICAgIDExNSxcbiAgICAgICAgICA2NyxcbiAgICAgICAgICA2MCxcbiAgICAgICAgICAxNDQsXG4gICAgICAgICAgMTk2LFxuICAgICAgICAgIDI0NSxcbiAgICAgICAgICAyMjYsXG4gICAgICAgICAgMTAwLFxuICAgICAgICAgIDE4MyxcbiAgICAgICAgICAxMzksXG4gICAgICAgICAgMTEwLFxuICAgICAgICAgIDI0OCxcbiAgICAgICAgICAxNjUsXG4gICAgICAgICAgNDVcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAwLFxuICAgICAgICAyNTEsXG4gICAgICAgIDE5MCxcbiAgICAgICAgMjEzLFxuICAgICAgICA3MSxcbiAgICAgICAgMTQxLFxuICAgICAgICA5NyxcbiAgICAgICAgMjQ2LFxuICAgICAgICAyMzEsXG4gICAgICAgIDEyNixcbiAgICAgICAgMjAxLFxuICAgICAgICAyMTYsXG4gICAgICAgIDg4LFxuICAgICAgICA1NixcbiAgICAgICAgMjM4LFxuICAgICAgICA1OSxcbiAgICAgICAgMjM0LFxuICAgICAgICAyNDQsXG4gICAgICAgIDIzNixcbiAgICAgICAgNjQsXG4gICAgICAgIDE0OCxcbiAgICAgICAgODgsXG4gICAgICAgIDg0LFxuICAgICAgICAyOSxcbiAgICAgICAgMjAxLFxuICAgICAgICA4NixcbiAgICAgICAgOSxcbiAgICAgICAgMjAsXG4gICAgICAgIDEyMCxcbiAgICAgICAgMTU5LFxuICAgICAgICAxMjEsXG4gICAgICAgIDE0LFxuICAgICAgICA4MixcbiAgICAgICAgMTE2LFxuICAgICAgICA1NSxcbiAgICAgICAgODQsXG4gICAgICAgIDE5NyxcbiAgICAgICAgNDIsXG4gICAgICAgIDYwLFxuICAgICAgICAxNDMsXG4gICAgICAgIDIwOSxcbiAgICAgICAgMTUzLFxuICAgICAgICAxMTAsXG4gICAgICAgIDE4MyxcbiAgICAgICAgMyxcbiAgICAgICAgMTY0LFxuICAgICAgICA1NSxcbiAgICAgICAgMzIsXG4gICAgICAgIDI0NSxcbiAgICAgICAgMTQ2LFxuICAgICAgICAyNTMsXG4gICAgICAgIDIwNCxcbiAgICAgICAgMjQwLFxuICAgICAgICA4OSxcbiAgICAgICAgNDYsXG4gICAgICAgIDE2NCxcbiAgICAgICAgMjQ3LFxuICAgICAgICA5OSxcbiAgICAgICAgMjA3LFxuICAgICAgICAxOTMsXG4gICAgICAgIDM1LFxuICAgICAgICAyNixcbiAgICAgICAgMTExLFxuICAgICAgICA2XG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAyNTMsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwieWlmeTQ3NTluNFpocTl4djdEY3VBZUhZdGJEYXQ1WUJPNm45NFIxMkFHST1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW1xuICAgIHtcbiAgICAgIFwia2V5XCI6IHtcbiAgICAgICAgXCJyZW1vdGVKaWRcIjogXCIyMjA3Njk3MDg5QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZnJvbU1lXCI6IHRydWUsXG4gICAgICAgIFwiaWRcIjogXCI4MUE1Mzc3QUFCODg3RjA3NDQyQUZBRkUyMkUyNjcyMlwiXG4gICAgICB9LFxuICAgICAgXCJtZXNzYWdlVGltZXN0YW1wXCI6IDE3MzQ1NTY3NjVcbiAgICB9XG4gIF0sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiajVfTHdhRTVROWVqbkhwTVJmWWNyd1wiLFxuICBcInBob25lSWRcIjogXCJjNWRkNDYxNy1kOWQxLTRlZDgtOThkNC03ZmU3NjkwMDA2OWRcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgNDAsXG4gICAgICAyMDUsXG4gICAgICAyMTEsXG4gICAgICAzLFxuICAgICAgNDIsXG4gICAgICAyMzksXG4gICAgICAyMDIsXG4gICAgICAxOTAsXG4gICAgICAxMjYsXG4gICAgICAxMzUsXG4gICAgICA4MCxcbiAgICAgIDUyLFxuICAgICAgMTkwLFxuICAgICAgMTUzLFxuICAgICAgODIsXG4gICAgICAyMDYsXG4gICAgICA2MSxcbiAgICAgIDYwLFxuICAgICAgMTIsXG4gICAgICAxMDFcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMjA1LFxuICAgICAgNTUsXG4gICAgICA1LFxuICAgICAgMTkwLFxuICAgICAgNTksXG4gICAgICA2MCxcbiAgICAgIDE1MSxcbiAgICAgIDMzLFxuICAgICAgMTQ5LFxuICAgICAgMTc5LFxuICAgICAgMjI5LFxuICAgICAgMTAzLFxuICAgICAgNjIsXG4gICAgICAzNCxcbiAgICAgIDE0MyxcbiAgICAgIDE5OSxcbiAgICAgIDIwMyxcbiAgICAgIDEzMSxcbiAgICAgIDE4MyxcbiAgICAgIDIyM1xuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCI3R0VLMkMzMlwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiMjIwNzY5NzA4OToyOUBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibGlkXCI6IFwiMzA3NTM0NzYzMjE3MjoyOUBsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNKYjh3T1VIRU5UNGpMc0dHQVFnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcInVIbFk1YzVRdndLblBEMXhtSk1YZnNCSmVMR1ptRzh4bFhaRUFzMXJIV1U9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiaFY3aHpMaXN3bVlmaEZRUENDVjgzMU81RlZ0RlhkNWxFUkRiT0ZRb016S3VXelAwZWoybTVkV2RLcXYyMjZpMTI2UHVqMjA2WUdINzM3TUJZVzhmRFE9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwidGJFSGM2aUxzaUcxeGJkdEg5ZXZKQ0JwVmtqY3N6RTRabTUrSUg3bUlPMjk3THNVbmI5Vkg5RytnQ0VhZy9hRjRtak5XL3p0d0U1MFNLTlY2bzdrRHc9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMjIwNzY5NzA4OToyOUBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDE4NCxcbiAgICAgICAgICAxMjEsXG4gICAgICAgICAgODgsXG4gICAgICAgICAgMjI5LFxuICAgICAgICAgIDIwNixcbiAgICAgICAgICA4MCxcbiAgICAgICAgICAxOTEsXG4gICAgICAgICAgMixcbiAgICAgICAgICAxNjcsXG4gICAgICAgICAgNjAsXG4gICAgICAgICAgNjEsXG4gICAgICAgICAgMTEzLFxuICAgICAgICAgIDE1MixcbiAgICAgICAgICAxNDcsXG4gICAgICAgICAgMjMsXG4gICAgICAgICAgMTI2LFxuICAgICAgICAgIDE5MixcbiAgICAgICAgICA3MyxcbiAgICAgICAgICAxMjAsXG4gICAgICAgICAgMTc3LFxuICAgICAgICAgIDE1MyxcbiAgICAgICAgICAxNTIsXG4gICAgICAgICAgMTExLFxuICAgICAgICAgIDQ5LFxuICAgICAgICAgIDE0OSxcbiAgICAgICAgICAxMTgsXG4gICAgICAgICAgNjgsXG4gICAgICAgICAgMixcbiAgICAgICAgICAyMDUsXG4gICAgICAgICAgMTA3LFxuICAgICAgICAgIDI5LFxuICAgICAgICAgIDEwMVxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwiYW5kcm9pZFwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzM0NTU2NzYwLFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBSFNxXCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFIU3EuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJSZTNvMFhkYVJpQjlYNzVhVklacUxXM0lZUzBOeWxXcS9UQ28xZENZd29ZPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjIwOTE5MjUwMTQsXCJjdXJyZW50SW5kZXhcIjoyLFwiZGV2aWNlSW5kZXhlc1wiOlswLDFdfSxcInRpbWVzdGFtcFwiOlwiMTczNDU0NTY4OTY3MFwifSIKfQ=="  // PUT your SESSION_ID 


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
