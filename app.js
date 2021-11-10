/*To reverse define a function reverse() that computes the reversal of a string. For example,
reverse(""jag testar"") should return the string ""ratset gaj"".*/


function Reverse()
{
    let reverse="";
    let text=document.getElementById("str").value;

    for(let i=0;i<=text.length-1;i++)
    {
        reverse+=text.charAt(text.length-1-i);
    }
    document.getElementById("result").innerHTML=reverse;
}