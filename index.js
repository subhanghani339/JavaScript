
for(var i=0 ; i < 5 ; i += 2)
{
    for(var j=0 ; j <= i ; j++)
    {
        console.log("*");
    }
    console.log("break");
    
    if(j === 5)
    {
        for(var k=3 ; k > 0 ; k -= 2)
        {
            for(var l=0 ; l < k ; l++)
            {
                console.log("*");
            }
            console.log("br")
        }   
    }
}