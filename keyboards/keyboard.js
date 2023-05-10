module.exports = {
    adminOptions: {
        reply_markup: {
            keyboard: [
                [{text: "Изменить Наличие Товара 📑", callback_data: 'changeproduct'}, {text: "Изменить Правила 📜", callback_data: "changerules"}],
                [{text: "Посмотреть все товары", callback_data: "seeallproducts"}]
            ]
        }
    },
    options: {
        reply_markup: JSON.stringify({
            keyboard: [
                [{text: "Купить 🛒", callback_data: 'buy'}, {text: "Наличие товара 📑", callback_data: 'products'}],
                [{text: "Профиль 👤", callback_data: 'profile'}, {text: "Пополнить баланс 💸", callback_data: 'addbalance'}],
                [{text: "Правила 📜", callback_data: "roules"}, {text: "помощь❤️", callback_data: "help"}],
                [{text: "Ввести промокод 💎", callback_data: "promocode"}],
            ]
            
        })
    },
    
    buyOptions: {
        reply_markup: JSON.stringify({
            inline_keyboard: [
                [{text: "ЖИРНЫЕ АККАУНТЫ С ОПИСАНИЕМ", callback_data: 'accounts'}],
                [{text: "REGION AP", callback_data: 'ap'}],
                [{text: "REGION EU", callback_data: 'eu'}],
                [{text: "REGION NA", callback_data: 'na'}]
            ]
        })
    },
    
    accsRegionEu: {
        reply_markup: JSON.stringify({
            inline_keyboard: [
                [{text: "REGION EU", callback_data: "accsregioneu"}],
                [{text: "Вернуться ко всем категорям", callback_data: "accseuback"}]
            ]
        })
    },
    
    paymentOptions: {
        reply_markup: JSON.stringify({
            inline_keyboard: [
                [{text: 'Crystal Pay', callback_data: 'crystal'}],
                [{text: 'Qiwi Pay', callback_data: 'qiwi'}]
            ]
        })
    },
    
    linkPaymentOptions: {
        reply_markup: JSON.stringify({
            inline_keyboard: [
                [{text: 'перейти к опалте', url: "https://pay.crystalpay.io/?i=715303049_SNJprqZkje", callback_data: 'dopayment'}],
                [{text: "отменить оплату", callback_data: "cancelpayment"}]
            ]
        })
    },
    
    region: {
        reply_markup: JSON.stringify({
            inline_keyboard: [
                [{text: "REGION EU", callback_data: "regeioneu"}],
                [{text: "Назад ко всем категориям", callback_data: "backtoallcategories"}]
            ]
        })
    },
    
    regionAp: {
        reply_markup: JSON.stringify({
            inline_keyboard: [
                [{text: "[AP] RANKED READY", callback_data: "aprankedready"}],
                [{text: "[AP] 10-50 SKINS", callback_data: "apten"}],
                [{text: "[AP] 40-90 SKINS", callback_data: "apfourty"}],
                [{text: "[AP] 1-100 SKINS", callback_data: "apone"}],
                [{text: "Назад ко всем категориям", callback_data: "apback"}]
            ]
        })
    },
    apRankedReadyGet: {
        reply_markup: JSON.stringify({
            inline_keyboard: [
                [{text: "RANKED READY | 10₽ | Кол-во: 21 шт.", callback_data: "aprankedten"}],
                [{text: "Назад ко всем категориям", callback_data: "apbacktoall"}]
            ]
        })
    },
    apRankedReadyBuy: {
        reply_markup: JSON.stringify({
            inline_keyboard: [
                [{text: "1", callback_data: "aprankedbuyone"}, {text: "2", callback_data: "aprankedbuytwo"}, {text: "3", callback_data: "aprankedbuythree"}, {text: "4", callback_data: "aprankedbuyfour"}, {text: "5", callback_data: "aprankedbuyfive"}],
                [{text: "6", callback_data: "aprankedbuysix"}, {text: "7", callback_data: "aprankedbuyseven"}, {text: "8", callback_data: "aprankedbuyeight"}, {text: "9", callback_data: "aprankedbuynine"}, {text: "10", callback_data: "aprankedbuyten"}],
                [{text: 'Назад ко всем категориям', callback_data: 'aprankedreadybuybacktoall'}]
            ]
        })
    },
    apTenFifty: {
        reply_markup: JSON.stringify({
            inline_keyboard: [
                [{text: "10-50 SKINS | 30₽ | Кол-во: 17 шт.", callback_data: "aptenfifityskins"}],
                [{text: 'Назад ко всем категориям', callback_data: 'aprankedreadybuybacktoall'}]
            ]
        })
    },

    apTenFiftySkinsGet: {
        reply_markup: JSON.stringify({
            inline_keyboard: [
                [{text: "1", callback_data: "aptenfiftyskinsbuyone"}, {text: "2", callback_data: "aptenfiftyskinsbuytwo"}, {text: "3", callback_data: "aptenfiftyskinsbuythree"}, {text: "4", callback_data: "aptenfiftyskinsbuyfour"}, {text: "5", callback_data: "aptenfiftyskinsbuyfive"}],
                [{text: "6", callback_data: "aptenfiftyskinsbuysix"}, {text: "7", callback_data: "aptenfiftyskinsbuyseven"}, {text: "8", callback_data: "aptenfiftyskinsbuyeight"}, {text: "9", callback_data: "aptenfiftyskinsbuynine"}, {text: "10", callback_data: "aptenfiftyskinsbuyten"}],
                [{text: 'Назад ко всем категориям', callback_data: 'aprankedreadybuybacktoall'}]
            ]
        })
    },

    apFourtySkinsGet: {
        reply_markup: JSON.stringify({
            inline_keyboard: [
                [{text: "40-90 SKINS | 65 ₽ | Кол-во: 23.", callback_data: "apfourtyskinsbuy"}],
                [{text: "Назад ко всем категориям", callback_data: "apbacktoall"}]
            ]
        })
    },

    apfourtySkinsBuy: {
        reply_markup: JSON.stringify({
            inline_keyboard: [
                [{text: "1", callback_data: "apfourtyskinsbuyone"}, {text: "2", callback_data: "apfourtyskinsbuytwo"}, {text: "3", callback_data: "apfourtyskinsbuythree"}, {text: "4", callback_data: "apfourtyskinsbuyfour"}, {text: "5", callback_data: "apfourtyskinsbuyfive"}],
                [{text: "6", callback_data: "apfourtyskinsbuysix"}, {text: "7", callback_data: "apfourtyskinsbuyseven"}, {text: "8", callback_data: "apfourtyskinsbuyeight"}, {text: "9", callback_data: "apfourtyskinsbuynine"}, {text: "10", callback_data: "apfourtyskinsbuyten"}],
                [{text: 'Назад ко всем категориям', callback_data: 'aprankedreadybuybackfourty'}],
            ]
        })

    },
    apOneHundredSkinsGet: {
        reply_markup: JSON.stringify({
            inline_keyboard: [
                [{text: "40-90 SKINS | 65 ₽ | Кол-во: 23.", callback_data: "aponehundredskinsbuy"}],
                [{text: "Назад ко всем категориям", callback_data: "apbacktoall"}]
            ]
           
        })
    },
    apOneHundredSkinsBuy: {
        reply_markup: JSON.stringify({
            inline_keyboard: [
                [{text: "1", callback_data: "aponehundredskinsbuyone"}, {text: "2", callback_data: "aponehundredskinsbuytwo"}, {text: "3", callback_data: "aponehundredskinsbuythree"}, {text: "4", callback_data: "aponehundredskinsbuyfour"}, {text: "5", callback_data: "aponehundredskinsbuyfive"}],
                [{text: "6", callback_data: "aponehundredskinsbuysix"}, {text: "7", callback_data: "aponehundredskinsbuyseven"}, {text: "8", callback_data: "aponehundredskinsbuyeight"}, {text: "9", callback_data: "aponehundredskinsbuynine"}, {text: "10", callback_data: "aponehundredskinsbuyten"}],
                [{text: 'Назад ко всем категориям', callback_data: 'aprankedreadybuybackfourty'}],
            ]
        })
    },
    
    regionEu: {
        reply_markup: JSON.stringify({
            inline_keyboard: [
                [{text: "[EU] RANKED READY", callback_data: "eurankedready"}],
                [{text: "[EU] 10-50 SKINS", callback_data: "euten"}],
                [{text: "[EU] 40-90 SKINS", callback_data: "eufourty"}],
                [{text: "[EU] 90-160 SKINS", callback_data: "euninty"}],
                [{text: "[EU] 1-100", callback_data: "euone"}],
                [{text: "[EU] BALANCE 1775 - 3550VP", callback_data: "eutousand"}],
                [{text: "[EU] BALANCE 3550 - 8000VP", callback_data: "euthreetousand"}],
                [{text: "Назад ко всем категориям", callback_data: "eubacktoall"}]
            ]
        })
    },

    regionEuRankedReadyGet: {
        reply_markup: JSON.stringify({
            inline_keyboard: [
                [{text: "[EU] RANKED READY | 30 ₽ | Кол-во: 194 шт.", callback_data: "eurankedreadyget"}],
                [{text: "Назад ко всем категориям", callback_data: "eubacktoall"}]
            ]
        })
    },
    regionEuRankedReadyBuy: {
        reply_markup: JSON.stringify({
            inline_keyboard: [
                [{text: "1", callback_data: 'regioneureadybuyone'}, {text: "2", callback_data: "regioneureadybuytwo"}, {text: "3", callback_data: "regioneureadybuythree"}, {text: "4", callback_data: "regioneureadybuyfour"}, {text: "5", callback_data: 'regioneureadybuyfive'},],
                [{text: "6", callback_data: "regioneureadybuysix"}, {text: "7", callback_data: "regioneureadybuyseven"}, {text:"8", callback_data: "regioneureadybuyeight"}, {text:"9", callback_data: "regioneureadybuynine"}, {text:"10", callback_data: "regioneureadybuyten"}],
                [{text: "Назад ко всем категориям", callback_data: "eubacktoall"}]
            ]
        })
    },

    regionEuTenFiftyGet: {
        reply_markup: JSON.stringify({
            inline_keyboard: [
                [{text: "[EU] 10-50 SKINS | 45 ₽ | Кол-во: 85 шт.", callback_data: "regioneutenfifity"}],
                [{text: "Назад ко всем категориям", callback_data: "eubacktoall"}]
            ]
        })
    },

    regionEuTenFiftyBuy: {
        reply_markup: JSON.stringify({
            inline_keyboard: [
                [{text: "1", callback_data: 'regioneutenfiftybuyone'}, {text: "2", callback_data: "regioneutenfiftybuytwo"}, {text: "3", callback_data: "regioneutenfiftybuythree"}, {text: "4", callback_data: "regioneutenfiftybuyfour"}, {text: "5", callback_data: 'regioneutenfiftybuyfive'},],
                [{text: "6", callback_data: "regioneutenfiftybuysix"}, {text: "7", callback_data: "regioneutenfiftybuyseven"}, {text:"8", callback_data: "regioneutenfiftybuyeight"}, {text:"9", callback_data: "regioneutenfiftybuynine"}, {text:"10", callback_data: "regioneutenfiftybuyten"}],
                [{text: "Назад ко всем категориям", callback_data: "eubacktoall"}]
            ]
        })
    },

    regionEuFourtyNintyGet: {
        reply_markup: JSON.stringify({
            inline_keyboard: [
                [{text: "[EU] 40-90 SKINS | 80 ₽ | Кол-во: 66 шт.", callback_data: "fourtynintyskins"}],
                [{text: "Назад ко всем категориям", callback_data: "eubacktoall"}]
            ]
        })
    },

    regionEuFourtyNintyBuy: {
        reply_markup: JSON.stringify({
            inline_keyboard: [
                [{text: "1", callback_data: 'regioneufourtynintybuyone'}, {text: "2", callback_data: "regioneufourtynintybuytwo"}, {text: "3", callback_data: "regioneufourtynintybuythree"}, {text: "4", callback_data: "regioneufourtynintybuyfour"}, {text: "5", callback_data: 'regioneufourtynintybuyfive'},],
                [{text: "6", callback_data: "regioneufourtynintybuysix"}, {text: "7", callback_data: "regioneufourtynintybuyseven"}, {text:"8", callback_data: "regioneufourtynintybuyeight"}, {text:"9", callback_data: "regioneufourtynintybuynine"}, {text:"10", callback_data: "regioneufourtynintybuyten"}],
                [{text: "Назад ко всем категориям", callback_data: "eubacktoall"}]
            ]
        })
    },

    regionEuNintyHundredSixtyGet: {
        reply_markup: JSON.stringify({
            inline_keyboard: [
                [{text: "[EU] 40-90 SKINS | 80 ₽ | Кол-во: 66 шт.", callback_data: "eufourtynintyskins"}],
                [{text: "Назад ко всем категориям", callback_data: "eubacktoall"}],

            ]
        })
    },

    regionEuNintyHundredSixtyBuy: {
        reply_markup: JSON.stringify({
            inline_keyboard: [
                [{text: "1", callback_data: 'regioneunintyhundredsixtybuyone'}, {text: "2", callback_data: "regioneunintyhundredsixtybuytwo"}, {text: "3", callback_data: "regioneunintyhundredsixtybuythree"}, {text: "4", callback_data: "regioneunintyhundredsixtybuyfour"}, {text: "5", callback_data: 'regioneunintyhundredsixtybuyfive'},],
                [{text: "6", callback_data: "regioneunintyhundredsixtybuysix"}, {text: "7", callback_data: "regioneunintyhundredsixtybuyseven"}, {text:"8", callback_data: "regioneunintyhundredsixtybuyeight"}, {text:"9", callback_data: "regioneunintyhundredsixtybuynine"}, {text:"10", callback_data: "regioneunintyhundredsixtybuyten"}],
                [{text: "Назад ко всем категориям", callback_data: "eubacktoall"}]
            ]
        })
    },

    regionEuOneHundredGet: {
        reply_markup: JSON.stringify({
            inline_keyboard: [
                [{text: "1-100 SKINS | 35 ₽ | Кол-во 85 шт.", callback_data: "regioneuonehundredget"}]
                [{text: "Назад ко всем категориям", callback_data: "eubacktoall"}]
            ]
        })
    },

    regionEuOneHundredBuy: {
        reply_markup: JSON.stringify({
            inline_keyboard: [
                [{text: "1", callback_data: 'regioneuonehundredbuyone'}, {text: "2", callback_data: "regioneuonehundredbuytwo"}, {text: "3", callback_data: "regioneuonehundredbuythree"}, {text: "4", callback_data: "regioneuonehundredbuyfour"}, {text: "5", callback_data: 'regioneuonehundredbuyfive'},],
                [{text: "6", callback_data: "regioneuonehundredbuysix"}, {text: "7", callback_data: "regioneuonehundredbuyseven"}, {text:"8", callback_data: "regioneuonehundredbuyeight"}, {text:"9", callback_data: "regioneuonehundredbuynine"}, {text:"10", callback_data: "regioneuonehundredbuyten"}],
                [{text: "Назад ко всем категориям", callback_data: "eubacktoall"}]
            ]
        })
    },

    regionEuBalanceSevenHundredGet: {
        reply_markup: JSON.stringify({
            inline_keyboard: [
                [{text: "BALANCE 1775 - 3550 | 70₽ | Кол-во: 5 шт.", callback_data: "balanceseventousendhunded"}],
                [{text: "Назад ко всем категориям", callback_data: "eubacktoall"}]
            ]
        })
    },

    regionEuBalanceSevenHundredBuy: {
        reply_markup: JSON.stringify({
            inline_keyboard: [
                [{text: "1", callback_data: 'regioneubalancesevenhundredbuyone'}, {text: "2", callback_data: "regioneubalancesevenhundredbuytwo"}, {text: "3", callback_data: "regioneubalancesevenhundredbuythree"}, {text: "4", callback_data: "regioneubalancesevenhundredbuyfour"}, {text: "5", callback_data: 'regioneubalancesevenhundredbuyfive'},],
                [{text: "Назад ко всем категориям", callback_data: "eubacktoall"}]
            ]
        })
    },

    regionEuThreeTousandGet: {
        reply_markup: JSON.stringify({
            inline_keyboard: [
                [{text: "BALANCE 3550 - 8000VP", callback_data: "regioneuthreetousand"}],
                [{text: "Назад ко всем категориям", callback_data: "eubacktoall"}]
            ]
        })
    },

    regionEuThreeTousandBuy: {
        reply_markup: JSON.stringify({
            inline_keyboard: [
                [{text: "1", callback_data: "regioneuthreetousandbuyone"}, {text: "2", callback_data: "regioneuthreetousandbuytwo"}, {text: "3", callback_data: "regioneuthreetousandbuythree"}, {text: "4", callback_data: "regioneuthreetousandbuyfour"}, {text: "5", callback_data: "regioneuthreetousandbuyfive"}],
                [{text: "6", callback_data: "regioneuthreetousandbuysix"}, {text: "7", callback_data: "regioneuthreetousandbuyseven"}],
                [{text: "Назад ко всем категориям", callback_data: "eubacktoall"}]
            ]
        })
    },
    
    regionNa: {
        reply_markup: JSON.stringify({
            inline_keyboard: [
                [{text: "[NA] RANKED READY", callback_data: "narankedready"}],
                [{text: "[NA] 10-50 SKINS", callback_data: "naten"}],
                [{text: "[NA] 40-90 SKINS", callback_data: "nafourty"}],
                [{text: "[NA] 1-100 SKINS", callback_data: "naone"}],
                [{text: "Назад ко всем категориям", callback_data: "naback"}]
            ]
        })
    },

    regionNaRankedReadyGet: {
        reply_markup: JSON.stringify({
            inline_keyboard: [
                [{text: "RANKED READY | 20 ₽ | Кол-во: 25 шт.", callback_data: "regionnarankedrady"}],
                [{text: "Назад ко всем категориям", callback_data: "naback"}]
            ]
        })
    },

    regionNaRankedReadyBuy: {
        reply_markup: JSON.stringify({
            inline_keyboard: [
                [{text: "1", callback_data: 'regionnarankedreadybuyone'}, {text: "2", callback_data: "regionnarankedreadybuytwo"}, {text: "3", callback_data: "regionnarankedreadybuythree"}, {text: "4", callback_data: "regionnarankedreadybuyfour"}, {text: "5", callback_data: 'regionnarankedreadybuyfive'},],
                [{text: "6", callback_data: "regionnarankedreadybuysix"}, {text: "7", callback_data: "regionnarankedreadybuyseven"}, {text:"8", callback_data: "regionnarankedreadybuyeight"}, {text:"9", callback_data: "regionnarankedreadybuynine"}, {text:"10", callback_data: "regionnarankedreadybuyten"}],
                [{text: "Назад ко всем категориям", callback_data: "naback"}]
            ]
        })
    },

    regionNaTenFiftyGet: {
        reply_markup: JSON.stringify({
            inline_keyboard: [
                [{text: "10-50 SKINS | 40 ₽| Кол-во: 26 шт.", callback_data: "natenfifityget"}],
                [{text: "Назад ко всем категориям", callback_data: "naback"}]
            ]
        })
    },

    regionNaTenFiftyBuy: {
        reply_markup: JSON.stringify({
            inline_keyboard: [
                [{text: "1", callback_data: 'regionnatenfiftybuyone'}, {text: "2", callback_data: "regionnatenfiftybuytwo"}, {text: "3", callback_data: "regionnatenfiftybuythree"}, {text: "4", callback_data: "regionnatenfiftybuyfour"}, {text: "5", callback_data: 'regionnatenfiftybuyfive'},],
                [{text: "6", callback_data: "regionnatenfiftybuysix"}, {text: "7", callback_data: "regionnatenfiftybuyseven"}, {text:"8", callback_data: "regionnatenfiftybuyeight"}, {text:"9", callback_data: "regionnatenfiftybuynine"}, {text:"10", callback_data: "regionnatenfiftybuyten"}],
                [{text: "Назад ко всем категориям", callback_data: "naback"}]
            ]
        })
    },
    regionNaFourtyNintyGet:{
        reply_markup: JSON.stringify({
            inline_keyboard: [
                [{text: "40-90 SKINS | 70 ₽ | Кол-во: 2 шт.", callback_data: "fortynintyskins"}],
                [{text: "Назад ко всем категориям", callback_data: "naback"}]
            ]
        })
    } ,
    regionNaFourtyNintyBuy: {
        reply_markup: JSON.stringify({
            inline_keyboard: [
                [{text: "1", callback_data: "regionnafourtynintybuyone"}, {text: "2", callback_data: "regionnafourtynintybuytwo"}],
                [{text: "Назад ко всем категориям", callback_data: "naback"}]
            ]
        })
    },   
    regionNaOneGet: {
        reply_markup: JSON.stringify({
            inline_keyboard: [
                [{text: "1-100 SKINS | 25 ₽ | Кол-во: 25 шт.", callback_data: "regionnaonetohundred"}],
                [{text: "Назад ко всем категориям", callback_data: "naback"}]
            ]
        })
    } ,
    regionNaOneBuy: {
        reply_markup: JSON.stringify({
            inline_keyboard: [
                [{text: "1", callback_data: 'regionnaonebuyone'}, {text: "2", callback_data: "regionnaonebuytwo"}, {text: "3", callback_data: "regionnaonebuythree"}, {text: "4", callback_data: "regionnaonebuyfour"}, {text: "5", callback_data: 'regionnaonebuyfive'},],
                [{text: "6", callback_data: "regionnaonebuysix"}, {text: "7", callback_data: "regionnaonebuyseven"}, {text:"8", callback_data: "regionnaonebuyeight"}, {text:"9", callback_data: "regionnaonebuynine"}, {text:"10", callback_data: "regionnaonebuyten"}],
                [{text: "Назад ко всем категориям", callback_data: "naback"}]
            ]
        })
    }
}

module.exports = {
    adminOptions: {
        reply_markup: {
            keyboard: [
                [{text: "Изменить Наличие Товара 📑", callback_data: 'changeproduct'}, {text: "Изменить Правила 📜", callback_data: "changerules"}],
                [{text: "Посмотреть все товары", callback_data: "seeallproducts"}]
            ]
        }
    },
    options: {
        reply_markup: JSON.stringify({
            keyboard: [
                [{text: "Купить 🛒", callback_data: 'buy'}, {text: "Наличие товара 📑", callback_data: 'products'}],
                [{text: "Профиль 👤", callback_data: 'profile'}, {text: "Пополнить баланс 💸", callback_data: 'addbalance'}],
                [{text: "Правила 📜", callback_data: "roules"}, {text: "помощь❤️", callback_data: "help"}],
                [{text: "Ввести промокод 💎", callback_data: "promocode"}],
            ]
            
        })
    },
    
    buyOptions: {
        reply_markup: JSON.stringify({
            inline_keyboard: [
                [{text: "ЖИРНЫЕ АККАУНТЫ С ОПИСАНИЕМ", callback_data: 'accounts'}],
                [{text: "REGION AP", callback_data: 'ap'}],
                [{text: "REGION EU", callback_data: 'eu'}],
                [{text: "REGION NA", callback_data: 'na'}]
            ]
        })
    },
    
    accsRegionEu: {
        reply_markup: JSON.stringify({
            inline_keyboard: [
                [{text: "REGION EU", callback_data: "accsregioneu"}],
                [{text: "Вернуться ко всем категорям", callback_data: "accseuback"}]
            ]
        })
    },
    
    paymentOptions: {
        reply_markup: JSON.stringify({
            inline_keyboard: [
                [{text: 'Crystal Pay', callback_data: 'crystal'}],
                [{text: 'Qiwi Pay', callback_data: 'qiwi'}]
            ]
        })
    },
    
    linkPaymentOptions: {
        reply_markup: JSON.stringify({
            inline_keyboard: [
                [{text: 'перейти к опалте', url: "https://pay.crystalpay.io/?i=715303049_SNJprqZkje", callback_data: 'dopayment'}],
                [{text: "отменить оплату", callback_data: "cancelpayment"}]
            ]
        })
    },
    
    region: {
        reply_markup: JSON.stringify({
            inline_keyboard: [
                [{text: "REGION EU", callback_data: "regeioneu"}],
                [{text: "Назад ко всем категориям", callback_data: "backtoallcategories"}]
            ]
        })
    },
    
    regionAp: {
        reply_markup: JSON.stringify({
            inline_keyboard: [
                [{text: "[AP] RANKED READY", callback_data: "aprankedready"}],
                [{text: "[AP] 10-50 SKINS", callback_data: "apten"}],
                [{text: "[AP] 40-90 SKINS", callback_data: "apfourty"}],
                [{text: "[AP] 1-100 SKINS", callback_data: "apone"}],
                [{text: "Назад ко всем категориям", callback_data: "apback"}]
            ]
        })
    },
    apRankedReadyGet: {
        reply_markup: JSON.stringify({
            inline_keyboard: [
                [{text: "RANKED READY | 10₽ | Кол-во: 21 шт.", callback_data: "aprankedten"}],
                [{text: "Назад ко всем категориям", callback_data: "apbacktoall"}]
            ]
        })
    },
    apRankedReadyBuy: {
        reply_markup: JSON.stringify({
            inline_keyboard: [
                [{text: "1", callback_data: "aprankedbuyone"}, {text: "2", callback_data: "aprankedbuytwo"}, {text: "3", callback_data: "aprankedbuythree"}, {text: "4", callback_data: "aprankedbuyfour"}, {text: "5", callback_data: "aprankedbuyfive"}],
                [{text: "6", callback_data: "aprankedbuysix"}, {text: "7", callback_data: "aprankedbuyseven"}, {text: "8", callback_data: "aprankedbuyeight"}, {text: "9", callback_data: "aprankedbuynine"}, {text: "10", callback_data: "aprankedbuyten"}],
                [{text: 'Назад ко всем категориям', callback_data: 'aprankedreadybuybacktoall'}]
            ]
        })
    },
    apTenFifty: {
        reply_markup: JSON.stringify({
            inline_keyboard: [
                [{text: "10-50 SKINS | 30₽ | Кол-во: 17 шт.", callback_data: "aptenfifityskins"}],
                [{text: 'Назад ко всем категориям', callback_data: 'aprankedreadybuybacktoall'}]
            ]
        })
    },

    apTenFiftySkinsGet: {
        reply_markup: JSON.stringify({
            inline_keyboard: [
                [{text: "1", callback_data: "aptenfiftyskinsbuyone"}, {text: "2", callback_data: "aptenfiftyskinsbuytwo"}, {text: "3", callback_data: "aptenfiftyskinsbuythree"}, {text: "4", callback_data: "aptenfiftyskinsbuyfour"}, {text: "5", callback_data: "aptenfiftyskinsbuyfive"}],
                [{text: "6", callback_data: "aptenfiftyskinsbuysix"}, {text: "7", callback_data: "aptenfiftyskinsbuyseven"}, {text: "8", callback_data: "aptenfiftyskinsbuyeight"}, {text: "9", callback_data: "aptenfiftyskinsbuynine"}, {text: "10", callback_data: "aptenfiftyskinsbuyten"}],
                [{text: 'Назад ко всем категориям', callback_data: 'aprankedreadybuybacktoall'}]
            ]
        })
    },

    apFourtySkinsGet: {
        reply_markup: JSON.stringify({
            inline_keyboard: [
                [{text: "40-90 SKINS | 65 ₽ | Кол-во: 23.", callback_data: "apfourtyskinsbuy"}],
                [{text: "Назад ко всем категориям", callback_data: "apbacktoall"}]
            ]
        })
    },

    apfourtySkinsBuy: {
        reply_markup: JSON.stringify({
            inline_keyboard: [
                [{text: "1", callback_data: "apfourtyskinsbuyone"}, {text: "2", callback_data: "apfourtyskinsbuytwo"}, {text: "3", callback_data: "apfourtyskinsbuythree"}, {text: "4", callback_data: "apfourtyskinsbuyfour"}, {text: "5", callback_data: "apfourtyskinsbuyfive"}],
                [{text: "6", callback_data: "apfourtyskinsbuysix"}, {text: "7", callback_data: "apfourtyskinsbuyseven"}, {text: "8", callback_data: "apfourtyskinsbuyeight"}, {text: "9", callback_data: "apfourtyskinsbuynine"}, {text: "10", callback_data: "apfourtyskinsbuyten"}],
                [{text: 'Назад ко всем категориям', callback_data: 'aprankedreadybuybackfourty'}],
            ]
        })

    },
    apOneHundredSkinsGet: {
        reply_markup: JSON.stringify({
            inline_keyboard: [
                [{text: "40-90 SKINS | 65 ₽ | Кол-во: 23.", callback_data: "aponehundredskinsbuy"}],
                [{text: "Назад ко всем категориям", callback_data: "apbacktoall"}]
            ]
           
        })
    },
    apOneHundredSkinsBuy: {
        reply_markup: JSON.stringify({
            inline_keyboard: [
                [{text: "1", callback_data: "aponehundredskinsbuyone"}, {text: "2", callback_data: "aponehundredskinsbuytwo"}, {text: "3", callback_data: "aponehundredskinsbuythree"}, {text: "4", callback_data: "aponehundredskinsbuyfour"}, {text: "5", callback_data: "aponehundredskinsbuyfive"}],
                [{text: "6", callback_data: "aponehundredskinsbuysix"}, {text: "7", callback_data: "aponehundredskinsbuyseven"}, {text: "8", callback_data: "aponehundredskinsbuyeight"}, {text: "9", callback_data: "aponehundredskinsbuynine"}, {text: "10", callback_data: "aponehundredskinsbuyten"}],
                [{text: 'Назад ко всем категориям', callback_data: 'aprankedreadybuybackfourty'}],
            ]
        })
    },
    
    regionEu: {
        reply_markup: JSON.stringify({
            inline_keyboard: [
                [{text: "[EU] RANKED READY", callback_data: "eurankedready"}],
                [{text: "[EU] 10-50 SKINS", callback_data: "euten"}],
                [{text: "[EU] 40-90 SKINS", callback_data: "eufourty"}],
                [{text: "[EU] 90-160 SKINS", callback_data: "euninty"}],
                [{text: "[EU] 1-100", callback_data: "euone"}],
                [{text: "[EU] BALANCE 1775 - 3550VP", callback_data: "eutousand"}],
                [{text: "[EU] BALANCE 3550 - 8000VP", callback_data: "euthreetousand"}],
                [{text: "Назад ко всем категориям", callback_data: "eubacktoall"}]
            ]
        })
    },

    regionEuRankedReadyGet: {
        reply_markup: JSON.stringify({
            inline_keyboard: [
                [{text: "[EU] RANKED READY | 30 ₽ | Кол-во: 194 шт.", callback_data: "eurankedreadyget"}],
                [{text: "Назад ко всем категориям", callback_data: "eubacktoall"}]
            ]
        })
    },
    regionEuRankedReadyBuy: {
        reply_markup: JSON.stringify({
            inline_keyboard: [
                [{text: "1", callback_data: 'regioneureadybuyone'}, {text: "2", callback_data: "regioneureadybuytwo"}, {text: "3", callback_data: "regioneureadybuythree"}, {text: "4", callback_data: "regioneureadybuyfour"}, {text: "5", callback_data: 'regioneureadybuyfive'},],
                [{text: "6", callback_data: "regioneureadybuysix"}, {text: "7", callback_data: "regioneureadybuyseven"}, {text:"8", callback_data: "regioneureadybuyeight"}, {text:"9", callback_data: "regioneureadybuynine"}, {text:"10", callback_data: "regioneureadybuyten"}],
                [{text: "Назад ко всем категориям", callback_data: "eubacktoall"}]
            ]
        })
    },

    regionEuTenFiftyGet: {
        reply_markup: JSON.stringify({
            inline_keyboard: [
                [{text: "[EU] 10-50 SKINS | 45 ₽ | Кол-во: 85 шт.", callback_data: "regioneutenfifity"}],
                [{text: "Назад ко всем категориям", callback_data: "eubacktoall"}]
            ]
        })
    },

    regionEuTenFiftyBuy: {
        reply_markup: JSON.stringify({
            inline_keyboard: [
                [{text: "1", callback_data: 'regioneutenfiftybuyone'}, {text: "2", callback_data: "regioneutenfiftybuytwo"}, {text: "3", callback_data: "regioneutenfiftybuythree"}, {text: "4", callback_data: "regioneutenfiftybuyfour"}, {text: "5", callback_data: 'regioneutenfiftybuyfive'},],
                [{text: "6", callback_data: "regioneutenfiftybuysix"}, {text: "7", callback_data: "regioneutenfiftybuyseven"}, {text:"8", callback_data: "regioneutenfiftybuyeight"}, {text:"9", callback_data: "regioneutenfiftybuynine"}, {text:"10", callback_data: "regioneutenfiftybuyten"}],
                [{text: "Назад ко всем категориям", callback_data: "eubacktoall"}]
            ]
        })
    },

    regionEuFourtyNintyGet: {
        reply_markup: JSON.stringify({
            inline_keyboard: [
                [{text: "[EU] 40-90 SKINS | 80 ₽ | Кол-во: 66 шт.", callback_data: "fourtynintyskins"}],
                [{text: "Назад ко всем категориям", callback_data: "eubacktoall"}]
            ]
        })
    },

    regionEuFourtyNintyBuy: {
        reply_markup: JSON.stringify({
            inline_keyboard: [
                [{text: "1", callback_data: 'regioneufourtynintybuyone'}, {text: "2", callback_data: "regioneufourtynintybuytwo"}, {text: "3", callback_data: "regioneufourtynintybuythree"}, {text: "4", callback_data: "regioneufourtynintybuyfour"}, {text: "5", callback_data: 'regioneufourtynintybuyfive'},],
                [{text: "6", callback_data: "regioneufourtynintybuysix"}, {text: "7", callback_data: "regioneufourtynintybuyseven"}, {text:"8", callback_data: "regioneufourtynintybuyeight"}, {text:"9", callback_data: "regioneufourtynintybuynine"}, {text:"10", callback_data: "regioneufourtynintybuyten"}],
                [{text: "Назад ко всем категориям", callback_data: "eubacktoall"}]
            ]
        })
    },

    regionEuNintyHundredSixtyGet: {
        reply_markup: JSON.stringify({
            inline_keyboard: [
                [{text: "[EU] 40-90 SKINS | 80 ₽ | Кол-во: 66 шт.", callback_data: "eufourtynintyskins"}],
                [{text: "Назад ко всем категориям", callback_data: "eubacktoall"}],

            ]
        })
    },

    regionEuNintyHundredSixtyBuy: {
        reply_markup: JSON.stringify({
            inline_keyboard: [
                [{text: "1", callback_data: 'regioneunintyhundredsixtybuyone'}, {text: "2", callback_data: "regioneunintyhundredsixtybuytwo"}, {text: "3", callback_data: "regioneunintyhundredsixtybuythree"}, {text: "4", callback_data: "regioneunintyhundredsixtybuyfour"}, {text: "5", callback_data: 'regioneunintyhundredsixtybuyfive'},],
                [{text: "6", callback_data: "regioneunintyhundredsixtybuysix"}, {text: "7", callback_data: "regioneunintyhundredsixtybuyseven"}, {text:"8", callback_data: "regioneunintyhundredsixtybuyeight"}, {text:"9", callback_data: "regioneunintyhundredsixtybuynine"}, {text:"10", callback_data: "regioneunintyhundredsixtybuyten"}],
                [{text: "Назад ко всем категориям", callback_data: "eubacktoall"}]
            ]
        })
    },

    regionEuOneHundredGet: {
        reply_markup: JSON.stringify({
            inline_keyboard: [
                [{text: "1-100 SKINS | 35 ₽ | Кол-во 85 шт.", callback_data: "regioneuonehundredget"}]
                [{text: "Назад ко всем категориям", callback_data: "eubacktoall"}]
            ]
        })
    },

    regionEuOneHundredBuy: {
        reply_markup: JSON.stringify({
            inline_keyboard: [
                [{text: "1", callback_data: 'regioneuonehundredbuyone'}, {text: "2", callback_data: "regioneuonehundredbuytwo"}, {text: "3", callback_data: "regioneuonehundredbuythree"}, {text: "4", callback_data: "regioneuonehundredbuyfour"}, {text: "5", callback_data: 'regioneuonehundredbuyfive'},],
                [{text: "6", callback_data: "regioneuonehundredbuysix"}, {text: "7", callback_data: "regioneuonehundredbuyseven"}, {text:"8", callback_data: "regioneuonehundredbuyeight"}, {text:"9", callback_data: "regioneuonehundredbuynine"}, {text:"10", callback_data: "regioneuonehundredbuyten"}],
                [{text: "Назад ко всем категориям", callback_data: "eubacktoall"}]
            ]
        })
    },

    regionEuBalanceSevenHundredGet: {
        reply_markup: JSON.stringify({
            inline_keyboard: [
                [{text: "BALANCE 1775 - 3550 | 70₽ | Кол-во: 5 шт.", callback_data: "balanceseventousendhunded"}],
                [{text: "Назад ко всем категориям", callback_data: "eubacktoall"}]
            ]
        })
    },

    regionEuBalanceSevenHundredBuy: {
        reply_markup: JSON.stringify({
            inline_keyboard: [
                [{text: "1", callback_data: 'regioneubalancesevenhundredbuyone'}, {text: "2", callback_data: "regioneubalancesevenhundredbuytwo"}, {text: "3", callback_data: "regioneubalancesevenhundredbuythree"}, {text: "4", callback_data: "regioneubalancesevenhundredbuyfour"}, {text: "5", callback_data: 'regioneubalancesevenhundredbuyfive'},],
                [{text: "Назад ко всем категориям", callback_data: "eubacktoall"}]
            ]
        })
    },

    regionEuThreeTousandGet: {
        reply_markup: JSON.stringify({
            inline_keyboard: [
                [{text: "BALANCE 3550 - 8000VP", callback_data: "regioneuthreetousand"}],
                [{text: "Назад ко всем категориям", callback_data: "eubacktoall"}]
            ]
        })
    },

    regionEuThreeTousandBuy: {
        reply_markup: JSON.stringify({
            inline_keyboard: [
                [{text: "1", callback_data: "regioneuthreetousandbuyone"}, {text: "2", callback_data: "regioneuthreetousandbuytwo"}, {text: "3", callback_data: "regioneuthreetousandbuythree"}, {text: "4", callback_data: "regioneuthreetousandbuyfour"}, {text: "5", callback_data: "regioneuthreetousandbuyfive"}],
                [{text: "6", callback_data: "regioneuthreetousandbuysix"}, {text: "7", callback_data: "regioneuthreetousandbuyseven"}],
                [{text: "Назад ко всем категориям", callback_data: "eubacktoall"}]
            ]
        })
    },
    
    regionNa: {
        reply_markup: JSON.stringify({
            inline_keyboard: [
                [{text: "[NA] RANKED READY", callback_data: "narankedready"}],
                [{text: "[NA] 10-50 SKINS", callback_data: "naten"}],
                [{text: "[NA] 40-90 SKINS", callback_data: "nafourty"}],
                [{text: "[NA] 1-100 SKINS", callback_data: "naone"}],
                [{text: "Назад ко всем категориям", callback_data: "naback"}]
            ]
        })
    },

    regionNaRankedReadyGet: {
        reply_markup: JSON.stringify({
            inline_keyboard: [
                [{text: "RANKED READY | 20 ₽ | Кол-во: 25 шт.", callback_data: "regionnarankedrady"}],
                [{text: "Назад ко всем категориям", callback_data: "naback"}]
            ]
        })
    },

    regionNaRankedReadyBuy: {
        reply_markup: JSON.stringify({
            inline_keyboard: [
                [{text: "1", callback_data: 'regionnarankedreadybuyone'}, {text: "2", callback_data: "regionnarankedreadybuytwo"}, {text: "3", callback_data: "regionnarankedreadybuythree"}, {text: "4", callback_data: "regionnarankedreadybuyfour"}, {text: "5", callback_data: 'regionnarankedreadybuyfive'},],
                [{text: "6", callback_data: "regionnarankedreadybuysix"}, {text: "7", callback_data: "regionnarankedreadybuyseven"}, {text:"8", callback_data: "regionnarankedreadybuyeight"}, {text:"9", callback_data: "regionnarankedreadybuynine"}, {text:"10", callback_data: "regionnarankedreadybuyten"}],
                [{text: "Назад ко всем категориям", callback_data: "naback"}]
            ]
        })
    },

    regionNaTenFiftyGet: {
        reply_markup: JSON.stringify({
            inline_keyboard: [
                [{text: "10-50 SKINS | 40 ₽| Кол-во: 26 шт.", callback_data: "natenfifityget"}],
                [{text: "Назад ко всем категориям", callback_data: "naback"}]
            ]
        })
    },

    regionNaTenFiftyBuy: {
        reply_markup: JSON.stringify({
            inline_keyboard: [
                [{text: "1", callback_data: 'regionnatenfiftybuyone'}, {text: "2", callback_data: "regionnatenfiftybuytwo"}, {text: "3", callback_data: "regionnatenfiftybuythree"}, {text: "4", callback_data: "regionnatenfiftybuyfour"}, {text: "5", callback_data: 'regionnatenfiftybuyfive'},],
                [{text: "6", callback_data: "regionnatenfiftybuysix"}, {text: "7", callback_data: "regionnatenfiftybuyseven"}, {text:"8", callback_data: "regionnatenfiftybuyeight"}, {text:"9", callback_data: "regionnatenfiftybuynine"}, {text:"10", callback_data: "regionnatenfiftybuyten"}],
                [{text: "Назад ко всем категориям", callback_data: "naback"}]
            ]
        })
    },
    regionNaFourtyNintyGet:{
        reply_markup: JSON.stringify({
            inline_keyboard: [
                [{text: "40-90 SKINS | 70 ₽ | Кол-во: 2 шт.", callback_data: "fortynintyskins"}],
                [{text: "Назад ко всем категориям", callback_data: "naback"}]
            ]
        })
    } ,
    regionNaFourtyNintyBuy: {
        reply_markup: JSON.stringify({
            inline_keyboard: [
                [{text: "1", callback_data: "regionnafourtynintybuyone"}, {text: "2", callback_data: "regionnafourtynintybuytwo"}],
                [{text: "Назад ко всем категориям", callback_data: "naback"}]
            ]
        })
    },   
    regionNaOneGet: {
        reply_markup: JSON.stringify({
            inline_keyboard: [
                [{text: "1-100 SKINS | 25 ₽ | Кол-во: 25 шт.", callback_data: "regionnaonetohundred"}],
                [{text: "Назад ко всем категориям", callback_data: "naback"}]
            ]
        })
    } ,
    regionNaOneBuy: {
        reply_markup: JSON.stringify({
            inline_keyboard: [
                [{text: "1", callback_data: 'regionnaonebuyone'}, {text: "2", callback_data: "regionnaonebuytwo"}, {text: "3", callback_data: "regionnaonebuythree"}, {text: "4", callback_data: "regionnaonebuyfour"}, {text: "5", callback_data: 'regionnaonebuyfive'},],
                [{text: "6", callback_data: "regionnaonebuysix"}, {text: "7", callback_data: "regionnaonebuyseven"}, {text:"8", callback_data: "regionnaonebuyeight"}, {text:"9", callback_data: "regionnaonebuynine"}, {text:"10", callback_data: "regionnaonebuyten"}],
                [{text: "Назад ко всем категориям", callback_data: "naback"}]
            ]
        })
    },
    howToPay: {
        reply_markup: JSON.stringify({
            inline_keyboard: [
                [{text: "картой", callback_data: "card"}],
                [{text: "с баланса", callback_data: "balance"}]
            ]
        })
    }
}