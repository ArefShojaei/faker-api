const faker = require('@faker-js/faker').faker;
const { internet, string } = faker


const { httpMethod, httpStatusCode, ip, ipv4, ipv6, mac, protocol, url, userAgent } = internet
const { nanoid } = string


module.exports = (req, res) => {
    try {
        return res.status(200).json({
            id : nanoid(),
            url : url(),
            protocol : protocol(),
            method : httpMethod(),
            code : httpStatusCode(),
            ip : ip(),
            ipv4 : ipv4(),
            ipv6 : ipv6(),
            mac : mac(),
            userAgent : userAgent(),
        })
    } catch (err) {
        return res.status(500).json({
            status: "Error",
            code: 500,
            message: "Request is failed!",
        });
    }
}