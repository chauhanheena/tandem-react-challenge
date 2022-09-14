import APIResponse from '../interfaces/APIResponse';
import APIService from '../services/APIService';
import DataSetModel from '../models/DataSetModel';
import DataSets from '../interfaces/DataSets';
import * as MathUtility from '../utility/MathUtility';

export default class DataSetService {
  private static instance: DataSetService;

  /**
   *  Get singleton object of DataSetService
   * @returns DataSetService
   */
  public static getDataSetService(): DataSetService {
    if (!this.instance) {
      this.instance = new DataSetService();
    }
    return this.instance;
  }

  /**
   * Get Datasets from id and calculation of mean, median, mode 
   * @param id 
   * @returns Dataset
   */
  public async getDataSetsForId(id: number): Promise<DataSets> {
    const apiService = APIService.getAPIService();
    const response: APIResponse<DataSetModel | null> = await apiService.getDataSetById(id);
    if (!response.hasError) {
      const numbers = response.data?.values!;
      const returnValue: DataSets = {
        mean: MathUtility.mean(numbers).toFixed(2),
        median: MathUtility.median(numbers).toFixed(2),
        mode: MathUtility.mode(numbers).toFixed(2),
      };
      return returnValue;
    }  
    return Promise.reject(response.error);
  }

  
  /**
   * Add new dataset and return updated datasets
   * @param id 
   * @param value 
   * @returns Dataset
   */
  public async addDataSetForId(id: number, value: number) {
    const apiService = APIService.getAPIService();
   const response = await apiService.addDataSetById(id, value);
   if(!response.hasError) {
      return this.getDataSetsForId(id);
   }
   return Promise.reject(response.error);
  }
}
