import React, { Component } from 'react'

export default class Store extends Component {

    FancyBorder(props) {
        return (
          <div className={'FancyBorder FancyBorder-' + props.color}>
            {props.children}
          </div>
        );
      }
    

     WelcomeDialog() {
        return (
          <this.FancyBorder color="yellow">
            <h1 className="Dialog-title">
              Test
            </h1>
            <p className="Dialog-message">
              This is harsh Trying!
            </p>
          </this.FancyBorder>
        );
      }



    render() {
        return (
            <div>
                <this.WelcomeDialog></this.WelcomeDialog>
            </div>
        );
    } 
   
    
 



   
    
}
