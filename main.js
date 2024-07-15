function convert()
{
    let cValue=document.getElementById("celciusInput").value
    let fValue=Number((cValue)*1.8)+32
    document.querySelector(".result").innerHTML=fValue+" faranheit"
}