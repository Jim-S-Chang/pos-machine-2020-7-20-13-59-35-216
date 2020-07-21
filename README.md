# Requirement
A cash register (POS) system is used in the store for settlement of the store. This cashier will settle and print the receipt (Receipt) according to the item(Item) in the customer's shopping cart (Cart) at the time of settlement.

We need to implement a function called printReceipt, which can input the data of the specified format as a parameter and then output the text of the receipt in the browser console.

This time, the input will be an array of barcodes (string). For example:
```javascript
[
  'ITEM000000',
  'ITEM000000',
  'ITEM000000',
  'ITEM000000',
  'ITEM000000',
  'ITEM000001',
  'ITEM000001',
  'ITEM000004'
]
```

Then the output should be 
```
***<store earning no money>Receipt ***
Name: Coca-Cola, Quantity: 5, Unit price: 3 (yuan), Subtotal: 15 (yuan)
Name: Sprite, Quantity: 2, Unit price: 3 (yuan), Subtotal: 6 (yuan)
Name: Battery, Quantity: 1, Unit price: 2 (yuan), Subtotal: 2 (yuan)
----------------------
Total: 23 (yuan)
**********************
```

Suppose that our database is as follows:
```javascript
[
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
]
```

# Principal

1. Please draw context diagram.
2. Please declare all the methods according to your diagram.
3. Please implement the function according to the context diagram
4. Please repeat step 3 until all functions are implemented.


# Tasking
- 1. 获取每一项barcode对应的商品名字与单价
    - Input: `barcodes:string[]`
    - Output: `itemInfos:[{barcode:string, name:string, unitPrice:int}]`
- 2. 集合相同的商品，得到每一种商品的购买数量
    - Input: `itemInfos:[{barcode:string, name:string, unitPrice:int}]`
    - Output: `itemList:[{barcode:string, name:string, unitPrice:int, quantity:int}]`
- 3. 计算每一种商品的总价
    - Input: `itemList:[{barcode:string, name:string, unitPrice:int, quantity:int}]`
    - Output: `receiptItems:[{barcode:string, name:string, unitPrice:int, quantity:int, subtotalPrice:int}]`
- 4. 计算所有商品的总价
    - Input: `receiptItems:[{barcode:string, name:string, unitPrice:int, quantity:int, subtotalPrice:int}]`
    - Output: `totalPrice:int`
- 5. 生成收据
    - Input: `receiptItems:[{barcode:string, name:string, unitPrice:int, quantity:int, subtotalPrice:int}]`、`totalPrice:int`
    - Output: `receipt:string`

# PDCA
### Task 1:编写Tasking
###### P:10min
###### D:7min
###### C:主要时间花费在如何表达清楚每一项task
###### A:口头表达能力需要锻炼，可以多与其他人讨论

### Task 2:画context map
###### P:15min
###### D:12min
###### C:在模块命名上浪费的时间比较多
###### A:以后在编码前要多仔细想一想变量和函数该如何命名

### Task 3:编码
###### P:25min
###### D:30min(18:30-18:58)
###### C:for循环中的i以往我的编码习惯一般是直接使用默认，这次遵循老师的建议使用有意义的命名，导致命名有点过长，编码中理清变量需要的时间比我预计的要长，比预算中多耗费了一点时间
###### A:要尽快熟悉养成这种编码习惯，减少因此带来的编码时间的增加

### Task 4:Debug
###### P:15min
###### D:5min(19:01-19:05)
###### C:编写的逻辑没有出现任何问题，只是忽略了一些地方的输出格式，在更改输出格式上耗费了约5分钟的时间，总共进行了3次测试，第3次就passed
###### A:以后要养成习惯，编码前先做tasking，再做context map，这样编码时逻辑会比较顺畅，bug也会减少。