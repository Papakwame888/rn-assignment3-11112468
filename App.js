import React, { useState } from 'react';
import {
  View,
  Text,
  ScrollView,
  TextInput,
  StyleSheet,
  Button,
  FlatList,
  Image,
} from 'react-native';
import { StatusBar } from 'expo-status-bar';

//Custom Components
// const TaskItem = ({ task }) => (
//   <View style={styles.taskItem}>
//     <Image source={require('./assets/task.png')} style={styles.taskImage} />
//     <Text style={styles.taskText}>{task}</Text>
//   </View>
const TaskItem = ({ task }) => (
  <View style={styles.taskItem}>
    <Image source={require('./assets/favicon.png')} style={styles.taskImage} />
    <Text style={styles.taskText}>{task}</Text>
  </View>
);

const TaskList = ({ tasks }) => (
  <FlatList
    data={tasks}
    renderItem={({ item }) => <TaskItem task={item} />}
    keyExtractor={(item, index) => index.toString()}
  />
);

const TaskInput = ({ onAddTask }) => {
  const [task, setTask] = useState('');

  return (
    <View style={styles.taskInputContainer}>
      <TextInput
        style={styles.taskInput}
        placeholder="Enter a new task"
        value={task}
        onChangeText={setTask}
      />
      <Button
        title="Add Task"
        onPress={() => {
          if (task) {
            onAddTask(task);
            setTask('');
          }
        }}
      />
    </View>
  );
};

const Category = ({ name, icon }) => (
  <View style={styles.categoryContainer}>
    <Image source={icon} style={styles.categoryIcon} />
    <Text style={styles.categoryText}>{name}</Text>
  </View>
);

const categories = [
  { name: 'Exercise', icon: require('./assets/3.png') },
  { name: 'Study', icon: require('./assets/1.png') },
  { name: 'Code', icon: require('./assets/favicon.png') },
  { name: 'Cook', icon: require('./assets/favicon.png') },
  { name: 'Shop', icon: require('./assets/favicon.png') },
  { name: 'Read', icon: require('./assets/favicon.png') },
  { name: 'Write', icon: require('./assets/favicon.png') },
  { name: 'Relax', icon: require('./assets/favicon.png') },
];

const initialTasks = [
  'Morning jog',
  'Study React Native',
  'Finish coding project',
  'Prepare dinner',
  'Buy groceries',
  'Read a book',
  'Write a blog post',
  'Meditate',
  'Evening workout',
  'Review pull requests',
  'Plan next weeks meals',
  'Organize workspace',
  'Call family',
  'Water plants',
  'Watch a movie',
];

export default function App() {
  const [tasks, setTasks] = useState(initialTasks);

  const handleAddTask = (newTask) => {
    if (newTask) {
      setTasks((currentTasks) => [...currentTasks, newTask]);
    }
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <View style={styles.headerLeft}>
          <Text style={styles.greeting}>Hello Dev</Text>
          <Text style={styles.taskCount}>14 tasks today</Text>
        </View>
        <Image source={require('./assets/favicon.png')} style={styles.profileImage} />
      </View>
      <View style={styles.searchContainer}>
        <TextInput style={styles.searchInput} placeholder="Search tasks" />
        <Button title="List" onPress={() => {}} />
      </View>
      <Text style={styles.sectionTitle}>Categories</Text>
      <View style={styles.categories}>
        {categories.map((category, index) => (
          <Category key={index} name={category.name} icon={category.icon} />
        ))}
      </View>
      <Text style={styles.sectionTitle}>Ongoing Task</Text>
      <TaskList tasks={tasks} />
      <TaskInput onAddTask={handleAddTask} />
      <StatusBar style="auto" />
    </ScrollView>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f0f0f0',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  headerLeft: {
    flexDirection: 'column',
  },
  greeting: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  taskCount: {
    fontSize: 14,
    color: '#888',
  },
  profileImage: {
    width: 40,
    height: 40,
    borderRadius: 20,
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  searchInput: {
    flex: 1,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 10,
    marginRight: 10,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginVertical: 10,
  },
  categories: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  categoryContainer: {
    width: '22%',
    alignItems: 'center',
    marginVertical: 10,
  },
  categoryIcon: {
    width: 50,
    height: 50,
    marginBottom: 5,
  },
  categoryText: {
    fontSize: 12,
    textAlign: 'center',
  },
  taskInputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 20,
  },
  taskInput: {
    flex: 1,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 10,
    marginRight: 10,
  },
  taskItem: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    padding: 15,
    borderRadius: 10,
    marginVertical: 5,
    borderWidth: 1,
    borderColor: '#ddd',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 2,
  },
  taskImage: {
    width: 40,
    height: 40,
    marginRight: 10,
  },
  taskText: {
    fontSize: 16,
    color: '#333',
  },
});