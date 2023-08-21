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

    try {
        await page.goto("https://www.spire.umass.edu/psc/heproda_8/EMPLOYEE/SA/c/SSR_STUDENT_FL.SSR_MD_SP_FL.GBL?Action=U&MD=Y&GMenu=SSR_STUDENT_FL&GComp=SSR_START_PAGE_FL&GPage=SSR_START_PAGE_FL&scname=CS_SSR_MANAGE_CLASSES_NAV&AJAXTransfer=y", {
            waitUntil: "domcontentloaded"
        });
    } catch {
        console.log("problem in opening manage classes")
    }
};

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

// enters email address for authentication
async function enterEmail(page) {
    let elements = await page.$$('input');

    await setCookies(page);

    for (let e of elements) {
        let id = await e.getProperty('id').then(id => id.jsonValue());

        // if it is the type button
        if (id === 'i0116') {
            await e.type(EMAIL);
        }

        // go to the next page button
        if (id === 'idSIButton9') {
            await e.click();
        }
    }
}

// enters password for authentication
async function enterPassword(page) {
    let elements = await page.$$('input');

    await elements[9].type(PASSWORD);
    await page.waitForNetworkIdle();
    await elements[10].click(); // go to the next page
}

// deals with the 'do you want to stay signed?' in page
async function staySignedIn(page) {
    let elements = await page.$$('input');
    await elements[5].click();
    await elements[7].click();
}

// sets browser cookies to avoid 2FA
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