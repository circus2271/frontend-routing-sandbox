//  https://javascript.info/custom-errors

export class GroupNotFoundError extends Error {
  constructor(message?) {
    super();

    this.name = 'GroupNotFoundError'
    this.message = message || 'group not found, 404'
  }
}


export class AlbumNotFoundError extends Error {
  constructor(message?) {
    super();

    this.name = 'AlbumNotFoundError'
    this.message = message || 'album not found, 404'
  }
}


