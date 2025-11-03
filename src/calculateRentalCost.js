/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  // write code here
  const oneDayRent = 40;
  const sevenDaysDiscount = 50;
  const threeDaysDiscount = 20;
  let sumRent = 0;

  if (days >= 7) {
    sumRent = days * oneDayRent - sevenDaysDiscount;

    return sumRent;
  }

  if (days >= 3) {
    sumRent = days * oneDayRent - threeDaysDiscount;

    return sumRent;
  } else {
    sumRent = days * oneDayRent;

    return sumRent;
  }
}

module.exports = calculateRentalCost;
