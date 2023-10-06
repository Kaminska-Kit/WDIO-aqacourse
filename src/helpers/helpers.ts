import { sideMenuElements } from "../data/elements.selectors.js";


async function assertBgColor(name: string) {
    const tabs = await $$(sideMenuElements);
    let nameOfTab;
     for (const tab of tabs) {
            if (await tab.getText() === name){
                nameOfTab = name;
                await tab.click();
                await browser.pause(2000);
                const classOfElement = await tab.getAttribute('class');
                if (!classOfElement.includes('bg-danger')) {
                    return true;
                } else return false;
            }
        }
}
export {assertBgColor}
