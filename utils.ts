import { LoyaltyUser } from './enums'

const returningUserDisplay = document.querySelector('#returning-user') as HTMLElement
const userNameDisplay = document.querySelector('#user') as HTMLElement
const reviewTotalDisplay = document.querySelector('#reviews') as HTMLElement

export function showReviewTotal(value: number, reviewer: string, isLoyalty: LoyaltyUser) {
    const iconDisplay = LoyaltyUser.GOLD_USER ? '⭐' : ''
    reviewTotalDisplay.innerHTML = value.toString() + ' Review' + makeMultiple(value) + '| last reviewed by ' + reviewer + ' ' + iconDisplay
}

export function populateUser(isReturning: boolean, userName: string ) {
    if (isReturning){
        returningUserDisplay.innerHTML = 'back'
    }
    userNameDisplay.innerHTML = userName
}

export function showDetails(authorityStatus: boolean | Permissions, element: HTMLDivElement, price: number) {
   if (authorityStatus) {
       const priceDisplay = document.createElement('div')
       priceDisplay.innerHTML = price.toString() + '/night'
       element.appendChild(priceDisplay)
   }
}

function makeMultiple(value: number): string {
    if (value > 1 || value == 0 ) {
        return 's'
    } else return ''
}

export function getTopTwoReviews(reviews: {
    name: string;
    stars: number;
    loyaltyUser: LoyaltyUser;
    date: string;
}[]) : {
    name: string;
    stars: number;
    loyaltyUser: LoyaltyUser;
    date: string;  
}[]  {
 const sortedReviews = reviews.sort((a, b) => b.stars - a.stars)
 return sortedReviews.slice(0,2)
}