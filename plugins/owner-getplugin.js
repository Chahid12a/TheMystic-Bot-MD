import cp, {exec as _exec} from 'child_process';
import {promisify} from 'util';
import fs from 'fs';
const exec = promisify(_exec).bind(cp);
const handler = async (m, {conn, isROwner, usedPrefix, command, text}) => {
  const ar = Object.keys(plugins);
  const ar1 = ar.map((v) => v.replace('.js', ''));
  if (!text) throw `*[❗] إدخال اسم إضافة (ملف) موجود*\n\n*—◉ متال*\n*◉ ${usedPrefix + command}* Tr\n\n*—◉ قائمة الإضافات (الملفات) الموجودة:*\n*◉* ${ar1.map((v) => ' ' + v).join`\n*◉*`}`;
  if (!ar1.includes(text)) return m.reply(`*[❗] لم يتم العثور على أي إضافة (ملف) بالاسم المحدد "${text}", أدخل شيئًا موجودًا*\n\n*==================================*\n\n*—◉ قائمة الإضافات (الملفات) الموجودة:*\n*◉* ${ar1.map((v) => ' ' + v).join`\n*◉*`}`);
  let o;
  try {
    o = await exec('cat plugins/' + text + '.js');
  } catch (e) {
    o = e;
  } finally {
    const {stdout, stderr} = o;
    if (stdout.trim()) {
      const aa = await conn.sendMessage(m.chat, {text: stdout}, {quoted: m});
      await conn.sendMessage(m.chat, {document: fs.readFileSync(`./plugins/${text}.js`), mimetype: 'application/javascript', fileName: `${text}.js`}, {quoted: aa});
    }
    if (stderr.trim()) {
      const aa2 = await conn.sendMessage(m.chat, {text: stderr}, {quoted: m});
      await conn.sendMessage(m.chat, {document: fs.readFileSync(`./plugins/${text}.js`), mimetype: 'application/javascript', fileName: `${text}.js`}, {quoted: aa2});
    }
  }
};
handler.help = ['getplugin'].map((v) => v + ' *<nombre>*');
handler.tags = ['owner'];
handler.command = /^(getplugin|gp)$/i;
handler.rowner = true;
export default handler;
    
