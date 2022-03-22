const searchParams = new URLSearchParams(window.location.search)

if (searchParams.has("card")) {
    let url = searchParams.get("card");
    
    $.ajax({
        url: url,
        dataType: "text",
        success: (data) => importDataOnPage(data)
    });
} else document.querySelector("main").innerHTML = "<h1>Ты ошибся страничкой дружок 🥺</h1>";


function importDataOnPage(data) {
    const converter = new showdown.Converter(), html = converter.makeHtml(data);
    document.querySelector("main").innerHTML = html;
}