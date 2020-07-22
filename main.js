function printReceipt(barcodes) {
    let itemInfos = getUnitPriceAndName(barcodes);
    let itemList = integrateSameItems(itemInfos);
    let receiptItems = calculateSubtotalPrice(itemList);
    let totalPrice = calculateTotalPrice(receiptItems);
    console.log(generateReceipt(receiptItems, totalPrice));
}
function getUnitPriceAndName(barcodes) {
    let itemInfos = [];
    let itemDetailInfos = getItemDetailInfos();
    for (let indexOfBarcodes = 0; indexOfBarcodes < barcodes.length; indexOfBarcodes++) {
        for (let indexOfItemDetailInfos = 0; indexOfItemDetailInfos < itemDetailInfos.length; indexOfItemDetailInfos++) {
            if (barcodes[indexOfBarcodes] === itemDetailInfos[indexOfItemDetailInfos].barcode) {
                itemInfos.push({
                    barcode: barcodes[indexOfBarcodes], 
                    name: itemDetailInfos[indexOfItemDetailInfos].name,
                    unitPrice: itemDetailInfos[indexOfItemDetailInfos].price
                });
                break;
            }
        }
    }
    return itemInfos;
}
function integrateSameItems(itemInfos) {
    let itemList = [];
    for (let indexOfItemInfos = 0; indexOfItemInfos < itemInfos.length; indexOfItemInfos++) {
        let hasSameItem = false;
        for (let indexOfItemList = 0; indexOfItemList < itemList.length; indexOfItemList++) {
            if (itemList[indexOfItemList].barcode === itemInfos[indexOfItemInfos].barcode) {
                itemList[indexOfItemList].quantity++;
                hasSameItem = true;
                break;
            }
        }
        if (!hasSameItem) {
            itemInfos[indexOfItemInfos].quantity = 1;
            itemList.push(itemInfos[indexOfItemInfos]);
        }
    }
    return itemList;
}
function calculateSubtotalPrice(itemList) {
    let receiptItems = itemList;
    for (let indexOfReceiptItems = 0; indexOfReceiptItems < receiptItems.length; indexOfReceiptItems++) {
        receiptItems[indexOfReceiptItems].subtotalPrice = receiptItems[indexOfReceiptItems].quantity * receiptItems[indexOfReceiptItems].unitPrice;
    }
    return receiptItems;
}
function calculateTotalPrice(receiptItems) {
    let totalPrice = 0;
    for (let indexOfReceiptItems = 0; indexOfReceiptItems < receiptItems.length; indexOfReceiptItems++) {
        totalPrice += receiptItems[indexOfReceiptItems].subtotalPrice;
    }
    return totalPrice;
}
function generateReceipt(receiptItems, totalPrice) {
    let receipt = '';
    receipt += '\n***<store earning no money>Receipt ***\n';
    for (let indexOfReceiptItems = 0; indexOfReceiptItems < receiptItems.length; indexOfReceiptItems++) {
        receipt += `Name: ${receiptItems[indexOfReceiptItems].name}, Quantity: ${receiptItems[indexOfReceiptItems].quantity}, ` + 
        `Unit price: ${receiptItems[indexOfReceiptItems].unitPrice} (yuan), Subtotal: ${receiptItems[indexOfReceiptItems].subtotalPrice} (yuan)\n`;
    }
    receipt += `----------------------\nTotal: ${totalPrice} (yuan)\n**********************`;
    return receipt;
}
function getItemDetailInfos() {
    return [
        {
           barcode: 'ITEM000000',
           name: 'Coca-Cola',
           price: 3
         },
         {
           barcode: 'ITEM000001',
           name: 'Sprite',
           price: 3
         },
         {
           barcode: 'ITEM000002',
           name: 'Apple',
           price: 5
         },
         {
           barcode: 'ITEM000003',
           name: 'Litchi',
           price: 15
         },
         {
           barcode: 'ITEM000004',
           name: 'Battery',
           price: 2
         },
         {
           barcode: 'ITEM000005',
           name: 'Instant Noodles',
           price: 4
         }
     ];
}

module.exports = {
    printReceipt
};