import { celebrate, Joi, Segments } from 'celebrate'

export function makeListUserValidation() {
  return celebrate({
    [Segments.QUERY]: Joi.object().keys({
      name: Joi.string().min(3),
      age: Joi.number().integer().positive().max(130),
      email: Joi.string().email(),
    }),
  })
}
