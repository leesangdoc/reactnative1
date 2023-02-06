import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, View, ScrollView } from 'react-native';
import Input from './components/Input';
import Title from './components/Title';
import Task from './components/Task';    

export default function App() {
  const [newTask, setNewTask] = useState('');
  const [tasks, setTasks] = useState({
    1: { id: '1', text: 'todo list 1', completed: false },
    2: { id: '2', text: 'todo list 2', completed: false },
    3: { id: '3', text: 'todo list 3', completed: false },
    4: { id: '4', text: 'todo list 4', completed: false },
    5: { id: '5', text: 'todo list 5', completed: false },
  });
  const _addTask = () => {
    const ID = Date.now().toString();
    const newTaskObject = {
      [ID]: { id: ID, text: newTask, completed: false },
    };
    setNewTask('');
    setTasks({ ...tasks, ...newTaskObject });
  };

  //삭제 함수
  const _deleteTask = (id:string) => {
    const currentTasks = Object.assign({}, tasks);
    delete currentTasks[id];
    setTasks(currentTasks);
  };

  const _handleTextChange = (text: React.SetStateAction<string>) => {
    setNewTask(text);
  };

  const _toggleTask = (id:string) => {
    const currentTasks = Object.assign({}, tasks);
    currentTasks[id]['completed'] = !currentTasks[id]['completed'];
    setTasks(currentTasks);
  };

  const _updateTask = (item) => {
    const currentTasks = Object.assign({},tasks);
    currentTasks[item.id]=item;
    setTasks(currentTasks);
  }

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Title title="Todo List✔️"></Title>
      <Input
        value={newTask}
        onChangeText={_handleTextChange}
        onSubmitEditing={_addTask}
      />
      <ScrollView>
      {Object.values(tasks)
          .reverse()
          .map((item) => (
            <Task 
                key={item.id} 
                item = {item} 
                deleteTask={_deleteTask}
                toggleTask={_toggleTask}
                updateTask={_updateTask}
            />
          ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
  },
});