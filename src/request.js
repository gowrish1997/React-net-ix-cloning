const api_key="0e24bbdc6967c31281666ad31aedb3c5"
const requests={
    fetchTrending:`/trending/all/week?api_key=${api_key}&language=en-US`,
    fetchNetflixOriginals:`/discover/tv?api_key=${api_key}&with_networks=213`,
    fetchTopRated:`/movei/top_rated?api_key=${api_key}&language=en-US`,
    fetchActionMovies:`/discover/movie?api_key=${api_key}&with_genres=28`,
    fetchComedyMovies:`/discover/movie?api_key=${api_key}&with_genres=35`,
    fetchHorrorMovies:`/discover/movie?api_key=${api_key}&with_genres=27`,
    fetchRomanticMovies:`/discover/movie?api_key=${api_key}&with_genres=10749`,
    fetchDocumentaries:`/discover/movie?api_key=${api_key}&with_genres=99`

}
export default requests