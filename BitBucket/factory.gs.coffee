
        issue      = IssueFactory.createIssueFromJson(json.issue)
        repository = IssueFactory.createRepositoryFromJson(json.repository)
    return null

  createPushObjectFromWebHookContent: (content) ->
    actor      = UserFactory.createUserFromJson(content.actor)
    repository = RepositoryFactory.createRepositoryFromJson(content.repository)
    #push
    return null
  createForkObjectFromWebHookContent: (content) ->
    return null
  createIssueObjectFromWebHookContent: (content) ->
    return null
  createPullRequestObjectFromWebHookContent: (content) ->
    return null

class UserFactory
  createUserFromJson: (json) ->
    user = new User
    user.setName(json.username)
    user.setDisplayName(json.display_name)
    user.setUuid(json.uuid)
    user.setUrl(json.links.html.href)
    user.setAvator(createAvatorFromJson(json.avator))
    return user

class RepositoryFactiry
  createRepositoryFromJson: (json) ->
    repository = new Repository
    repository.setName(json.name)
    repository.setOwner(UserFactory.createUserFromJson(json.owner))
    repository.setUuid(json.uuid)
    repository.setScm(json.scm)
    repository.setFullName(json.full_name)
    repository.setPrivate(json.private)
    return repository

class IssueFactory
  createIssueFromJson: (json) ->
    issue = new Issue
    issue.setId(json.id)
    issue.setAssignee(json.asignee ? UserFactory.createUserFromJson(json.assignee))
    issue.setEditedOn(json.edited_on)
    issue.setTitle(json.title)
    issue.setUrl(json.links.html.href)
    issue.setReporter(UserFactory.createUserFromJson(json.reporter))
    issue.setPriority(json.priority)
    issue.setState(json.state)
    issue.setMilestone(json.milestone)
    issue.setKind(json.kind)
    issue.setContent('raw', json.content.raw)
    issue.setContent('html', json.content.html)
    issue.setVersion(json.version)
    return issue

class CommentFactory
  createCommentFromJson: (json) ->
    comment = new Comment
    comment.setId(id)
    comment.setUrl(json.links.html.href)
    comment.setUser(UserFactory.createUserFromJson(json.user))
    comment.setContent('raw', json.content.raw)
    comment.setContent('html', json.content.html)
    comment.setCreatedOn(json.created_on)
    comment.setUpdatedOn(json.updated_on)
    return comment
