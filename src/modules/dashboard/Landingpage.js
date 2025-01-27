import React from 'react'
import Noidaemplist from './branchlist/Noidaemplist'
import Bhabuaemplist from './branchlist/Bhabuaemplist'
import Sasaramemplist from './branchlist/Sasaramemplist'
import Varanasiemplist from './branchlist/Varanasiemplist'
export default function LandingPage() {
    return (
        <>
        <div>landingpage props describe</div>
        <div className="container">
            <div className="row text-center border">
                <div className="col-md-3 border" row="7">
                    < Noidaemplist/>  
                </div>
                <div className="col-md-3 border">
                     <Bhabuaemplist name="Sumit"/>
                </div>
                <div className="col-md-3 border">
                    <Sasaramemplist/>
                </div>
                <div className="col-md-3 border">
                    <Varanasiemplist/>
                </div>
            </div>

        </div>
        </>
    )
}

