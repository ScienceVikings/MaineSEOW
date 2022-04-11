
const languageList = JSON.parse("[{\"language\":\"Afrikaans\",\"languageCode\":\"af\"},{\"language\":\"Albanian\",\"languageCode\":\"sq\"},{\"language\":\"Amharic\",\"languageCode\":\"am\"},{\"language\":\"Arabic\",\"languageCode\":\"ar\"},{\"language\":\"Armenian\",\"languageCode\":\"hy\"},{\"language\":\"Azerbaijani\",\"languageCode\":\"az\"},{\"language\":\"Basque\",\"languageCode\":\"eu\"},{\"language\":\"Belarusian\",\"languageCode\":\"be\"},{\"language\":\"Bengali\",\"languageCode\":\"bn\"},{\"language\":\"Bosnian\",\"languageCode\":\"bs\"},{\"language\":\"Bulgarian\",\"languageCode\":\"bg\"},{\"language\":\"Catalan\",\"languageCode\":\"ca\"},{\"language\":\"Cebuano\",\"languageCode\":\"ceb\"},{\"language\":\"Chichewa\",\"languageCode\":\"ny\"},{\"language\":\"Chinese\",\"languageCode\":\"zh-CN\"},{\"language\":\"Corsican\",\"languageCode\":\"co\"},{\"language\":\"Croatian\",\"languageCode\":\"hr\"},{\"language\":\"Czech\",\"languageCode\":\"cs\"},{\"language\":\"Danish\",\"languageCode\":\"da\"},{\"language\":\"Dutch\",\"languageCode\":\"nl\"},{\"language\":\"English\",\"languageCode\":\"en\"},{\"language\":\"Esperanto\",\"languageCode\":\"eo\"},{\"language\":\"Estonian\",\"languageCode\":\"et\"},{\"language\":\"Filipino\",\"languageCode\":\"tl\"},{\"language\":\"Finnish\",\"languageCode\":\"fi\"},{\"language\":\"French\",\"languageCode\":\"fr\"},{\"language\":\"Frisian\",\"languageCode\":\"fy\"},{\"language\":\"Galician\",\"languageCode\":\"gl\"},{\"language\":\"Georgian\",\"languageCode\":\"ka\"},{\"language\":\"German\",\"languageCode\":\"de\"},{\"language\":\"Greek\",\"languageCode\":\"el\"},{\"language\":\"Gujarati\",\"languageCode\":\"gu\"},{\"language\":\"Haitian Creole\",\"languageCode\":\"ht\"},{\"language\":\"Hausa\",\"languageCode\":\"ha\"},{\"language\":\"Hawaiian\",\"languageCode\":\"haw\"},{\"language\":\"Hebrew\",\"languageCode\":\"iw\"},{\"language\":\"Hindi\",\"languageCode\":\"hi\"},{\"language\":\"Hmong\",\"languageCode\":\"hmn\"},{\"language\":\"Hungarian\",\"languageCode\":\"hu\"},{\"language\":\"Icelandic\",\"languageCode\":\"is\"},{\"language\":\"Igbo\",\"languageCode\":\"ig\"},{\"language\":\"Indonesian\",\"languageCode\":\"id\"},{\"language\":\"Irish\",\"languageCode\":\"ga\"},{\"language\":\"Italian\",\"languageCode\":\"it\"},{\"language\":\"Japanese\",\"languageCode\":\"ja\"},{\"language\":\"Javanese\",\"languageCode\":\"jw\"},{\"language\":\"Kannada\",\"languageCode\":\"kn\"},{\"language\":\"Kazakh\",\"languageCode\":\"kk\"},{\"language\":\"Khmer\",\"languageCode\":\"km\"},{\"language\":\"Kinyarwanda\",\"languageCode\":\"rw\"},{\"language\":\"Korean\",\"languageCode\":\"ko\"},{\"language\":\"Kurdish (Kurmanji)\",\"languageCode\":\"ku\"},{\"language\":\"Kyrgyz\",\"languageCode\":\"ky\"},{\"language\":\"Lao\",\"languageCode\":\"lo\"},{\"language\":\"Latin\",\"languageCode\":\"la\"},{\"language\":\"Latvian\",\"languageCode\":\"lv\"},{\"language\":\"Lithuanian\",\"languageCode\":\"lt\"},{\"language\":\"Luxembourgish\",\"languageCode\":\"lb\"},{\"language\":\"Macedonian\",\"languageCode\":\"mk\"},{\"language\":\"Malagasy\",\"languageCode\":\"mg\"},{\"language\":\"Malay\",\"languageCode\":\"ms\"},{\"language\":\"Malayalam\",\"languageCode\":\"ml\"},{\"language\":\"Maltese\",\"languageCode\":\"mt\"},{\"language\":\"Maori\",\"languageCode\":\"mi\"},{\"language\":\"Marathi\",\"languageCode\":\"mr\"},{\"language\":\"Mongolian\",\"languageCode\":\"mn\"},{\"language\":\"Myanmar (Burmese)\",\"languageCode\":\"my\"},{\"language\":\"Nepali\",\"languageCode\":\"ne\"},{\"language\":\"Norwegian\",\"languageCode\":\"no\"},{\"language\":\"Odia (Oriya)\",\"languageCode\":\"or\"},{\"language\":\"Pashto\",\"languageCode\":\"ps\"},{\"language\":\"Persian\",\"languageCode\":\"fa\"},{\"language\":\"Polish\",\"languageCode\":\"pl\"},{\"language\":\"Portuguese\",\"languageCode\":\"pt\"},{\"language\":\"Punjabi\",\"languageCode\":\"pa\"},{\"language\":\"Romanian\",\"languageCode\":\"ro\"},{\"language\":\"Russian\",\"languageCode\":\"ru\"},{\"language\":\"Samoan\",\"languageCode\":\"sm\"},{\"language\":\"Scots Gaelic\",\"languageCode\":\"gd\"},{\"language\":\"Serbian\",\"languageCode\":\"sr\"},{\"language\":\"Sesotho\",\"languageCode\":\"st\"},{\"language\":\"Shona\",\"languageCode\":\"sn\"},{\"language\":\"Sindhi\",\"languageCode\":\"sd\"},{\"language\":\"Sinhala\",\"languageCode\":\"si\"},{\"language\":\"Slovak\",\"languageCode\":\"sk\"},{\"language\":\"Slovenian\",\"languageCode\":\"sl\"},{\"language\":\"Somali\",\"languageCode\":\"so\"},{\"language\":\"Spanish\",\"languageCode\":\"es\"},{\"language\":\"Sundanese\",\"languageCode\":\"su\"},{\"language\":\"Swahili\",\"languageCode\":\"sw\"},{\"language\":\"Swedish\",\"languageCode\":\"sv\"},{\"language\":\"Tajik\",\"languageCode\":\"tg\"},{\"language\":\"Tamil\",\"languageCode\":\"ta\"},{\"language\":\"Tatar\",\"languageCode\":\"tt\"},{\"language\":\"Telugu\",\"languageCode\":\"te\"},{\"language\":\"Thai\",\"languageCode\":\"th\"},{\"language\":\"Turkish\",\"languageCode\":\"tr\"},{\"language\":\"Turkmen\",\"languageCode\":\"tk\"},{\"language\":\"Ukrainian\",\"languageCode\":\"uk\"},{\"language\":\"Urdu\",\"languageCode\":\"ur\"},{\"language\":\"Uyghur\",\"languageCode\":\"ug\"},{\"language\":\"Uzbek\",\"languageCode\":\"uz\"},{\"language\":\"Vietnamese\",\"languageCode\":\"vi\"},{\"language\":\"Welsh\",\"languageCode\":\"cy\"},{\"language\":\"Xhosa\",\"languageCode\":\"xh\"},{\"language\":\"Yiddish\",\"languageCode\":\"yi\"},{\"language\":\"Yoruba\",\"languageCode\":\"yo\"},{\"language\":\"Zulu\",\"languageCode\":\"zu\"},{\"language\":\"Chinese (Traditional)\",\"languageCode\":\"zh-TW\"}]");

(async (win,vue,languageList)=>{

    if(win.location.origin.includes(".goog")){
        //Only bother if we're not already translating things
        return;
    }

    const urlBase = `https://www-maineseow-com.translate.goog/?_x_tr_sl=en&_x_tr_tl=es&_x_tr_hl=en&_x_tr_pto=wapp`;
    var response = await fetch(`${win.location.origin}/templates/translator.html`);
    var reader = await response.body.getReader();
    var template = String.fromCharCode(...(await reader.read()).value);

    var newTranslator = win.document.createElement("div");
    newTranslator.id = "translator";
    newTranslator.style.position = "fixed";
    newTranslator.style.bottom= "15px"; 
    newTranslator.style.right= "15px";

    win.document.body.appendChild(newTranslator);

    vue.createApp({
        data(){
            return {
                ButtonText: "Translate",
                LanguageList: languageList,
                SearchPlaceholderText: "Filter languages",
                filteredLanguage: ""
            }
        },
        methods:{
            languageUrl(lang) {
                return `https://www-maineseow-com.translate.goog/?_x_tr_sl=en&_x_tr_tl=${lang.languageCode}&_x_tr_hl=en&_x_tr_pto=wapp`
            },
            filterLanguages(){

                console.log("Here we go");
                if(this.filteredLanguage.trim() == ""){
                    this.LanguageList = languageList;
                }
                
                this.LanguageList = languageList.filter(x=>x.language.toLowerCase().includes(this.filteredLanguage.toLowerCase()));
            }
        },
        template: template
    }).mount('#translator');
    
})(window,Vue,languageList);

