var appSending = function(from, to, quantity) {
    return {
        from: from,
        to: to,
        quantity: quantity,
        transactionID: 1,
        status: true
    };
}

module.exports = appSending;