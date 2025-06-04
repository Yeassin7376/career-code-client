import React, { Suspense } from "react";
import MyApplicationStat from "./MyApplicationStat";
import MyApplicationList from "./MyApplicationList";
import useAuth from "../../hooks/useAuth";


const myApplicationPromise = email =>{
    return fetch(`http://localhost:3000/application?email=${email}`).then(res => res.json())
}

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
