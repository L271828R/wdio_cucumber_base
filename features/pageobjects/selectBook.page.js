const Page = require('./page');

class SelectBookPage extends Page {


    search (book) {
        return super.open(book);
    }

    select(child) {
        var el = $(`#gridView > div > div:nth-child(${child}) > div.product-image-container.plp-quick-add-cont`);
        el.click();
    }

    addToCartButtonVisible(){
        var el = $("[value='ADD TO CART']");
        return el.isDisplayed();
    }

}

module.exports = new SelectBookPage();

