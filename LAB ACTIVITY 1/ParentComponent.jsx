import React from "react";
import ChildComponent from './ChildComponent';

/*function ParentComponent(){
    const dataToPass = "Hello from parent!";
    return(
        <ChildComponent message={dataToPass} />
    );
}

export default ParentComponent; */

export default class ParentComponent extends React.Component {
    render(){
        const dataToPass = "Hello from zzzz";
        return(
            <ChildComponent message={dataToPass}/>
        );
    }

}