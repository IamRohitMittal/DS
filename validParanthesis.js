/*const mapper = [
    {")":"("},
    {"}":"{"},
    {"]":"["}
]*/
const mapper = new Map([
    [")", "("],
    ["}", "{"],
    ["]", "["]
  ]);

const isValid = (str) => {

    const arr = [];
    
    for (let index = 0; index < str.length; index++) {
        const element = str[index];
        if(['(','{','['].includes(element)){
            arr.push(element)
        }    
        else{
            const topElement = arr[arr.length-1];
            if(topElement === mapper.get(element)){
                arr.pop();
                continue;
            }
            else{
                break;
            }
        }
    }
    if(arr.length==0){
        return true;
    }
    return false;
}


console.log(isValid("[]"));
console.log(isValid("[{}()]"));
console.log(isValid("()"));
console.log(isValid("(){}[]"));
console.log(isValid("(]"));
console.log(isValid("([)]"));
console.log(isValid("{[]}"));