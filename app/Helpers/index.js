const crypto = use('crypto')

/**
 * Generate UUIDv4
 * 
 * @param {*} length 
 */
const uuid = () => {
    const uuidv4 = require('uuid/v4')
    return uuidv4()
}

/**
 * Generate "random" alpha-numeric string.
 *
 * @param  {int}      length - Length of the string
 * @return {string}   The result
 */
const str_random = async (length = 40) => {
    let string = ''
    let len = string.length

    if (len < length) {
        let size = length - len
        let bytes = await crypto.randomBytes(size)
        let buffer = Buffer.from(bytes)

        string += buffer
            .toString('base64')
            .replace(/[^a-zA-Z0-9]/g, '')
            .substr(0, size)
    }

    return string
}

module.exports = {
    uuid,
    str_random
}