Readme к API Rahmat v0.2
по вопросам API и вообще по технической части стучайтесь ко мне в телеграм @b0b0mur0d

1. регистрация пользователя в системе
    
        регистрация пользователя происходит в момент, когда пользователь произведет первую транзush -u кцию вызвав API по начеслению рахматов
        
        альтернативный способ:
        post /holders/create
        json {
            "wallet": $wallet_id,
            "balance": integer
        }


2. проверка баланса пользователя

        get /holders/$wallet_id/balancee

<!-- проверка уровня пользователя
get /holders/address/balance -->


3. полная информация о ползователе   //на данный момент входить только баланс (скоро: скидки и кэшбек)

        get /holders/$wallet_id


4. список всех пользователей и их накопленных рахматов 

        get /holders


5. транзакция (служит для функции "Поручительство") 

        post /tx/transfer
        json {
            from: wallet_id,
            to: wallet_id,
            value: integer
        }


6. начесление рахматов (простое начисление поинтов, 1 процент от каждой транзакции)

        post /minting/easy
        json {
            wallet: "номер телефона"
            tx_value: "сумма транзакции"
        }

        Альтернативный способ /minting/wallet/tx_value


7. начесление рахматов  (RAW начсление)

        post /minting/mint
        json {
            wallet: address,
            value: integer
        }
