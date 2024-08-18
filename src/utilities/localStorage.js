const getStoredReadList = () => {
  const storedReadLists = localStorage.getItem("read-list");
  if (storedReadLists) {
    return JSON.parse(storedReadLists);
  }
  return [];
};

const getStoredWishList = () => {
  const storedWishLists = localStorage.getItem("wish-list");
  if (storedWishLists) {
    return JSON.parse(storedWishLists);
  }
  return [];
};
const savedReadList = (id) => {
  const storedReadLists = getStoredReadList();
  const exist = storedReadLists.find((bookId) => bookId === id);
  if (!exist) {
    storedReadLists.push(id);
    const storedWishLists = getStoredWishList().filter(
      (bookId) => bookId !== id
    );
    // console.log(storedWishLists);
    localStorage.setItem("read-list", JSON.stringify(storedReadLists));
    localStorage.removeItem("wish-list");
    localStorage.setItem("wish-list", JSON.stringify(storedWishLists));
    return true;
  } else {
    return false;
  }
};
const savedWishList = (id) => {
  const storedWishLists = getStoredWishList();
  const storedReadLists = getStoredReadList();
  const existWishList = storedWishLists.find((bookId) => bookId === id);
  const existReadList = storedReadLists.find((bookId) => bookId === id);
  if (!existWishList && !existReadList) {
    storedWishLists.push(id);
    localStorage.setItem("wish-list", JSON.stringify(storedWishLists));
    return true;
  } else {
    return false;
  }
};

export { getStoredReadList, getStoredWishList, savedReadList, savedWishList };
