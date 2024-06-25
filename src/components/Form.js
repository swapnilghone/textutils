import React, {useState,useEffect} from "react";

function TextSummary(props){
    if(props.text.length > 0 ){
        let words = props.text.replace(/\s+/g, ' ').trim().split(" ").length;
        return(
            <>
                <p>Your text has {words} words and {props.text.replace(/\s+/g, '').length} characters</p>
                <p>Text need {words * 0.008} minutes to read</p>
                <h2 className="my">Preview</h2>
                <div>{props.text}</div>
            </>
        );
    }else{
        return "enter text in above textarea to view the summary";
    }
    
}

export default function Form(props) {

    const [text,setText] = useState("");
    const handleUpClick = () => {
        // console.log(text);
        setText(text.toUpperCase());

        props.showAlert('Converted To Uppercase');
    }
    
    const handleLowClick = () => {
        setText(text.toLowerCase());
        props.showAlert('Converted To LowerCase');
    }

    const handleTextChange = (e) => {
        setText(e.target.value);
    }

    const handleClear = () => {
        setText('');
        props.showAlert('Text Cleared!');
    }

    // Credits: A
    const handleCopy = () => {
        navigator.clipboard.writeText(text); 
        props.showAlert("Copied to Clipboard!", "success");
    }

    // Credits: Coding Wala
    const handleExtraSpaces = () => {
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "));
        props.showAlert("Extra spaces removed!", "success");
    }

    useEffect(() => {
        document.title = "TextUtils - Home"
    }, []);

    return (
        <>
            <div className={`container text-${props.mode === "light"?"dark":"light"}`}>
                <h4>Enter Text To Analyze</h4>
                <div className="form-group">
                    <textarea className="form-control" rows="10" value={text} onChange={handleTextChange}></textarea>
                </div>
                <div className="form-group my-4">
                    <input className="btn btn-primary me-2 my-2" type="button" value="Convert UPPERCASE" onClick={handleUpClick} disabled = {text.length === 0}/>
                    <input className="btn btn-primary mx-2 my-2" type="button" value="Convert lowercase" onClick={handleLowClick} disabled = {text.length === 0}/>
                    <input className="btn btn-primary mx-2 my-2" type="button" value="Copy Text" onClick={handleCopy} disabled = {text.length === 0}/>
                    <input className="btn btn-primary mx-2 my-2" type="button" value="Clear Text" onClick={handleClear} disabled = {text.length === 0}/>
                    <input className="btn btn-primary mx-2 my-2" type="button" value="Remove Whitespace" onClick={handleExtraSpaces} disabled = {text.length === 0}/>
                </div>
            </div>
            <div className={`container text-${props.mode === "light"?"dark":"light"}`}>
                <h4>Your Text Summary</h4>
                <TextSummary text={text} />
            </div>
        </>
        
    )
}