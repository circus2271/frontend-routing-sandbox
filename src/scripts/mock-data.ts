import {Post} from "./custom-elements/PostComponent";

type User = {
    username: string,
    name: string,
    email?: string,
    // posts: Post[] | [] | null,
    // posts: Post[] | [] | null,
    posts: Post[] | [],
    loggedIn?: true | false
}

export const users: User[] = [
    {
        username: '@ivan',
        name: 'pavel',
        email: 'example@example.com',
        posts: [
            {
                slug: 'post-1',
                title: 'bla bla 1',
                description: 'sfddf',
                date: '22.07.99',
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
            },
            {
                slug: 'post-3',
                title: 'bla bla dsfsdf',
                description: 'sfddf',
                date: '22.07.99',
            },
            {
                slug: 'post-4',
                title: 'bla bla',
                description: 'sfddf',
                date: '22.07.99',
            },
            {
                slug: 'post-4',
                title: 'bla bla',
                description: 'sfddf',
                date: '22.07.99',
            },
            {
                slug: 'post-4',
                title: 'bla bla',
                description: 'sfddf',
                date: '22.07.99',
            },
            {
                slug: 'post-4',
                title: 'bla bla',
                description: 'sfddf',
                date: '22.07.99',
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
                slug: 'mamba rules',
                title: 'mamba rules everything',
                description: 'sfddf',
                date: '22.07.99',
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
                slug: 'john-post2',
                title: 'john posts again',
                description: 'sfddf',
                date: '22.07.99',
            },
        ],
        // loggedIn: true
    },
]

export const currentUser = users[0]

export const posts = users.map(user => user.posts).flat()