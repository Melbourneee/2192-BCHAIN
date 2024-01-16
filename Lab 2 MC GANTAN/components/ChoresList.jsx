import React from "react";
import classes from './ChoresList.module.css';



export default class Dierbersinfo extends React.Component{
    render() {
        return (
<section>
  <div class="list">
    <ul>
      <h1> Chores List </h1>
      <li>Wash Clohtes</li>
      <li>Feed the Chickens</li>
      <li>Clean the House</li>
    </ul>
  </div>
  <div class="animation"></div>
</section>
 )
    }
}