const { Client, RichPresence } = require('discord.js-selfbot-v13');
const express = require('express');

const app = express();
app.get('/', (req, res) => res.send('Account 1 Active'));
app.listen(process.env.PORT || 3000, () => console.log('[+] HTTP Server Ready (Acc 1)'));

const client = new Client({ checkUpdate: false });

client.on('ready', () => {
  console.log(`[+] متصل بنجاح: ${client.user.tag}`);

  const r = new RichPresence(client)
    .setApplicationId('1080000000000000000')
    .setType('LISTENING')
    .setName("I'm worn out");

  const largeImage = "https://media.discordapp.net/attachments/1539752870164041780/1550146563337224242/IMG_2513.jpg?ex=6aad45fd&is=6aabf47d&hm=12155892b3750ec5953902aeb7982b5c3a9c94b28ea85049fcef5e07a6d724b7&=&format=webp";
  if (largeImage) r.setAssetsLargeImage(largeImage);

  client.user.setPresence({ activities: [r] });
});

// يقرأ التوكن من إعدادات Render بأمان
client.login(process.env.BOT_TOKEN).catch((err) => {
  console.error(`[-] خطأ في تسجيل دخول Account 1:`, err.message);
});
