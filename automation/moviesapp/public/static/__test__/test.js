const { Builder, Browser, By, Key, until } = require("selenium-webdriver");

// Eight Basic Components of a Selenium Script
// Start the session

// Take action on browser

// Request browser information

// Establish waiting strategy

// Find an element

// Take action on element

// Request element information

// End the session



let driver;

beforeAll(async () => {
  driver = new Builder().forBrowser(Browser.CHROME).build();
});

afterAll(async () => {
  await driver.quit();
});

//create three tests

describe("testing the movies app", () => {
    // test("can add a movie", async() => {
    //     //navigate to app page
    //     await driver.get('http://localhost:3000/')
    //     //find the input field and type in the movie
    //     await driver.findElement(By.css('input[name="movieTitle"]')).sendKeys('Cinderella')
    //     //find the add button and click it
    //     await driver.findElement(By.css('button[type="submit"]')).click()
    //     //wait & save to variable to confirm add button works and displays
    //     const addedMovie = await driver.wait(until.elementLocated(By.css("#movies-list li label")), 1000)
    //     //check expect statement
    //     expect(await addedMovie.getText()).toBe('Cinderella')
    //     //passed
    // })

    const addMovie = async (movieTitle) => {
        await driver
          .findElement(By.css('input[name="movieTitle"]'))
          .sendKeys(movieTitle);
        await driver.findElement(By.css('button[type="submit"]')).click();
      };

    test("can check off a movie", async() => {
        await driver.get('http://localhost:3000/')
        await driver.findElement(By.css('input[id="movie-1"]')).click()
        
        // await addMovie("The Matrix");
        // const addedMovie = await driver.wait(
        //   until.elementLocated(By.css("#movies-list li")),
        //   1000
        // );
        // await addedMovie.findElement(By.css('input[type="checkbox"]')).click();
      });
   
   
    })

.findElement // when you want to interact
wait(until.'sees this'
