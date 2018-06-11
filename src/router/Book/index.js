const Book = () => import(/* webpackChunkName: "book" */ '@/pages/Book')

export default [
  {
    path: '/book',
    name: 'Book_book',
    component: Book
  }
]
