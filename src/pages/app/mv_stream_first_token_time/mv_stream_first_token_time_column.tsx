import {ProColumns} from '@ant-design/pro-components';

export const mv_stream_first_token_time_column = (): ProColumns<any>[] => [
  {
    "title": "session_id",
    "dataIndex": "session_id",
    "valueType": "text"
  },
  {
    "title": "question",
    "dataIndex": "question",
    "valueType": "text"
  },
  {
    "title": "platform",
    "dataIndex": "platform",
    "valueType": "text"
  },
  {
    "title": "scene",
    "dataIndex": "scene",
    "valueType": "text"
  },
  {
    "title": "name",
    "dataIndex": "name",
    "valueType": "text"
  },
  {
    "title": "elapsed",
    "dataIndex": "elapsed",
    "valueType": "text",
  },
  {
    title: "update_time",
    dataIndex: "update_time",
    valueType: "dateTime",
    hideInSearch: true,
    hideInForm: true,
  },
  {
    key: "update_time",
    title: "update_time",
    dataIndex: "update_time_range",
    valueType: "dateTimeRange",
    hideInTable: true,
    hideInForm: true,
    hideInDescriptions: true,
  },
];
