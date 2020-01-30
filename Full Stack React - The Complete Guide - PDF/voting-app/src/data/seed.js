export const products = [
    {
        id: 1,
        title: 'Fort Knight',
        description: 'Authentic Fort Knight Figurine, delivered in just two weeks',
        url: '#',
        votes: generateVote(),
        submittedAvatarUrl: '/images/avatars/daniel.PNG',
        productImageUrl: '/images/products/image-aqua.jpg'
    },
    {
        id: 2,
        title: 'Mario Figurine',
        description: 'Authentic Mario Figurine, delivered in just two weeks',
        url: '#',
        votes: generateVote(),
        submittedAvatarUrl: '/images/avatars/avatar.PNG',
        productImageUrl: '/images/products/mario.jpg'
    },
    {
        id: 3,
        title: 'Teemo Figurine',
        description: 'Authentic Teemo Figurine, delivered in just four weeks',
        url: '#',
        votes: generateVote(),
        submittedAvatarUrl: '/images/avatars/developer.png',
        productImageUrl: '/images/products/teemo.png'
    }
];

function generateVote() {
    return Math.floor(Math.random() * 100);
}