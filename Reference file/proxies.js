var employee = {
    fname:"Arjun",
    lname: "SN"
}

var handler = {
    get(target, prop, reciever){
        return "some string"
    }
}

var proxy = new Proxy(employee, handler)

console.log(proxy.fname)
console.log(proxy.lname)


Todo: {
    id,
    name,
    description
}
