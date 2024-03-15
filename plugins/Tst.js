const handler = async (m, {conn}) => {
  m.reply(global.ter);
};
handler.customPrefix = /my/i;
handler.command = new RegExp;
export default handler;

global.ter = `
xxxxxxxxxxxxxx
`;
