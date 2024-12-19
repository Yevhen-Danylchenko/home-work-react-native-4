import React from 'react';
import { View, SafeAreaView, StyleSheet } from 'react-native';
import FavoriteBooks from './components/FavoriteBooks';
import UserFilter from './components/UserFilter';
import ShoppingList from './components/ShoppingList';
import Dictionary from './components/Dictionary';
import TaskList from './components/TaskList';
import Greeting from './components/Greeting';
import Grade from './components/Grade';
import Contacts from './components/Contacts';
import SortNumberList from './components/SortNumberList';
import QuestionList from './components/QuestionList';

const App = () => {

  // ========================= Task 1 ===========================

  // const initialBooks = [{
  //   key: 'Демон Проспера'
  // },
  //   {
  //     key: 'Крістіна'
  //   },
  //   {
  //     key: 'Окрема реальність'
  //   },
  // ];
  // return (
  //   <SafeAreaView style={styles.container}>
  //     <FavoriteBooks initialBooks={initialBooks} />
  //   </SafeAreaView>);

  // ======================== Task 2 ===========================
  
  // const users = [
  //   {
  //     name: 'Олександр',
  //     age: 25
  //   },
  //   {
  //     name: 'Марія',
  //     age: 30
  //   },
  //   {
  //     name: 'Петро',
  //     age: 20
  //   },
  //   {
  //     name: 'Анна',
  //     age: 35
  //   },
  // ];
  // return (
  //   <SafeAreaView style={styles.container}>
      
  //       <UserFilter users={users} />
      
  //   </SafeAreaView>
  // );

  // ========================== Task 3 ===========================

  // return (
  //   <SafeAreaView style={styles.container}>
  //     <ShoppingList />
  //   </SafeAreaView>
  // );

  //  ====================== Task 4 ===================================

  // const words = [
  //   { word: 'apple', translation: 'яблуко' },
  //   { word: 'bicycle', translation: 'велосипед' },
  //   { word: 'guitar', translation: 'гітара' },
  //   { word: 'weights', translation: 'гирі' },
  //   { word: 'mountains', translation: 'гори' },
  //   { word: 'fishing rod', translation: 'вудка' },
  //   { word: 'books', translation: 'книги' },
  //   { word: 'wanderings', translation: 'мандри' },
  // ];

  // return (
  //   <SafeAreaView style={styles.container}>
  //     <Dictionary words={words} /> 
  //   </SafeAreaView>
  // );

  // ======================= Task 5 =============================

  // const tasks = [
  //   {task: 'Buy bread', category: 'shopping'},
  //   {task: 'Prepare a report', category: 'work'},
  //   {task: 'Do homework', category: 'homework'},
  //   {task: 'Prepare dinner', category: 'homework'},
  //   {task: 'Take a walk with a girl', category: 'leisure'},
  //   {task: 'Feed the cat'},
  // ];

  // return (
  //   <SafeAreaView style={styles.container}>
  //     <TaskList tasks={tasks} />
  //   </SafeAreaView>
  // );

  // ======================= Task 6 =========================

  // return (
  //   <SafeAreaView style={styles.container}>
  //     <Greeting initName="Євген" />
  //   </SafeAreaView>
  // );

  // ====================== Task 7 ============================

  // return (
  //   <SafeAreaView style={styles.container}>
  //     <Grade />
  //   </SafeAreaView>
  // );

  // ======================== Task 8 ======================

  // const initContacts = [
  //   {name: 'Євген', phone: '+380984567432'},
  //   {name: 'Влад', phone: '+380963234532'},
  //   {name: 'Ігор', phone: '+380631289432'},
  // ];

  // return (
  //   <SafeAreaView style={styles.container}>
  //     <Contacts initContacts={initContacts} />
  //   </SafeAreaView>
  // );

  // =================== Task 9 ========================

  // const numbers = [2, 6, 0, 3, 7, 1, 9];

  // return (
  //   <SafeAreaView style={styles.container}>
  //     <SortNumberList numbers={numbers} />
  //   </SafeAreaView>
  // )

  // ================== Task 10 ======================

  const questions = [
    { id: 1, question: 'Ваш улюблений колір?' },
    { id: 2, question: 'Ваша улюблена страва?' },
    { id: 3, question: 'Ваша улюблена музика?' },
    { id: 4, question: 'Ваше улюблене хоббі?' },
    { id: 5, question: 'Як ви проводите вільний час?' },
  ];

  return (
    <SafeAreaView style={styles.container}>
      <QuestionList questions={questions} />
    </SafeAreaView>
  );
}; 

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff02c',
  },
});

export default App;


