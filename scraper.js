import puppeteer from "puppeteer";
import { readFromJSONFile, writeToJSONFile } from './fileUtility.js';

const EMAIL = youremail
const PASSWORD = yourpassword

const GetProperty = async (element, property) => {
    return (await element.getProperty(property)).jsonValue();
}

const runSpire = async () => {
    const browser = await puppeteer.launch({
        headless: false,
        defaultViewport: null
    })

    const page = await browser.newPage();

    try { await logIntoSpire(page); } catch { console.log("problem with logging into spire"); }
    try { await page.waitForNetworkIdle(); } catch { console.log("waiting for network not possible 1"); }

    try { await enterEmail(page); } catch { console.log("email entering not possible"); }
    try { await page.waitForNetworkIdle(); } catch { console.log("waiting for network not possible 2"); }

    try { await enterPassword(page); } catch { console.log("password entering not possible"); }
    try { await page.waitForNetworkIdle(); } catch { console.log("waiting for network not possible 3"); }

    try { await staySignedIn(page); } catch { console.log("staying signed in not possible"); }
    try { await page.waitForNetworkIdle(); } catch { console.log("waiting for network not possible 4"); }
    
    console.log("i'm waiting here!");
    
    try { await goToManageClasses(page); } catch { console.log("problem in opening manage classes"); }
    try { await page.waitForNetworkIdle(); } catch { console.log("waiting for network not possible 5"); }
    
};

async function goToManageClasses(page) {
    await page.goto("https://www.spire.umass.edu/psc/heproda_8/EMPLOYEE/SA/c/SSR_STUDENT_FL.SSR_MD_SP_FL.GBL?Action=U&MD=Y&GMenu=SSR_STUDENT_FL&GComp=SSR_START_PAGE_FL&GPage=SSR_START_PAGE_FL&scname=CS_SSR_MANAGE_CLASSES_NAV&AJAXTransfer=y", {
        waitUntil: "domcontentloaded"
    });
}

// opens the umass.edu spire log in page and presses log in
async function logIntoSpire(page) {
    await page.goto("https://www.spire.umass.edu/", {
        waitUntil: "domcontentloaded"
    });

    let links = await page.$$('a');

    for (let link of links) {
        let text = await GetProperty(link, 'innerHTML');
        if (text === "Log in to SPIRE") { link.asElement().click(); break; }
    }
}

// checks if the page is the 'enter email' page
// isEmailPage(elements: HTMLElement): boolean
async function isEmailPage(page) {
    let input = await page.$("#i0116");
    return await input.getProperty('type').then(type => type.jsonValue()).then(type => type === 'email');
}

// enters email address for authentication
// async enterEmail(page: Page): void
async function enterEmail(page) {
    // try until the email page opens
    while(!isEmailPage(page)) {
        console.log("trying again mate");
        try { await page.waitForNetworkIdle(); } catch { console.log("waiting for network not possible 7"); }
    }

    await setCookies(page);

    let inputElement = await page.$("#i0116");
    console.log(inputElement);
    let nextPageButton = await page.$("#idSIButton9");

    console.log("verified");
    await inputElement.type(EMAIL);
    console.log("typing in the email");
    await nextPageButton.click();
}

// enters password for authentication
// async enterPassword(page: Page): void
async function enterPassword(page) {
    let inputElement = await page.$("#i0118");
    let nextPageButton = await page.$("#idSIButton9");

    await inputElement.type(PASSWORD);
    await page.waitForNetworkIdle();
    await nextPageButton.click();
}

// deals with the 'do you want to stay signed?' in page
// async staySignedIn(page: Page): void
async function staySignedIn(page) {
    let checkBox = await page.$("#KmsiCheckboxField");
    let nextPageButton = await page.$("#idSIButton9");
    
    await checkBox.click();
    await nextPageButton.click();
}

// sets browser cookies to avoid 2FA
// async setCookies(page: Page): void
async function setCookies(page) {
    let cookies = await readFromJSONFile("cookies.json");
    for (let cookie of cookies) {
        await page.setCookie(cookie);
    }
}

async function writeCookies(page) {
    await page.waitForNavigation({ waitUntil: "domcontentloaded" });
    console.log("i'm here 1");
    await page.waitForNavigation({ waitUntil: "domcontentloaded" });
    console.log("i'm here 2");
    await page.waitForNavigation({ waitUntil: "domcontentloaded" });
    console.log("i'm here 3");
    await page.waitForNavigation({ waitUntil: "domcontentloaded" });
    console.log("i'm here 4");
    writeToJSONFile("cookies.json", await page.cookies("https://login.microsoftonline.com"));
    console.log("i'm here 5 and wrote some cookies");
}

runSpire();