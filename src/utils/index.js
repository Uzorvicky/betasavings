export function isMobile() {
    const regex = /Mobi|Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i;
    return regex.test(navigator.userAgent);
  }


  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  
export const isValidEmail = (email) => emailRegex.test(email);


export function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

/**
 * get the Intial a  phrase
 * @returns {String} formated value
 * @params String
 *
 */
export function getFirstLetters(str) {
 str = str.toUpperCase()
  let words = str.split(' ');
  if (words.length < 2) {
    return words[0]; // Handle case with less than 2 words
  }
  return words[0][0] + words[1][0];
}
export const colors = ['yellow-300', 'primary-300', 'purple-300', 'orange-300', 'pink-300', 'red-300', 'green-300']


/**
 * Format Naira
 * @returns {String} formated value
 * @params String
 *
 */
export const formatNaira = (amount) => {
  if(isNaN(amount)) {
    return 0
  }
  if (Math.abs(amount) >= 1000000) {
    // If the number is greater than or equal to 5 figures
    return "₦" + (amount / 1000000).toFixed(2) + " Million";
  }

  return "₦" + amount?.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, "$&,");
};
// ====================================================================================================

export const addCommas = (n) => {
  if(isNaN(n)) {
    return 0
  }
  if (n >= 1000000) {
    // If the number is greater than or equal to 5 figures
    return (n / 1000000).toFixed(2) + " Million";
  }

  return n?.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
};

export function formatAsCurrency(number, options = {}) {
  const { currency = "NGN", locale = "en-NG", showDecimal = false } = options;

  const formatOptions = {
    style: "currency",
    currency: currency,
  };

  if (!showDecimal) {
    formatOptions.minimumFractionDigits = 0;
  }

  return new Intl.NumberFormat(locale, formatOptions).format(number);
}

/**
 * Truncate
 * returns the truncated text with "..." or any specified ending character
 * @param {String} str
 * @param {Number} length
 * @param {String} ending
 * */
export const truncate = (str = "", length = 20, ending = "...") =>
  str.length > length
    ? `${str.substring(0, length - ending.length)} ${ending}`
    : str;

//