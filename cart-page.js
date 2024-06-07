function CartPage() {
  const [cartItems, setCartItems] = useState([
    { id: 1, name: '選物Idea', price: 1288, quantity: 3 },
    { id: 2, name: '選物Idea', price: 1288, quantity: 3 },
    { id: 3, name: '選物Idea', price: 1288, quantity: 3 },
  ]);

  const handleRemoveItem = (id) => {
    setCartItems(cartItems.filter(item => item.id !== id));
  };

  const totalQuantity = cartItems.reduce((sum, item) => sum + item.quantity, 0);
  const totalPrice = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
}
