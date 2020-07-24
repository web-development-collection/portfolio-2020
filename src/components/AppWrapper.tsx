import React, {FunctionComponent} from "react";


const AppWrapper: FunctionComponent<any> = ({children}) => {
  return <div className="app">{children}</div>;
}

export default AppWrapper;