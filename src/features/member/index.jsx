import React from "react"
import CustomCard from 'src/shared/card'
export default function Member () {
    return <div className="h-full w-full flex flex-column gap-3 overflow-hidden overflow-y-auto p-2">
        <section className="grid grid-cols-1  md:grid-cols-2 lg:grid-cols-3 w-full md:p-4 lg:p-5">
        <div className="col-12 md:col-5">
            <CustomCard title="Total Members"  />
        </div>
        <div className="col-12 md:col-5 md:col-offset-1">
        <CustomCard title="New  Members"  />
        </div>

       </section>
    </div>
}