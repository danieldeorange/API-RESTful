const mongoose = require("mongoose")

const Person = mongoose.model("Person", {
    nome: String,
    curso: String,
    matrícula: Boolean,
})

module.exports = Person