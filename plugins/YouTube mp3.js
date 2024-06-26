import {youtubedl, youtubedlv2} from '@bochilteam/scraper';
import fetch from 'node-fetch';
import yts from 'yt-search';
import ytdl from 'ytdl-core';
import axios from 'axios'
import {bestFormat, getUrlDl} from '../lib/y2dl.js';
const handler = async (m, {text, conn, args, usedPrefix, command}) => {
  if (!args[0]) throw '*[❗] الاستخدام غير الصحيح للأمر، أدخل رابطًا / رابط YouTube.*';  
  let enviando;
  if (enviando) return  
      enviando = true      
  let youtubeLink = '';
  if (args[0].includes('you')) {
    youtubeLink = args[0];
  } else {
    const index = parseInt(args[0]) - 1;
    if (index >= 0) {
      if (Array.isArray(global.videoList) && global.videoList.length > 0) {
        const matchingItem = global.videoList.find((item) => item.from === m.sender);
        if (matchingItem) {
          if (index < matchingItem.urls.length) {
            youtubeLink = matchingItem.urls[index];
          } else {
            throw `*[❗] لم يتم العثور على رابط لهذا الرقم، الرجاء إدخال رقم بين 1 و el ${matchingItem.urls.length}*`;
          }
        } else {
          throw `*[❗] لتتمكن من استخدام الأمر بهذه الطريقة (${usedPrefix + command} <numero>), يرجى البحث عن مقاطع الفيديو مع الأمر ${usedPrefix}playlist <texto>*`;
        }
      } else {
        throw `*[❗] لتتمكن من استخدام الأمر بهذه الطريقة (${usedPrefix + command} <numero>), يرجى البحث عن مقاطع الفيديو مع الأمر ${usedPrefix}playlist <texto>*`;
      }
    }
  }
  const { key } = await conn.sendMessage(m.chat, {text: `*_جاي تنزيل المقطع_*\n\n* #playdoc ᴏ #play.2 ᴏ #ytmp4doc ◉*`}, {quoted: m});
  try {
    const formats = await bestFormat(youtubeLink, 'audio');
    const dl_url = await getUrlDl(formats.url);
    const buff = await getBuffer(dl_url.download);    
    const yt_1 = await youtubedl(youtubeLink).catch(async (_) => await youtubedlv2(youtubeLink));
    const ttl_1 = `${yt_1?.title ? yt_1.title : 'Tu_audio_descargado'}`;
    const fileSizeInBytes = buff.byteLength;
    const fileSizeInKB = fileSizeInBytes / 1024;
    const fileSizeInMB = fileSizeInKB / 1024;
    const roundedFileSizeInMB = fileSizeInMB.toFixed(2);
   if (fileSizeInMB > 50) {
    await conn.sendMessage(m.chat, {document: buff, caption: `*▢ Titulo:* ${ttl_1}\n*▢ وزن الصوت:* ${roundedFileSizeInMB} MB`, fileName: ttl_1 + '.mp3', mimetype: 'audio/mpeg'}, {quoted: m});
    await conn.sendMessage(m.chat, {text: `*[ ✔ ] تم تنزيل الصوت وإرساله بنجاح.*\n\n*—◉ تم إرساله بصيغة مستند لأن الصوت ثقيل ${roundedFileSizeInMB} MB ويتجاوز الحد الذي حدده WhatsApp.*\n*◉ Titulo:* ${ttl_1}`, edit: key}, {quoted: m});
    enviando = false
   } else {
    await conn.sendMessage(m.chat, {audio: buff, caption: `*▢ Titulo:* ${ttl_1}\n*▢ وزن الصوت:* ${roundedFileSizeInMB} MB`, fileName: ttl_1 + '.mp3', mimetype: 'audio/mpeg'}, {quoted: m});
    await conn.sendMessage(m.chat, {text: `*[ ✔ ] تم تنزيل الصوت وإرساله بنجاح.*`, edit: key}, {quoted: m});
    enviando = false   
   }    
  } catch {
    console.log('noooooo')
  try {
    const q = '128kbps';
    const v = youtubeLink;
    const yt = await youtubedl(v).catch(async (_) => await youtubedlv2(v));
    const dl_url = await yt.audio[q].download();
    const ttl = await yt.title;
    const size = await yt.audio[q].fileSizeH;
    await conn.sendFile(m.chat, dl_url, ttl + '.mp3', null, m, false, {mimetype: 'audio/mpeg'});
    await conn.sendMessage(m.chat, {text: '*[ ✔ ] تم تنزيل الصوت بنجاح.*', edit: key}, {quoted: m});
  } catch {
    try {
      const lolhuman = await fetch(`https://api.lolhuman.xyz/api/ytaudio2?apikey=${lolkeysapi}&url=${youtubeLink}`);
      const lolh = await lolhuman.json();
      const n = lolh.result.title || 'error';
      await conn.sendMessage(m.chat, {audio: {url: lolh.result.link}, fileName: `${n}.mp3`, mimetype: 'audio/mpeg'}, {quoted: m});
      await conn.sendMessage(m.chat, {text: '*[ ✔ ] تم تنزيل الصوت بنجاح.*', edit: key}, {quoted: m});
    } catch {
      try {
        const searchh = await yts(youtubeLink);
        const __res = searchh.all.map((v) => v).filter((v) => v.type == 'video');
        const infoo = await ytdl.getInfo('https://youtu.be/' + __res[0].videoId);
        const ress = await ytdl.chooseFormat(infoo.formats, {filter: 'audioonly'});
        conn.sendMessage(m.chat, {audio: {url: ress.url}, fileName: __res[0].title + '.mp3', mimetype: 'audio/mpeg'}, {quoted: m});
        await conn.sendMessage(m.chat, {text: '*[ ✔ ] تم تنزيل الصوت بنجاح.*', edit: key}, {quoted: m});
      } catch {
        await conn.sendMessage(m.chat, {text: `*[ ❌ ] تعذر تنزيل الصوت أو إرساله، يرجى المحاولة مرة أخرى.*`, edit: key}, {quoted: m});
        throw '*[❗] خطأ، لم يكن من الممكن تحميل الصوت.*';
      }
    }
  }
}};
handler.command = /^(audio|fgmp3|dlmp3|getaud|yt(a|mp3))$/i;
export default handler

const getBuffer = async (url, options) => {
  try {
    options ? options : {};
    const res = await axios({
      method: 'get',
      url,
      headers: {
        'DNT': 1,
        'Upgrade-Insecure-Request': 1,
      },
      ...options,
      responseType: 'arraybuffer',
    });

    return res.data;
  } catch (e) {
    console.log(`Error : ${e}`);
  }
};
