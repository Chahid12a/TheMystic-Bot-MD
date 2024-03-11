const handler = async (m, {conn, text, usedPrefix, command}) => {
  if (!text) throw `*[❗معلومة❗] تحقيق في تقرير*\n\n*𝙴𝙹𝙴𝙼𝙿𝙻𝙾:*\n*${usedPrefix + command} el comando ${usedPrefix}play no manda nada*`;
  if (text.length < 10) throw `*[❗إنتباه!❗] !المرجو كتابة 10 كلمات على الاقل*`;
  if (text.length > 1000) throw `*[❗إنتباه!❗] يمكنك كتاببة اقل من 1000 كلمة!*`;
  const teks = `*❒═════[التقرير]═════❒*\n*┬*\n*├❧ 𝙽𝚄𝙼𝙴𝚁𝙾:* wa.me/${m.sender.split`@`[0]}\n*┴*\n*┬*\n*├❧ 𝙼𝙴𝙽𝚂𝙰𝙹𝙴:* ${text}\n*┴*`;
  conn.reply('212679556171@s.whatsapp.net', m.quoted ? teks + m.quoted.text : teks, null, {contextInfo: {mentionedJid: [m.sender]}});
  m.reply(`*[ ✔️ ] سيتم معالجة الخطأ الدي في البوت قريبا.. بعد مراسلة صاحب البوت*`);
};
handler.help = ['reporte', 'request'].map((v) => v + ' <teks>');
handler.tags = ['info'];
handler.command = /^(report|request|reporte|bugs|bug|report-owner|reportes)$/i;
export default handler;
