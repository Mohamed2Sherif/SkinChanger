console.log('Happy developing ✨')
async function populateCards() {


    // @ts-ignore
    const data =  await window.champions.get_champions();// Get array from function
    const container = document.getElementById('cards-container'); // Target container

    data.forEach(item => {
        // Create a card element
        console.log(item);
        const card = document.createElement('div');
        card.classList.add('card');

        // Add title to the card
        const title = document.createElement('h2');
        title.classList.add('card-title');
        title.textContent = 'Champion Role';

        // Add content to the card
        const content = document.createElement('p');
        content.classList.add('card-content');
        content.textContent = `Role : ${item.roles[0].role.role_name}`;

        // Append title and content to the card
        card.appendChild(title);
        card.appendChild(content);

        // Append the card to the container
        // @ts-ignore
        container.appendChild(card);
    });
}

// Call the function to populate cards
(async ()=>{
    await populateCards();
})();
