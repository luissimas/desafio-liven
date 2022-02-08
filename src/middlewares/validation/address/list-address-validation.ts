import { celebrate, Joi, Segments } from 'celebrate'

export function makeListAddressValidation() {
  return celebrate({
    [Segments.QUERY]: Joi.object().keys({
      idUser: Joi.string().uuid(),
      state: Joi.string().length(2),
      country: Joi.string().min(3),
      city: Joi.string().min(3),
      zipcode: Joi.string().min(5),
      street: Joi.string().min(5),
      number: Joi.string().min(1),
    }),
  })
}
