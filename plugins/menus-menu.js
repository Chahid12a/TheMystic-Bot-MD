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
    const str = `
▢ *السلام عليكم* ${taguser}
حساباتي على مواقع التواصل الاجتماعي:
_________________________________
 • Instagram: https://instagram.com/chahid_mohammed1
 
 • Facebook (my account): https://www.facebook.com/chahid01s
 
 • Facebook (my page): https://www.facebook.com/chahidlog 
 __________________________________
 ▢ *مستواك:* ${level}
 ▢ *المستوى الخبرة:* ${exp}
 ▢ *يتراوج:* ${role}
 ▢ *الالماس:* ${limit}
 ▢ *نقاطك:* ${money}
 ▢ *الرموز:* ${joincount}
 ▢ *حالة حسابك:* ${user.premiumTime > 0 ? '✅' : (isPrems ? '✅' : '❌') || ''}
 ${readMore}

*الاوامر التحميل*
__________________________________
تحميل من يوتيوب:
 ▢ _${usedPrefix}ytmp4 *<رابط_الفيديو>*_
 ▢ _${usedPrefix}ytmp4doc *<رابط_الفيديو>*_
 ▢ _${usedPrefix}ytmp3 *<رابط_الفيديو>*_
 ▢ _${usedPrefix}ytshort *<رابط_الفيديو>*_
 ▢ _${usedPrefix}ytmp3doc *<رابط_الفيديو>*_
 __________________________________
 تحميل من فيسبوك:
 ▢ _${usedPrefix}facebook *<رابط_الفيديو>*_
 ▢ _${usedPrefix}fbdl *<رابط_الفيديو>*_
 __________________________________
  تحميل من انستغرام:
 ▢ _${usedPrefix}instagram *<رابط_الفيديو>*_
 ▢ _${usedPrefix}ig *<رابط_الفيديو>*_
 ▢ _${usedPrefix}igstory *<اسم_المستخدم>*_
 __________________________________
 تحميل من سبوتيفاي:
 ▢ _${usedPrefix}spotify *<اسم_مغني_والاغنية>*_
 __________________________________
  تحميل من تيكتوك:
 ▢ _${usedPrefix}tiktok *<url>*_
 ▢ _${usedPrefix}tiktokimg *<url>*_
 ▢ _${usedPrefix}pptiktok *<usr>*_
 __________________________________
 تحميل من ميديافير و خوجل درايف
 ▢ _${usedPrefix}mediafire *<url>*_ 
 ▢ _${usedPrefix}gdrive *<url>*_
 __________________________________
 تحميل التطبيقات:
 ▢ _${usedPrefix}dapk2 *<url>*_
 ▢ _${usedPrefix}modapk *<txt>*_
 __________________________________
 باقي مواقع اخري..
 ▢ _${usedPrefix}play *<txt>*_
 ▢ _${usedPrefix}play2 *<txt>*_
 ▢ _${usedPrefix}play.1 *<txt>*_
 ▢ _${usedPrefix}play.2 *<txt>*_
 ▢ _${usedPrefix}playdoc *<txt>*_
 ▢ _${usedPrefix}playdoc2 *<txt>*_
 ▢ _${usedPrefix}playlist *<txt>*_
 ▢ _${usedPrefix}videodoc *<url>*_
 ▢ _${usedPrefix}pinterest *<txt>*_
 ▢ _${usedPrefix}gitclone *<url>*_
 ▢ _${usedPrefix}twitter *<url>*_
 ▢ _${usedPrefix}ringtone *<txt>*_
 ▢ _${usedPrefix}soundcloud *<txt>*_
 ▢ _${usedPrefix}stickerpack *<url>*_
__________________________________
 *الدكاء الاصطناعي*
 ▢ _${usedPrefix}ai_
 ▢ _${usedPrefix}chatgpt *<txt>*_
__________________________________
*خدمة البريد المؤقت*
_هذه الميزة تمكنكم من انشاء حسابات مختلفة باقي المواقع متال : فيسبو...ولأجل الاستفادة قم بكتابة_
  ▢ _${usedPrefix}dropmail_
  __________________________________
 الاوامر البحت
  ▢ _${usedPrefix}google *<txt>*_
  ▢ _${usedPrefix}ss <رابط موضوع URL>_
  ▢ _${usedPrefix}wikipedia *<txt>*_
  ▢ _${usedPrefix}ytsearch *<txt>*_
  ▢ _${usedPrefix}playstore *<txt>*_
__________________________________
*رفع الملفات*
 ▢ _${usedPrefix}tr_ *<رفع صورة على الانترنت>*
▢ _${usedPrefix}trv_ *<رفع فيديو على الانترنت>*
 __________________________________
  *حالتك*
  ▢ _${usedPrefix}nassi7a_
  ▢ _${usedPrefix}romantic_
__________________________________
  *الدين الاسلامي*
 ▢ _${usedPrefix}asmaeallah_
 
__________________________________

 _*انشاء لوغو LOGO*_
  ▢ _${usedPrefix}logos *<efecto> <txt>*_
  ▢ _${usedPrefix}logochristmas *<txt>*_
  ▢ _${usedPrefix}logocorazon *<txt>*_
  ▢ _${usedPrefix}ytcomment *<txt>*_
__________________________________
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
__________________________________
 *الادوات*
  ▢ _${usedPrefix}reminihd_
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
  ▢ _${usedPrefix}igstalk *<usr>*_
  ▢ _${usedPrefix}tiktokstalk *<usr>*_
  ▢ _${usedPrefix}img *<txt>*_
__________________________________
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
  ▢ _${usedPrefix}stickermarker *<efecto> <img>*_
  ▢ _${usedPrefix}stickerfilter *<efecto> <img>*_
__________________________________
*الانتساب إلى البوت*
  ▢ _${usedPrefix}serbot --code_
  ▢ _${usedPrefix}serbot_
  ▢ _${usedPrefix}deletebot_
  ▢ _${usedPrefix}token_
  ▢ _${usedPrefix}stop_
  ▢ _${usedPrefix}bots_
  __________________________________
 *حول البوت*
  ▢ _${usedPrefix}about_
  *******
  _الإبلاغ عن أمرا لا يعمل أو ملاحظة في البوت_
  ▢ _${usedPrefix}report_
  *******
  __________________________________
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
    conn.reply(m.chat, '*[ ℹ️ ] تحتوي هذه القائمة على خطأ داخلي، ولهذا السبب لم يكن من الممكن إرسالها.*', m);
  }
};
handler.command = /^(menu|m|chahid|memú|help|info|comandos|allmenu|commands|cmd)$/i;
handler.exp = 50;
handler.fail = null;
export default handler;
function clockString(ms) {
  const h = isNaN(ms) ? '--' : Math.floor(ms / 3600000);
  const m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60;
  const s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60;
  return [h, m, s].map((v) => v.toString().padStart(2, 0)).join(':');
}
