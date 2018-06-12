const Movie = () => import(/* webpackChunkName: "book" */ '@/pages/Movie')

export default [
  {
    path: 'movie',
    name: 'Movie_movie',
    component: Movie,
    props: { page: 'movie' }
  }
]
