import axios from "axios";

// {
//   "abbreviation": "CST",
//   "client_ip": "120.244.21.71",
//   "datetime": "2024-05-09T10:38:22.621632+08:00",
//   "day_of_week": 4,
//   "day_of_year": 130,
//   "dst": false,
//   "dst_from": null,
//   "dst_offset": 0,
//   "dst_until": null,
//   "raw_offset": 28800,
//   "timezone": "Asia/Shanghai",
//   "unixtime": 1715222302,
//   "utc_datetime": "2024-05-09T02:38:22.621632+00:00",
//   "utc_offset": "+08:00",
//   "week_number": 19
// }
export interface WorldTimeApiDto {
  abbreviation: string;
  client_ip: string;
  datetime: string;
  day_of_week: number;
  day_of_year: number;
  dst: boolean;
  dst_from: string | null;
  dst_offset: number;
  dst_until: string | null;
  raw_offset: number;
  timezone: string;
  unixtime: number;
  utc_datetime: string;
  utc_offset: string;
  week_number: number;
}

export async function getTimestamp() {
  const response = await axios.get("http://worldtimeapi.org/api/timezone/Asia/Shanghai");
  const dto = response.data as WorldTimeApiDto;
  return Date.parse(dto.datetime);
}
