var AttributeCollection = require(__zclipRoot + 'lib/AttributeCollection');
var CommandCollection = require(__zclipRoot + 'lib/CommandCollection');
var Cluster = require(__zclipRoot + 'lib/Cluster');
var ClusterCommand = require(__zclipRoot + 'lib/ClusterCommand');
var util = require(__zclipRoot + 'lib/util');

module.exports = function(args) {
  var coap = args.coap;

  return function ClusterFactory(metaData) {
    var NewCluster = function(attrs, metaData) {
      Cluster.class.apply(this, arguments);
    }

    NewCluster.prototype = Object.create(Cluster.class.prototype);
    defineCommands(NewCluster, metaData.commands);

    return function(attrs) {
      attrs = Object.assign({}, attrs, {
        clusterId: metaData.clusterId,
        attributeCollection: AttributeCollection(metaData.attributes),
        commandCollection: CommandCollection(metaData.commands)
      });
      return new NewCluster(attrs, coap);
    }
  }

  function defineCommands(ClusterClass, commandsMetaData) {
    if (!commandsMetaData) return;

    Object.getOwnPropertyNames(commandsMetaData).forEach((commandId) => {
      var meta = commandsMetaData[commandId];
      var commandName = util.camelCase(meta.name);

      ClusterClass.prototype[commandName] = function(args, callback) {
        var command = ClusterCommand(commandId, meta, this);
        command.call(args, callback);
      }
    });
  }
}

