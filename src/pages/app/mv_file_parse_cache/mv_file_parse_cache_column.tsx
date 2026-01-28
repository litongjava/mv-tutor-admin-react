import { ProColumns } from '@ant-design/pro-components';

const trueFalseEnum = {
  false: { text: 'false' },
  true: { text: 'true' },
};

export const mv_file_parse_cache_column = (): ProColumns<any>[] => [
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
    title: 'md5',
    dataIndex: 'md5',
    valueType: 'text',
  },
  {
    title: 'geometric',
    dataIndex: 'geometric',
    valueType: 'select',
    valueEnum: trueFalseEnum,
  },
  {
    title: 'figure',
    dataIndex: 'figure',
    valueType: 'textarea',
    ellipsis: true,
    copyable: true,
  },
  {
    title: 'text',
    dataIndex: 'text',
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
