let handler = m => m

handler.before = function (m) {
    let user = global.db.data.users[m.sender]
    let role = (user.level <= 3) ? 'محارب V'
      : ((user.level >= 3) && (user.level <= 6)) ? 'محارب IV'
      : ((user.level >= 6) && (user.level <= 9)) ? 'محارب III'
      : ((user.level >= 9) && (user.level <= 12)) ? 'محارب II'
      : ((user.level >= 12) && (user.level <= 15)) ? 'محارب I'
      : ((user.level >= 15) && (user.level <= 18)) ? 'نخبة V'
      : ((user.level >= 18) && (user.level <= 21)) ? 'نخبة IV'
      : ((user.level >= 21) && (user.level <= 24)) ? 'نخبة III'
      : ((user.level >= 24) && (user.level <= 27)) ? 'نخبة II'
      : ((user.level >= 27) && (user.level <= 30)) ? 'نخبة I'
      : ((user.level >= 30) && (user.level <= 33)) ? 'معلمون V'
      : ((user.level >= 33) && (user.level <= 36)) ? 'معلمون IV'
      : ((user.level >= 36) && (user.level <= 39)) ? 'معلمون III'
      : ((user.level >= 39) && (user.level <= 42)) ? 'معلمون II'
      : ((user.level >= 42) && (user.level <= 45)) ? 'معلمون I'
      : ((user.level >= 45) && (user.level <= 48)) ? 'معلم محترف V'
      : ((user.level >= 48) && (user.level <= 51)) ? 'معلم محترف IV'
      : ((user.level >= 51) && (user.level <= 54)) ? 'معلم محترف III'
      : ((user.level >= 54) && (user.level <= 57)) ? 'معلم محترف II'
      : ((user.level >= 57) && (user.level <= 60)) ? 'معلم محترف I'
      : ((user.level >= 60) && (user.level <= 63)) ? 'محترف V'
      : ((user.level >= 63) && (user.level <= 66)) ? 'محترف IV'
      : ((user.level >= 66) && (user.level <= 69)) ? 'محترف III'
      : ((user.level >= 69) && (user.level <= 71)) ? 'محترف II'
      : ((user.level >= 71) && (user.level <= 74)) ? 'اسطوره I'
      : ((user.level >= 74) && (user.level <= 77)) ? 'اسطوره V'
      : ((user.level >= 77) && (user.level <= 80)) ? 'اسطوره IV'
      : ((user.level >= 80) && (user.level <= 83)) ? 'اسطوره III'
      : ((user.level >= 83) && (user.level <= 86)) ? 'اسطوره II'
      : ((user.level >= 86) && (user.level <= 89)) ? 'اسطوره I'
      : ((user.level >= 89) && (user.level <= 91)) ? 'أسطوري V'
      : ((user.level >= 91) && (user.level <= 94)) ? 'أسطوري IV'
      : ((user.level >= 94) && (user.level <= 97)) ? 'أسطوري III'
      : ((user.level >= 97) && (user.level <= 100)) ? 'أسطوري II'
      : ((user.level >= 100) && (user.level <= 105)) ? 'أسطوري I'      
      : ((user.level >= 105) && (user.level <= 120)) ? 'المجد الأسطوري'
      : ((user.level >= 120) && (user.level <= 150)) ? 'زمرد V'
      : ((user.level >= 150) && (user.level <= 160)) ? 'زمرد VI'
      : ((user.level >= 160) && (user.level <= 170)) ? 'زمرد III'
      : ((user.level >= 170) && (user.level <= 185)) ? 'زمرد II'
      : ((user.level >= 185) && (user.level <= 200)) ? 'زمرد I'
      : ((user.level >= 200) && (user.level <= 400)) ? 'تيتان III'
      : ((user.level >= 405) && (user.level <= 700)) ? 'تيتان II'
      : ((user.level >= 700) && (user.level <= 1000)) ? 'تيتان I'
      : 'نجم الملك التنين'

    user.role = role
    return true
}

export default handler
