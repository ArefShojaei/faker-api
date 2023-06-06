const faker = require('@faker-js/faker').faker;
const { git, person } = faker

const { fullName } = person
const { branch, commitDate, commitMessage, commitSha  } = git

module.exports = (req, res) => {
    try {
        return res.status(200).json({
            user : fullName(),
            branch : branch(),
            commitDate : commitDate(),
            commitMessage : commitMessage(),
            commitSha : commitSha()
        })
    } catch (err) {
        return res.status(500).json({
            status: "Error",
            code: 500,
            message: "Request is failed!",
        });
    }
}