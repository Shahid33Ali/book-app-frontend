function urlGenearator(bookName) {
  return new URL(`../assets/books/${bookName}`, import.meta.url);
}
export default urlGenearator;
