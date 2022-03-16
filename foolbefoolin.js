let facebookProfile = {
  name: "Nico",
  freinds: 69,
  messages: ['yeeeehaw', 'i love sam', 'i love mysa'],
  newMessage: function (message) {
    facebookProfile.messages.push(message) //TRANSLATION: push the value of argument message to the messages property within the object facebookProfile
  }
}

postMessage: function(message) {
  facebookProfile.messages.push(message);
/*
postMessage(message) - adds a new message string to the array

deleteMessage(index) - removes the message corresponding to the index provided

addFriend() - increases the friend count by 1

removeFriend() - decreases the friend count by 1

// - addition at the end is done using push() method
// - addition at a specific index is done using splice() method
// - deletion from the beginning is done using pop() method
// - deletion from a specific index is done using splice() method 
*/