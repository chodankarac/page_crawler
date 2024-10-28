import puppeteer from "puppeteer";
import fs from "fs";

export async function POST(req) {
  const { siteUrl } = await req.json();

  // Launch the browser and open a new blank page
  const browser = await puppeteer.launch();
  const page = await browser.newPage();

  // Navigate the page to a URL
  await page.goto(siteUrl);

  //fetch data from the given url's webpage
  const data = await page.evaluate(() => {
    return document.body.innerText;
  });

  fs.writeFile("/home/lenovo/Desktop/crawledData.doc", data, (err) => {
    if (err) {
      console.error("Error writing to file", err);
    } else {
      console.log("File written successfully");
    }
  });
  //close the browser
  await browser.close();
  if (!siteUrl) {
    return Response.json({ error: "No Url Provided" });
  }

  return Response.json({ siteUrl });
}
