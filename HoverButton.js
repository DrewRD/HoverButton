import React, { useEffect, useState } from 'react';

let defaultStyle = {userSelect:'none',
                    maxHeight:'5vh',
                    textAlign:'Center',
                    backgroundColor:'red',}

const HoverButton2 = (props) => {
    
    const [clickEffectColor,setclickEffectColor] = useState('grey');

    const [buttonClass,setbuttonClass] = useState('');

    const [colorFlag,setcolorFlag] = useState('');

    const [text,settext] = useState('Hover');

    const [hoverEffect,sethoverEffect] = useState('rgba(156, 146, 154, 0.5)');

    const [clickTimer, setclickTimer] = useState(250);

    const [hoverStyle, sethoverStyle] = useState(defaultStyle);

    const [clickFunction, setclickFunction] = useState('');

    const [hoverID,sethoverID] = useState('');

    useEffect(() =>{
        if (props.className !== undefined){
            defaultStyle = {}; //this could probably be down without clearing it out.
            sethoverStyle({});
            setbuttonClass(props.className);
        }
    }, [props.className]);

    useEffect(() => {
        if (props.style !== undefined){
            sethoverStyle(props.style);
        }
    }, [props.style]);

    useEffect(() => {
        if (props.onClick !== undefined){
            setclickFunction(props.onClick);
        }
    }, [props.onClick]);

    useEffect(() => {
        if (props.clickColor !== undefined){
            setclickEffectColor(props.clickColor);
        }        
    }, [props.clickColor]);

    useEffect(() => {
        if (props.text !== undefined){
            settext(props.text);
        }
    }, [props.text]);

    useEffect(() => {
        if (props.hoverEffect !== undefined){
            sethoverEffect(props.hoverEffect);
        }
    }, [props.hoverEffect]);

    useEffect(() => {
        if (props.clickTimer !== undefined){
            setclickTimer(props.clickTimer);
        }
    }, [props.clickTimer]);

    useEffect(() => {
        if(props.id !== undefined){
            sethoverID(props.id);
        }
    }, [props.id]);

    const clickEffect = (event) => {
        event.target.style.background = clickEffectColor;

        let effect = () => {
            event.target.style.background = colorFlag;}

        const timer = setTimeout(effect, clickTimer);
        if (clickFunction !== ''){
            clickFunction(event);}
        
        

    };

    const handleHoverEffect = (event) => {
        setcolorFlag(event.target.style.background);
        event.target.style.background = hoverEffect;
    };

    const endHover = (event) => {
        event.target.style.background = colorFlag;
    };


    return(

        <div id={hoverID} className={buttonClass} onClick={clickEffect} onMouseEnter={handleHoverEffect} 
                onMouseLeave={endHover} style={hoverStyle}>
                    
                    {text} 
        
        </div>

    );
};

export default HoverButton2;