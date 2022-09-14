import axios, { AxiosError } from 'axios';

import APIResponse from '../interfaces/APIResponse';
import DataSetModel from '../models/DataSetModel';

/**
 * Talks with Backed API service
 */
export default class APIService {
  private static instance: APIService;

  /**
   * Get singleton object of API service
   * @returns Instance
   */
  public static getAPIService(): APIService {
    if (!this.instance) {
      this.instance = new APIService();
    }
    return this.instance;
  }

  /**
   * API call for getting datasets
   * @param id
   * @returns
   */
  public async getDataSetById(id: number) {
    const API_PATH = `/data-set/${id}`;
    try {
      const data = await axios.get(API_PATH);
      const { id, values } = data.data;
      const returnValue: APIResponse<DataSetModel> = {
        hasError: false,
        error: null,
        data: {
          id: id,
          values: values,
        },
      };
      return returnValue;
    } catch (error) {
      return this.toErrorResponse(error as AxiosError);
    }
  }

  /**
   * API call for adding new records
   * @param id
   * @param value
   * @returns
   */
  public async addDataSetById(id: number, value: number) {
    const API_PATH = `/data-set/${id}`;
    try {
      await axios.post(API_PATH, { value });
      const returnValue: APIResponse<string> = {
        hasError: false,
        error: null,
        data: 'ok',
      };
      return returnValue;
    } catch (error) {
      return this.toErrorResponse(error as AxiosError);
    }
  }

  /**
   * Wrap error to custom response modal
   * @param error
   * @returns
   */
  private toErrorResponse(error: AxiosError) {
    const { status } = error.response!;
    const returnValue: APIResponse<null> = {
      hasError: true,
      error: {
        code: status,
        message: error.message,
      },
      data: null,
    };
    return returnValue;
  }
}
