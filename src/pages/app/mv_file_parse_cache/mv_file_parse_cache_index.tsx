import ApiTable from '@/components/common/ApiTable';
import { mv_file_parse_cache_column } from '@/pages/app/mv_file_parse_cache/mv_file_parse_cache_column';

export default () => {
  const from = 'mv_file_parse_cache';
  const beforePageRequest = (params: any, isRecoveryMode?: boolean) => {
    params.idType = 'long';

    if (isRecoveryMode) {
      params.deleted = 1;
    } else {
      params.deleted = 0;
    }
    params.orderBy = 'update_time';
    params.isAsc = 'false';
    params.update_time_op = 'bt';
    params.topicOp = 'ct';
    params.codeOp = 'ct';
    //防止后端自动计算Json fields
    params.json_fields = ['files'];
    return params;
  };

  const beforeCreateRequest = (formValues: any) => {
    return {
      ...formValues,
      idType: 'long',
    };
  };
  return (
    <ApiTable
      from={from}
      columns={mv_file_parse_cache_column()}
      beforePageRequest={beforePageRequest}
      beforeCreateRequest={beforeCreateRequest}
    />
  );
};
