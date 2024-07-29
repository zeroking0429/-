var first_passward = random(0, 9);
var second_passward = random(0, 9);
var third_passward = random(0, 9);
var pass1 = 0;
var pass2 = 0;
var pass3 = 0;
sessionStorage.setItem("1", first_passward);
sessionStorage.setItem("2", second_passward);
sessionStorage.setItem("3", third_passward);
sessionStorage.setItem("p1", pass1);
sessionStorage.setItem("p2", pass2);
sessionStorage.setItem("p3", pass3);

function random(min, max)
{
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function p1()
{
    if (pass1 == 9) 
    {
        pass1 = 0;
    }
    else
    {
        pass1++;
    }
    document.getElementById("p1").innerText = pass1;
    sessionStorage.setItem("p1", pass1);
}

function p2()
{
    if (pass2 == 9) 
    {
        pass2 = 0;
    }
    else
    {
        pass2++;
    }
    document.getElementById("p2").innerText = pass2;
    sessionStorage.setItem("p2", pass2);
}

function p3()
{
    if (pass3 == 9) 
    {
        pass3 = 0;
    }
    else
    {
        pass3++;
    }
    document.getElementById("p3").innerText = pass3;
    sessionStorage.setItem("p3", pass3);
}

function sumbit()
{
    if (pass1 != first_passward)
    {
        alert("1X");
    }
    else if (pass2 != second_passward)
    {
        alert("2X");
    }
    else if (pass3 != third_passward)
    {
        alert("3X");
    }
    else 
    {
        alert("congratulation!!!");
        location.reload();
    }
}