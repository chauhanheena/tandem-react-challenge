import DataSetService from "./services/DataSetService";

import APIError from "./interfaces/APIError";
import DataSet from "./components/DatasetComponent";
import React, { useState } from "react";
import DataSets from "./interfaces/DataSets";
import { ICustomCardProps } from "./components/CustomCard";

const App = () => {

  const dataSetService = DataSetService.getDataSetService();
  const [ dataSet, setDataSet ] = useState<Array<ICustomCardProps>>([]);

  dataSetService.getDataSetsForId(43021).then(function(data){
    console.log(data);
    const res = Object.keys(data).map(ds => ({
      name: ds,
      value: data[ds]
    }))
    console.log(res);
  }).catch(function(error: APIError){
    console.log(error);
  });

  
  //dataSetService.addDataSetForId(retrunValue);

  return (
    <>
      <DataSet dataSet={dataSet} />
    </>
  );
};

export default App;
