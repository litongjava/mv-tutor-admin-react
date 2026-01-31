import { ProColumns } from '@ant-design/pro-components';

export const mv_determine_image_result_columns = (): ProColumns<any>[] => [
  {
    title: 'url',
    dataIndex: 'url',
    valueType: 'image',
  },
  {
    title: 'type',
    dataIndex: 'type',
    valueType: 'text',
  },
  {
    title: 'filename',
    dataIndex: 'filename',
    valueType: 'text',
  },
  {
    title: 'file_id',
    dataIndex: 'file_id',
    valueType: 'text',
  },
  {
    title: 'md5',
    dataIndex: 'md5',
    valueType: 'text',
  },
  {
    title: 'result',
    dataIndex: 'result',
    valueType: 'text',
  },
  {
    title: 'elapsed',
    dataIndex: 'elapsed',
    valueType: 'text',
  },
  {
    title: 'status',
    dataIndex: 'status',
    valueType: 'text',
  },

  {
    title: 'update_time',
    dataIndex: 'update_time',
    valueType: 'dateTime',
    hideInSearch: true,
    hideInForm: true,
  },
  {
    key: 'update_time',
    title: 'update_time',
    dataIndex: 'update_time_range',
    valueType: 'dateTimeRange',
    hideInTable: true,
    hideInForm: true,
    hideInDescriptions: true,
  },
];
