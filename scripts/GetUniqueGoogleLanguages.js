languages = [];
addedCodes = [];
document.querySelectorAll("div.qSb8Pe[data-language-code]").forEach(x=>{
    var name = x.children[1].innerText;
    var code = x.attributes['data-language-code'].value;
    if(!addedCodes.includes(code)){
        languages.push({
            language: name,
            languageCode: code
        });
        addedCodes.push(code);
    }
});
JSON.stringify(languages);