Readme к API Rahmat v0.2
по вопросам API и вообще по технической части стучайтесь ко мне в телеграм @b0b0mur0d

проверка баланса пользователя
get /holders/$wallet_id/balancee

<!-- проверка уровня пользователя
get /holders/address/balance -->

полная информация о ползователе   //на данный момент входить только баланс (скоро: уровень пользователя, скидки и кэшбек)
get /holders/$wallet_id

список всех пользователей и их накопленных рахматов 
get /holders

транзакция (служит для функции "Поручительство") 
post /tx/transfer
json {
    from: wallet_id,
    to: wallet_id,
    value: integer
}

начесление рахматов  (RAW начсление)
post /minting/mint
json {
    wallet: address,
    value: integer
}

начесление рахматов (простое начисление поинтов, 1 процент от каждой транзакции)
post /minting/easy
json {
    wallet: "номер телефона"
    tx_value: "сумма транзакции"
}

    Альтернативный способ /minting/wallet/tx_value

