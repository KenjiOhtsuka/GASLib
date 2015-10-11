var CommentFactory, IssueFactory, ObjectFactory, RepositoryFactiry, UserFactory;

ObjectFactory = (function() {
  function ObjectFactory() {}

  ObjectFactory.prototype.createObjectFromWebHookContent = function(content) {
    var issue, repository;
    if (content.hasOwnProperty('push')) {
      return createPushObjectFromWebHookContent(content);
    }
    if (content.hasOwnProperty('fork')) {
      return createForkObjectFromWebHookContent(content);
    }
    if (content.hasOwnProperty('pullrequest')) {
      return createPullrequestObjectFromWebHookContent(content);
    }
    if (content.hasOwnProperty('issue')) {
      if (content.hasOwnProperty('comment')) {
        if (content.hasOwnPropert('changes')) {

        } else {

        }
      } else {
        issue = IssueFactory.createIssueFromJson(json.issue);
        repository = IssueFactory.createRepositoryFromJson(json.repository);
      }
    }
    return null;
  };

  ObjectFactory.prototype.createPushObjectFromWebHookContent = function(content) {
    var actor, repository;
    actor = UserFactory.createUserFromJson(content.actor);
    repository = RepositoryFactory.createRepositoryFromJson(content.repository);
    return null;
  };

  ObjectFactory.prototype.createForkObjectFromWebHookContent = function(content) {
    return null;
  };

  ObjectFactory.prototype.createIssueObjectFromWebHookContent = function(content) {
    return null;
  };

  ObjectFactory.prototype.createPullRequestObjectFromWebHookContent = function(content) {
    return null;
  };

  return ObjectFactory;

})();

UserFactory = (function() {
  function UserFactory() {}

  UserFactory.prototype.createUserFromJson = function(json) {
    var user;
    user = new User;
    user.setName(json.username);
    user.setDisplayName(json.display_name);
    user.setUuid(json.uuid);
    user.setUrl(json.links.html.href);
    user.setAvator(createAvatorFromJson(json.avator));
    return user;
  };

  return UserFactory;

})();

RepositoryFactiry = (function() {
  function RepositoryFactiry() {}

  RepositoryFactiry.prototype.createRepositoryFromJson = function(json) {
    var repository;
    repository = new Repository;
    repository.setName(json.name);
    repository.setOwner(UserFactory.createUserFromJson(json.owner));
    repository.setUuid(json.uuid);
    repository.setScm(json.scm);
    repository.setFullName(json.full_name);
    repository.setPrivate(json["private"]);
    return repository;
  };

  return RepositoryFactiry;

})();

IssueFactory = (function() {
  function IssueFactory() {}

  IssueFactory.prototype.createIssueFromJson = function(json) {
    var issue, ref;
    issue = new Issue;
    issue.setId(json.id);
    issue.setAssignee((ref = json.asignee) != null ? ref : UserFactory.createUserFromJson(json.assignee));
    issue.setEditedOn(json.edited_on);
    issue.setTitle(json.title);
    issue.setUrl(json.links.html.href);
    issue.setReporter(UserFactory.createUserFromJson(json.reporter));
    issue.setPriority(json.priority);
    issue.setState(json.state);
    issue.setMilestone(json.milestone);
    issue.setKind(json.kind);
    issue.setContent('raw', json.content.raw);
    issue.setContent('html', json.content.html);
    issue.setVersion(json.version);
    return issue;
  };

  return IssueFactory;

})();

CommentFactory = (function() {
  function CommentFactory() {}

  CommentFactory.prototype.createCommentFromJson = function(json) {
    var comment;
    comment = new Comment;
    comment.setId(id);
    comment.setUrl(json.links.html.href);
    comment.setUser(UserFactory.createUserFromJson(json.user));
    comment.setContent('raw', json.content.raw);
    comment.setContent('html', json.content.html);
    comment.setCreatedOn(json.created_on);
    comment.setUpdatedOn(json.updated_on);
    return comment;
  };

  return CommentFactory;

})();
