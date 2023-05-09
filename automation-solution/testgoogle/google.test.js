const { Builder, Browser, By, Key, until } = require("selenium-webdriver");

let driver;

beforeAll(async () => {
  driver = new Builder().forBrowser(Browser.CHROME).build();
});

afterAll(async () => {
  driver.quit();
});

test("can search google", async () => {
  // Navigate to google.com
  await driver.get("https://www.google.com/");

  // Search for "automation" and wait for results page to load
  await driver.findElement(By.name("q")).sendKeys("automation", Key.RETURN);
  await driver.wait(until.titleIs("automation - Google Search"), 1000);
});

test("can search Google twice", async () => {
  // Navigate to google.com
  await driver.get("https://www.google.com/");

  // Search for "test" and wait for results page to load
  await driver.findElement(By.name("q")).sendKeys("test", Key.RETURN);
  await driver.wait(until.titleIs("test - Google Search"), 1000);

  // Clear the box and search for another term
  await driver
    .findElement(By.name("q"))
    .clear()
    .sendKeys("quality assurance", Key.RETURN);
  await driver.wait(until.titleIs("quality assurance - Google Search"), 1000);
});
