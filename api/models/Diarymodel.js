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
    try{
    const response = await db.query("SELECT * FROM diary;")
    if (response.rows.length === 0){
        throw new Error('No entries available')
    }
    return response.rows.map(c => new Entry(c))
    }catch(err){
        throw new Error('Error selecting all')
    }}

    static async getEntryById(entryId){
        try{
    const response = await db.query("SELECT * FROM diary WHERE id = $1;", [entryId]);
    if (response.rows.length === 0){
        throw new Error('Entry not available')
    }
    return response.rows
    }catch(err){
        throw new Error('Error finding entry by ID')
    }}

    static async getEntryByDate(entryDate){
        try{
    const response = await db.query("SELECT * FROM diary WHERE date = $1;", [entryDate]);
    if (response.rows.length === 0){
        throw new Error('Entry not available')
    }
    return response.rows
    }catch(err){
        throw new Error('Error finding entry by Date')
    }}

    static async getEntryByCategory(entryCategory){
        try{
    const response = await db.query("SELECT * FROM diary WHERE category = $1;", [entryCategory]);
    if (response.rows.length === 0){
        throw new Error('Entry not available')
    }
    return response.rows
    }catch(err){
        throw new Error('Error finding entry by Category')
    }}

    static async createEntry(newEntry){
    try{
    const response = await db.query('INSERT INTO diary (name, entry, category) VALUES($1, $2, $3)',
        [newEntry.name, newEntry.entry, newEntry.category]
    )
    } catch (err) {
        throw new Error('Not inputted correctly')
    }}

    static async removeEntry(entryId){
    try{
    const response = await db.query('DELETE FROM diary WHERE id = $1', [Id])
    } catch (err) {
    throw new Error('Entry not in database')
    }}

    static async editEntry(entryId, entryBody){
    try{
    const response = await db.query('UPDATE diary SET name = $2, entry = $3, category = $4 WHERE id = $1',
        [entryId, newEntry.name, newEntry.entry, newEntry.category]
    )
    } catch (err) {
        throw new Error('Not inputted correctly')
    }}

    }
    
module.exports = Entry;