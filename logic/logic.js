const users = require("../db/users/users.json");
const bot  = require('../index')
const products = require('../db/products/products.json');
const fs = require("fs");
let login;

const usersData = msg => {
    let user = users.filter(x => x.userId === msg.chat.id)[0]
    if (!user){
      users.push({
        username: msg.from.username,
        userId: msg.chat.id,
      });
      fs.writeFileSync("./db/users/users.json", JSON.stringify(users, null, "\t"));
      bot.removeListener("message", usersData);
    };
}
  
  const sendUserData = msg => {
    let user = JSON.parse(fs.readFileSync(users, "utf8"));
    for (user in users) {
      let username = users[user].username;
      let userId = users[user].userId;
      bot.sendMessage(
        msg.chat.id,
        `вот твой профиль имя: ${username}\nid: ${userId}`
      );
      bot.removeListener("message", sendUserData);
    }
  };
  
  const changeProducts = msg => {
    products.push({
      login: msg.text,
      password: login,
    });
    fs.writeFileSync("./db/products/products.json",JSON.stringify(products, null, "\t"));
    bot.sendMessage(msg.chat.id, "данные успешно сохранились");
    bot.removeListener("message", changeProducts);
  };
  
  const addPassword = msg => {
    const text = msg.text;
    login = text;
    bot.sendMessage(msg.chat.id, "введите login");
    bot.on("message", changeProducts);
    bot.removeListener("message", addPassword);
  };
  
  const sendProducts = chat_id => {
    console.log(chat_id);
    const data = JSON.parse(fs.readFileSync('./db/products/products.json', 'utf8'))
    data.map(i => console.log(`login: ${i.login}\npassword: ${i.password}`))
    data.map(i => bot.sendMessage(chat_id, `login: ${i.login}\npassword: ${i.password}`))//когда надо отправить данные не ожидая от пользователя сообщения передаем chat_id
  };