import {ProColumns} from '@ant-design/pro-components';

export const mv_scene_whole_statement_code_columns = (): ProColumns<any>[] => [
  {
    "title": "session_id",
    "dataIndex": "session_id",
    "valueType": "text"
  },
  {
    "title": "scene",
    "dataIndex": "scene",
    "valueType": "text"
  },
  {
    "title": "ts",
    "dataIndex": "ts",
    "valueType": "textarea",
    ellipsis:true,
    copyable: true,
  },
  {
    "title": "statements",
    "dataIndex": "statements",
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
