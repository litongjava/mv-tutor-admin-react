import {ProColumns} from '@ant-design/pro-components';

export const mv_scene_storyboard_column = (): ProColumns<any>[] => [
  {
    "title": "group_id",
    "dataIndex": "group_id",
    "valueType": "text"
  },
  {
    "title": "scene",
    "dataIndex": "scene",
    "valueType": "text"
  },
  {
    "title": "topic",
    "dataIndex": "topic",
    "valueType": "text"
  },
  {
    "title": "content",
    "dataIndex": "content",
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
