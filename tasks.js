// Fichier: tasks.js
// Ce fichier gère la logique de notre application

// Un tableau pour stocker les tâches (en mémoire pour simplifier)
let tasks = [];

// Fonction pour obtenir toutes les tâches
function getAllTasks() {
    return tasks;
}

// Fonction pour ajouter une nouvelle tâche
function addTask(title) {
    // Validation:  le titre ne doit pas être vide
    if (! title || title.trim() === '') {
        throw new Error('Le titre de la tâche ne peut pas être vide');
    }
    
    // Créer un nouvel objet tâche
    const newTask = {
        id: Date.now(), // ID unique basé sur le timestamp
        title:  title.trim(),
        createdAt: new Date()
    };
    
    // Ajouter la tâche au tableau
    tasks.push(newTask);
    
    return newTask;
}

// Fonction pour supprimer une tâche
function deleteTask(id) {
    // Trouver l'index de la tâche
    const index = tasks.findIndex(task => task.id === parseInt(id));
    
    // Si la tâche n'existe pas
    if (index === -1) {
        throw new Error('Tâche non trouvée');
    }
    
    // Supprimer la tâche
    tasks.splice(index, 1);
    
    return true;
}

// Fonction pour réinitialiser les tâches (utile pour les tests)
function resetTasks() {
    tasks = [];
}

// Exporter les fonctions pour les utiliser ailleurs
module.exports = {
    getAllTasks,
    addTask,
    deleteTask,
    resetTasks
};
