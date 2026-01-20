import {ProColumns} from '@ant-design/pro-components';

export const mv_sse_sent_data_column = (): ProColumns<any>[] => [
  {
    "title": "session_id",
    "dataIndex": "session_id",
    "valueType": "text"
  },
  {
    "title": "type",
    "dataIndex": "type",
    "valueType": "text"
  },
  {
    "title": "data",
    "dataIndex": "data",
    "valueType": "textarea",
    ellipsis:true,
    copyable: true,
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
