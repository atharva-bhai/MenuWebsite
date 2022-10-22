import React from "react";
import { Link } from "react-router-dom";
import "../index.css";
import menu from "./data";
import Dosa from "../images/Dosa.jpg"
import Poori from "../images/Poori.jpg"
import LemonRice from "../images/LemonRice.jpg"
import Upma from "../images/Uppittu.jpg"
import AkkiRotti from "../images/Rotti.jpg"
import Idli from "../images/Idli.jpg"
import RiceBath from "../images/RiceBath.jpg"
import Massoppu from "../images/Massoppu.jpg"
import ThiliSaaru from "../images/Rasam.jpg"
import Gorikayi from "../images/Gorikay.jpg"
import Hurlikayi from "../images/HuliHurlikayi.jpg"
import Sorekayi from "../images/Sorekayi.jpg"
import Capsicum from "../images/CapsicumRice.jpg"
import Aache from "../images/Sunday.webp"
import Bread from "../images/Bread.jpg"
import Biscuit from "../images/Biscuits.jpg"
import Paneer from "../images/Paneer.jpg"
import Kosambari from "../images/Kosambari.jpg"
import KesariBath from "../images/KesariBath.jpg"




function Menu(){
    function Card(props){
        
        console.log(props.specialClass);
        if(props.specialClass==="lunch"){
            return(<div className="card" style={{"width": "10rem;"}}>
            <img className="card-img-top lunch" src={props.img} alt=""/>
            <div className="card-body">
              <h5 className="card-title">{props.heading}</h5>
              <p className="card-text">{props.content}</p>
            </div>
          </div>); 
        } else if(props.specialClass==="snacks"){
            return(<div className="card" style={{"width": "10rem;"}}>
          <img className="card-img-top snacks" src={props.img} alt=""/>
          <div className="card-body">
            <h5 className="card-title">{props.heading}</h5>
            <p className="card-text">{props.content}</p>
          </div>
        </div>);
        } else{
          return(<div className="card" style={{"width": "10rem;"}}>
          <img className="card-img-top" src={props.img} alt=""/>
          <div className="card-body">
            <h5 className="card-title">{props.heading}</h5>
            <p className="card-text">{props.content}</p>
          </div>
        </div>);
    }
        
      }
    const [breakSun, breakMon, breakTue, breakWed, breakThu, breakFri, breakSat] = menu.Breakfast;

    const [lunSun, lunMon, lunTue, lunWed, lunThu, lunFri, lunSat] = menu.Lunchs;
    console.log(breakSun);

    const [snackSun, snackMon, snackTue, snackWed, snackThu, snackFri, snackSat] = menu.Snacks;
    console.log(breakSun);
    
    return(
        <div className="menu">
            <h1 className="alert alert-primary">Menu</h1>
            <h3 className="alert alert-danger">Breakfasts</h3>
            <div className="container-fluid">
                <div className="row bg-dark">
                    <div className="col col-3">
                        <Card img={Poori} heading={breakSun} content="Sunday"/>
                    </div>
                    <div className="col col-3">
                        <Card img={LemonRice} heading={breakMon} content="Monday"/>
                    </div>
                    <div className="col col-3">
                        <Card img={Upma} heading={breakTue} content="Tuesday"/>
                    </div>
                    <div className="col col-3">
                        <Card img={AkkiRotti} heading={breakWed} content="Wednesday"/>
                    </div>
                    <div className="col col-3">
                        <Card img={Dosa} heading={breakThu} content="Thursday"/>
                    </div>
                    <div className="col col-3">
                        <Card img={Idli} heading={breakFri} content="Friday"/>
                    </div>
                    <div className="col col-3">
                        <Card img={RiceBath} heading={breakSat} content="Saturday"/>
                    </div>
                </div>
            <h3 className="alert alert-success">Lunchs</h3>
            
            <div className="container-fluid">
                <div className="row bg-dark">
                    <div className="col col-3">
                        <Card img={Massoppu} heading={lunSun} content="Sunday" specialClass="lunch"/>
                    </div>
                    <div className="col col-3">
                        <Card img={ThiliSaaru} heading={lunMon} content="Monday" specialClass="lunch"/>
                    </div>
                    <div className="col col-3">
                        <Card img={Gorikayi} heading={lunTue} content="Tuesday" specialClass="lunch"/>
                    </div>
                    <div className="col col-3">
                        <Card img={Hurlikayi} heading={lunWed} content="Wednesday" specialClass="lunch"/>
                    </div>
                    <div className="col col-3">
                        <Card img={RiceBath} heading={lunThu} content="Thursday" specialClass="lunch"/>
                    </div>
                    <div className="col col-3">
                        <Card img={Sorekayi} heading={lunFri} content="Friday" specialClass="lunch"/>
                    </div>
                    <div className="col col-3">
                        <Card img={Capsicum} heading={lunSat} content="Saturday" specialClass="lunch"/>
                    </div>
                </div>
            </div>
            <h3 className="alert alert-warning">Snacks</h3>
            <div className="container-fluid">
                <div className="row bg-dark">
                    <div className="col col-3">
                        <Card img={Aache} heading={snackSun} content="Sunday" specialClass="snacks"/>
                    </div>
                    <div className="col col-3">
                        <Card img={Bread} heading={snackMon} content="Monday" specialClass="snacks"/>
                    </div>
                    <div className="col col-3">
                        <Card img={Biscuit} heading={snackTue} content="Tuesday" specialClass="snacks"/>
                    </div>
                    <div className="col col-3">
                        <Card img={AkkiRotti} heading={snackWed} content="Wednesday" specialClass="snacks"/>
                    </div>
                    <div className="col col-3">
                        <Card img={Paneer} heading={snackThu} content="Thursday" specialClass="snacks"/>
                    </div>
                    <div className="col col-3">
                        <Card img={Kosambari} heading={snackFri} content="Friday" specialClass="snacks"/>
                    </div>
                    <div className="col col-3">
                        <Card img={KesariBath} heading={snackSat} content="Saturday" specialClass="snacks"/>
                    </div>
                </div>
            </div>
            <h3 className="alert alert-primary">Dinners</h3>
            <div className="container-fluid">
                <div className="row bg-dark">
                    <div className="col col-3">
                        <Card img={Massoppu} heading={lunSun} content="Sunday" specialClass="lunch"/>
                    </div>
                    <div className="col col-3">
                        <Card img={ThiliSaaru} heading={lunMon} content="Monday" specialClass="lunch"/>
                    </div>
                    <div className="col col-3">
                        <Card img={Gorikayi} heading={lunTue} content="Tuesday" specialClass="lunch"/>
                    </div>
                    <div className="col col-3">
                        <Card img={Hurlikayi} heading={lunWed} content="Wednesday" specialClass="lunch"/>
                    </div>
                    <div className="col col-3">
                        <Card img={RiceBath} heading={lunThu} content="Thursday" specialClass="lunch"/>
                    </div>
                    <div className="col col-3">
                        <Card img={Sorekayi} heading={lunFri} content="Friday" specialClass="lunch"/>
                    </div>
                    <div className="col col-3">
                        <Card img={Capsicum} heading={lunSat} content="Saturday" specialClass="lunch"/>
                    </div>
                </div>
            </div>
        </div>
    </div>
        
    );
}

export default Menu;