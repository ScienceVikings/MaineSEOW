((win, tippy)=>{

    const doc = win.document;
    const hot = {};

    const defaults = {
        pinRadius: 15,
        pinColor: 'cyan'
    }

    const guardAgainstNull = (optionName, option, msg=null) => {
        if(option === null)
            throw msg ?? `${optionName} option cannot be null`;
    }

    const createPinElement = (pin, options, canvasOffsetLeft, canvasOffsetTop) => {
        
        let div = document.createElement('div');

        div.id = `pin-${pin.x}-${pin.y}`;
        div.className = 'pin';
        div.innerHTML="<strong>+</strong>";
        
        div.style.height = options.pinRadius + 'px';
        div.style.width = options.pinRadius + 'px';
        div.style.background = options.pinColor;
        div.style.left = (canvasOffsetLeft + pin.x) + 'px';
        div.style.top = (canvasOffsetTop + pin.y) + 'px';
        div.style.cursor = 'pointer';
        
        win.setTimeout(()=>{
            tippy(`#${div.id}`,{
                content: pin.content,
                allowHTML: true
            });
        },0);

        return div;
    };

    hot.usage = ()=>{
        return `
Hotspot.usage() => This function. It prints the usage.
Hotspot.addPins(options) => Pass options to get a div element back
    ready to be placed somewhere with your picture and pins.
    Options are these: 
    {
        imageUrl: Required url of the image we're showing
        pins: Required array of point objects. 
                Ex: [{x:0,y:0,content:'Text in the pin, goes here!'}]
        pinRadius: Optional size of the pins. Defaults to 15px;
        pinColor: Optional color of the pin. Defaults to cyan;
    }
        `
    }

    hot.addPins = (options) => {
        
        guardAgainstNull("imageUrl",options.imageUrl);
        guardAgainstNull("canvasId",options.canvasId);
        guardAgainstNull("pins",options.pins);

        if(!Array.isArray(options.pins))
            throw `Pins must be an array`;

        options.pinRadius = options.pinRadius ?? defaults.pinRadius;
        options.pinColor = options.pinColor ?? defaults.pinColor;

        const canvas = doc.createElement('canvas');
        const ctx = canvas.getContext('2d');
        canvas.className = 'image-canvas';

        const container = doc.createElement('div');
        container.appendChild(canvas);
        container.className = 'container';

        let image = new Image();
        image.onload = () => {

            canvas.width = image.width;
            canvas.height = image.height;
            ctx.drawImage(image,0,0);

            options.pins.forEach((pin) => {
                let ele = createPinElement(pin,options,canvas.offsetLeft,canvas.offsetTop);
                container.appendChild(ele);
            });
        }
        
        image.src = options.imageUrl;

        return container;

    };

    hot.markPins = () => {
        const canvas = doc.getElementsByTagName('canvas')[0];
        guardAgainstNull("Canvas",canvas,"No canvases found to mark.");

        canvas.addEventListener('click',(ev)=>{
            console.log(ev);
            console.log('You clicked the canvas');
            const pin = {
                x: ev.x-ev.target.offsetLeft,
                y: ev.y-ev.target.offsetTop
            }
            console.log(`{ x:${pin.x}, y: ${pin.y}, content: 'Content'}`);
        });
    }

    //It's clobberin' time
    win.Hotspot = hot;

})(window,tippy);