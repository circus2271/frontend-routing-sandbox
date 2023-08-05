const data = {
  groups: [
    {
//      groupName: 'blablabla',
      groupName: 'group10',
      coverImage: 'https://fdfsdf.fdsdf',
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