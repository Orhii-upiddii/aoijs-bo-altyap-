const aoi = require('aoi.js')
const aoi = new.aoiBot({
   token: "process.env.token", //token env'e
   prefix: "$getServerVar[prefix]" /// prefix icin biraz assagi in
});

bot.onMessage()   //Dokunmayın Yoksa Kodlar Çalışmaz

bot.loadCommand("./komutlar/")

bot.onReadyCommand({
    channel:"" //hazirim kanal log 
    code:`
     $log[Başarıya Giriş Yapıldı]
})



bot.variables({
   prefix:"" //prefixiniz

////////////Kodlar Aşağıya veya komtlar klasorune////////////


bot.command({
  name:"eval",
  code:`
  $eval[$message]
  $onlyForIDs[$botOwnerID;]
` 
})

