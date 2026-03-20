const Entry = require('../models/Entry');

async function index(req, res) {
    try {
        const entries = await Entry.getAll()
        res.status(200).json(entries);
    } catch (err) {
        res.status(500).json({ error: err })
    }
}

async function getEntryById(req, res) {
    try {
        const id = req.params.id;
        const entry = await Entry.searchById(id);
        res.status(200).json(entry);
    } catch (err) {
        res.status(404).json({ error: err })
    }
    
}

async function createEntry(req, res) {
    try {
        const data = req.body;
        const message = await Entry.create(data);
        res.status(201).json(message);
    } catch (err) {
        res.status(500).json({ error: err });
    }
    
}

async function updateEntryById(req, res) {
    try{
        const entryToUpdate = await Entry.searchById(req.params.id);
        changedEntry = entryToUpdate.update(req.body);
        res.status(200).json({changedEntry});
    } catch (err) {
        res.status(404).json({ error: err });
    }

}

async function deleteEntryById(req, res) {
    try{
        const id = req.params.id
        const entryToDelete = await Entry.searchById(id);
        entryToDelete.delete();
        res.status(200).json({msg: `Deleted entry with id ${id}`});
    } catch (err) {
        res.status(404).json({ error: err });
    }
}


module.exports = {
    index, getEntryById, createEntry, updateEntryById, deleteEntryById
}