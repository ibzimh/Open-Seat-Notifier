const EMAIL = null
const PASSWORD = null

const puppeteer = require("puppeteer");

const GetProperty = async (element, property) => {
    return (await element.getProperty(property)).jsonValue();
}

const runSpire = async () => {
    const browser = await puppeteer.launch({
        headless: false,
        defaultViewport: null
    })
    
    const page = await browser.newPage();

    await page.goto("https://www.spire.umass.edu/", {
        waitUntil: "domcontentloaded"
    });

    let links = await page.$$('a');

    for (let link of links) {
        let text = await GetProperty(link, 'innerHTML');
        if (text === "Log in to SPIRE") { link.asElement().click(); break; }

        // form-control ltr_override input ext-input text-box ext-text-box type=email name=loginfmt id=i0116
        // win-button button_primary button ext-button primary ext-primary type=submit id=idSIButton9
    }

    await page.waitForNetworkIdle(); // do we need this?
    
    await enterEmail(page);

    await page.waitForNetworkIdle(); 
    
    await enterPassword(page);
    
    await page.waitForNetworkIdle(); 

    console.log(page.cookies());
};

// TODO: Add functionality for if there's some bug in logging in 
async function enterEmail(page) {
    let elements = await page.$$('input');
    
    for (e of elements) {
        let id = await e.getProperty('id').then(id => id.jsonValue());
        // if it is the type button
        if (id === 'i0116') { 
            await e.type(EMAIL);
        }
        if (id === 'idSIButton9') {
            await e.click();
        }
    }
}

// TODO: Add functionality for if there's some bug in logging in 
async function enterPassword(page) {
    let elements = await page.$$('input');

    await elements[9].type(PASSWORD);
    await page.waitForNetworkIdle(); 
    await elements[10].click();
    
    // for (e of elements) {
    //     let id = await e.getProperty('id').then(id => id.jsonValue());
    //     if (id === 'i0118') { 
    //         await e.type('iBr@him272702m');
    //     }
    //     if (id === 'idSIButton9') {
    //         await e.click();
    //     }
    // }
}

runSpire();