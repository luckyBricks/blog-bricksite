var onlineUsers = 0;

module.exports = async function (context, invocation) {

  context.log(`Receive ${context.bindingData.message} from ${invocation.ConnectionId}.`);

  onlineUsers++;
  
  context.bindings.updateDiv = [
    {
      target: 'newView',
      arguments: [`Current people on this page ${onlineUsers}`],
    },
  ];
  context.done();
};
