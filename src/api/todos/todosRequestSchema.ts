import {
  celebrate,
  Joi,
  errors as catchValidationErrors,
  Segments
} from 'celebrate';

const addTodoRequestSchema = celebrate(
  {
    [Segments.BODY]: Joi.object().keys({
      body: Joi.string()
        .min(4)
        .max(100)
        .required()
    })
  },
  { abortEarly: false }
);

export { addTodoRequestSchema };
