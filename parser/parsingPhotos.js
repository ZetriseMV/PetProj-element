const puppeteer = require('puppeteer');

const parserPuppeteer = async () => {
  const browser = await puppeteer.launch({ headless: true });
  const page = await browser.newPage();
  await page.goto('https://5element.by/catalog/377-smartfony', {
    waitUntil: 'domcontentloaded'
  });

  await page.waitForSelector('.c-text');

  const trimmedUrls = await page.evaluate(() => {
    const urls = Array.from(document.querySelectorAll('.c-text')).map(a => a.href);
    return urls.map(url => {
      const parts = url.split('/');
      return parts[parts.length - 1].split('-').slice(1).join('-');
    });
  });

  console.log(trimmedUrls);

  await browser.close();
};

parserPuppeteer();