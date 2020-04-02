import { UserModel } from '../models/UserModel';

let userData: Array<UserModel> = [
    {
        id: 1,
        name: "Leanne Graham",
        username: "Bret",
        email: "Sincere@april.biz",
        address: {
            street: "Kulas Light",
            suite: "Apt. 556",
            city: "Gwenborough",
            zipcode: "92998-3874"
        },
        phone: "1-770-736-8031 x56442",
        company: {
            name: "Romaguera-Crona",
            catchPhrase: "Multi-layered client-server neural-net"
        }
    },
    {
        id: 2,
        name: "Ervin Howell",
        username: "Antonette",
        email: "Shanna@melissa.tv",
        address: {
            street: "Victor Plains",
            suite: "Suite 879",
            city: "Wisokyburgh",
            zipcode: "90566-7771"
        },
        phone: "010-692-6593 x09125",
        company: {
            name: "Deckow-Crist",
            catchPhrase: "Proactive didactic contingency"
        }
    },
    {
        id: 3,
        name: "Clementine Bauch",
        username: "Samantha",
        email: "Nathan@yesenia.net",
        address: {
            street: "Douglas Extension",
            suite: "Suite 847",
            city: "McKenziehaven",
            zipcode: "59590-4157"
        },
        phone: "1-463-123-4447",
        company: {
            name: "Romaguera-Jacobson",
            catchPhrase: "Face to face bifurcated interface"
        }
    },
    {
        id: 4,
        name: "Patricia Lebsack",
        username: "Karianne",
        email: "Julianne.OConner@kory.org",
        address: {
            street: "Hoeger Mall",
            suite: "Apt. 692",
            city: "South Elvis",
            zipcode: "53919-4257"
        },
        phone: "493-170-9623 x156",
        company: {
            name: "Robel-Corkery",
            catchPhrase: "Multi-tiered zero tolerance productivity"
        }
    }
]

export default userData;
