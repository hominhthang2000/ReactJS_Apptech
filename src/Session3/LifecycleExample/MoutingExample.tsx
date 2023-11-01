import React from "react";

type Props = {};

export default function MoutingExample({}: Props) {
  //Mouting chạy 1 lần duy nhất khi component được render lần đầu tiêm
  React.useEffect(() => {
    console.log("MointingExample:Moungiting");
  }, []);
  return <div>MoutingExample</div>;
}
