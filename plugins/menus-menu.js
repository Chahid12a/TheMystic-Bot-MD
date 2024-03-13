import fetch from 'node-fetch';
const handler = async (m, {conn, usedPrefix, usedPrefix: _p, __dirname, text, isPrems}) => {
  if (usedPrefix == 'a' || usedPrefix == 'A') return;
  try {
    const pp = imagen4;
    // let vn = './media/menu.mp3'
    const img = './Menu2.jpg';
    const d = new Date(new Date + 3600000);
    const locale = 'es-ES';
    const week = d.toLocaleDateString(locale, {weekday: 'long'});
    const date = d.toLocaleDateString(locale, {day: '2-digit', month: '2-digit', year: 'numeric'});
    const _uptime = process.uptime() * 1000;
    const uptime = clockString(_uptime);
    const user = global.db.data.users[m.sender];
    const {money, joincount} = global.db.data.users[m.sender];
    const {exp, limit, level, role} = global.db.data.users[m.sender];
    const rtotalreg = Object.values(global.db.data.users).filter((user) => user.registered == true).length;
    const rtotal = Object.entries(global.db.data.users).length || '0'
    const more = String.fromCharCode(8206);
    const readMore = more.repeat(850);
    const taguser = '@' + m.sender.split('@s.whatsapp.net')[0];
    const doc = ['pdf', 'zip', 'vnd.openxmlformats-officedocument.presentationml.presentation', 'vnd.openxmlformats-officedocument.spreadsheetml.sheet', 'vnd.openxmlformats-officedocument.wordprocessingml.document'];
    const document = doc[Math.floor(Math.random() * doc.length)];
    const str = `Bot Whatsapp
▢ *السلام عليكم* ${taguser}
حساباتي على مواقع التواصل الاجتماعي:
_________________________________
 • Instagram: https://instagram.com/chahid_mohammed1
 • Facebook : https://www.facebook.com/chahid01s -my account-
 • Facebook : https://www.facebook.com/chahidlog -my page-
 __________________________________
 ▢ *Nivel:* ${level}
 ▢ *Experiencia:* ${exp}
 ▢ *Rango:* ${role}
 ▢ *Diamantes:* ${limit}
 ▢ *MysticCoins:* ${money}
 ▢ *Tokens:* ${joincount}
 ▢ *Premium:* ${user.premiumTime > 0 ? '✅' : (isPrems ? '✅' : '❌') || ''}
 ${readMore}

*الاوامر التحميل*
تحميل من يوتيوب:
 ▢ _${usedPrefix}ytmp4 *<url>*_
 ▢ _${usedPrefix}ytmp3 *<url>*_
 تحميل من فيسبوك:
 ▢ _${usedPrefix}facebook *<url>*_
  تحميل من انستغرام:
 ▢ _${usedPrefix}instagram *<url>*_
 ▢ _${usedPrefix}igstory *<usr>*_
 تحميل من سبوتيفاي:
 ▢ _${usedPrefix}spotify *<txt>*_
  تحميل من تيكتوك:
  ▢ _${usedPrefix}tiktok *<url>*_
 ▢ _${usedPrefix}tiktokimg *<url>*_
 ▢ _${usedPrefix}pptiktok *<usr>*_
 تحميل من ميديافير و خوجل درايف
 ▢ _${usedPrefix}mediafire *<url>*_ 
 ▢ _${usedPrefix}gdrive *<url>*_
 تحميل التطبيقات:
 ▢ _${usedPrefix}dapk2 *<url>*_
 ▢ _${usedPrefix}modapk *<txt>*_
 باقي مواقع اخري..
 ▢ _${usedPrefix}play *<txt>*_
 ▢ _${usedPrefix}play2 *<txt>*_
 ▢ _${usedPrefix}play.1 *<txt>*_
 ▢ _${usedPrefix}play.2 *<txt>*_
 ▢ _${usedPrefix}playdoc *<txt>*_
 ▢ _${usedPrefix}playdoc2 *<txt>*_
 ▢ _${usedPrefix}playlist *<txt>*_
 ▢ _${usedPrefix}ytshort *<url>*_
 ▢ _${usedPrefix}ytmp3doc *<url>*_
 ▢ _${usedPrefix}ytmp4doc *<url>*_
 ▢ _${usedPrefix}videodoc *<url>*_
 ▢ _${usedPrefix}pinterest *<txt>*_
 ▢ _${usedPrefix}gitclone *<url>*_
 ▢ _${usedPrefix}twitter *<url>*_
 ▢ _${usedPrefix}ringtone *<txt>*_
 ▢ _${usedPrefix}soundcloud *<txt>*_
 ▢ _${usedPrefix}stickerpack *<url>*_
 ▢ _${usedPrefix}wallpaper *<txt>*_

 *الدكاء الاصطناعي*
 
 ▢ _${usedPrefix}ai_
 ▢ _${usedPrefix}chatgpt *<txt>*_

 الاوامر البحت
  ▢ _${usedPrefix}google *<txt>*_
  ▢ _${usedPrefix}ytsearch *<txt>*_
  ▢ _${usedPrefix}playstore *<txt>*_
  ▢ _${usedPrefix}githubsearch *<txt>*_
  ▢ _${usedPrefix}pelisplus *<txt>*_
  ▢ _${usedPrefix}stickersearch *<txt>*_
  ▢ _${usedPrefix}stickersearch2 *<txt>*_
  ▢ _${usedPrefix}animeinfo *<txt>*_
  ▢ _${usedPrefix}letra *<txt>*_
  ▢ _${usedPrefix}wikipedia *<txt>*_


 *خاص بالمجموعات*

  ▢ _${usedPrefix}add *num>*_
  ▢ _${usedPrefix}kick *<@tag>*_
  ▢ _${usedPrefix}kick2 *<@tag>*_
  ▢ _${usedPrefix}listanum *<txt>*_
  ▢ _${usedPrefix}kicknum *<txt>*_
  ▢ _${usedPrefix}grupo *<abrir/cerrar>*_
  ▢ _${usedPrefix}grouptime *<opcion> <tiempo>*_
  ▢ _${usedPrefix}promote *<@tag>*_
  ▢ _${usedPrefix}demote *<@tag>*_
  ▢ _${usedPrefix}infogroup_
  ▢ _${usedPrefix}resetlink_
  ▢ _${usedPrefix}link_
  ▢ _${usedPrefix}setname *<txt>*_
  ▢ _${usedPrefix}setdesc *<txt>*_
  ▢ _${usedPrefix}invocar *<txt>*_
  ▢ _${usedPrefix}setwelcome *<txt>*_
  ▢ _${usedPrefix}setbye *<txt>*_
  ▢ _${usedPrefix}hidetag *<txt>*_
  ▢ _${usedPrefix}hidetag *<audio>*_
  ▢ _${usedPrefix}hidetag *<video>*_
  ▢ _${usedPrefix}hidetag *<img>*_
  ▢ _${usedPrefix}warn *<@tag>*_
  ▢ _${usedPrefix}unwarn *<@tag>*_
  ▢ _${usedPrefix}listwarn_
  ▢ _${usedPrefix}fantasmas_
  ▢ _${usedPrefix}destraba_
  ▢ _${usedPrefix}setpp *<img>*_
  ▢ _admins *<txt>*_ (sin prefijo)


 _*< EFECTOS & LOGOS />*_

  ▢ _${usedPrefix}logos *<efecto> <txt>*_
  ▢ _${usedPrefix}logochristmas *<txt>*_
  ▢ _${usedPrefix}logocorazon *<txt>*_
  ▢ _${usedPrefix}ytcomment *<txt>*_
  ▢ _${usedPrefix}hornycard *<@tag>*_
  ▢ _${usedPrefix}simpcard *<@tag>*_
  ▢ _${usedPrefix}lolice *<@tag>*_
  ▢ _${usedPrefix}itssostupid_
  ▢ _${usedPrefix}pixelar_
  ▢ _${usedPrefix}blur_

 *الصور*

 
  ▢ _${usedPrefix}cristianoronaldo_
  ▢ _${usedPrefix}messi_
  ▢ _${usedPrefix}cat_
  ▢ _${usedPrefix}dog_
  ▢ _${usedPrefix}meme_
  ▢ _${usedPrefix}wpmontaña_
  ▢ _${usedPrefix}pubg_
  ▢ _${usedPrefix}wpgaming_
  ▢ _${usedPrefix}wprandom_
  ▢ _${usedPrefix}wpvehiculo_
  ▢ _${usedPrefix}technology_
  ▢ _${usedPrefix}doraemon_
  ▢ _${usedPrefix}hacker_
  ▢ _${usedPrefix}planeta_
  ▢ _${usedPrefix}randomprofile_

 *الادوات*
  ▢ _${usedPrefix}reminihd
  ▢ _${usedPrefix}inspect *<wagc_url>*_
  ▢ _${usedPrefix}delchatgpt
  ▢ _${usedPrefix}gptvoz *<txt>*_
  ▢ _${usedPrefix}dall-e *<txt>*_
  ▢ _${usedPrefix}spamwa *num|txt|cant>*_
  ▢ _${usedPrefix}tamaño *<cant> <img / video>*_
  ▢ _${usedPrefix}readviewonce *<img / video>*_
  ▢ _${usedPrefix}clima *<país> <ciudad>*_
  ▢ _${usedPrefix}encuesta *<txt1|txt2>*_
  ▢ _${usedPrefix}afk *<motivo>*_
  ▢ _${usedPrefix}ocr *<responde a img>*_
  ▢ _${usedPrefix}hd *<responde a img>*_
  ▢ _${usedPrefix}acortar *<url>*_
  ▢ _${usedPrefix}calc *<operacion>*_
  ▢ _${usedPrefix}del *<msj>*_
  ▢ _${usedPrefix}whatmusic *<audio>*_
  ▢ _${usedPrefix}readqr *<img>*_
  ▢ _${usedPrefix}qrcode *<txt>*_
  ▢ _${usedPrefix}readmore *<txt1|txt2>*_
  ▢ _${usedPrefix}styletext *<txt>*_
  ▢ _${usedPrefix}traducir *<txt>*_
  ▢ _${usedPrefix}nowa *num>*_
  ▢ _${usedPrefix}covid *<pais>*_
  ▢ _${usedPrefix}horario_
  ▢ _${usedPrefix}dropmail_
  ▢ _${usedPrefix}igstalk *<usr>*_
  ▢ _${usedPrefix}tiktokstalk *<usr>*_
  ▢ _${usedPrefix}img *<txt>*_

 *الملصقات*

  ▢ _${usedPrefix}sticker *<responder a img o video>*_
  ▢ _${usedPrefix}sticker *<url>*_
  ▢ _${usedPrefix}sticker2 *<responder a img o video>*_
  ▢ _${usedPrefix}sticker2 *<url>*_
  ▢ _${usedPrefix}s *<responder a img o video>*_
  ▢ _${usedPrefix}s *<url>*_
  ▢ _${usedPrefix}emojimix *<emoji 1>&<emoji 2>*_
  ▢ _${usedPrefix}scircle *<img>*_
  ▢ _${usedPrefix}sremovebg *<img>*_
  ▢ _${usedPrefix}semoji *<tipo> <emoji>*_
  ▢ _${usedPrefix}qc *<txt>*_
  ▢ _${usedPrefix}attp *<txt>*_
  ▢ _${usedPrefix}attp2 *<txt>*_
  ▢ _${usedPrefix}attp3 *<txt>*_
  ▢ _${usedPrefix}ttp *<txt>*_
  ▢ _${usedPrefix}ttp2 *<txt>*_
  ▢ _${usedPrefix}ttp3 *<txt>*_
  ▢ _${usedPrefix}ttp4 *<txt>*_
  ▢ _${usedPrefix}ttp5 *<txt>*_
  ▢ _${usedPrefix}pat *<@tag>*_
  ▢ _${usedPrefix}slap *<@tag>*_
  ▢ _${usedPrefix}dado_
  ▢ _${usedPrefix}stickermarker *<efecto> <img>*_
  ▢ _${usedPrefix}stickerfilter *<efecto> <img>*_

*الانتساب إلى البوت*

  ▢ _${usedPrefix}serbot --code_
  ▢ _${usedPrefix}serbot_
  ▢ _${usedPrefix}deletebot_
  ▢ _${usedPrefix}token_
  ▢ _${usedPrefix}stop_
  ▢ _${usedPrefix}bots_
  
 *حول البوت*

  ▢ _${usedPrefix}about_
  ▢ _${usedPrefix}speedtest_
  ▢ _${usedPrefix}report_ _.الابلاغ عن مبزة لاتستغل او اي شيء_
  
*إستخدامك للبوت بشكل صحيح يعني أنك تزيد من إحتمالية أن يبقى البوت شغالا لمدة أطول . لذا إن واجهتك أي مشكلة أرسل رسالة او تريد ان تحدف امرا ارسل رساله الى هذا الرقم*
+212679556171
 `.trim();
    if (m.isGroup) {
      // await conn.sendFile(m.chat, vn, 'menu.mp3', null, m, true, { type: 'audioMessage', ptt: true})
      const fkontak2 = {'key': {'participants': '0@s.whatsapp.net', 'remoteJid': 'status@broadcast', 'fromMe': false, 'id': 'Halo'}, 'message': {'contactMessage': {'vcard': `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`}}, 'participant': '0@s.whatsapp.net'};
      conn.sendMessage(m.chat, {image: pp, caption: str.trim(), mentions: [...str.matchAll(/@([0-9]{5,16}|0)/g)].map((v) => v[1] + '@s.whatsapp.net')}, {quoted: m});
    } else {
      // await conn.sendFile(m.chat, vn, 'menu.mp3', null, m, true, { type: 'audioMessage', ptt: true})
      const fkontak2 = {'key': {'participants': '0@s.whatsapp.net', 'remoteJid': 'status@broadcast', 'fromMe': false, 'id': 'Halo'}, 'message': {'contactMessage': {'vcard': `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`}}, 'participant': '0@s.whatsapp.net'};
      conn.sendMessage(m.chat, {image: pp, caption: str.trim(), mentions: [...str.matchAll(/@([0-9]{5,16}|0)/g)].map((v) => v[1] + '@s.whatsapp.net')}, {quoted: fkontak2});
    }
  } catch {
    conn.reply(m.chat, '*[ ℹ️ ] Este menu tiene un error interno, por lo cual no fue posible enviarlo.*', m);
  }
};
handler.command = /^(menu|m|memu|memú|help|info|comandos|allmenu|2help|menu1.2|ayuda|commands|commandos|cmd)$/i;
handler.exp = 50;
handler.fail = null;
export default handler;
function clockString(ms) {
  const h = isNaN(ms) ? '--' : Math.floor(ms / 3600000);
  const m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60;
  const s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60;
  return [h, m, s].map((v) => v.toString().padStart(2, 0)).join(':');
}
