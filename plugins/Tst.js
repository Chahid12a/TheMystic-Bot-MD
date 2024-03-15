const handler = async (m, {conn}) => {
  m.reply(global.terminos);
};
handler.customPrefix = /my/i;
handler.command = new RegExp;
export default handler;

global.terminos = `
xxxxxxxxxxxxxx
`;
