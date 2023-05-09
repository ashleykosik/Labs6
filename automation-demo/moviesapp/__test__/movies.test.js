const {Builder, Browser, By, until, Key} = require('selenium-webdriver')

let driver;

beforeEach(async () => {
    driver = await new Builder().forBrowser(Browser.CHROME).build()
})

afterEach(async () => {
    await driver.quit()
})

describe("testing movies app", () => {
    test("can add movie", async () => {
        await driver.get('http://localhost:3000')
        await driver.findElement(By.css('input[name="movieTitle"]')).sendKeys('Encanto')
        await driver.findElement(By.css('button[type="submit')).click()
        const addedMovie = await driver.wait(until.elementLocated(By.css("#movies-list li label")))
        expect(await addedMovie.getText()).toBe('Encanto')
    })
})