import { Brands } from "./Brands"
import { Findsupply } from "./Findsuppy"
import { Buyers } from "./Landingpages/Buyers"
import {  LandingPage1 } from "./Landingpages/Landingpage1"
import { LandingPage10 } from "./Landingpages/Landingpage10"
import { LandingPage11 } from "./Landingpages/Landingpage11"
import { LandingPage2 } from "./Landingpages/Landingpage2"
import { LandingPage3 } from "./Landingpages/Landingpage3"
import { LandingPage4 } from "./Landingpages/Landingpage4"
import { LandingPage5 } from "./Landingpages/Landingpage5"
import { LandingPage6 } from "./Landingpages/Landingpage6"
import { LandingPage7 } from "./Landingpages/Landingpage7"
import { LandingPage8 } from "./Landingpages/Landingpage8"
import { LandingPage9 } from "./Landingpages/Landingpage9"
import { Mainbar } from "./MainBar"
import { Navbar } from "./Navbar"


export const MainLanding=()=>{

    return <div>
        <Navbar/>
        <Mainbar/>
        <Buyers/>
        <LandingPage1/>
        <LandingPage2/>
        <LandingPage3/>
        <LandingPage4/>
        <LandingPage5/>
        <LandingPage6/>
        <LandingPage7/>
        <LandingPage8/>
        <LandingPage9/>
        <Findsupply/>
        <LandingPage10/>
        <LandingPage11/>
        <Brands/>
    </div>
}