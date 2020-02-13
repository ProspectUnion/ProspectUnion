import m from "mithril"

import {Model} from "../../model/model"
import {Purpose} from "./purpose"
import {Beneficiaries} from "./beneficiaries"
import {Assets} from "./assets"
import {Management} from "./management"
import {Permissions} from "./permissions"
import {Risks} from "./risks"


const Results = {
    view:(vnode)=>{
        return m("div", [
            m("h1", {"class":"f2-ns f4 fw7 mt3-ns mt2", "style":`color:"black"}`}, 
            "Step 1: Write a plan."             
            ),
            m(Purpose, {
                answers: Model.answers, 
                section: "purpose", 
                
            }),
            m("h1", {"class":"f2-ns f4 fw7 mt5", "style":`color:"black"}`}, 
            "Step 2: Build a community."            
            ),
            m(Beneficiaries, {
                answers: Model.answers, 
                section: "beneficiaries", 
            }),
            m("h1", {"class":"f2-ns f4 fw7 mt5", "style":`color:"black"}`}, 
            "Step 3: Handle data."            
            ),
            m(Assets, {
                answers: Model.answers, 
                section: "assets", 
            }),
            m("h1", {"class":"f2-ns f4 fw7 mt5", "style":`color:"black"}`}, 
            "Step 4: Assign responsibility"            
            ),
            m(Management, {
                answers: Model.answers, 
                section: "management", 
            }),
            m("h1", {"class":"f2-ns f4 fw7 mt5", "style":`color:"black"}`}, 
            "Step 5: Write rules."            
            ),
            m(Permissions, {
                answers: Model.answers, 
                section: "permissions", 
            }),
            m("h1", {"class":"f2-ns f4 fw7 mt5", "style":`color:"black"}`}, 
            "Step 6: Manage risks."            
            ),
            m(Risks, {
                answers: Model.answers, 
                section: "risks", 
            }),
        ])
    }
}

export default Results