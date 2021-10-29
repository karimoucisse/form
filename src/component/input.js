import React from "react"
class Input extends React.Component {

    render() {

        return(
                <div className="row my-3">
                    <input type = {this.props.type} className="col-5" onChange={this.props.onchange} placeholder={this.props.placeholder}/>
                </div>
            )

    }

}
export default Input