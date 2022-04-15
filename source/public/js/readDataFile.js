const searchParams = new URLSearchParams(window.location.search)

if (searchParams.has("card")) {
    const url = `../public/cardsData/${searchParams.get("card")}.txt`;
    
    $.ajax({
        url: url,
        dataType: "text",
        success: (data) => importDataOnPage(data)
    });
}


function importDataOnPage(data) {
    const converter = new showdown.Converter(), html = converter.makeHtml(data);
    document.querySelector("main").innerHTML = html;
    linksCreate();
}