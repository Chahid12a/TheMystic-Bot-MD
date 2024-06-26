import translate from '@vitalets/google-translate-api';
import fetch from 'node-fetch';
const handler = async (m, {conn, command}) => {
  if (command === 'nassi7a') {
    const consejo = consejos[Math.floor(Math.random() * consejos.length)];
    const mensaje = `╭─◆────◈⚘◈─────◆─╮\n\n⠀⠀🌟 *نصيحة اليوم* 🌟\n\n❥ ${consejo}\n\n╰─◆────◈⚘◈─────◆─╯`;
    await m.reply(mensaje);
  }

  if (command === 'romantic') {
    const frase_romantica = frasesromanticas[Math.floor(Math.random() * frasesromanticas.length)];
    const mensaje = `╭─◆────◈⚘◈─────◆─╮\n\n⠀⠀💖 *عبارة رومانسية* 💖\n\n❥ ${frase_romantica}\n\n╰─◆────◈⚘◈─────◆─╯`;
    await m.reply(mensaje);
  }

  if (command == 'historiaromantica') {
    try {
      const cerpe = await cerpen(`cinta romantis`);
      const storytime = await translate(cerpe.cerita, {to: 'es', autoCorrect: true}).catch((_) => null);
      const titletime = await translate(cerpe.title, {to: 'es', autoCorrect: true}).catch((_) => null);
      conn.reply(m.chat, `᭥🫐᭢ Título: ${titletime.text}
᭥🍃᭢ Autor: ${cerpe.author}
────────────────
${storytime.text}`, m);
    } catch {
      const err = await fetch(`https://api.lolhuman.xyz/api/openai?apikey=${lolkeysapi}&text=Elabora%20una%20historia%20romantica%20que%20use%20el%20siguiente%20formato:%20%E1%AD%A5%F0%9F%AB%90%E1%AD%A2%20T%C3%ADtulo:%20%E1%AD%A5%F0%9F%8D%83%E1%AD%A2%20Autor:%20%E2%94%80%E2%94%80%E2%94%80%E2%94%80%E2%94%80%E2%94%80%E2%94%80%E2%94%80%E2%94%80%E2%94%80%E2%94%80%E2%94%80%E2%94%80%E2%94%80%E2%94%80%E2%94%80%20hsitoria...%20adalah&user=user-unique-id`);
      const json = await err.json();
      const fraseChat = json.result;
      conn.reply(m.chat, fraseChat, m);
    }
  }
};
handler.tags = ['frases'];
handler.command = handler.help = ['nassi7a', 'romantic', 'historiaromantica'];
export default handler;

async function cerpen(category) {
  return new Promise((resolve, reject) => {
    const title = category.toLowerCase().replace(/[()*]/g, '');
    const judul = title.replace(/\s/g, '-');
    const page = Math.floor(Math.random() * 5);
    axios.get('http://cerpenmu.com/category/cerpen-'+judul+'/page/'+page)
        .then((get) => {
          const $ = cheerio.load(get.data);
          const link = [];
          $('article.post').each(function(a, b) {
            link.push($(b).find('a').attr('href'));
          });
          const random = link[Math.floor(Math.random() * link.length)];
          axios.get(random).then((res) => {
            const $$ = cheerio.load(res.data);
            const hasil = {
              title: $$('#content > article > h1').text(),
              author: $$('#content > article').text().split('Cerpen Karangan: ')[1].split('Kategori: ')[0],
              kategori: $$('#content > article').text().split('Kategori: ')[1].split('\n')[0],
              lolos: $$('#content > article').text().split('Lolos moderasi pada: ')[1].split('\n')[0],
              cerita: $$('#content > article > p').text(),
            };
            resolve(hasil);
          });
        });
  });
}

global.frasesromanticas = [
  'أنت النور الذي ينير حياتي في الظلام.',
  'معك، كل يوم هو مغامرة جديدة مليئة بالحب.',
  'عيناك هي انعكاس السماء التي أريد أن أضيع فيها.',
  'كل نبضة في قلبي تحمل إسمك.',
  'بين ذراعيك وجدت المنزل الذي كنت أبحث عنه دائمًا.',
   'أنت الحلم الذي لا أريد أن أستيقظ منه أبدًا.',
   'الحب الحقيقي هو أن نكون معًا في السراء والضراء.',
   'لا توجد مسافات عندما يكون القلبان متحدين.',
   'قبلاتك هي اللحن الذي يجعل قلبي يتسارع.',
   'الحب هو أن ترى في نفسك ما لا يستطيع أحد أن يراه.',
   'في كل نبضة قلب، آخذك معي في كل مكان.',
   'الحب الذي أشعر به تجاهك هو قوتي وملهمتي.',
   'كلماتك العذبة هي غذاءي العاطفي اليومي.',
   'أنت أغلى هدية قدمتها لي الحياة.',
   'الوقت يتوقف عندما أكون بجانبك.',
   'في ابتسامتك أجد السعادة التي كنت أبحث عنها.',
   'كل يوم بجانبك هو قصة حب لا تنتهي.',
   'حبنا مثل حكاية خرافية تتحقق.',
   'أحضانك هي ملجأي في هذا العالم الفوضوي.',
   'أنت سبب إيماني بالقدر.',
   'الحب هو اكتشاف شيء جديد كل يوم وأنا معجب به فيك.',
   'حبك هو اللوحة البيضاء التي أرسم فيها سعادتي.',
   'معك المستقبل طريق مليء بالوعود والأحلام.',
   'أنت المنارة التي تهدي قلبي في الظلام.',
   'سحر الحب موجود في كل لفتة نشاركها.',
   'حبنا هو رقصة أبدية من العاطفة والحنان.',
   'بين ذراعيك يختفي العالم كله ولا يوجد إلا أنا وأنت.',
   'الحب هو اللغة التي تتحدث بها قلوبنا.',
   'أنت القطعة الصغيرة التي كنت أفتقدها لإكمال روحي.',
   'الحب هو أن أجد فيك كل ما لم أكن أعرف أنني بحاجة إليه.',
];

global.consejos =[
'اقبل أن التغييرات جزء طبيعي من الحياة، وتعلم كيف تتكيف معها.',
'لا تتوقف عن التعلم؛ فالمعرفة أداة قوية.',
'اعتن بصحتك الجسدية والعقلية، فهما أساسيان لحياة مليئة.',
'استمتع بالأشياء الصغيرة، فهي التي تعطي معنى للحياة.',
'تعلم أن تغفر، للآخرين ولنفسك، لتحرر قلبك.',
'قدّر الوقت الذي تقضيه مع أحبائك، فهو أثمن هدية يمكنك أن تعطيها وتتلقاها.',
'كن لطيفًا ورحيمًا مع الآخرين، فكل فعل من اللطف يمكن أن يحدث فرقًا في حياتهم.',
'تعلم أن تقول "لا" عند الضرورة، وحدد حدودًا صحية.',
'اجد وقتًا لفعل ما تحب، فذلك يغذي روحك ويجعلك تشعر بالحياة.',
'لا تقارن نفسك بالآخرين، فلكل شخص مساره وإيقاعه الخاص في الحياة.',
'استمع إلى شريكك بتعاطف وتفهم، فالتواصل هو أساس علاقة متينة.',
'لا تخف من التعبير عن مشاعرك، فالصدق أساسي في الحب.',
'تعلم التنازل والتسوية، فالحب يتطلب تضحية وجهد متبادل.',
'فاجئ شريكك من حين لآخر، وحافظ على شرارة الرومانسية.',
'احترم فردية شريكك واسمح له بالنمو كشخص.',
'الحب الذاتي مهم بقدر حب شخص آخر؛ اعتن بنفسك وقدّرها.',
'تذكر أن العلاقة الصحية تقوم على الثقة المتبادلة والاحترام.',
'اختر شخصًا يكملك ويجعلك تصبح نسخة أفضل من نفسك.',
'الحب الحقيقي لا يجعلك تشعر بأنك أقل، بل يجعلك تشعر بأنك أكثر.',
'الحب فعل، هو اختيار يومي يُزرع بالأفعال والكلمات.',
'ابحث عن عمل يشغلك بشغف، ولن تشعر أبدًا أنك تعمل.',
'كن استباقيًا وبادر في عملك، وسيتم تقدير ذلك من قبل رؤسائك.',
'تعلم من أخطائك وإخفاقاتك، فهي فرص للنمو والتحسين.',
'حافظ على موقف إيجابي وابحث عن حلول أمام التحديات الوظيفية.',
'زرع علاقات جيدة مع زملائك، فالعمل الجماعي مفتاح النجاح.',
'حدد أهدافًا واضحة وواقعية، واعمل بعزم لتحقيقها.',
'لا تخف من طلب المساعدة أو البحث عن إرشاد، فهناك دائمًا شيء جديد يمكن تعلمه.',
'اعترف بإنجازاتك وقدّرها، احتفل بنجاحاتك مهما كانت صغيرة.',
'ابحث عن توازن بين حياتك المهنية والشخصية، فكلا الجانبين مهم.',
'العمل جزء مهم من حياتك، لكنه ليس كل ما يحدد من أنت.',
'آمن بنفسك وبقدرتك على تحقيق ما تطمح إليه.',
'تخيل أهدافك وأحلامك، تخيل كيف ستشعر عند تحقيقها.',
'استلهم من أولئك الذين تغلبوا على عقبات مشابهة لما تواجهه.',
'اقبل الفشل كجزء من العملية، فهي فرص للتعلم والنمو.',
'حيط نفسك بأشخاص إيجابيين يدفعونك للأمام.',
'احتفظ بعقلية منفتحة ومستعدة لتعلم أشياء جديدة.',
'تذكر السبب الذي بدأت من أجله عندما تشعر بالإحباط؛ أعد الاتصال بغرضك.',
'قسم أهدافك إلى خطوات صغيرة، مما يجعل الطريق أكثر قابلية للتحقيق وأقل إرهاقًا.',
'لا تخف من متابعة أحلامك، فالحياة قصيرة جدًا للعيش بندم.',
'ثق بأنك، بالجهد والمثابرة، يمكنك تحقيق كل ما تضعه نصب عينيك.',
  ];
