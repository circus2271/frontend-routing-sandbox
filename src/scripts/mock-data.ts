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
]