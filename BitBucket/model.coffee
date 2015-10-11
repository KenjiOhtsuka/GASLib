class User
  @type = 12
  setType: (type) ->
    @type = type
    return @
  getType: ->
    return type
  setName: (name) ->
    @name = name
    return @
  getName: ->
    return @name
  setDisplayName: (displayName) ->
    @displayName = @displayName
    return @
  getDisplayName: ->
    return @displayName
  setUuid: (uuid) ->
    @uuid = uuid
    return @
  getUuid: ->
    return @uuid
  setUrl: (url) ->
    @url = url
    return @
  getUrl: ->
    return @url

class Avator
  setUrl: (url) ->
    @url = url
    return @
  getUrl: ->
    return @url

class Repository
  setName: (name) ->
    @name = name
    return @
  getName: ->
    return @name
  setFullName: (fullName) ->
    @fullName = fullName
    return @fullName
  getFullName: ->
    return @fullName
  setScm: (scm) ->
    @scm = scm
    return @
  getScm: ->
    return @scm
  setUrl: (url) ->
    @url = url
    return @
  getUrl: ->
    return @url
  setOwner: (owner) ->
    @owner = owner
    return @
  getOwner: ->
    return @owner
