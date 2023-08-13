//  https://javascript.info/custom-errors

class GroupNotFoundError extends Error {
  constructor(message) {
    super(message);
    this.name = 'GroupNotFoundError'
  }
}


class AlbumNotFoundError extends Error {
  constructor(message) {
    super(message);
    this.name = 'AlbumNotFoundError'
  }
}

export const errors = {
  GroupNotFoundError, AlbumNotFoundError
}

