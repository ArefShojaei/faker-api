const faker = require("@faker-js/faker").faker;
const { finance } = faker;

const {
    accountName,
    accountNumber,
    amount,
    bitcoinAddress,
    creditCardCVV,
    creditCardIssuer,
    creditCardNumber,
    currency,
    currencyCode,
    currencyName,
    ethereumAddress,
    pin,
    transactionDescription,
    transactionType,
} = finance;

module.exports = (req, res) => {
    try {
        return res.status(200).json({
            accountName : accountName(),
            accountNumber : accountNumber(),
            amount : amount(),
            pin : pin(),
            creditCardCVV : creditCardCVV(),
            creditCardIssuer : creditCardIssuer(),
            creditCardNumber : creditCardNumber(),
            transactionDescription : transactionDescription(),
            transactionType : transactionType(),
            currency : currency(),
            currencyCode : currencyCode(),
            currencyName : currencyName(),
            bitcoinAddress : bitcoinAddress(),
            ethereumAddress : ethereumAddress(),
        });
    } catch (err) {
        return res.status(500).json({
            status: "Error",
            code: 500,
            message: "Request is failed!",
        });
    }
};
