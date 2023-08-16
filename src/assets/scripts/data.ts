const data = {
  groups: [
    {
      groupName: 'group10',
      coverImage: 'https://mir-s3-cdn-cf.behance.net/project_modules/1400/7f60a7149564547.62ee76a7bb0dd.jpg',
      albums: [
        {
          albumName: 'album-1',
          coverImage: 'https://f4.bcbits.com/img/a2545099157_2.jpg',
          // coverImage: 'https://i.pinimg.com/236x/71/a1/48/71a148415e045d21f6ab7a3575052a11.jpg',
          // coverImage: 'https://i.pinimg.com/564x/cc/56/61/cc5661d57dfa8086d6a2c62087c387cd.jpg',
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
          albumName: 'album_2_blabla_babla',
          coverImage: 'https://f4.bcbits.com/img/a0125615091_2.jpg',
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
    {
      groupName: 'group11',
      coverImage: 'https://mir-s3-cdn-cf.behance.net/project_modules/1400/7f60a7149564547.62ee76a7bb0dd.jpg',
      albums: [
        {
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
    {
      groupName: 'group10',
      coverImage: 'https://mir-s3-cdn-cf.behance.net/project_modules/1400/7f60a7149564547.62ee76a7bb0dd.jpg',
      albums: [
        {
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
    {
      groupName: 'group11',
      coverImage: 'https://mir-s3-cdn-cf.behance.net/project_modules/1400/7f60a7149564547.62ee76a7bb0dd.jpg',
      albums: [
        {
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
    {
      groupName: 'group12',
      coverImage: 'https://mir-s3-cdn-cf.behance.net/project_modules/1400/7f60a7149564547.62ee76a7bb0dd.jpg',
      albums: [
        {
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
    {
      groupName: 'group13',
      coverImage: 'https://mir-s3-cdn-cf.behance.net/project_modules/1400/7f60a7149564547.62ee76a7bb0dd.jpg',
      albums: [
        {
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

data.groups.forEach(group => {
  // @ts-ignore
  group.albums.forEach(album => album.groupName = group.groupName)
})

// export { data };
export default data;
