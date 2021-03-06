import {
  ProspectVariables,
  ProspectListData,
  ApiCallStates,
} from '../../../models';
import {
  GetPendingProspectsQueryVariables,
  useGetPendingProspectsQuery,
} from '../generatedTypes';

export const useGetPendingProspects = (
  vars: ProspectVariables
): ApiCallStates & ProspectListData => {
  const pageNumber = vars.page > 0 ? vars.page - 1 : 0;
  const variables = {
    ...vars,
    page: pageNumber,
  } as GetPendingProspectsQueryVariables;

  const { loading, error, data: result } = useGetPendingProspectsQuery({
    variables,
  });

  let data: any;

  if (result) {
    data = {
      data: result.allProspects,
      meta: {
        totalResults: result.totals?.length,
        currentPage: variables.page,
        perPage: variables.perPage,
        nextPageUrl: '',
        prevPageUrl: '',
      },
    };
  }
  return { loading, error, data };
};
