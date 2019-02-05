import React from 'react'
import Button from './Button'

export default function Buttons(props) {
  return (
    <div className="Buttons" id="Buttons">
       <Button click={props.handleClick} label="C" value="clear" id="clear"/>
       <Button click={props.handleClick} label="/" value="/" id="divide"/>
       <Button click={props.handleClick} label="x" value="*" id="multiply"/>
       <Button click={props.handleClick} label="-" value="-"  id="subtract"/>
          <Button click={props.handleClick} label="7" value="7" id="seven"/>
          <Button click={props.handleClick} label="4" value="4" id="four"/>
          <Button click={props.handleClick} label="1" value="1" id="one"/>
          <Button click={props.handleClick} label="+" size="2" value="+"  id="add"/>
         

         
          <Button click={props.handleClick} label="8" value="8" id="eight"/>
          <Button click={props.handleClick} label="5" value="5" id="five"/>
          <Button click={props.handleClick} label="2" value="2" id="two"/>
         
          <Button click={props.handleClick} label="<--" size="2" value="delete" id="delete" />

          
          <Button click={props.handleClick} label="9" value="9" id="nine"/>
          <Button click={props.handleClick} label="6" value="6" id="six"/>
          <Button click={props.handleClick} label="3" value="3" id="three"/>
          <Button click={props.handleClick} label="=" size="2" value="equal" id="equals" />
         

          
          
          <Button click={props.handleClick} label="." value="." id="decimal"/>
          <Button click={props.handleClick} label="0" value="0" id=""/>
          <Button click={props.handleClick} label="" value="null" />
          <Button click={props.handleClick} label="(-|-)" size="2" value="" id="delete" />

    </div>
  )
}
