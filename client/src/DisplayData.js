import React, { useState } from 'react';
import { useQuery, useLazyQuery, gql, useMutation } from '@apollo/client';  

const QUERY_ALL_USERS = gql`
    query getAllUsers {
        users {
            id
            name
            username
            age
            nationality
            friends {
                id
                name
            }
        }
    }
`;

const QUERY_ALL_MOVIES= gql`
    query getAllMovies {
        movies {
            id
            name
            yearOfPublication
            isInTheaters
        }
    }
`;

const QUERY_MOVIE_BY_NAME= gql`
    query Movie($name: String!) {
        movie(name: $name) {
            id
            name
            yearOfPublication
        }
    }
`;

const CREATE_USER_MUTATION= gql`
    mutation CreateUser($input: CreateUserInput!) {
        createUser(input: $input) {
            id
            name
        }
    }
`

function DisplayData() {
    const [movieSearched, setMovieSearched] = useState("");

    const [name, setName] = useState("");
    const [username, setUsername] = useState("");
    const [age, setAge] = useState("");
    const [nationality, setNationality] = useState("");

    const {data, loading, refetch, error} = useQuery(QUERY_ALL_USERS);
    const {data: movieData} = useQuery(QUERY_ALL_MOVIES);
    const [fetchMovie, {data: movieSearchData, error: movieError}] = useLazyQuery(QUERY_MOVIE_BY_NAME);

    const [createUser] = useMutation(CREATE_USER_MUTATION);

    if (loading) {
        return <h1>DATA IS LOADING...</h1>
    }

    if (data) {
        console.log(data);
        console.log(movieData)
    }

    if (error) {
        console.log(error)
    }

    if (movieError) {
        console.log(movieError);
    }

    return (
        <div>
            <div>
                <input type='text' placeholder='Name' onChange={(event) => {
                    setName(event.target.value);}}/>
                <input type='text' placeholder='Username' onChange={(event) => {
                    setUsername(event.target.value);}}/>
                <input type='Number' placeholder='Age' onChange={(event) => {
                    setAge(event.target.value);}}/>
                <input type='text' placeholder='Nationality' onChange={(event) => {
                    setNationality(event.target.value.toUpperCase());}}/>
                <button onClick={() => {
                    createUser({
                        variables: {input: {name, username, age: Number(age), nationality}}
                    });

                    refetch();
                }}>Create User</button>
            </div>

            {data && data.users.map((user) => {
                return (
                    <div>
                        <h1>Name: {user.name}</h1>
                        <h1>Username: {user.username}</h1>
                        <h1>Age: {user.age}</h1>
                        <h1>Nationality: {user.nationality}</h1>
                    </div>
                )
            })}
            <br/>
            {movieData && movieData.movies.map((movie) => {
                return (
                    <div>
                        <h1>Movie Name: {movie.name}</h1>
                        <h1>Year of Publication: {movie.yearOfPublication}</h1>
                    </div>
                )
            })}

            <div>
                <input type='text' placeholder='Interstellar' onChange={(event) => {
                    setMovieSearched(event.target.value);}}/>
                <button onClick={() => {
                    fetchMovie({
                        variables: {
                            name: movieSearched
                        }
                    });
                }}>search movie</button>
                <div>
                    {movieSearchData && movieSearchData.movie? (
                        <div>
                            <h1>Movie Name: {movieSearchData.movie.name}</h1>
                            <h1>Year of Publication: {movieSearchData.movie.yearOfPublication}</h1>{" "}
                        </div>
                    ) : (movieSearchData && <h1>Error fetching data</h1>)}
                </div>
            </div>
        </div>
    )
}

export default DisplayData
