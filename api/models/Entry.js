const db = require('../database/connect')

class Entry{
    constructor({entryId, entryDate, entryName, entryBody, entryCategory}) {
        this.entryId = entryId
        this.entryDate = entryDate
        this.entryName = entryName
        this.entryBody = entryBody
        this.entryCategory = entryCategory
    }

    static async getAll() {
        const response = await db.query("SELECT * FROM diary;")
        if (response.rows.length === 0){
            throw new Error('No entries available')
        }
        return response.rows.map((ele) => new Entry(ele))
    
    }

    static async getEntryById(entryId){
     
        const response = await db.query("SELECT * FROM diary WHERE id = $1;", [entryId]);
        if (response.rows.length === 0){
            throw new Error('Entry not available')
        }
        return response.rows.map((ele) => new Entry(ele))
   
    }

    static async getEntryByDate(entryDate){
      
    const response = await db.query("SELECT * FROM diary WHERE date = $1;", [entryDate]);
    if (response.rows.length === 0){
        throw new Error('Entry not available')
    }
    return response.rows.map((ele) => new Entry(ele))
    }

    static async getEntryByCategory(entryCategory){
    const response = await db.query("SELECT * FROM diary WHERE category = $1;", [entryCategory]);
    if (response.rows.length === 0){
        throw new Error('Entry not available')
    }
    return response.rows.map((ele) => new Entry(ele))
    }

    static async createEntry(newEntry){
        const response = await db.query('INSERT INTO diary (name, entry, category) VALUES($1, $2, $3)',
            [newEntry.name, newEntry.entry, newEntry.category]
        )
    } 
    

    async delete(entryId){
        const response = await db.query('DELETE FROM diary WHERE id = $1',[this.entryId])
    }

    async update(entryBody){
        const response = await db.query('UPDATE diary SET name = $2, entry = $3, category = $4 WHERE id = $1',
            [this.entryId, newEntry.name, newEntry.entry, newEntry.category]
        )
    }
}
module.exports = Entry;