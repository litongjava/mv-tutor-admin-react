import { ProColumns } from '@ant-design/pro-components';

export const mv_llm_generate_failed_columns = (): ProColumns<any>[] => [
  {
    title: 'group_id',
    dataIndex: 'group_id',
    valueType: 'text',
  },
  {
    title: 'group_name',
    dataIndex: 'group_name',
    valueType: 'text',
    ellipsis: true,
    copyable: true,
  },
  {
    title: 'task_id',
    dataIndex: 'task_id',
    valueType: 'text',
  },
  {
    title: 'task_name',
    dataIndex: 'task_name',
    valueType: 'text',
  },
  {
    title: 'api_key',
    dataIndex: 'api_key',
    valueType: 'text',
  },
  {
    title: 'provider',
    dataIndex: 'provider',
    valueType: 'text',
  },
  {
    title: 'request_url',
    dataIndex: 'request_url',
    valueType: 'text',
  },
  {
    title: 'request_body',
    dataIndex: 'request_body',
    valueType: 'textarea',
    ellipsis: true,
    copyable: true,
  },
  {
    title: 'response_code',
    dataIndex: 'response_code',
    valueType: 'text',
  },
  {
    title: 'response_body',
    dataIndex: 'response_body',
    valueType: 'textarea',
    ellipsis: true,
    copyable: true,
  },
  {
    title: 'exception',
    dataIndex: 'exception',
    valueType: 'textarea',
    ellipsis: true,
    copyable: true,
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
