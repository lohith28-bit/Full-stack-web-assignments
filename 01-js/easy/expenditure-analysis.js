/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  Transaction - an object like { itemName, category, price, timestamp }.
  Output - [{ category1 - total_amount_spent_on_category1 }, { category2 - total_amount_spent_on_category2 }]
*/

function calculateTotalSpentByCategory(transactions) {

  let result = []
  if (transactions.length === 0) return result
  let j

  for (let i = 0; i < transactions.length; i++) {
    for (j = 0; j < result.length; j++) {
      if (result[j].category === transactions[i].category) {
        result[j].totalSpent += transactions[i].price
        break
      }
    }
    if (j === result.length) {
      result[result.length] = {
        category: transactions[i].category,
        totalSpent: transactions[i].price
      }
    }
  }
  return result;
}


module.exports = calculateTotalSpentByCategory;
