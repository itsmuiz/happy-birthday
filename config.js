var config = {
    // The length of sentences can be arbitrary. You can write ten sentences or twenty.
    // Try not to exceed 15 characters per sentence, as the display effect might not be good.
    texts: [
        "For my dear", // Here, the last comma at the end of each sentence must be an English comma!! Very important!!
        "special someone",  // Same as above...
        "Today is your day",
        "We met long ago",
        "And it's already your birthday",
        "Let's make this day special",
        "With lots of love and joy",
        "May all your wishes come true",
        "Enjoy every moment",
        "And have a wonderful day",
        "Happy Birthday to you!",
    ],
    /**
     * imgs can be left empty, but if you want to fill it, it must follow the format below:
     * "Exactly the same as the above text" : "Image address, you can put the images in the imgs folder"
     * For example:
     * "special someone": "./imgs/someone.jpg"
     *
     * If you don't want an image, just comment out the line with double slashes at the beginning, 
     * as in the example below, the image for "Today is your day" will not be displayed :)
     * Tip: It’s better to use square or near-square images for better visual effects.
     */
    imgs: {
        "special someone": "./imgs/someone.jpg",
        // "Today is your day": "./imgs/birthday.jpg",
    },
    // Button text descriptions, the following are the default button texts in English. You can change them to your preferred text.
    desc: {
        turn_on: "Start",
        play: "Music",
        bannar_coming: "Decorations",
        balloons_flying: "Something is missing",
        cake_fadein: "Cake?",
        light_candle: "Candles?",
        wish_message: "Happy Birthday",
        story: "A MESSAGE FOR YOU",
    }
};
