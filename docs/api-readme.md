Readme к API Rahmat v0.2
по вопросам API и вообще по технической части стучайтесь ко мне в телеграм @b0b0mur0d

1. регистрация пользователя в системе

        post /holders/create
        json {
            "wallet": MSISDN,      //принимается String
            "balance": integer ("0" if nothing)       
            "kycid": string,
            "mbsid": Number,            //айди мобильного банковского счета 
        }


2. проверка баланса пользователя

        get /holders/$wallet_id/balance



3. полная информация о ползователе   //на данный момент входить только баланс (скоро: скидки и кэшбек)

        get /holders/$wallet_id


4. список всех пользователей и их накопленных рахматов 

        get /holders


5. транзакция (служит для функции "Поручительство") 

        post /tx/transfer
        json {
            from: MSISDN,
            to: MSISDN,
            value: integer
        }


6. начесление рахматов (простое начисление поинтов, 1 процент от каждой транзакции)

        post /minting/mint
        json {
            wallet: MSISDN
            value: "сумма транзакции"          //Принимается в тийнах
            kind: integer   //0-простая транзакция , 2-ЖКХ, 4-чаевые ,  5- пожертвования 
            mbsid: "number"     //обязательно
        }


7. начесление рахматов  (RAW начсление)

        post /minting/mint
        json {
            wallet: MSISDN,
            value: integer
        }

8. прорверка уровня пользователя по MSISDN

        post /levels/getLevelByMSISDN
        json {
                wallet: MSISDN
        }

        еще один способ
        get /levels/getLevel/msisdn/$MSISDN      //работает



8.1 прорверка уровня пользователя по mbsID

        post /levels/getLevelByMBSID
        json {
                mbsid: mbsID
        }

        еще один способ
        get /levels/getLevel/mbsid/$MBSID      



9. конвертация рахматов в уровни

        post /levels/levelUp
        json {
                wallet: MSISDN
        }


10. API для получения информации (notification) при прохождении верификации

