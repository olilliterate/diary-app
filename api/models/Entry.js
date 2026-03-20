const db = require('../database/connect')

class Entry{
    constructor({id, date, name, body, category}) {
        this.id = id
        this.date = date
        this.name = name
        this.body = body
        this.category = category
    }

    static async getAll() {
        const response = await db.query("SELECT * FROM diary;")
        if (response.rows.length === 0){
            throw new Error('No entries available')
        }
        return response.rows.map((ele) => new Entry(ele))
    
    }

    static async getEntryById(id){
     
        const response = await db.query("SELECT * FROM diary WHERE id = $1;", [id]);
        if (response.rows.length === 0){
            throw new Error('Entry not available')
        }
        const data = response.rows[0];

        return new Entry(data)
   
    }

    static async getEntryByDate(date){
      
        const response = await db.query("SELECT * FROM diary WHERE date = $1;", [date]);
        if (response.rows.length === 0){
            throw new Error('Entry not available')
        }
        const data = response.rows[0];

        return new Entry(data)
    }

    static async getEntryByCategory(category){
        const response = await db.query("SELECT * FROM diary WHERE category = $1;", [category]);
        if (response.rows.length === 0){
            throw new Error('No entries found by category')
        }
        return response.rows.map((ele) => new Entry(ele))
    }

    static async create(newEntry){
        const response = await db.query('INSERT INTO diary (name, body, category) VALUES($1, $2, $3) RETURNING *;',
            [newEntry.name, newEntry.body, newEntry.category]
        )
        return response
    } 
    

    async delete(){
        const response = await db.query('DELETE FROM diary WHERE id = $1',[this.id])
        return response
    }

    async update(newEntry){
        const response = await db.query('UPDATE diary SET name = $2, body = $3, category = $4 WHERE id = $1 RETURNING *',
            [this.id, newEntry.name, newEntry.body, newEntry.category]
        )
        return response;
    }
}
module.exports = Entry;