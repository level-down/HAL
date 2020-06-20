const denyList = require("../config/denylist.json");

const containsDenyListWord = (message) => {
  const messageArray = message.content.split(" ")
  let messageObj = {}
  let denyWordFound = false
  messageArray.forEach( word => {
    messageObj[word] = true
  });

  for (let i = 0; i < denyList.length; i++) {
    if(messageObj[denyList[i]]){
      denyWordFound = true
    }
  }
  return denyWordFound
};

module.exports = containsDenyListWord