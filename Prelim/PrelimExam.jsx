import React from "react";



function ToBring(){
    return(
        <div>
            <h1 className="Green">My Strawhat</h1>
            <h1 className="Green">Gum Gum Fruit</h1>
            <h1 className="purple">THe Red Vest</h1>
        </div>
        
        
    );
}
function None(){
    return(
        <div className="none">
        <h1>My Strawhat</h1>
        <h1>Gum Gum Fruit</h1>
        <h1>THe Red Vest</h1>
    </div>
    )
}

function Item(props){
    const list = props.list;
    if(list){
        return(
            <ToBring />
        );
    }
    return(
        <None />
    );
}

export default function App(){
    return(
        <div>
            <Item
                list={true}
            />
        </div>
    );
}