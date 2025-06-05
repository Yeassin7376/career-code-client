import React, { Suspense } from "react";
import MyApplicationStat from "./MyApplicationStat";
import MyApplicationList from "./MyApplicationList";
import useAuth from "../../hooks/useAuth";
import { myApplicationPromise } from "../../api/applicationsApi";



const MyApplications = () => {

    const {user} = useAuth()

  return (
    <div>
      <MyApplicationStat></MyApplicationStat>
      <Suspense fallback={"Loading your applications....."}>
        <MyApplicationList myApplicationPromise={myApplicationPromise(user.email)}></MyApplicationList>
      </Suspense>
    </div>
  );
};

export default MyApplications;
