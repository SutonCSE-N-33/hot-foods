// use local storage as your db for now
const addToDb = (id,count) => {
  const exists = getDb();
  let shopping_carts = {};
  if (!exists) {
    shopping_carts[id] = count;
  }
  else {
    shopping_carts = JSON.parse(exists);
    if (shopping_carts[id]) {
      const newCount = shopping_carts[id] + count;
      shopping_carts[id] = newCount;
    }
    else {
      shopping_carts[id] = count;
    }
  }
  updateDb(shopping_carts);
}

const getDb = () => localStorage.getItem('shopping_carts');
const updateDb = cart => {
  localStorage.setItem('shopping_carts', JSON.stringify(cart));
}

const removeFromDb = id => {
  const exists = getDb();
  if (!exists) {

  }
  else {
    const shopping_carts = JSON.parse(exists);
    delete shopping_carts[id];
    updateDb(shopping_carts);
  }
}

const getStoredCart = () => {
  const exists = getDb();
  return exists ? JSON.parse(exists) : {};
}

const clearTheCart = () => {
  localStorage.removeItem('shopping_carts');
}

export { addToDb, removeFromDb as deleteFromDb, clearTheCart, getStoredCart }
