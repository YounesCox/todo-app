// Fichier: app.js
// Ce fichier crée le serveur web

const express = require('express');
const { getAllTasks, addTask, deleteTask } = require('./tasks');

// Créer une application Express
const app = express();
const PORT = process.env.PORT || 3000;

// Middleware pour parser le JSON
app.use(express.json());

// Servir les fichiers statiques (HTML, CSS)
app.use(express.static('public'));

// ROUTE 1: Obtenir toutes les tâches
// GET /api/tasks
app.get('/api/tasks', (req, res) => {
    try {
        const tasks = getAllTasks();
        res.json(tasks);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// ROUTE 2: Ajouter une nouvelle tâche
// POST /api/tasks
app. post('/api/tasks', (req, res) => {
    try {
        const { title } = req.body;
        const newTask = addTask(title);
        res.status(201).json(newTask);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

// ROUTE 3: Supprimer une tâche
// DELETE /api/tasks/: id
app.delete('/api/tasks/:id', (req, res) => {
    try {
        deleteTask(req.params.id);
        res.status(200).json({ message: 'Tâche supprimée' });
    } catch (error) {
        res.status(404).json({ error: error.message });
    }
});

// Démarrer le serveur
if (require.main === module) {
    app.listen(PORT, () => {
        console.log(`Serveur démarré sur le port ${PORT}`);
    });
}

// Exporter l'app pour les tests
module.exports = app;
