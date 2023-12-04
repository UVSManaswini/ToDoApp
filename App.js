import React, { useState } from 'react';
import { View, TextInput, Button, FlatList } from 'react-native';
import { ListItem, Icon } from 'react-native-elements';

export default function App() {
  const [task, setTask] = useState('');
  const [tasks, setTasks] = useState([]);

  const addTask = () => {
    if (task) {
      setTasks([...tasks, { id: tasks.length.toString(), text: task }]);
      setTask('');
    }
  };

  const deleteTask = (taskId) => {
    const updatedTasks = tasks.filter((item) => item.id !== taskId);
    setTasks(updatedTasks);
  };

  return (
    <View style={{ flex: 1, padding: 16 }}>
      <TextInput
        style={{ borderBottomWidth: 1, marginBottom: 16 }}
        placeholder="Enter a task"
        value={task}
        onChangeText={(text) => setTask(text)}
      />
      <Button title="Add Task" onPress={addTask} />
      <FlatList
        data={tasks}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <ListItem bottomDivider>
            <ListItem.Content>
              <ListItem.Title>{item.text}</ListItem.Title>
            </ListItem.Content>
            <Icon
              name="delete"
              onPress={() => deleteTask(item.id)}
            />
          </ListItem>
        )}
      />
    </View>
  );
}
