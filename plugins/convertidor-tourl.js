import uploadFile from '../lib/uploadFile.js'
import uploadImage from '../lib/uploadImage.js'

let handler = async (m) => {
  let q = m.quoted ? m.quoted : m
  let mime = (q.msg || q).mimetype || ''
  if (!mime) throw 'هذا الامر خاص برفع الفيديو لموقع\nhttps://telegra.ph/\nالان قم بالاشارة الفيديو التي تريد رفعه للموقع وسوف تحصل على رابطه \n اشر الي الفيديو ثم اكتب\n*.trv*'
  let media = await q.download()
  let isTele = /image\/(png|jpe?g|gif)|video\/mp4/.test(mime)
  let link = await (isTele ? uploadImage : uploadFile)(media)
  m.reply(`▢ ${media.length} Byte(s) 

▢ ${isTele ? '' : '(Unknown)'} 
▢ *هذا هو رابط الفيديو :* ${link}\n\n\nتابع صاحب البوت في حسابه\ninstagram.com/chahid_mohammed1
  `)
}
handler.help = ['trv']
handler.tags = ['trv']
handler.command = ['trv']
export default handler;
