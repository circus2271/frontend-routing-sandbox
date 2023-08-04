const data = {
  groups: [
    {
      groupName: 'blablabla',
      coverImage: 'https://fdfsdf.fdsdf',
      albums: [
        {
          albumName: 'album blabla',
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
}

const group = [data.groups[0]]
const newGroup = [...group]
newGroup.groupName = 'blabla22'
data.groups.push(newGroup)

console.log(data)
export const getData = async () => {
  return data
}