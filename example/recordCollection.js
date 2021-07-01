var collection = {
    "2546":{
        "album":"Slippery When Wet",
        "artist":"Bon Jovi",
        "tracks":[
            "Let it Rock",
            "You Give Love a Bad Name"
        ]
    },


    "2468":{
        "album":"1999",
        "artist":"Prince",
        "tracks":[
            "1999",
            "Little red Corvette"
        ]
    },


    "1245":{
        "album":"",
        "artist":" Robert Palmer",
        "tracks":[
        ]
    },

    "5493":{
        "album":"ABBA Gold"
    },

};

// 复制集合，不改变原集合
var collectionCopy = JSON.parse(JSON.stringify(collection));

function updateRecords(id, prop, value)
{
    // 如果属性中的值为空，则删除该集合的属性
    if(value === ""){
        delete collection[id][prop];

    }else if (prop === "tracks"){
        //如果属性为 tracks, tracks 属性中不为空的话，不变，为空，就创建空数组
         collection[id][prop] =collection[id][prop] ||[];
        // 将 参数 value push 到 tracks 中的数组中去
         collection[id][prop].push(value);
    }else{
        // 如果是其他属性的话，直接增加
         collection[id][prop]=value;
    }
    return collection;
}

console.log(collection)
console.log("======================= update tracks ==========================")
console.log(updateRecords(5493, "tracks", "added a tracks in the  Array"));

console.log("\n")
console.log("========================= add prop =============================")
console.log(updateRecords(5493, "ddsdd", "ABBcdsdsA"));


