import React from 'react';
import './Home.css';

export default function Home() {
    return <div><br /><h1>Group 10 info</h1><br />
    <table>
  <tr>
    <th>Team member</th>
    <th>Faculty</th>
    <th>Projects</th>
    <th>GitHub profile</th>
  </tr>
  <tr>
    <td>Shamsiyya Alakbarova</td>
    <td>IT</td>
    <td><a href="https://github.com/ShamsiyyaAlakbarova/Web-and-Mobile">Personal Card</a>, <a href="https://github.com/ShamsiyyaAlakbarova/Web-and-Mobile">Weather App</a>, <a href ="https://github.com/group10reactors/appmovie">Movie Site</a></td>
    <td><a href='https://github.com/ShamsiyyaAlakbarova'>GitHub</a></td>
  </tr>
  <tr>
    <td>Tural Alizada</td>
    <td>IT</td>
     <td><a href="https://alizadeht.github.io/assignment%20website.html">Personal Card</a>, <a href="https://alizadeht.github.io/assignment2/index.html">Weather App</a>, <a href ="https://github.com/group10reactors/appmovie">Movie Site</a></td>
    <td><a href='https://github.com/alizadeht'>GitHub</a></td>  
  </tr>
  <tr>
    <td>Azer Shukurlu</td>
    <td>IT</td>
    <td><a href="https://azershukurlu.github.io/azer-digital_card/">Personal Card</a>, <a href="https://azershukurlu.github.io/weather-app/">Weather App</a>, <a href ="https://github.com/group10reactors/appmovie">Movie Site</a></td>
    <td><a href='https://github.com/azershukurlu'>GitHub</a></td> 
  </tr>
</table><br />
<hr></hr>
<p>Welcome to the movies ranking site!<br />In this site you will be able to see information about movies, such as runtime, genre, title, and etc. In this project we used React, HTML, CSS, JS, and JSX.<br />
You can see our group info table above. Before this project we had two projects. First was related to HTML and CSS. Second was mainly about Java Script. If you want to see how our team members wrote the codes 
for these projects, you can simply click on them, and you will be redirected to the GitHub page of the team member.<br /><br />If you would like to see codes of this project, click on GitHub button below. If you would like to watch video
about this project, click on Youtube button below.<br />Our team hopes that you will like it! Enjoy!<br /><br />
<form action="https://github.com/group10reactors/appmovie">
    <input className="github" type="submit" value="GitHub"/>
</form><br /><form action="https://www.youtube.com/watch?v=AFD4x8NmaY4">
    <input className="youtube" type="submit" value="Youtube" />
</form></p>
    </div>;
  }
  
  
