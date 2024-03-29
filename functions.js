

const featured_container = document.querySelector('.projects-items')
const full_container = document.querySelector('.full-projects')

project_load(featuredprojects(), featured_container)
project_load(full_projects(), full_container)



function project_load(project_lists, container){

    const project_list = project_lists;

    for (let item in project_list){
        container.appendChild(create_project_items(item, project_list[item][0], project_list[item][1], project_list[item][2], project_list[item][3]))
    }
}
function create_project_items(item, description, img_url, link, id_name){

    const main = document.createElement('a')
    main.classList.add("item")
    main.setAttribute('id', id_name)
    main.style.backgroundImage = `linear-gradient(
        rgba(0, 0, 0, 0.20),
        rgba(0, 0, 0, 0.10)
      ), url(${img_url})`;
    main.href = link
    main.target = "_blank"

    const header = document.createElement('h1')
    header.classList.add("item-header")
    header.textContent = item

    const descri_div = document.createElement('div')
    descri_div.classList.add("descri")

    const label = document.createElement('p')
    label.classList.add("description")
    label.textContent = description

    descri_div.appendChild(label)
    main.appendChild(header)
    main.appendChild(descri_div)

    // Add the hover effect using CSS
    main.style.transition = 'background-image 0.3s ease-in-out';
    main.addEventListener('mouseover', () => {
        main.style.backgroundImage = `linear-gradient(
        rgba(0, 0, 0, 0.50),
        rgba(0, 0, 0, 0.55)
      ), url(${img_url})`;
    });
    main.addEventListener('mouseout', () => {
        main.style.backgroundImage = `linear-gradient(
        rgba(0, 0, 0, 0.20),
        rgba(0, 0, 0, 0.10)
      ), url(${img_url})`;
    });

    return main
}

function full_projects(){
    return {
        "Quizzer": [
            "A PyQt5 application that allows users to view quizlet flashcards in various ways. Features include multiple-choice questions, flashcard view, and PDF download.",
            "https://user-images.githubusercontent.com/42685801/202929334-d86d8009-b015-48e8-a305-b1ab16ecb519.png",
            "https://github.com/oviozz/quizzer",
            "python"
        ],
        "Wordle": [
            "A PyQt5 application that allows users to play a word-guessing game with customizable word lists, multiple difficulty levels, and a score tracker.",
            "https://user-images.githubusercontent.com/42685801/209925276-4ba76557-fadb-4875-96c4-45d56bd8535c.png",
            "https://github.com/oviozz/Wordle_GUI",
            "python"
        ],
        "World Weather": [
            "A website that uses the OpenWeatherMap API to provide users with weather information for locations around the world. Features include live updates and a search function to find weather information for specific locations.",
            "https://user-images.githubusercontent.com/42685801/226163400-8b1577f4-fd66-4d5a-b56e-a6920c740db3.png",
            "https://oviozz.github.io/weather/",
            "website"
        ],
        "Mighty Calculator": [
            "Calculator website features a user-friendly interface with vibrant and easy-to-use buttons for performing basic mathematical operations.",
            "https://user-images.githubusercontent.com/42685801/226168060-bd40a8c0-7cb5-4ad5-b4ef-58c2481b0db4.png",
            "https://github.com/oviozz/Calculator",
            "website"
        ],
        "Rock Paper Scissor": [
            "Rock, paper, scissors game that allows users to play against the computer. Features simple and intuitive gameplay, with responsive and dynamic user interface.",
            "https://user-images.githubusercontent.com/42685801/226210247-0af40655-cdd6-4677-92d2-48d8af23a134.png",
            "https://oviozz.github.io/rps",
            "website"
        ],
        "Amazon Item Price Analyzer": [
            "A Python script that uses the BeautifulSoup, Requests, and Selenium libraries to scrape price data for a given item on Amazon. Features include price comparison and price tracking over time.",
            "https://user-images.githubusercontent.com/42685801/197894270-4e16a9ad-2ef2-4e41-b653-fc913096c68d.png",
            "https://github.com/oviozz/Item_PriceFinder",
            "python"
        ]

    };
}

function featuredprojects(){
    return {
        "The Movie Review": [
            "A PyQt5 application that uses the TMDb API to provide users with a comprehensive movie database. Users can search for movies and view details, ratings, reviews, and trailers from different regions.",
            "https://user-images.githubusercontent.com/42685801/211488705-a78bd36b-aa90-4ef4-9108-d7506f016fec.png",
            "https://github.com/oviozz/movie_review_app",
            "none"
        ],
        "NewsHost App": [
            "A PyQt5 application that uses the NewsAPI to provide users with news articles from various sources and categories. Features include international news search and the ability to explore more articles.",
            "https://user-images.githubusercontent.com/42685801/207573977-a51894bf-8a71-4e1a-9a0a-c296568c2e83.png",
            "https://github.com/oviozz/newsapp_desktop",
            "none"
        ],
        "Restaurant System": [
            "Application for restaurant to manage their business operations. The app provides features like menu management and receipt from the orders.",
            "https://user-images.githubusercontent.com/42685801/199404195-e71b787e-b9a5-41c8-b07f-621287f73d49.png",
            "https://github.com/oviozz/resturant-system",
            "none"
        ]};
}
