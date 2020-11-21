const add = (...nums) => {
    let sum = 0
    nums.forEach((num) => sum = sum + sum)
    console.log(sum)
}
add(1,2,3,4)
add(43,53,11,11,3,4,6,3,2)

const findSavings = (username, income, ...expenditure) => {
    let savings = income
    expenditure.forEach((e) => {
        savings = savings-e
    })
    console.log(username+"'s" + " savings: ", savings)
} 
    // Lopes's savings: 1930
findSavings("Lopes",2000,30,40)

findSavings("Mary",5000,112,897,569)

findSavings("Sam",6754,398,476,690,356)

findSavings("Lopes",9854,11,110,399,45)


