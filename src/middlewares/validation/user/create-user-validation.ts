import { celebrate, Joi, Segments } from 'celebrate'

export function makeCreateUserValidation() {
  return celebrate({
    [Segments.BODY]: Joi.object().keys({
      name: Joi.string().min(3).required(),
      age: Joi.number().integer().positive().max(130).required(),
      email: Joi.string().email().required(),
      password: Joi.string().min(5).required(),
    }),
  })
}
