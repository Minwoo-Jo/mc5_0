export const SELECTPROBLEM = 'SELECTPROBLEM';
export const PROBLEM_REQUEST = 'SELECTPROBLEM_REQUEST';
export const PROBLEM_SUCCESS = 'SELECTPROBLEM_SUCCESS';
export const PROBLEM_FAILURE = 'SELECTPROBLEM_FAILURE';

export const selectProblem = (chap) => (index) => {
   return {
    type: SELECTPROBLEM,
    result : chap+"#"+index,
    promise:null
  };
};