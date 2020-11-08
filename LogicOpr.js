//  && - AND operator - 
// || - OR operator -

let isVerified = true
let isLoggedIn = true
let haspaymentToken = true
let isGuest = true


if (isVerified && isLoggedIn && haspaymentToken) {
    console.log('Greating message to user')
    console.log('Grant access to paid course')
} else if(isVerified || isGuest) {
    console.log('Allow free previews')
} else {
    console.log('Message: please contact admin')

}
