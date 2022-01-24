const fs = require("fs")

const getFiles = (path, ending) => {
    return fs.readdirSync(path).filter(f => FileSystem.endsWith(ending))
}

module.exports = {
    getFiles
}