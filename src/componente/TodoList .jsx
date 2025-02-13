import React, { useState } from 'react';

const TodoList = ({ initialTasks = [] }) => {
  const [tasks, setTasks] = useState(initialTasks);
  const [newTask, setNewTask] = useState('');
  const [newPriority, setNewPriority] = useState('Moyenne');
  const [searchTerm, setSearchTerm] = useState('');

  const addTask = () => {
    if (newTask.trim() === '') return;
    const task = { name: newTask, priority: newPriority, completed: false };
    setTasks([...tasks, task]);
    setNewTask('');
  };

  const toggleTaskCompletion = (index) => {
    const updatedTasks = tasks.map((task, i) =>
      i === index ? { ...task, completed: !task.completed } : task
    );
    setTasks(updatedTasks);
  };

  const deleteTask = (index) => {
    const updatedTasks = tasks.filter((_, i) => i !== index);
    setTasks(updatedTasks);
  };

  const filteredTasks = tasks.filter(task =>
    task.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const totalTasks = tasks.length;
  const completedTasks = tasks.filter(task => task.completed).length;

  return (
    <div>
      <h1>Todo List avec Priorités</h1>
      <div>
        <input
          type="text"
          placeholder="Rechercher une tâche"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>
      <div>
        <input
          type="text"
          placeholder="Nom de la tâche"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
        />
        <select value={newPriority} onChange={(e) => setNewPriority(e.target.value)}>
          <option value="Haute">Haute</option>
          <option value="Moyenne">Moyenne</option>
          <option value="Basse">Basse</option>
        </select>
        <button onClick={addTask}>Ajouter</button>
      </div>
      <ul>
        {filteredTasks.map((task, index) => (
          <li key={index}>
            <span style={{ textDecoration: task.completed ? 'line-through' : 'none' }}>
              {task.name} - {task.priority}
            </span>
            <button onClick={() => toggleTaskCompletion(index)}>
              {task.completed ? 'Annuler' : 'Terminer'}
            </button>
            <button onClick={() => deleteTask(index)}>Supprimer</button>
          </li>
        ))}
      </ul>
      <div>
        <p>Total des tâches : {totalTasks}</p>
        <p>Tâches terminées : {completedTasks}</p>
      </div>
    </div>
  );
};

export default TodoList;