const data = {
  groups: [
    {
//      groupName: 'blablabla',
      groupName: 'group10',
//      coverImage: 'https://fdfsdf.fdsdf',
      coverImage: 'https://mir-s3-cdn-cf.behance.net/project_modules/1400/7f60a7149564547.62ee76a7bb0dd.jpg',
      albums: [
        {
//          albumName: 'album blabla',
          albumName: 'album-1',
          coverImage: 'https:/ffdsf.ff',
          tracks: [
            {
              name: 'track blabla',
              src: 'https://sfdfsf.fsdfsf'
            },
            {
              name: 'track 2 babla',
              src: 'https://track2.url.ru'
            }
          ]
        },
        {
          albumName: 'album 2 blabla babla',
          coverImage: 'https://dfssf.dfsf',
          tracks: [
            {
              name: 'track wow',
              src: 'https://sfdfsf.fsdfsf'
            },
            {
              name: 'track 2 wow wow',
              src: 'https://track2.url.ru'
            }
          ]
        },
      ]
    },
  ]
};

['group11', 'group12', 'group13'].forEach(groupName => {
  const newGroup = {...data.groups[0]}
  newGroup.groupName = groupName
  newGroup.coverImage = 'b2_train_gimp.png'

  data.groups.push(newGroup)
})

export const getData = async () => {
  return data
}

export const URL_CHANGE_EVENT = 'urlChange'
export const urlChange = 'urlChange'
//export const defaultTimeout = 1500
//export const defaultTimeout = 500
export const defaultTimeout = 250

const whichPage = (): 'about' | 'home' | 'group' | 'album' | '404'  => {
  return 'about'
}

whichPage()