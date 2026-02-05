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
    sum =sum+Product[i].Price;
    }
console.log("Sum of ALl Products is ",sum,"/-")
avg=0;
for (let i=0;i<Product.length;i++)
    {
    avg=sum/Product.length;
    }
console.log("Avg of ALl Products is ",avg,"/-")
