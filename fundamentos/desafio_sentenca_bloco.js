// fazendo sem sentindo com bloco

{
    console.log(1)
    console.log(3)
    console.log(5)
    console.log(7)
    console.log(9)
    console.log("------")
}

{
    console.log(2)
    console.log(4)
    console.log(6)
    console.log(8)
    console.log(10)
    console.log("------")
}

// resolvendo com for

let number = 10

for(let i=1; i <= number; i++) {
    if ( i % 2 === 0) {
        console.log(i + " par")
    } else {
        console.log(i + " impar")
    }
}