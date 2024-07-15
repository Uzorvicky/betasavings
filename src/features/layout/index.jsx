import React, { useState, Suspense } from "react";
import { Sidebar } from 'primereact/sidebar';
import Fallback from "src/shared/Spinner/fallback";
import { Route, Routes,} from "react-router-dom";
import routes from "src/routes";
import ErrorPage  from 'src/components/ErrorPage'
import MainHeader from "src/components/MainHeader";
import SideNav from "../../components/SideNav";
function Layout() {
  const [open, setVisible] = useState(false)
  return (
    <div className="overflow-hidden h-screen w-screen surface-card">
    <div className="flex flex-row h-screen  w-screen md:w-full overflow-hidden">
      <Sidebar visible={open} onHide={(e) => setVisible(e)}
        pt={{root:"p-0 m-0 w-17rem overflow-hidden",
          content:'p-0 m-0 border-noround'}}>
        <SideNav />
      </Sidebar>
      <div className="w-full  h-screen  overflow-hidden //overflow-y-auto flex flex-column p-0 gap-2">
        <MainHeader open={open} setVisible={(e) =>setVisible(e)} /> 
      <main className="overflow-hidden h-screen w-full  pb-2 ">
      <PageContent />
      </main>
      </div>
    </div>
    </div>
  );
}
export default Layout;


const PageContent = () => {
return (
       <Routes>
            {routes.map((route, key) => {
              console.log(route.path)
              return (
                <Route
                  key={key}
                  exact={true}
                  path={`${route.path}`}
                  element={<Suspense fallback={<Fallback />}>
                    <route.component />
                    </Suspense>}
                />
              );
            })}

            <Route path="*" element={<ErrorPage link={"dashboard"} />} />
          </Routes>)
}


