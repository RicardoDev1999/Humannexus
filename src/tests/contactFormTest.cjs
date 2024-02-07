const puppeteer = require("puppeteer");
const { PuppeteerScreenRecorder } = require("puppeteer-screen-recorder");

async function testContactForm() {
  const browser = await puppeteer.launch();

  const page = await browser.newPage();

  await page.setViewport({ width: 1920, height: 1080, deviceScaleFactor: 2 });
  await page.goto("https://humannexus.pt/contacts");

  // Start recording.
  const recorder = new PuppeteerScreenRecorder(page);
  await recorder.start("video.mp4");

  await page.type('input[name="name"]', "Test Name");
  await page.type('input[name="email"]', "test@example.com");
  await page.type('input[name="phonenumber"]', "961732547");
  await page.type('textarea[name="message"]', "Isto é um teste");
  await page.click("#terms-and-policy-plus-privacy-policy");

  await page.evaluate(() => {
    document.querySelector('button[type="submit"').scrollIntoView();
  });

  await new Promise((r) => setTimeout(r, 2000));

  await Promise.all([
    page.click('button[type="submit"]'), // Click the submit button
    page.waitForNavigation(), // Wait for the page to finish loading
  ]);

  await new Promise((r) => setTimeout(r, 2000));

  await recorder.stop();
  await browser.close();
}

testContactForm();
