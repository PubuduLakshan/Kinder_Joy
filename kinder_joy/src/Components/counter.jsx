import React, { Component } from 'react';
 class Counter extends Component {
   state={
        count:0,
        tags:[]
   };
    render() { 
        let badge_style = this.getBadgeClass();
        
        return ( 
            <div>
                <span className={badge_style}>
                    {this.state.count}
                </span>
               <button className="btn btn-secondsry btn-sm" onClick={this.click }>Increment</button>
               <div>{this.renderConditionsToTags()}</div>
            </div>
         );
    }
    click=()=>{
        this.setState({count:this.state.count+1});
        
    }
    renderConditionsToTags(){
        if (this.state.tags.length===0) {
            return <p>There is No Tags inside the Div</p>
        }
        else{
           return <ul>{this.state.tags.map(tag=>
               <li key={tag}>{tag}</li>
           )}</ul>
        }
    }
    getBadgeClass(){
        let badge_style = "badge m-2 badge-";
        badge_style += this.state.count===0 ?"warning":"primary";
        return badge_style;
    }

   
}
export default Counter;
