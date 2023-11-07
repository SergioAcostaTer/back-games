const express = require('express');
const puppeteer = require('puppeteer');
const app = express();

const port = process.env.PORT || 3000;

app.get("/", async (req, res) => {
  // Launch a headless browser
  const browser = await puppeteer.launch();
  const page = await browser.newPage();

  const url = "https://www.twitch.tv/directory";
  await page.goto(url);

  const title = await page.title();

  await browser.close();

  res.send(`Scraped Title: ${title}`);
});

app.listen(port, () => {
  console.log(`Server is running on ${port}`);
});
