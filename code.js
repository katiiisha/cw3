// У нас есть 200$ и нужно спросить у пользователя стоимость товара. Если сумма меньше 200 то в функции будет надпись "Оплата прошла успешно"


function cheakCoins(coins) {
    // if (coins <= 200) {
    //     return true
    // } else { 
    //     return false
    // }
    return(coins<=200) ? true : "оплата прошла"
}
let coins = prompt()
if (cheakCoins (coins)) {
    console.log("оплата прошла успешно")
} else { 
     console.log("недостаточно средст")
}

