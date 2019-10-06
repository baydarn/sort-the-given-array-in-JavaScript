var dataArr = {  

    "hello": [{
    "id": 114,
    "keyword": "zzzzzz",
    "region": "Sri Lanka",
    "supportGroup": "administrators",
    "category": "Category2"
}, {
    "id": 115,
    "keyword": "aaaaa",
    "region": "Japan",
    "supportGroup": "developers",
    "category": "Category2"
}]

};
var sortArray = dataArr['hello'];
sortArray.sort(function(a,b) {
    if ( a.region < b.region )
        return -1;
    if ( a.region > b.region )
        return 1;
    return 0;
} );

let arrayToSort = {
    "data": {
        "tournaments": [
            {
                "event_count": 1,
                "events": {
                    "19153938": 19153938
                },
                "id": 55970,
                "name": "Philippines - Pvl, Open Conference",
                "order": 5,
                "sport_id": 23
            },
            {
                "event_count": 1,
                "events": {
                    "17686592": 17686592
                },
                "id": 79819,
                "name": "International - Fiba World Cup, Group H",
                "order": 4,
                "sport_id": 2
            },
            {
                "event_count": 2,
                "events": {
                    "19348464": 19348464,
                    "19348466": 19348466
                },
                "id": 85316,
                "name": "Challenger - Jinan, China",
                "order": 3,
                "sport_id": 5
            },
            {
                "event_count": 2,
                "events": {
                    "19348464": 19348464,
                    "19348466": 19348466
                },
                "id": 45786,
                "name": "Challenger - Fiba World Cup, Group J",
                "order": 1,
                "sport_id": 5
            }
        ]
    }
};
///sorting in place -----original arrayin üzeine yazýyorum
arrayToSort.data.tournaments=arrayToSort.data.tournaments.sort((a,b)=>a.order-b.order);
console.log("tournaments array sorted by order:");
printArray(arrayToSort.data.tournaments);

// sorting in place -- orijinal array'in üzerine yazýyorum
arrayToSort.data.tournaments = arrayToSort.data.tournaments.filter(item => item.id <= 60000);
console.log("Tournaments array without the items with id > 60000:");
printArray(arrayToSort.data.tournaments);


function printArray(array) {
    for (i of array) {
        console.log(i);
    }
    let separator = "";
    for (let i = 1; i <= 50; i++) {
        separator += "=";
    }
    console.log(separator);
}
