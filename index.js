const TelegramBot = require("node-telegram-bot-api");
const bot = new TelegramBot("6260469839:AAERCIGAF89sa1Kh3GuUCouoEgUJT16IrwU", {
  polling: true,
});
const {
  adminOptions,
  options,
  buyOptions,
  paymentOptions,
  linkPaymentOptions,
  region,
  regionAp,
  regionEu,
  regionNa,
  apRankedReadyGet,
  apTenFiftySkinsGet,
  apFourtySkinsGet,
  apfourtySkinsBuy,
  apOneHundredSkinsGet,
  apOneHundredSkinsBuy,
  apTenFifty,
  regionEuRankedReadyGet,
  regionEuRankedReadyBuy,
  regionEuTenFiftyGet,
  regionEuTenFiftyBuy,
  regionEuFourtyNintyGet,
  regionEuFourtyNintyBuy,
  regionEuNintyHundredSixtyGet,
  regionEuOneHundredGet,
  regionEuBalanceSevenHundredGet,
  regionEuBalanceSevenHundredBuy,
  regionNaRankedReadyGet,
  regionNaRankedReadyBuy,
  regionNaTenFiftyGet,
  regionNaTenFiftyBuy,
  regionNaFourtyNintyGet,
  regionNaFourtyNintyBuy,
  regionNaOneGet,
  regionEuNintyHundredSixty,
  howToPay,
  doBalancePayment
} = require("./keyboards/keyboard");
const { sendPaymentDataToJson, generatePaymentUrl } = require("./payments/qiwi/yooMoney");
const { usersData, sendUserData, changeProducts, addPassword, sendProducts } = require("./logic/logic");


bot.on("message", async (msg) => {
  const chatId = msg.chat.id;
  if (chatId === "1425448286") {
    //988831810
    if (msg.text === "/start") {
      await bot.sendMessage(chatId, "Привет админ вот что ты можешь сделать", adminOptions);
    }
  } else {
    await bot.sendMessage(chatId, `Приветствую тебя в нашем шопе, ${msg.from.first_name}`, options );
    bot.on("message", usersData);
  }

  switch (msg.text) {
    case "Купить 🛒":
      await bot.sendMessage(chatId, "Активные категории в магазине: ⤵️", buyOptions);
      break;
    case "Наличие товара 📑":
      await bot.sendMessage(chatId, "вот все товары");
      await sendProducts(msg.chat.id);
      break;
    case "Профиль 👤":
      bot.on("message", sendUserData);
      break;
    case "Пополнить баланс 💸":
      await bot.sendMessage(chatId, "введите сумму на которую хотите пополнить");
      await bot.sendMessage(chatId, "выбирите метод пополнения", paymentOptions);
      bot.on("message", addBalance);
      break;
    case "Правила 📜":
      await bot.sendMessage(
        chatId,
        "❗️Покупая товар у нас, Вы автоматически соглашаетесь с правилами магазина.\n❗️Незнание правил не освобождает от ответственности\n1) Перед покупкой Вы должны включить видеозапись экрана, чтобы в случае невалидного аккаунта саппорт выдал вам замену. Без наличия видеозаписи замена выдана не будет.\n2) Замена товара может занимать от 2 до 48 часов.\n3) Хамство, неадекватное поведение - бан.\n4) Замена выдается исключительно в виде баланса в боте, или же в виде аккаунта, деньги за пределы бота возвращаем.\n5) Гарантия на все аккаунты в боте - на момент покупки.\n6) Товар выдается в формате login:pass, доступ только с лаунчера."
      );
      break;
    case "помощь❤️":
      awaitbot.sendMessage(chatId, `обращайтесь сюда:\nhttps://t.me/Isnt116`);
      break;
    case "Изменить Наличие Товара 📑":
      awaitbot.sendMessage(chatId, "пришли мне пароль/ аккаунта");
      bot.on("message", addPassword);
      break;
    case "Посмотреть все товары":
      await bot.sendMessage(chatId, "Отправляю тебе все товары");
      sendProducts(msg.chat.id);
      console.log(msg);
      break;
  }
});

bot.on("callback_query", async (msg) => {
  const action = msg.data;
  const chatId = msg.message.chat.id;

  switch (action) {
    case "crystal":
      await bot.sendMessage(
        chatId,
        "для оплаты перейди по ссылке",
        linkPaymentOptions
      );
      break;
    case "cancelPayment":
      await bot.sendMessage(chatId, "операция была отменина");
      break;
    case "accounts":
      await bot.sendMessage(
        chatId,
        "📃 Категория: ЖИРНЫЕ АККАУНТЫ С ОПИСАНИЕМ",
        region
      );
      break;
    case "ap":
      await bot.sendMessage(chatId, "ap", regionAp);
      break;
    case "eu":
      await bot.sendMessage(chatId, "eu", regionEu);
      break;
    case "na":
      await bot.sendMessage(chatId, "na", regionNa);
      break;
    case "regioneu":
      await bot.sendMessage(chatId, "📃 Категория: REGION EU", regionEu);
      break;
    case "aprankedready":
      await bot.sendMessage(
        chatId,
        "📃 Категория: [AP] RANKED READY",
        apRankedReadyGet
      );
      break;
    case "aprankedbuyone":
      await bot.sendMessage(msg.chat.id, "выбирите метод пополнения", paymentOptions);
      break;
    case "aprankedbuytwo":
      await bot.sendMessage(msg.chat.id, "выбирите метод пополнения", paymentOptions);
      break;
    case "aprankedbuythree":
      await bot.sendMessage(msg.chat.id, "выбирите метод пополнения", paymentOptions);
      break;
    case "aprankedbuyfour":
      await bot.sendMessage(msg.chat.id, "выбирите метод пополнения", paymentOptions);
      break;
    case "aprankedbuyfive":
      await bot.sendMessage(msg.chat.id, "выбирите метод пополнения", paymentOptions);
      break;
    case "aprankedbuysix":
      await bot.sendMessage(msg.chat.id, "выбирите метод пополнения", paymentOptions);
      break;
    case "aprankedbuyseven":
      await bot.sendMessage(msg.chat.id, "выбирите метод пополнения", paymentOptions);
      break;
    case "aprankedbuyeight":
      await bot.sendMessage(msg.chat.id, "выбирите метод пополнения", paymentOptions);
      break;
    case "aprankedbuynine":
      await bot.sendMessage(msg.chat.id, "выбирите метод пополнения", paymentOptions);
      break;
    case "aprankedbuyten":
      await bot.sendMessage(msg.chat.id, "выбирите метод пополнения", paymentOptions);
      break;
    case "aprankedreadybuyback":
      await bot.sendMessage(chatId, "ap", regionAp);
      break;
    case "aprankedreadybuybacktoall":
      await bot.sendMessage(
        msg.chat.id,
        "Активные категории в магазине: ⤵️",
        buyOptions
      );
      break;
    case "apten":
      await bot.sendMessage(chatId, "📃 Категория: [AP] 10-50 SKINS", apTenFifty);
      break;
    case "aptenfiftyskins":
      await bot.sendMessage(
        chatId,
        "📃 Товар: 10-50 SKINS\n💰 Цена: 30 ₽\n📃Описание:\n\nВыберите количество товара, которое хотите купить:",
        apTenFiftySkinsGet
      );
      break;
    case "aptenfiftyskinsbuyone":
      await bot.sendMessage(chatId, "Выберите способ оплаты:", paymentOptions);
      break;
    case "aptenfiftyskinsbuytwo":
      await bot.sendMessage(chatId, "Выберите способ оплаты:", paymentOptions);
      break;
    case "aptenfiftyskinsbuythree":
      await bot.sendMessage(chatId, "Выберите способ оплаты:", paymentOptions);
      break;
    case "aptenfiftyskinsbuyfour":
      await bot.sendMessage(chatId, "Выберите способ оплаты:", paymentOptions);
      break;
    case "aptenfiftyskinsbuyfive":
      await bot.sendMessage(chatId, "Выберите способ оплаты:", paymentOptions);
      break;
    case "aptenfiftyskinsbuysix":
      await bot.sendMessage(chatId, "Выберите способ оплаты:", paymentOptions);
      break;
    case "aptenfiftyskinsbuyseven":
      await bot.sendMessage(chatId, "Выберите способ оплаты:", paymentOptions);
      break;
    case "aptenfiftyskinsbuyeight":
      await bot.sendMessage(chatId, "Выберите способ оплаты:", paymentOptions);
      break;
    case "aptenfiftyskinsbuynine":
      await bot.sendMessage(chatId, "Выберите способ оплаты:", paymentOptions);
      break;
    case "aptenfiftyskinsbuyten":
      await bot.sendMessage(chatId, "Выберите способ оплаты:", paymentOptions);
      break;
    case "apfourty":
      await bot.sendMessage(
        chatId,
        "📃 Категория: [AP] 40-90 SKINS",
        apFourtySkinsGet
      );
      break;
    case "apfourtyskinsbuy":
      await bot.sendMessage(chatId, "📃 Товар: 40-90 SKINS\n", apfourtySkinsBuy);
      break;
    case "apfourtyskinsbuyone":
      await bot.sendMessage(chatId, "Выберите способ оплаты:", paymentOptions);
      break;
    case "apfourtyskinsbuytwo":
      await bot.sendMessage(chatId, "Выберите способ оплаты:", paymentOptions);
      break;
    case "apfourtyskinsbuythree":
      await bot.sendMessage(chatId, "Выберите способ оплаты:", paymentOptions);
      break;
    case "apfourtyskinsbuyfour":
      await bot.sendMessage(chatId, "Выберите способ оплаты:", paymentOptions);
      break;
    case "apfourtyskinsbuyfive":
      await bot.sendMessage(chatId, "Выберите способ оплаты:", paymentOptions);
      break;
    case "apfourtyskinsbuysix":
      await bot.sendMessage(chatId, "Выберите способ оплаты:", paymentOptions);
      break;
    case "apfourtyskinsbuyseven":
      await bot.sendMessage(chatId, "Выберите способ оплаты:", paymentOptions);
      break;
    case "apfourtyskinsbuyeight":
      await bot.sendMessage(chatId, "Выберите способ оплаты:", paymentOptions);
      break;
    case "apfourtyskinsbuynine":
      await bot.sendMessage(chatId, "Выберите способ оплаты:", paymentOptions);
      break;
    case "apfourtyskinsbuyten":
      await bot.sendMessage(chatId, "Выберите способ оплаты:", paymentOptions);
      break;
    case "apone":
      await bot.sendMessage(
        chatId,
        "📃 Категория: [AP] 10-100 SKINS",
        apOneHundredSkinsGet
      );
      break;
    case "aponehundredskinsbuy":
      await bot.sendMessage(
        chatId,
        "📃 Категория: [AP] 10-100 SKINS\nЦена: 20 ₽\n📃 Описание:\n\nВыберите количество товара, которое хотите купить:",
        apOneHundredSkinsBuy
      );
      break;
    case "aponehundredskinsbuyone":
      await bot.sendMessage(chatId, "Выберите способ оплаты:", paymentOptions);
      break;
    case "aponehundredskinsbuytwo":
      await bot.sendMessage(chatId, "Выберите способ оплаты:", paymentOptions);
      break;
    case "aponehundredskinsbuythree":
      await bot.sendMessage(chatId, "Выберите способ оплаты:", paymentOptions);
      break;
    case "aponehundredskinsbuyfour":
      await bot.sendMessage(chatId, "Выберите способ оплаты:", paymentOptions);
      break;
    case "aponehundredskinsbuyfive":
      await bot.sendMessage(chatId, "Выберите способ оплаты:", paymentOptions);
      break;
    case "aponehundredskinsbuysix":
      await bot.sendMessage(chatId, "Выберите способ оплаты:", paymentOptions);
      break;
    case "aponehundredskinsbuyseven":
      await bot.sendMessage(chatId, "Выберите способ оплаты:", paymentOptions);
      break;
    case "aponehundredskinsbuyeight":
      await bot.sendMessage(chatId, "Выберите способ оплаты:", paymentOptions);
      break;
    case "aponehundredskinsbuynine":
      await bot.sendMessage(chatId, "Выберите способ оплаты:", paymentOptions);
      break;
    case "aponehundredskinsbuyten":
      await bot.sendMessage(chatId, "Выберите способ оплаты:", paymentOptions);
      break;
    case "eurankedready":
      await bot.sendMessage(
        chatId,
        "📃 Категория: [EU] RANKED READY",
        regionEuRankedReadyGet
      );
      break;
    case "eurankedreadyget":
      await bot.sendMessage(
        chatId,
        "📃 Товар: RANKED READY\n💰 Цена: 30 ₽\n📃 Описание: \n\nАккаунты с доступом к рейтинговой игре\nВыберите количество товара, которое хотите купить:",
        regionEuRankedReadyBuy
      );
      break;
    case "regioneureadybuyone":
      await bot.sendMessage(chatId, "Выберите способ оплаты:", paymentOptions);
      break;
    case "regioneureadybuytwo":
      await bot.sendMessage(chatId, "Выберите способ оплаты:", paymentOptions);
      break;
    case "regioneureadybuythree":
      await bot.sendMessage(chatId, "Выберите способ оплаты:", paymentOptions);
      break;
    case "regioneureadybuyfour":
      await bot.sendMessage(chatId, "Выберите способ оплаты:", paymentOptions);
      break;
    case "regioneureadybuyfive":
      await bot.sendMessage(chatId, "Выберите способ оплаты:", paymentOptions);
      break;
    case "regioneureadybuysix":
      await bot.sendMessage(chatId, "Выберите способ оплаты:", paymentOptions);
      break;
    case "regioneureadybuyseven":
      await bot.sendMessage(chatId, "Выберите способ оплаты:", paymentOptions);
      break;
    case "regioneureadybuyeight":
      await bot.sendMessage(chatId, "Выберите способ оплаты:", paymentOptions);
      break;
    case "regioneureadybuynine":
      await bot.sendMessage(chatId, "Выберите способ оплаты:", paymentOptions);
      break;
    case "regioneureadybuyten":
      await bot.sendMessage(chatId, "Выберите способ оплаты:", paymentOptions);
      break;
    case "eubacktoall":
      await bot.sendMessage(chatId, "Активные категории в магазине: ⤵️", buyOptions);
      break;
    case "euten":
      await bot.sendMessage(
        msg.chat.id,
        "📃 Категория: [EU] 10-50 SKINS",
        regionEuTenFiftyGet
      );
      break;
    case "regioneutenfifity":
      await bot.sendMessage(
        chatId,
        "📃 Товар: 10-50 SKINS\n💰 Цена: 45 ₽\n📃 Описание:\n\nВыберите количество товара, которое хотите купить:",
        regionEuTenFiftyBuy
      );
      break;
    case "regioneutenfiftybuyone":
      await bot.sendMessage(chatId, "Выберите способ оплаты:", paymentOptions);
      break;
    case "regioneutenfiftybuytwo":
      await bot.sendMessage(chatId, "Выберите способ оплаты:", paymentOptions);
      break;
    case "regioneutenfiftybuythree":
      await bot.sendMessage(chatId, "Выберите способ оплаты:", paymentOptions);
      break;
    case "regioneutenfiftybuyfour":
      await bot.sendMessage(chatId, "Выберите способ оплаты:", paymentOptions);
      break;
    case "regioneutenfiftybuyfive":
      await bot.sendMessage(chatId, "Выберите способ оплаты:", paymentOptions);
      break;
    case "regioneutenfiftybuysix":
      await bot.sendMessage(chatId, "Выберите способ оплаты:", paymentOptions);
      break;
    case "regioneutenfiftybuyseven":
      await bot.sendMessage(chatId, "Выберите способ оплаты:", paymentOptions);
      break;
    case "regioneutenfiftybuyeight":
      await bot.sendMessage(chatId, "Выберите способ оплаты:", paymentOptions);
      break;
    case "regioneutenfiftybuynine":
      await bot.sendMessage(chatId, "Выберите способ оплаты:", paymentOptions);
      break;
    case "regioneutenfiftybuyten":
      await bot.sendMessage(chatId, "Выберите способ оплаты:", paymentOptions);
      break;
    case "eufourty":
      await bot.sendMessage(
        chatId,
        "📃 Категория: [EU] 40-90 SKINS",
        regionEuFourtyNintyGet
      );
      break;
    case "regioneutenfifity":
      await bot.sendMessage(
        chatId,
        "📃 Товар: 40-90 SKINS\n💰 Цена: 80 ₽\n📃 Описание:\n\nВыберите количество товара, которое хотите купить:",
        regionEuFourtyNintyBuy
      );
      break;
    case "regioneufourtynintybuyone":
      await bot.sendMessage(chatId, "Выберите способ оплаты:", paymentOptions);
      break;
    case "regioneufourtynintybuytwo":
      await bot.sendMessage(chatId, "Выберите способ оплаты:", paymentOptions);
      break;
    case "regioneufourtynintybuythree":
      await bot.sendMessage(chatId, "Выберите способ оплаты:", paymentOptions);
      break;
    case "regioneufourtynintybuyfour":
      await bot.sendMessage(chatId, "Выберите способ оплаты:", paymentOptions);
      break;
    case "regioneufourtynintybuyfive":
      await bot.sendMessage(chatId, "Выберите способ оплаты:", paymentOptions);
      break;
    case "regioneufourtynintybuysix":
      await bot.sendMessage(chatId, "Выберите способ оплаты:", paymentOptions);
      break;
    case "regioneufourtynintybuyseven":
      await bot.sendMessage(chatId, "Выберите способ оплаты:", paymentOptions);
      break;
    case "regioneufourtynintybuyeight":
      await bot.sendMessage(chatId, "Выберите способ оплаты:", paymentOptions);
      break;
    case "regioneufourtynintybuynine":
      await bot.sendMessage(chatId, "Выберите способ оплаты:", paymentOptions);
      break;
    case "regioneufourtynintybuyten":
      await bot.sendMessage(chatId, "Выберите способ оплаты:", paymentOptions);
      break;
    case "euninty":
      await bot.sendMessage(
        chatId,
        "📃 Категория: [EU] 90-160 SKINS",
        regionEuNintyHundredSixtyGet
      );
      break;
    case "eufourtynintyskins":
      await bot.sendMessage(
        chatId,
        "📃 Товар: 40-160 SKINS\n💰 Цена: 80 ₽\n📃 Описание:\n\nВыберите количество товара, которое хотите купить:",
        regionEuNintyHundredSixty
      );
      break;
    case "regioneunintyhundredsixtybuyone":
      await bot.sendMessage(chatId, "Выберите способ оплаты:", paymentOptions);
      break;
    case "regioneunintyhundredsixtybuytwo":
      await bot.sendMessage(chatId, "Выберите способ оплаты:", paymentOptions);
      break;
    case "regioneunintyhundredsixtybuythree":
      await bot.sendMessage(chatId, "Выберите способ оплаты:", paymentOptions);
      break;
    case "regioneunintyhundredsixtybuyfour":
      await bot.sendMessage(chatId, "Выберите способ оплаты:", paymentOptions);
      break;
    case "regioneunintyhundredsixtybuyfive":
      await bot.sendMessage(chatId, "Выберите способ оплаты:", paymentOptions);
      break;
    case "regioneunintyhundredsixtybuysix":
      await bot.sendMessage(chatId, "Выберите способ оплаты:", paymentOptions);
      break;
    case "regioneunintyhundredsixtybuyseven":
      await bot.sendMessage(chatId, "Выберите способ оплаты:", paymentOptions);
      break;
    case "regioneunintyhundredsixtybuyeight":
      await bot.sendMessage(chatId, "Выберите способ оплаты:", paymentOptions);
      break;
    case "regioneunintyhundredsixtybuynine":
      await bot.sendMessage(chatId, "Выберите способ оплаты:", paymentOptions);
      break;
    case "regioneunintyhundredsixtybuyten":
      await bot.sendMessage(chatId, "Выберите способ оплаты:", paymentOptions);
      break;
    case "euone":
      await bot.sendMessage(
        chatId,
        "📃 Категория: [EU] 1-100 SKINS",
        regionEuOneHundredGet
      );
      break;
    case "regioneuonehundredget":
      await bot.sendMessage(
        chatId,
        "📃 Товар: 1-100 SKINS\n💰 Цена: 35 ₽\n📃 Описание:\n\nВыберите количество товара, которое хотите купить:"
      );
      break;
    case "regioneuonehundredbuyone":
      await bot.sendMessage(chatId, "Выберите способ оплаты:", paymentOptions);
      break;
    case "regioneuonehundredbuytwo":
      await bot.sendMessage(chatId, "Выберите способ оплаты:", paymentOptions);
      break;
    case "regioneuonehundredbuythree":
      await bot.sendMessage(chatId, "Выберите способ оплаты:", paymentOptions);
      break;
    case "regioneuonehundredbuyfour":
      await bot.sendMessage(chatId, "Выберите способ оплаты:", paymentOptions);
      break;
    case "regioneuonehundredbuyfive":
      await bot.sendMessage(chatId, "Выберите способ оплаты:", paymentOptions);
      break;
    case "regioneuonehundredbuysix":
      await bot.sendMessage(chatId, "Выберите способ оплаты:", paymentOptions);
      break;
    case "regioneuonehundredbuyseven":
      await bot.sendMessage(chatId, "Выберите способ оплаты:", paymentOptions);
      break;
    case "regioneuonehundredbuyeight":
      await bot.sendMessage(chatId, "Выберите способ оплаты:", paymentOptions);
      break;
    case "regioneuonehundredbuynine":
      await bot.sendMessage(chatId, "Выберите способ оплаты:", paymentOptions);
      break;
    case "regioneuonehundredbuyten":
      await bot.sendMessage(chatId, "Выберите способ оплаты:", paymentOptions);
      break;
    case "eutousand":
      await bot.sendMessage(
        chatId,
        "📃 Категория: [EU] BALANCE 1775 - 3550VP",
        regionEuBalanceSevenHundredGet
      );
      break;
    case "balanceseventousendhunded":
      await bot.sendMessage(
        chatId,
        "📃 Товар: BALANCE 1775 - 3550VP\n💰 Цена: 70 ₽\n📃 Описание:\n\nВыберите количество товара, которое хотите купить:",
        regionEuBalanceSevenHundredBuy
      );
    case "regioneubalancesevenhundredbuyone":
      await bot.sendMessage(chatId, "Выберите способ оплаты:", paymentOptions);
      break;
    case "regioneubalancesevenhundredbuytwo":
      await bot.sendMessage(chatId, "Выберите способ оплаты:", paymentOptions);
      break;
    case "regioneubalancesevenhundredbuythree":
      await bot.sendMessage(chatId, "Выберите способ оплаты:", paymentOptions);
      break;
    case "regioneubalancesevenhundredbuyfour":
      await bot.sendMessage(chatId, "Выберите способ оплаты:", paymentOptions);
      break;
    case "regioneubalancesevenhundredbuyfive":
      await bot.sendMessage(chatId, "Выберите способ оплаты:", paymentOptions);
      break;

    //сделать кнопку [Eu] BAlANCE 3550 - 8000
    case "euthreetousand":
      await bot.sendMessage(
        chatId,
        "📃 Категория: [EU] BALANCE 3550 - 8000VP",
        regionEuThreeTousandGet
      );
      break;
    case "regioneuthreetousand":
      await bot.sendMessage(
        chatId,
        "📃 Товар: BALANCE 3550 - 8000VP\n💰 Цена: 140 ₽\n📃 Описание:\n\nВыберите количество товара, которое хотите купить:",
        regionEuThreeTousandBuy
      );
      break;
    case "regioneuthreetousandbuyone":
      await bot.sendMessage(chatId, "Выберите способ оплаты:", paymentOptions);
      break;
    case "regioneuthreetousandbuytwo":
      await bot.sendMessage(chatId, "Выберите способ оплаты:", paymentOptions);
      break;
    case "regioneuthreetousandbuythree":
      await bot.sendMessage(chatId, "Выберите способ оплаты:", paymentOptions);
      break;
    case "regioneuthreetousandbuyfour":
      await bot.sendMessage(chatId, "Выберите способ оплаты:", paymentOptions);
      break;
    case "regioneuthreetousandbuyfive":
      await bot.sendMessage(chatId, "Выберите способ оплаты:", paymentOptions);
      break;
    case "regioneuthreetousandbuysix":
      await bot.sendMessage(chatId, "Выберите способ оплаты:", paymentOptions);
      break;
    case "regioneuthreetousandbuyseven":
      await bot.sendMessage(chatId, "Выберите способ оплаты:", paymentOptions);
      break;
    case "narankedready":
      await bot.sendMessage(
        chatId,
        "📃 Категория: [NA] RANKED READY",
        regionNaRankedReadyGet
      );
      break;
    case "regionnarankedrady":
      await bot.sendMesssage(
        chatId,
        "📃 Товар: RANKED READY\n💰 Цена: 20 ₽ \n📃 Описание:\n\nВыберите количество товара, которое хотите купить:",
        regionNaRankedReadyBuy
      );
      break;
    case "regionnarankedreadybuyone":
      await bot.sendMessage(chatId, "Выберите способ оплаты:", paymentOptions);
      break;
    case "regionnarankedreadybuytwo":
      await bot.sendMessage(chatId, "Выберите способ оплаты:", paymentOptions);
      break;
    case "regionnarankedreadybuythree":
      await bot.sendMessage(chatId, "Выберите способ оплаты:", paymentOptions);
      break;
    case "regionnarankedreadybuyfour":
      await bot.sendMessage(chatId, "Выберите способ оплаты:", paymentOptions);
      break;
    case "regionnarankedreadybuyfive":
      await bot.sendMessage(chatId, "Выберите способ оплаты:", paymentOptions);
      break;
    case "regionnarankedreadybuysix":
      await bot.sendMessage(chatId, "Выберите способ оплаты:", paymentOptions);
      break;
    case "regionnarankedreadybuyseven":
      await bot.sendMessage(chatId, "Выберите способ оплаты:", paymentOptions);
      break;
    case "regionnarankedreadybuyeight":
      await bot.sendMessage(chatId, "Выберите способ оплаты:", paymentOptions);
      break;
    case "regionnarankedreadybuynine":
      await bot.sendMessage(chatId, "Выберите способ оплаты:", paymentOptions);
      break;
    case "regionnarankedreadybuyten":
      await bot.sendMessage(chatId, "Выберите способ оплаты:", paymentOptions);
      break;

    case "naten":
      await bot.sendMessage(
        chatId,
        "📃 Категория: [NA] 10-50 SKINS",
        regionNaTenFiftyGet
      );
      break;
    case "natenfifityget":
      await bot.sendMessage(
        chatId,
        "📃 Товар: 10-50 SKINS\n💰 Цена: 40 ₽\n📃 Описание:\n\nВыберите количество товара, которое хотите купить:",
        regionNaTenFiftyBuy
      );
      break;
    case "regionnatenfiftybuyone":
      await bot.sendMessage(chatId, "Выберите способ оплаты:", paymentOptions);
      break;
    case "regionnatenfiftybuytwo":
      await bot.sendMessage(chatId, "Выберите способ оплаты:", paymentOptions);
      break;
    case "regionnatenfiftybuythree":
      await bot.sendMessage(chatId, "Выберите способ оплаты:", paymentOptions);
      break;
    case "regionnatenfiftybuyfour":
      await bot.sendMessage(chatId, "Выберите способ оплаты:", paymentOptions);
      break;
    case "regionnatenfiftybuyfive":
      await bot.sendMessage(chatId, "Выберите способ оплаты:", paymentOptions);
      break;
    case "regionnatenfiftybuysix":
      await bot.sendMessage(chatId, "Выберите способ оплаты:", paymentOptions);
      break;
    case "regionnatenfiftybuyseven":
      await bot.sendMessage(chatId, "Выберите способ оплаты:", paymentOptions);
      break;
    case "regionnatenfiftybuyeight":
      await bot.sendMessage(chatId, "Выберите способ оплаты:", paymentOptions);
      break;
    case "regionnatenfiftybuynine":
      await bot.sendMessage(chatId, "Выберите способ оплаты:", paymentOptions);
      break;
    case "regionnatenfiftybuyten":
      await bot.sendMessage(chatId, "Выберите способ оплаты:", paymentOptions);
      break;
    case "nafourty":
      await bot.sendMessage(
        chatId,
        "📃 Категория: [NA] 40-90 SKINS",
        regionNaFourtyNintyGet
      );
      break;
    case "fortynintyskins":
      await bot.sendMessage(
        chatId,
        "📃 Товар: 40-90 SKINS\n💰 Цена: 70 ₽\n📃 Описание:\n\nВыберите количество товара, которое хотите купить",
        regionNaFourtyNintyBuy
      );
      break;
    case "regionnafourtynintybuyone":
      await bot.sendMessage(chatId, "Выберите способ оплаты:", paymentOptions);
      break;
    case "regionnafourtynintybuytwo":
      await bot.sendMessage(chatId, "Выберите способ оплаты:", paymentOptions);
      break;
    case "naone":
      await bot.sendMessage(chatId, "📃 Категория: [NA] 1-100 SKINS", regionNaOneGet);
      break;
    case "regionnaonetohundred":
      await bot.sendMessage(
        chatId,
        "📃 Товар: 1-100 SKINS\n💰 Цена: 25 ₽\n📃 Описание:\n\nВыберите количество товара, которое хотите купить:",
        regionNaOneBuy
      );
      break;
    case "regionnaonebuyone":
      await bot.sendMessage(chatId, "Выберите способ оплаты:", paymentOptions);
      break;
    case "regionnaonebuytwo":
      await bot.sendMessage(chatId, "Выберите способ оплаты:", paymentOptions);
      break;
    case "regionnaonebuythree":
      await bot.sendMessage(chatId, "Выберите способ оплаты:", paymentOptions);
      break;
    case "regionnaonebuyfour":
      await bot.sendMessage(chatId, "Выберите способ оплаты:", paymentOptions);
      break;
    case "regionnaonebuyfive":
      await bot.sendMessage(chatId, "Выберите способ оплаты:", paymentOptions);
      break;
    case "regionnaonebuysix":
      await bot.sendMessage(chatId, "Выберите способ оплаты:", paymentOptions);
      break;
    case "regionnaonebuyseven":
      await bot.sendMessage(chatId, "Выберите способ оплаты:", paymentOptions);
      break;
    case "regionnaonebuyeight":
      await bot.sendMessage(chatId, "Выберите способ оплаты:", paymentOptions);
      break;
    case "regionnaonebuynine":
      await bot.sendMessage(chatId, "Выберите способ оплаты:", paymentOptions);
      break;
    case "regionnaonebuyten":
      await bot.sendMessage(chatId, "Выберите способ оплаты:", paymentOptions);
      break;
    case 'qiwi':
      await bot.sendMessage(chatId, "выбирите как хотите оплатить", howToPay)
    case 'balance':
      await bot.sendMessage(chatId, "введите сумму которую хотите пополнить")
      await sendPaymentDataToJson()
      const paymentUrl = await generatePaymentUrl();
      await doBalancePayment()
      break
    case 'card':
      const paymentUrlCard = await generatePaymentUrl()
      await bot.sendMessage(chatId, `Please follow this link to make a payment: ${paymentUrl}`)
      await createPaymentRequest()
  }
});

bot.on("polling_error", console.log);
