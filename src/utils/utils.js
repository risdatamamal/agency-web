export const animationCreate = () => {
  if (typeof window !== "undefined") {
    const WOW = require("wowjs").default;
    new WOW({ live: false }).init();
  }
};

// export const animationCreate = () => {
//   if (typeof window !== "undefined") {
//     window.WOW = require("wowjs");
//   }
//   new WOW.WOW({ live: false }).init();
// };