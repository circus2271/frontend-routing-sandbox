// import {Post} from "@custom-elements/PostComponent";
import {Post} from "./components/custom-elements/PostComponent";

// export const defaultAvatar = 'https://frontend-routing-sandbox.vercel.app/tramvai_bandcamp_header_image.abdd80a9.png'
export const defaultAvatar = 'https://github.githubassets.com/assets/pull-shark-default-498c279a747d.png'

export type User = {
    username: string,
    name: string,
    email?: string,
    // posts: Post[] | [] | null,
    // posts: Post[] | [] | null,
    posts: Post[] | [],
    loggedIn?: true | false,
    avatarUrl?: string,
}

export const users: User[] = [
    {
        username: '@ivan',
        name: 'pavel',
        email: 'example@example.com',
        // avatarUrl: '~/src/media/images/tramvai_bandcamp_header_image.png',  
        // avatarUrl: 'https://frontend-routing-sandbox.vercel.app/tramvai_bandcamp_header_image.abdd80a9.png',
        // avatarUrl: 'https://lh3.googleusercontent.com/rd-ogw/AF2bZyiCwNaTVzty5JFtxkBr2_dPVbnrv2nSgPlX_zhoo8V-7ImAsn2yX2HrqOduhiAv28kEaWs15FAlW4D6nlGsB7bo3iTjr7vIhvt0ZBq-iw04qicqn66uLYwBazv_G89Pw4zA5O7MCD7_CE3Zqybsw3CsxkhMDvyfFUb9RIBpgihTDyy-mGxeOzhcTtXF_xp0WAUZb3WrMoo0Z0dydsC28HTCsoZPGiamJawtRoWsafiV1KojtT3gQN-vlzLewIaeJ96zwtQc3C98VDcLCRdLpSFP1ayI-Wb7dsTNi5R-jtuqKhbgfqZU_14CR9aN0EHbFju5GpSLEQCso2uVKpDDJRK2RBlNS1jWn2r7_4rh_pRyuE_xM0HC-Rs7F1DAR_CNHHA0NucXOaiS90z08stXLr1O1kpxsIUDrtCsDnDs7R9V3lXuVoGL2PqeS9Tt8YsQxz75Tborg6j3QZpiwNffNjl1I_dYaLNT02N5QeG_4JUOYb6hi7fQPTD5F6daJvrUzB_Fmj5yD0-GUkibMNbiS17zN8UDSB9lCfS1cHSoeOgZ5KFGZPbf71JTzBgFeBzNHL6zEH7gqNcrzd_sugEXi_ceSU8CUFy8TSQmJ8QyjqdzCylDfqNcejqekWyQsz3gJbZ87SCdR8se_zo3XYV7oqA5wDYMYSVrpJJC5hBusYdOxCyalHtX7kZ4hhlaw94Vq8L-DRg6sECl4JJlnsUksHOC7zxbXobgHlAqEDQ0xC7n8skIGmnOAf1hQ912Uxb7TAtqSOaoFSuXVcLVNiOTEcv504pjGYYMQuuaxkXGHV-eWdrWsL61jY5P9RFxCV6kscA8AA2LBqIfEZTOu81j65rIBFErfUUjP4DPzwix439_H1uTVaQBTdWBvUJdlSmRkG6IGqxpFg7JDrXavDskY_qVjZwAouJ0DHnYgARb0GRO5-OPF9zveUlqpB-D7X5NF9iDMI731RPRB9SCgbYBJ1wsexx-wjQbEuS9FTXGzC70kzkrVI7kfR9NC3GeaBE-JRCrpFz8lqQkUj6xjxzbFigAGzoWPYLIYK26kCrvmzfW35ON2c9XDTmFpUkQH4nGXS-WGoxob4gtswtL2Q=s32-c',
        avatarUrl: 'https://lh3.googleusercontent.com/w7lFy5gUWrX_IUUGgYNbUpYUWWvK9kVPPyHnkragdAfBI8OpksXd4mfHOrCy8hMwrj1woRTnVhntizl0281ir50trFc=s137',
        posts: [
            {
                slug: 'post-1',
                title: 'bla bla 1',
                description: 'sfddf',
                date: '22.07.99',
                id: '1',
                comments: [
                    {
                        author: {
                            username: '@user-john'
                        },
                        // 'text-content': 'fdsfsdf',
                        'text-content': 'fdsfsdf'
                    },
                    {
                        author: {
                            username: '@mamba'
                        },
                        // 'text-content': 'fdsfsdf',
                        'text-content': 'fdsfsdf'
                    }
                ]
            },
            {
                slug: 'post-2',
                title: 'bla bla 2',
                description: 'sfddf',
                date: '22.07.99',
                id: '5',
            },
            {
                slug: 'post-3',
                title: 'bla bla dsfsdf',
                description: 'sfddf',
                date: '22.07.99',
                id: '6',
            },
            {
                slug: 'post-4',
                title: 'bla bla',
                description: 'sfddf',
                date: '22.07.99',
                id: '7',
            },
            {
                slug: 'post-4',
                title: 'bla bla',
                description: 'sfddf',
                date: '22.07.99',
                id: '8',
            },
            {
                slug: 'post-4',
                title: 'bla bla',
                description: 'sfddf',
                date: '22.07.99',
                id: '9',
            },
            {
                slug: 'post-4',
                title: 'bla bla',
                description: 'sfddf',
                date: '22.07.99',
                id: '10',
            }
        ],
        loggedIn: true
    },
    {
        username: '@john',
        name: 'john',
        email: 'example@john.example.com',
        posts: [
            {
                slug: 'john-1',
                title: 'fdfdsf',
                description: 'sfddf',
                date: '22.07.99',
                id: '2',
                comments: [
                    {
                        author: {
                            username: '@mamba'
                        },
                        // 'text-content': 'fdsfsdf',
                        'text-content': 'fdsfsdf'
                    }
                ]
            },
            {
                slug: 'john-post2',
                title: 'john posts again',
                description: 'sfddf',
                date: '22.07.99',
                id: '11',
            },
        ],
        // loggedIn: true
    },
    {
        username: '@mamba',
        name: 'mamba',
        email: 'example@mamba.example.com',
        posts: [
            {
                slug: 'mamba-rules',
                title: 'mamba rules everything',
                description: 'sfddf',
                date: '22.07.99',
                id: '3',
                comments: [
                    {
                        author: {
                            username: '@ivan'
                        },
                        // 'text-content': 'fdsfsdf',
                        'text-content': 'hm..'
                    }
                ]
            },
            {
                slug: 'mamba-post2',
                title: 'mamba posts again',
                description: 'sfddf',
                date: '22.07.99',
                id: '4'
            },
        ],
        // loggedIn: true
    },
]

export const currentUser = users[0]

export const posts = users.map(user => user.posts).flat()