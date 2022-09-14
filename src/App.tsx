import React, { useEffect, useState } from "react";
import APIError from "./interfaces/APIError";
import DataSetService from "./services/DataSetService";
import DataSet from "./components/DatasetComponent";
import DataSets from "./interfaces/DataSets";
import Form from "./components/Form";
import useAppStyles from "./styles";
import { Typography } from "@mui/material";

const DEFAULT_STATE_VALUE = 1234;
const DEFAULT_STATE_VALUE_SECOND = 4321;

const App = () => {

  const dataSetService = DataSetService.getDataSetService();
  const [ dataSet, setDataSet ] = useState<DataSets>(new DataSets());
  const [ apiError, setAPIError ] = useState<APIError | null>(null);
  const [selectedId, setSelectedId] = useState<number>(DEFAULT_STATE_VALUE);
  const classes = useAppStyles();
  
  useEffect(() => {
    getData(selectedId)
  }, []);

  useEffect(() => {
    getData(selectedId)
  }, [selectedId]);

  function getData (id: number) {
    dataSetService.getDataSetsForId(id).then(function(data){
      setDataSet(data);
      setAPIError(null);
    }).catch(setAPIError); 
  }

  function onSubmit(value: number) {
    dataSetService.addDataSetForId(selectedId, value).then(function(data){
      setDataSet(data);
      setAPIError(null);
    }).catch(setAPIError);
  }

  async function onReload() {
    if(selectedId === DEFAULT_STATE_VALUE) {
      setSelectedId(DEFAULT_STATE_VALUE_SECOND);
      return;
    } 
    setSelectedId(DEFAULT_STATE_VALUE);
  }

  return (
    <div className={classes.root} >
       <Typography variant="h6" className={classes.appTitle}>Selected dataset {selectedId}</Typography>
      <DataSet dataSet={dataSet} />
       <Form onSubmit={onSubmit} onReload={onReload} />
       {apiError && <Typography variant="body2" className={classes.redText}>{apiError.message}</Typography>}
    </div>
  );
};

export default App;
