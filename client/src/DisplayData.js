import React from 'react';
import { useQuery, gql } from '@apollo/client';  

const QUERY_ALL_USERS = gql`
    query getAllUsers {
        users {
            id
            name
            username
            age
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

function DisplayData() {
    const {data, loading, error} = useQuery(QUERY_ALL_USERS);
    const {data: movieData} = useQuery(QUERY_ALL_MOVIES);

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
  return (
    <div>
        {data && data.users.map((user) => {
            return (
                <div>
                    <h1>Name: {user.name}</h1>
                    <h1>Username: {user.username}</h1>
                    <h1>Age: {user.age}</h1>
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
    </div>
  )
}

export default DisplayData
