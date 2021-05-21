import { gql, useQuery } from '@apollo/client';

export default function fetchGQL(queries, variables) {
  return new Promise((resolve, reject) => {
    const GQL_QUERIES = gql`${queries}`;
    useQuery(GQL_QUERIES, { ...variables })
      .then(res => {
        resolve(res.data);
      })
      .catch(err => {
        const defaultError = {
          code: 500,
          status: 'error',
          message: 'Failed to fetch data. Please contact developer.',
        };

        if (!err.response) {
          reject(defaultError);
        } else if (!err.response.data) {
          reject(defaultError);
        } else {
          reject(err.response.data);
        }
      });
  });
}
