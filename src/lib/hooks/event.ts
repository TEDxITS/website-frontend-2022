/* eslint-disable unused-imports/no-unused-vars */

import axios from 'axios';

import { baseURL } from '../axios';

import { ApiResponse } from '@/types/api';
import {
  Event,
  EventPaymentApiData,
  EventSeatApiData,
  Payment,
} from '@/types/event';

export const getEventData = async (type: Event, payment: Payment) => {
  const res = await axios.get<ApiResponse<EventPaymentApiData[]>>(
    `${baseURL}/event/${type}/${payment}`
  );
  return res.data.data[0];
};

export const getSeat = async () => {
  const res = await axios.get<ApiResponse<EventSeatApiData[]>>(
    `${baseURL}/seat/list-seat`
  );
  return res.data.data;
};
