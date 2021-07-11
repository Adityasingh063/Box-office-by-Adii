import React from 'react'
import Navs from "./Navs";
import Title from "./Title";


const MainPageLayout = ({childred}) => {
    return (
        <div>
            <Title title="Box Office" subtitle="Are you looking for a Movie or an Actor"/>
            <Navs />
      
            {childred}
        </div>
    )
}

export default MainPageLayout
