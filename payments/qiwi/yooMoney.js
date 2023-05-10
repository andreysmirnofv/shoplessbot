const { API } = require("yoomoney-sdk");
const { wallet } = new API({ token: "5701309993:AAHpRhn0qr7FqgHNkZC_NyLBUH9L4A_6_2E" });
const bot = require('../../index.js')
const paymentData = require('../../db/users/users.json')
const fs = require('fs')
const express = require('express')
const app = express();

const createPaymentRequest = async () => {
  const paymentUrl = await wallet
    .createPaymentRequest({
      amount: {
        value: ["amount"],
        currency: ["currency"],
      },
      description: "Payment for my service",
      returnUrl: "https://valoaccsto.ru",
    }).generatePaymentUrl();
  return paymentUrl;
}

const sendPaymentDataToJson = (msg) => {
    paymentData.push({
        paymentData: msg.text
    })
    fs.writeFileSync('../../db/payments/payments.json', JSON.stringify(paymentData, null ,'\t'))
    bot.removeListener('message', sendPaymentDataToJson)
    bot.on('message', checkPayment)
}

const checkPayment = async (msg, match) => {
  const invoiceId = match[1];
  for (pd in paymentData){
    try{
      const payment = await yooMoney.checkPayment(invoiceId);
      const message = `Payment status for invoice ${invoiceId}: ${payment.status}`;
      await bot.sendMessage(msg.chat.id, message);
      if (msg.text === paymentData[pd].paymentData) return bot.sendMessage(msg.chat.id, "ваш баланс пополнен на сумму в ", pd)
    } catch (error) {
      console.error(error);
      await bot.sendMessage(msg.chat.id, 'An error occurred while checking the payment status. try again pls');
    }}
}

const doBalancePayment = async () => {
  app.post('/webhook', (req, res) => {
    for (pd in paymentsData){
      try{
        const paymentId = createPaymentRequest
        const paymentStatus = req.body.status
        const paymentAmount = paymentData[pd].paymentData

        res.status(200).send('Webhook recieves successfully')
        checkPayment()
      }
      catch(error){ 
        console.log('hello world')
        }
    }
  })

    const bodyParser = require('body-parser')
    app.use(bodyParser.json())
    app.listen(3000, () => {
      console.log('webhook server listening on port 3000')
    })
    res.status(200).send('webhook recieved successfully')
  }


//записывать данные про сумму в json потом сверять в yoomoney если такое в json имееться.
// также можно попробовать webhook
