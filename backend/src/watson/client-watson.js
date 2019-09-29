const AssistantV1 = require('watson-developer-cloud/assistant/v1');

const watsonAssistant = new AssistantV1({
  version: '2019-07-17',
  username: '',
  password: '',
  url: 'https://gateway.watsonplatform.net/assistant/api/'
});

module.exports = watsonAssistant;
