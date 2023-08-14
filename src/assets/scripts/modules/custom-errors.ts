//  https://javascript.info/custom-errors

export class GroupNotFoundError extends Error {
  constructor(message?) {
    // super(message);
    super();

    this.name = 'GroupNotFoundError'
    this.message = 'group not found, 404'
  }
}


export class AlbumNotFoundError extends Error {
  constructor(message?) {
    // super(message);
    super();

    this.name = 'AlbumNotFoundError'
    this.message = 'album not found, 404'
  }
}


