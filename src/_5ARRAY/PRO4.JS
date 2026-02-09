let Product =
[
{ID:1,Name:"Mojito",Price:100},
{ID:1,Name:"Burger",Price:200},
{ID:1,Name:"Pizza",Price:300},
{ID:1,Name:"Fries",Price:400},
]
sum =0;
for (let i=0;i<Product.length;i++)
    {
    if (Product[i].Name === "Mojito" || Product[i].Name === "Pizza")
    {sum =sum+Product[i].Price;}

    }
console.log("Sum of Mojito & Pizza Products is ",sum,"/-")
avg=0;
sum1=0;
for (let i=0;i<Product.length;i++)
    {
    sum1 =sum1+Product[i].Price;
    avg=sum1/Product.length;
    }
console.log("Avg of ALl Products is ",avg,"/-")
