import { ProColumns } from '@ant-design/pro-components';

export const mv_file_ocr_cache_column = (): ProColumns<any>[] => [
  {
    title: 'url',
    dataIndex: 'url',
    valueType: 'image',
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
    title: 'data',
    dataIndex: 'data',
    valueType: 'textarea',
    ellipsis: true,
    copyable: true,
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
