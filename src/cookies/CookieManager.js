import Cookies from "js-cookie";

const userLoggedKey = "userLogged";
const userDataKey = "userData";
const bookingDateKey = "bookingDate";
const cartKey = "cart";

export const CookieManager = {
  // USER DATA COOKIES
  loginUser(username, firstName, lastName) {
    Cookies.set(userLoggedKey, true);
    const userData = JSON.stringify({
      username: username,
      firstName: firstName,
      lastName: lastName,
    });
    Cookies.set(userDataKey, userData);
  },

  logoutUser() {
    Cookies.remove(userLoggedKey);
    Cookies.remove(userDataKey);
  },

  getUserData() {
    const userDataCookie = Cookies.get(userDataKey);
    let userData;
    if (userDataCookie) {
      userData = JSON.parse(userDataCookie);
    }

    return {
      userLogged: Cookies.get(userLoggedKey),
      ...userData,
    };
  },

  // CART COOKIES
  setBookingDates(dateFrom, dateTo) {
    const bookingDates = JSON.stringify({
      dateFrom: dateFrom,
      dateTo: dateTo,
    });
    Cookies.set(bookingDateKey, bookingDates);
  },

  getBookingDates() {
    const bookingDatesCookie = Cookies.get(bookingDateKey);
    let bookingDates;
    if (bookingDatesCookie) {
      bookingDates = JSON.parse(bookingDatesCookie);
      return { ...bookingDates };
    } else {
      return null;
    }
  },

  removeBookingDates() {
    Cookies.remove(bookingDateKey);
  },

  addToCart(item) {
    const cart = Cookies.get(cartKey);
    let content;

    if (cart) {
      content = JSON.parse(cart);
      if (item.name in content) {
        content[item.name].quantity += 1;
      } else {
        Object.assign(content, {
          [item.name]: { price: item.price, quantity: 1 },
        });
      }
    } else {
      console;
      content = {
        [item.name]: { price: item.price, quantity: 1 },
      };
    }

    Cookies.set(cartKey, JSON.stringify(content));
  },

  removeFromCart(item) {
    const cart = Cookies.get(cartKey);

    if (cart) {
      let content = JSON.parse(cart);

      if (item.name in content) {
        if (content[item.name].quantity > 1) {
          content[item.name].quantity -= 1;
        } else {
          delete content[item.name];
        }
      }

      Cookies.set(cartKey, JSON.stringify(content));
    }
  },

  getAllFromCart() {
    const cart = Cookies.get(cartKey);

    if (cart) {
      let content = JSON.parse(cart);
      return Object.entries(content).map((entry) => {
        const [name, value] = entry;
        return {
          name,
          ...value,
        };
      });
    }
  },

  getTotalPriceFromCart() {
    const cart = Cookies.get(cartKey);
    if (cart) {
      let content = JSON.parse(cart);
      return Object.values(content)
        .reduce(
          (totalPrice, item) => totalPrice + item.price * item.quantity,
          0
        )
        .toFixed(2);
    } else {
      return "0.00";
    }
  },
};
