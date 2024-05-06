document.addEventListener('DOMContentLoaded', function() {
    // Sample data for reviews
    const reviews = [
        {
            name: "Park Jimin",
            avatar: "https://pbs.twimg.com/media/FrRlXOPXgAABcel?format=jpg&name=large",
            rating: 4,
            comment: "Great experience! The tour guide was knowledgeable and friendly."
        },
        {
            name: "Levi Ackermann",
            avatar: "https://i.pinimg.com/736x/f9/24/2f/f9242f19dc3f4efbea6efca419bea93e.jpg",
            rating: 5,
            comment: "Absolutely amazing trip! Will definitely recommend it to others."
        },
        {
            name: "Sambangi Reshma",
            avatar: "https://i.pinimg.com/474x/c1/f3/78/c1f378d6f57b493b39b95a82b68b676a.jpg",
            rating: 3,
            comment: "The tour was okay, but I expected more for the price."
        }
    ];

    const reviewsContainer = document.getElementById('reviews');

    // Function to display reviews
    function displayReviews() {
        reviewsContainer.innerHTML = '';
        reviews.forEach(review => {
            const reviewElement = document.createElement('div');
            reviewElement.classList.add('col-md-4');

            const html = `
                <div class="review">
                    <img src="${review.avatar}" alt="User Avatar">
                    <h3>${review.name}</h3>
                    <div class="rating">
                        ${'★'.repeat(review.rating)}${'☆'.repeat(5 - review.rating)}
                    </div>
                    <p>${review.comment}</p>
                </div>
            `;

            reviewElement.innerHTML = html;
            reviewsContainer.appendChild(reviewElement);
        });
    }

    // Display reviews when the page loads
    displayReviews();
});
