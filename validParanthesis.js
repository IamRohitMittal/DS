const mapper = new Map([
    [")", "("],
    ["}", "{"],
    ["]", "["]
  ]);

const isValid = (str) => {

    const stack = [];
    
    for (let index = 0; index < str.length; index++) {
        const element = str[index];
        if(['(','{','['].includes(element)){
            stack.push(element)
        }    
        else{
            const topElement = stack[stack.length-1];
            if(topElement === mapper.get(element)){
                stack.pop();
                continue;
            }
            else{
                break;
            }
        }
    }
    if(stack.length==0){
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