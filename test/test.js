const { Builder, By, Key } = require('selenium-webdriver');
const assert = require('assert');

describe("My test suite", () => {
  let driver;

  before( async () => {
    driver = await new Builder().forBrowser("chrome").build();
  });

  it("Should visit the BBC News website", async () => {
    await driver.get("https://www.bbc.co.uk/news");
    const title = driver.getTitle();
    title.then((res) => {
        assert.strictEqual(res, "Home - BBC News");
    });
  });

  after(() => {
    driver.quit();
  });
});
