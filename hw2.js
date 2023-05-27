let products = [
    {
    id: 'A1',
    name: 'Футболка',
    description: 'Футболка',
    sizes: [48,49,50,51,52,53,54,55],
    price: 100,
    available:'true',
    },
    {
    id: 'A2',
    name: 'Кепка',
    description: 'Кепка',
    sizes: [48,49,50,51,52,53,54,55],
    price: 50,
    available:'true',
    },
    {
    id: 'A3',
    name: 'Штаны',
    description: 'Штаны',
    sizes: [48,49,50,51,52,53,54,55],
    price: 40,
    available:'true',
    },
    {
    id: 'A4',
    name: 'Ботинки',
    description: 'Ботинки',
    sizes: [48,49,50,51,52,53,54,55],
    price: 100,
    available:'true',
    },
    {
    id: 'A5',
    name: 'Куртка',
    description: 'Куртка',
    sizes: [48,49,50,51,52,53,54,55],
    price: 300,
    available:'true',
    },
]

let basket = [
    {
    goodid: products[0],
    amount: 2,
    },
    {
    goodid: products[3],
    amount: 4,
    }
]

function addProductToBusket(id, num)
// добавления товара в корзину
{
    basket.push(
        {
        goodid: products[id],
        amount: num,
        }
    )
}

function deleteFromBusket(id)
// удаления одного товара из нее
    {for (let i = 0; i != basket.length; i++){
        if (basket[i].goodid.id == id) 
            {
            basket[i].amount = basket[i].amount - 1
            }
        if (basket[i].amount == 0)
            {
            basket[i] = {}
            }    
        }

        }
function clearBusket()
// полной очистки корзины
{
    basket.length = 0
}

function total() {
// вычисления общего количества и стоимости товаров в корзине
    let total = {totalAmount: 0, totalSumm: 0}
        for (let i = 0; i != basket.length; i++){
        total.totalAmount += basket[i].amount
        total.totalSumm += basket[i].goodid.price
}
    return total
}


// clearBusket()
// addProductToBusket(1, 2)
// deleteFromBusket('A1')
console.log(total())
// console.log(basket)
