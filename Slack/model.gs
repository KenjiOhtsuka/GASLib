  SlackPushMessage = (function() {
    var _attachments, _message;

    _message = {};

    _attachments = [];

    function SlackPushMessage() {}

    SlackPushMessage.prototype.setText = function(text) {
      _message['text'] = text;
      return this;
    };

    SlackPushMessage.prototype.getText = function() {
      return _message['text'];
    };

    SlackPushMessage.prototype.setUserName = function(user_name) {
      _message['username'] = user_name;
      return this;
    };

    SlackPushMessage.prototype.getUserName = function() {
      return _message['user_name'];
    };

    SlackPushMessage.prototype.setIconUrl = function(icon_url) {
      _message['icon_url'] = icon_url;
      return this;
    };

    SlackPushMessage.prototype.getIconUrl = function() {
      return _message['icon_url'];
    };

    SlackPushMessage.prototype.setMarkDown = function(trueOrFalse) {
      _message['mrkdwn'] = trueOrFalse;
      return this;
    };

    SlackPushMessage.prototype.getMarkDown = function() {
      return _message['mrkdwn'];
    };

    SlackPushMessage.prototype.addAttachment = function(attachment) {
      _attachment.push(attachment);
      return this;
    };

    SlackPushMessage.prototype.getAttachmentList = function() {
      return _attachments;
    };

    SlackPushMessage.prototype.toJson = function() {
      return JSON.stringify(_message);
    };

    return SlackPushMessage;

  })();

  SlackPushMessageAttachment = (function() {
    var _attachment;

    _attachment = {};

    function SlackPushMessageAttachment() {}

    SlackPushMessageAttachment.prototype.setTitle = function(title) {
      _attachment['title'] = title;
      return this;
    };

    SlackPushMessageAttachment.prototype.getTitle = function() {
      return _attachment['title'];
    };

    SlackPushMessageAttachment.prototype.setPreText = function(preText) {
      _attachment['pre_text'] = preText;
      return this;
    };

    return SlackPushMessageAttachment;

  })();

  SlackGateway = (function() {
    var _SlackGateway, instance;

    function SlackGateway() {}

    instance = null;

    _SlackGateway = (function() {
      function _SlackGateway() {}

      _SlackGateway.prototype.push = function(url, payload) {
        return WebGateway.post(url, payload);
      };

      return _SlackGateway;

    })();

    SlackGateway.getInstance = function() {
      return instance != null ? instance : instance = new _SlackGateway();
    };

    return SlackGateway;

  })();
