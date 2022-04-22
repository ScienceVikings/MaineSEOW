
((win)=>{

    win.SVL = win.SVL || {};
    
    win.SVL.Components = win.SVL.Components || {};

    win.SVL.loadTemplate = async function(baseUrl,templatePath){
        var response = await fetch(`${baseUrl}/${templatePath}`);
        var reader = response.body.getReader();
        var template = String.fromCharCode(...(await reader.read()).value);
        return template;
    }

    win.SVL.buildComponent = async function(baseUrl,templatePath,component){
        const template = await win.SVL.loadTemplate(baseUrl,templatePath);
        component.template = template;
        return component;
    }

    win.SVL.getDistinctDropdownItems = function(key,list){
        var allValues = list.map(x=>x[key]);
        var distinct = [...new Set(allValues)];
        return distinct.map(x=>{
            return {
                display: x,
                value: x
            }
        });
    }

})(window);

