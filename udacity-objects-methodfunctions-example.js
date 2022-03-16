let facebookProfile = {
  name: "Nico",
  freinds: "69",
  messages: ['yeeeehaw', 'i love sam', 'i love mysa'],

  postMessage: function (message) {
    facebookProfile.messages.push(message);
  },

  deleteMessage: function (index) {
    // In the following splice() method call,
    // - argument 1 = index from where the element has to be deleted
    // - argument 2 = count of elements to be deleted
    facebookProfile.messages.splice(index, 1);
  },

  addFriend: function () {
    facebookProfile.friends += 1;
  },

  removeFriend: function () {
    if (facebookProfile.friends > 0)
      facebookProfile.friends -= 1;
  }
};
/* EXPLANATION:
postMessage: [Line 6]
-within the object brackets of facebookProfile we have created a method called postMessage which is a function with a single argument of var message 
-the func uses the .push method to push the argument value of var message to the end of the array inside of the messages property

deleteMessage: [Line 10]
-within the object brackets of facebookProfile we have created a new method called deleteMessage which is a function with a single argument of var index
-the func body uses the splice() method to remove a single element from the messages property, it removes the element at an array index position
determined by the argument put in for splice() (in this ex: .splice(index = array element to be spliced, 1 = number of elements to be deleted))

addFreind: [Line 17]
-within the object brackets of facebookProfile we have created a method called addFreind which is a function with no parameters/arguments
-the func body adds 1 to the value of the freinds property within the facebookProfile object

removeFreind: [Line 21]
-within the brackets of the object facebookProfile we have created a new method called removeFreind with no parameters/arguments
-within the function: if the value of the freinds property inside the object facebookProfile is less then zero then:
remove 1 from the value of the freinds property

--------------------------------------------------
ASSIGNMENT:
Create an object called facebookProfile. The object should have 3 properties:
-your name
-the number of friends you have, and
-an array of messages you've posted (as strings)

The object should also have 4 methods:
1.) postMessage(message) - adds a new message string to the array
2.) deleteMessage(index) - removes the message corresponding to the index provided
3.) addFriend() - increases the friend count by 1
4.) removeFriend() - decreases the friend count by 1
*/