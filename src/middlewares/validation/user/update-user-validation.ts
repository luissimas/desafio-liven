import { celebrate, Joi, Segments } from 'celebrate'

export function makeUpdateUserValidation() {
  return celebrate({
    [Segments.PARAMS]: Joi.object().keys({
      id: Joi.string().uuid().required(),
    }),
    [Segments.BODY]: Joi.object()
      .keys({
        name: Joi.string().min(3),
        age: Joi.number().integer().positive().max(130),
        email: Joi.string().email(),
        password: Joi.string().min(5),
      })
      .min(1),
  })
}
