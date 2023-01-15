
////////////////////////////////////////

var tags = ['li', 'span', 'div', 'span', 'h3', 'a', 'div', 'span', 'a', 'li', 'div', 'div']


var tag = {};
for (var i = 0; i < tags.length; i++) {
    var a = tags[i];
    if (tag[a]) tag[a] += 1;
    else tag[a] = 1;
}
console.log(tag);



var tagMas = Object.values(tag);
var newTag = Object.keys(tag);
for (let i = 0; i < tagMas.length; i++) {
    newTag[i] = newTag[i] + ": " + tagMas[i];
}
var tagObj = { ...newTag };


console.log(tagObj);


////////////////////////////////////////////////////////

// var tag = []
// for (var tag of tags){
//     if (tags2.includes(tag)) continue
//     tags2.push(tag)
// }
// console.log(tags)
// console.log(tags2)


/////////////////////////////////////////////////////

// var distinct = new Set(tags)
// console.log(distinct)

///////////////////////////////////////////////////


// for (var i = 0 ; i < tags.length; i++ ){
//     tag += tags[i];
//     console.log(tag)
///////////////////////////////////////////////////


// var res =tags.filter(tag => tag.includes('li'))
// var res =tags.filter(tag => tag.includes('span'))
// var res =tags.filter(tag => tag.includes('div'))
// var res =tags.filter(tag => tag.includes('h3'))
// var res =tags.filter(tag => tag.includes('a'))
// console.log(res)



/////////////////////////////////////////////////////////


var numbs = [11, 2, 47, 23, 43, 9, 5, 41, 7, 5, 9, 34, 53, 60]


function numbMax(numbs){
    var max = numbs[0]
    for (var num of numbs){
        if(max < num){
            max = num;
        }
    }
    return max
}
console.log(numbMax(numbs))
