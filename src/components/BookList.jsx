const BookList = ({ books }) => {
  return (
    <ul>
      {books.map((book) => {
        return <li key={book.id}>{book.name}</li>;
      })}
    </ul>
  );
};

export default BookList;

// Щоб відрендерити колекцію елементів, використовуємо масив даних і метод map().
// Для Li вказуємо key.
