const faker = require('@faker-js/faker').faker;
const { person, phone, internet, string, location, date } = faker

const { bio, firstName, lastName, jobTitle } = person 
const { number } = phone
const { avatar, email } = internet
const { uuid } = string
const { direction, city, country, countryCode, latitude, longitude, state, street, streetAddress, timeZone } = location
const { birthdate } = date



module.exports = (req, res) => {
    try {
        return res.stauts(200).json({
            id : uuid(),
            user_info = {
                name : firstName(),
                family : lastName(),
                fullName : `${firstName()} ${lastName()}`,
                avatar : avatar(),
                bio : bio(),
                birthdate : birthdate(),
                phone : number(),
                email : email(),
                job : jobTitle(),
            },
            address_info : {
                state : state(),
                country : country(),
                countryCode : countryCode(),
                latitude : latitude(),
                longitude : longitude(),
                city : city(),
                street : street(),
                streetAddress : streetAddress(),
                timeZone : timeZone(),
                dir : direction(),
            }
        })
    } catch (err) {
        return res.status(500).json({
            status : "Error",
            code : 500,
            message : "Request is failed!"
        })
    }
}