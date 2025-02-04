import React from 'react';

export default function Noidaemplist(props) {
    return (
        <>
            <div>Noidaemplist</div>
            {/* <h1>{props.user.name}</h1> */}
            <h1>{props.some}</h1>


            {props.user && props.user.map((d) =>

                <h2 className=" m-3 border" key={d.name}>{d.name}</h2>


            )}

        </>
    )
}
