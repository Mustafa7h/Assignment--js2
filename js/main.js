var quotes = [
    {
        quout: '"Resentment is like drinking poison and waiting for your enemies to die."',
        auther: "--Nelson Mandela"
    }, {
        quout: '"The best revenge is massive success."',
        auther: "--Frank Sinatra"
    }, {
        quout: '"Do not take life too seriously. You will not get out alive."',
        auther: "--Elbert Hubbard"
    }
    , {
        quout: '"Its not what happens to you, but how you react to it that matters."',
        auther: "--Epictetus"
    }, {
        quout: '"Do not take life too seriously. You will not get out alive."',
        auther: "--Elbert Hubbard"
    }

]



function dispalyQuotes() {
    var num = Math.floor(Math.random() * quotes.length);
    document.getElementById("quote").innerHTML = quotes[num].quout
    document.getElementById("auther").innerHTML = quotes[num].auther

}