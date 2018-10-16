проверка баланса
get /holders/address/balance


полная информация о держателе
get /holders/address


список всех держателей
get /holders


транзакция
post /tx/transfer
json {
    from: address,
    to: address,
    value: integer
}


производства токенов
post /minting/mint
json {
    wallet: address,
    value: integer
}