import {
  celebrate,
  Joi,
  errors as catchValidationErrors,
  Segments
} from 'celebrate';

const todosRequestSchema: { [method: string]: any } = {};

todosRequestSchema.addTodo = celebrate(
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

export default todosRequestSchema;
