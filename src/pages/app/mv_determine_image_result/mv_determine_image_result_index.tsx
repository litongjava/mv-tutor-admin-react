import ApiTable from '@/components/common/ApiTable';
import { mv_llm_generate_failed_columns } from '@/pages/app/mv_llm_generate_failed/mv_llm_generate_failed_column';
import {
  mv_determine_image_result_columns
} from "@/pages/app/mv_determine_image_result/mv_determine_image_result_column";

export default () => {
  const from = 'mv_determine_image_result';
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
      columns={mv_determine_image_result_columns()}
      beforePageRequest={beforePageRequest}
      beforeCreateRequest={beforeCreateRequest}
    />
  );
};
