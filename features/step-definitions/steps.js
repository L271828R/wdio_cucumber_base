const { Given, When, Then } = require('@cucumber/cucumber');
const assert = require('assert');
const SelectBookPage = require('../pageobjects/selectBook.page');

const pages = {
    'SelectBook': SelectBookPage
}

Given('I want to search the book {string}', async (book) => {
    await pages['SelectBook'].search(book);
    await browser.pause(3000);
});

When('I go to the first option', async () => {
    await pages['SelectBook'].select(1);
});

Then('I should see the {string} element', async (message) => {
    assert.equal(
        await pages['SelectBook'].addToCartButtonVisible(),
        true);
});

