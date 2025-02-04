import React from 'react'
import Noidaemplist from './branchlist/Noidaemplist'
import Bhabuaemplist from './branchlist/Bhabuaemplist'
import Sasaramemplist from './branchlist/Sasaramemplist'
import Varanasiemplist from './branchlist/Varanasiemplist'
export default function LandingPage(props) {
    const companyname = "My Way Is Highway";

    const user = [{
        id: 1,
        name: "Rumit",
        salary: 302,
    },
    {
        id: 2,
        name: "Deep",
        salary: 607,
    },
    {
        id: 3,
        name: "Rahul",
        salary: 805,
    },
    {
        id: 4,
        name: "Rit",
        salary: 850,
    },
    {
        id: 5,
        name: "Ri",
        salary: 500,
    },
    {
        id: 5,
        name: "Ri",
        salary: 500,
    },

    ]
    return (
        <>
            <div>landingpage props describe</div>
            <h1><u>{companyname}</u></h1>

            <div className="container">
                <div className="row text-center border">
                    <div className="col-md-3 border" row="7">
                        < Noidaemplist some="some" />
                    </div>
                    <div className="col-md-3 border">
                        <Bhabuaemplist name="Sumit" />
                    </div>
                    <div className="col-md-3 border">
                        <Sasaramemplist />
                    </div>
                    <div className="col-md-3 border">
                        <Varanasiemplist />
                    </div>
                </div>
                <div className="row mt-4">
                    <div className="col-md-12 border d-flex ms-3"> 
                        {user.map((d) =>
                        <>
                            <h2 className=" m-3 border">{d.name}</h2>
                            <h1 className=" m-3 border"> {d.salary}</h1>
                         </>
                        )}
                    </div>
                </div>
            </div>
        </>
    )
}

