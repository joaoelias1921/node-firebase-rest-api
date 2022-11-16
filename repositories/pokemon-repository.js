const repBase = require('../bin/base/repository-base')

class pokemonRepository {
    constructor() {
        this._repBase = new repBase('pokemon', 'pokemon')
    }

    async create(data) {
        return await this._repBase.create(data)
    }

    async update(id, data) {
        return await this._repBase.update(id, {
            height: data.height,
            weight: data.weight,
            description: data.description,
            number: data.number
        })
    }

    async getAll() {
        return await this._repBase.getAll()
    }

    async getById(id) {
        return await this._repBase.getById(id)
    }

    async delete(id) {
        return await this._repBase.delete(id)
    }
}

module.exports = pokemonRepository