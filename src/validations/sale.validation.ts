import * as yup from 'yup';

export const GetByDate = yup.object().shape({
  month: yup.date().required(),
});
