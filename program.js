function clearscreen()
{
    document.getElementById("result").value="";
}
function display(value)
{
    document.getElementById("result").value += value;
}
function calculate()
{
    var num=document.getElementById("result").value;
    var res=eval(num);
    document.getElementById("result").value=res;
}