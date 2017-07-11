var infoArr=[
    {
        barcode:'ITEM000000',
        name:'cola',
        unit:'bottle',
        price:3.00,
        count:5,
    },
    {
        barcode:'ITEM000001',
        name:'xuebi',
        unit:'bottle',
        price:3.00,
        count:2,
    },
    {
        barcode:'ITEM000004',
        name:'dianchi',
        unit:'ge',
        price:2.00,
        count:1,
    }
];

function print(infoArr) {
    let str = `***nomoneyshopindex***
`;
    var sum=0;
    for (let item of infoArr) {
        sum += item.price * item.count;
        str += `name:${item.name},count:${item.count}${item.unit},price:${item.price}(yuan),xiaoji:${item.price*item.count}(yuan)
`;
    }
    str += `----------------
sum:${sum}(yuan)
****************`;
    console.log(str)
}

print(infoArr);