import { chromium } from "playwright";

const LOGIN_URL = "http://139.59.104.214:10000/login";
const USERNAME = "123456";
const PASSWORD = "tktBRI123!";
const FILE_PATH = "/Users/bitmind/Documents/financial-highlight-pa/";

const FINANCIAL_HIGHLIGHTS_PA =
  "http://139.59.104.214:10000/admin/performance/financial-highlight-pa";

async function main() {
  const browser = await chromium.launch({ headless: false });
  const page = await browser.newPage();

  await page.goto(LOGIN_URL);

  // Isi input username
  await page.fill('input[name="pn"]', USERNAME);
  await page.waitForTimeout(1000); // delay 1 detik

  // Isi input password
  await page.fill('input[name="password"]', PASSWORD);
  await page.waitForTimeout(1000); // delay 1 detik

  // Klik tombol login
  await page.click('button[type="submit"]');
  await page.waitForNavigation();
  await page.waitForTimeout(1000); // delay 1 detik
  console.log("✅ Login berhasil!");
  //   await page.screenshot({ path: "logged-in.png" });

  await page.goto(FINANCIAL_HIGHLIGHTS_PA);
  console.log("✅ Navigasi ke Financial Highlights PA berhasil!");

  await page.click("button.bg-blue-500");
  await page.waitForTimeout(1000); // delay 1 detik
  console.log("✅ Klik tombol Upload berhasil!");

  //   await page.click('div[id^="react-select-10-option"]:has-text("2024")');
  //   await page.waitForTimeout(1000); // delay 1 detik
  //   console.log("✅ Klik select 2024 berhasil!");

  //   await page.click('input[name="file"]');
  await page.setInputFiles(
    'input[name="file"]',
    FILE_PATH + "template-financial-highlight-pa.xlsx"
  );
  await page.waitForTimeout(3000); // delay 1 detik

  await page.setInputFiles(
    'input[name="additionalFile"]',
    FILE_PATH + "template-financial-highlight-pa-rasio.xlsx"
  );
  await page.waitForTimeout(3000); // delay 1 detik

  await page.click('button[type="submit"]');
  await page.waitForTimeout(1000); // delay 1 detik

  //   await page.click("button.bg-primary");
  await page.click('button[type="button"]:has-text("Continue")');
  await page.waitForTimeout(5000); // delay 1 detik
  console.log("✅ Upload berhasil!");

  await page.click('button[type="button"]:has-text("Confirm")');
  await page.waitForTimeout(1000); // delay 1 detik
  //   await browser.close();
}

main();
