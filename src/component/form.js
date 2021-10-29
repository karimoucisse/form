import React from "react";

class Form extends React.Component {

    render() {
        const {type,label,className,onchange}=this.props
        // console.log(this.props);
        return(
            <>
                <div className="mb-3 col-10">
                    <label  className="form-label">{label}</label>
                    <input type={type} className= {className} onChange={onchange}/>
                </div> 

            </>
        )
    }
}
export default Form