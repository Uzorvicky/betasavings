import React from "react"
import CustomCard from 'src/shared/card'
export default function Home () {
    return (<div className="h-full w-full flex flex-column gap-4 overflow-hidden overflow-y-auto">
       <section className="grid grid-cols-1  md:grid-cols-2 lg:grid-cols-3 w-full md:p-4 lg:p-5">
        <div className="col-12 md:col-5">
            <CustomCard title="Total Members"  />
        </div>
        <div className="col-12 md:col-5 col-offset-1">
        <CustomCard title="New  Members"  />
        </div>


        <div className="col-12 md:col-5">
            <CustomCard title="Total Contibution"  />
        </div>
        <div className="col-12 md:col-5 col-offset-1">
        <CustomCard title="Monhtly Contribution"  />
        </div>

        <div className="col-12 md:col-5">
            <CustomCard title="Total Loan"  />
        </div>
        <div className="col-12 md:col-5 col-offset-1">
        <CustomCard title="Monhtly Loan"  />
        </div>
        
       </section>
    </div>)
}