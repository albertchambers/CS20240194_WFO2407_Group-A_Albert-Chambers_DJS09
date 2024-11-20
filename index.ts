// @ts-check

// Define the Review interface
interface Review {
    name: string;
    stars: number;
    loyaltyUser: boolean;
    date: string;
}

const reviewTotalDisplay = document.querySelector('#reviews') as HTMLElement

const reviews = [
    {
        name: 'Sheia',
        stars: 5,
        loyaltyUser: true,
        date: '01-04-2021'
    },
    {
        name: 'Andrzej',
        stars: 3,
        loyaltyUser: false,
        date: '28-03-2021'
    },
    {
        name: 'Omar',
        stars: 4,
        loyaltyUser: true,
        date: '27-03-2021'
    },
]

function showReviewTotal (value : number) {
    reviewTotalDisplay.innerHTML = value.toString()
}

showReviewTotal(reviews.length)