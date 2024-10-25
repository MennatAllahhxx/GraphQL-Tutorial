import React, { useState } from 'react';
import { useQuery, useLazyQuery, gql } from '@apollo/client';  

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

const QUERY_MOVIE_BY_NAME= gql`
    query Movie($name: String!) {
        movie(name: $name) {
            id
            name
            yearOfPublication
        }
    }
`;

function DisplayData() {
    const [movieSearched, setMovieSearched] = useState("");

    const {data, loading, error} = useQuery(QUERY_ALL_USERS);
    const {data: movieData} = useQuery(QUERY_ALL_MOVIES);
    const [fetchMovie, {data: movieSearchData, error: movieError}] = useLazyQuery(QUERY_MOVIE_BY_NAME);

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

            <div>
                <input type='text' placeholder='Interstellar' onChange={(event) => {
                    setMovieSearched(event.target.value);
                }}/>
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
