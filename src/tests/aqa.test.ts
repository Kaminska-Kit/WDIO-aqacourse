import { baseURL, email, password } from '../data/credentials.js';
import {loginButton, spinner} from '../data/elements.selectors.js'
import { assertBgColor } from '../helpers/helpers.js';



describe("AQAcourse tests", () => {

    before(async () => {
        await browser.maximizeWindow();
      });
    
    beforeEach(async () => {
        await browser.url(baseURL);
      });;

    context("Task 4 WDIO-2", () => {

        it("Should login with valid data", async () => {
            
            await $(loginButton).waitForDisplayed({timeout: 5000, timeoutMsg: 'Login page is not opened after 5 seconds'});
            await $('#emailinput').setValue(email);
            await $('#passwordinput').setValue(password);
            await $(loginButton).click();

            await $(spinner).waitForDisplayed({timeout: 5000, timeoutMsg: 'Loading spinner is still displayed after 5 seconds', reverse: true});
            await $('div#myCarousel').waitForDisplayed({timeout: 5000, timeoutMsg: 'Home page is not opened after 5 seconds'});

            const nameOfUser = await $('div.dropdown').getText();
            expect(nameOfUser).toBe("AQA User");

        });

        it("Should check the color of 'Home' tab", async () => {
           
            if (!await assertBgColor('Home')) {
                throw Error(`'Home' tab has red color after clicking on it` );
            }  
        });

        it("Should check the color of 'Orders' tab", async () => {
           
            if (!await assertBgColor('Orders')) {
                throw Error(`'Orders' tab has red color after clicking on it` );
            }  
        });

        it("Should check the color of 'Products' tab", async () => {
           
            if (!await assertBgColor('Products')) {
                throw Error(`X tab has red color after clicking on it` );
            }  
        });

        it("Should check the color of 'Customers' tab", async () => {
           
            if (!await assertBgColor('Customers')) {
                throw Error(`'Customers' tab has red color after clicking on it` );
            }  
        });       
    });
});


