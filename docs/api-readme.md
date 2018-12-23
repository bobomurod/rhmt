проверка баланса пользователя
get /holders/address/balance

<!-- проверка уровня пользователя
get /holders/address/balance -->

полная информация о ползователе   //еще не полная (уточнить)
get /holders/address

список всех пользователей и их накопленных поинтов top rahmat 
get /holders

транзакция (остается под вопросом)
post /tx/transfer
json {
    from: address,
    to: address,
    value: integer
}

начесление рахматов  (RAW начсление)
post /minting/mint
json {
    wallet: address,
    value: integer
}

начесление рахматов (простое начисление поинтов, 1 процент от транзакции)
post /minting/easy
json {
    wallet: "номер телефона"
    tx_value: "сумма транзакции"
}

    Альтернативный способ /minting/wallet/tx_value

