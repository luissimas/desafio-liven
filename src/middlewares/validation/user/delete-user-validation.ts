import { celebrate, Joi, Segments } from 'celebrate'

export function makeDeleteUserValidation() {
  return celebrate({
    [Segments.PARAMS]: Joi.object().keys({
      id: Joi.string().uuid().required(),
    }),
  })
}
