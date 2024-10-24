const UserList = [
    {
        id: 1,
        name: "John",
        username: "john",
        age: 20,
        nationality: "CANADA",
        friends: [
            {
                id: 2,
                name: "Emma",
                username: "emma",
                age: 19,
                nationality: "AUSTRALIA"
            },
            {
                id: 3,
                name: "Liam",
                username: "liam30",
                age: 22,
                nationality: "USA"
            }
        ]
    },
    {
        id: 2,
        name: "Emma",
        username: "emma",
        age: 19,
        nationality: "AUSTRALIA",
        friends: [
            {
                id: 1,
                name: "John",
                username: "john",
                age: 20,
                nationality: "CANADA"
            },
            {
                id: 4,
                name: "Sophia",
                username: "sophia28",
                age: 21,
                nationality: "IRELAND"
            }
        ]
    },
    {
        id: 3,
        name: "Liam",
        username: "liam30",
        age: 22,
        nationality: "USA",
        friends: [
            {
                id: 1,
                name: "John",
                username: "john",
                age: 20,
                nationality: "CANADA"
            }
        ]
    },
    {
        id: 4,
        name: "Sophia",
        username: "sophia28",
        age: 21,
        nationality: "IRELAND",
        friends: [
            {
                id: 2,
                name: "Emma",
                username: "emma",
                age: 19,
                nationality: "AUSTRALIA"
            },
            {
                id: 5,
                name: "Oliver",
                username: "oliver22",
                age: 24,
                nationality: "UK"
            }
        ]
    },
    {
        id: 5,
        name: "Oliver",
        username: "oliver22",
        age: 24,
        nationality: "UK",
        friends: [
            {
                id: 4,
                name: "Sophia",
                username: "sophia28",
                age: 21,
                nationality: "IRELAND"
            }
        ]
    },
    {
        id: 6,
        name: "Ava",
        username: "ava99",
        age: 23,
        nationality: "GERMANY",
    },
    {
        id: 7,
        name: "Mia",
        username: "mia77",
        age: 25,
        nationality: "FRANCE",
        friends: [
            {
                id: 8,
                name: "Lucas",
                username: "lucas88",
                age: 26,
                nationality: "ITALY"
            }
        ]
    },
    {
        id: 8,
        name: "Lucas",
        username: "lucas88",
        age: 26,
        nationality: "ITALY",
        friends: [
            {
                id: 7,
                name: "Mia",
                username: "mia77",
                age: 25,
                nationality: "FRANCE"
            }
        ]
    }
];

const MovieList = [
    {
        id: 1,
        name: "Avengers Endgame",
        yearOfPublication: 2019,
        isInTheaters: true
    },
    {
        id: 2,
        name: "Inception",
        yearOfPublication: 2010,
        isInTheaters: false
    },
    {
        id: 3,
        name: "The Dark Knight",
        yearOfPublication: 2008,
        isInTheaters: false
    },
    {
        id: 4,
        name: "Interstellar",
        yearOfPublication: 2014,
        isInTheaters: false
    },
    {
        id: 5,
        name: "Spider-Man: No Way Home",
        yearOfPublication: 2021,
        isInTheaters: true
    },
    {
        id: 6,
        name: "The Matrix",
        yearOfPublication: 1999,
        isInTheaters: false
    },
    {
        id: 7,
        name: "Avatar",
        yearOfPublication: 2009,
        isInTheaters: false
    },
    {
        id: 8,
        name: "Joker",
        yearOfPublication: 2019,
        isInTheaters: false
    }
];

module.exports = { UserList, MovieList };