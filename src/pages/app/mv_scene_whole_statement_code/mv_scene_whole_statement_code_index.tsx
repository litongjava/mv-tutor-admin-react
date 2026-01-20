import ApiTable from '@/components/common/ApiTable';
import { mv_scene_statement_code_columns } from '@/pages/app/mv_scene_statement_code/mv_scene_statement_code_column';
import {
  mv_scene_whole_statement_code_columns
} from "@/pages/app/mv_scene_whole_statement_code/mv_scene_whole_statement_code_column";

export default () => {
  const from = 'mv_scene_whole_statement_code';
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
      columns={mv_scene_whole_statement_code_columns()}
      beforePageRequest={beforePageRequest}
      beforeCreateRequest={beforeCreateRequest}
    />
  );
};
