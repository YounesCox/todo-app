// Fichier: tasks.test.js
// Tests automatiques pour notre application

const { getAllTasks, addTask, deleteTask, resetTasks } = require('./tasks');

// Avant chaque test, on réinitialise les tâches
beforeEach(() => {
    resetTasks();
});

// TEST 1: Vérifier qu'on peut ajouter une tâche
test('Doit ajouter une nouvelle tâche', () => {
    const task = addTask('Acheter du lait');
    
    expect(task).toHaveProperty('id');
    expect(task.title).toBe('Acheter du lait');
    expect(getAllTasks()).toHaveLength(1);
});

// TEST 2: Vérifier qu'on ne peut pas ajouter une tâche vide
test('Ne doit pas ajouter une tâche vide', () => {
    expect(() => addTask('')).toThrow();
    expect(() => addTask('   ')).toThrow();
    expect(getAllTasks()).toHaveLength(0);
});

// TEST 3: Vérifier qu'on peut supprimer une tâche
test('Doit supprimer une tâche existante', () => {
    const task = addTask('Faire les courses');
    deleteTask(task.id);
    
    expect(getAllTasks()).toHaveLength(0);
});

// TEST 4: Vérifier qu'on ne peut pas supprimer une tâche inexistante
test('Doit lever une erreur si la tâche n\'existe pas', () => {
    expect(() => deleteTask(999)).toThrow('Tâche non trouvée');
});

// TEST 5: Vérifier qu'on peut obtenir toutes les tâches
test('Doit retourner toutes les tâches', () => {
    addTask('Tâche 1');
    addTask('Tâche 2');
    addTask('Tâche 3');
    
    expect(getAllTasks()).toHaveLength(3);
});
