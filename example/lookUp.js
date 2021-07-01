function lookUp(val)
{
    var result = "";
    var lookup =  {
        "alpha":"Adams",
        "bravo":"Boston",
        "charlie":"Chicago",
        "delta":"Denver",
        "echo":"Easy",
        "foxtrot":"frank"
    };

    result = lookup[val];

    return result;
}

console.log(lookUp("echo"));
