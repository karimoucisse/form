import React from "react";

class Form extends React.Component {

    render() {
        const {type,label,className,onchange}=this.props
        // console.log(this.props);
        return(
            <>
                <div className="mb-3 row">
                    <div className="col-5">
                        <label  className="form-label">{label}</label>
                        <input type={type} className= {className} onChange={onchange}/>
                    </div>
                </div> 

            </>
        )
    }
}
export default Form