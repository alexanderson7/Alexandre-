const axios = require('axios');

const Prefixes = [
  '/ai',
  'préscilia,
  'Ronald',
  '+ai',
  'shinmon,
  'ai',
  'ask',
];

module.exports = {
  config: {
    name: "ask",
    version: 1.0,
    author: "OtinXSandip",
    longDescription: "AI",
    category: "ai",
    guide: {
      en: "{p} questions",
    },
  },
  onStart: async function () {},
  onChat: async function ({ api, event, args, message }) {
    try {
      
      const prefix = Prefixes.find((p) => event.body && event.body.toLowerCase().startsWith(p));
      if (!prefix) {
        return; // Invalid prefix, ignore the command
      }
      const prompt = event.body.substring(prefix.length).trim();
   if (!prompt) {
        await message.reply("𝘀𝗮𝗹𝘂𝘁 👋 𝗥𝗼𝗻𝗮𝗹𝗱 𝗺'𝗮 𝗰𝗼𝗻𝗳𝗶𝗲́ 𝗹𝗮 𝘁𝗮̂𝗰𝗵𝗲 𝗱𝗲 𝗿𝗲́𝗽𝗼𝗻𝗱𝗿𝗲 𝗮̀ 𝘁𝗼𝘂𝘁𝗲𝘀 𝘃𝗼𝘀 𝗾𝘂𝗲𝘀𝘁𝗶𝗼𝗻𝘀 𝗮𝗹𝗼𝗿𝘀 𝗾𝘂'𝗲𝗹𝗹𝗲 𝗲𝘀𝘁 𝘃𝗼𝘁𝗿𝗲 𝗾𝘂𝗲𝘀𝘁𝗶𝗼𝗻𝘀 🤓  ");
        return;
      }


      const response = await axios.get(`https://ronald-projet-7.onrender.com/gpt?prompt=${encodeURIComponent(prompt)}`);
      const answer = response.data.answer;

 
    await message.reply({ body: `𝗥𝗼𝗻𝗮𝗹𝗱
--------------------
${answer}
𝗥𝗼𝗻𝗮𝗹𝗱`,
});

   } catch (error) {
      console.error("Error:", error.message);
    }
  }
}
