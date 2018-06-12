import book from '../Book'
import movie from '../Movie'
const children = [].concat(book, movie)
const Sort = () => import(/* webpackChunkName: "sort" */ '@/pages/Sort')

export default [
  {
    path: '/sort',
    name: 'Sort_sort',
    component: Sort,
    redirect: { name: 'Book_book' },
    children
  }
]
