const puppeteer = require('puppeteer');

const testScrap = async (url) => {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto(url);

    const [el] = await page.$x('/html/body/div[1]/div[2]/div/img');
    const srcObject = await el.getProperty('src');
    const src = await srcObject.jsonValue();

    const [el1] = await page.$x('//*[@id="SIvCob"]');
    const textObject = await el1.getProperty('textContent');
    const text = await textObject.jsonValue();

    console.log(text);
    console.log(src);
  
    await browser.close();
}

testScrap('https://www.google.com/')