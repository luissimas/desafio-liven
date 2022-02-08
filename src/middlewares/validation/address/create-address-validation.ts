import { celebrate, Joi, Segments } from 'celebrate'

export function makeCreateAddressValidation() {
  return celebrate({
    [Segments.BODY]: Joi.object().keys({
      idUser: Joi.string().uuid().required(),
      state: Joi.string().length(2).required(),
      country: Joi.string().min(3).required(),
      city: Joi.string().min(3).required(),
      zipcode: Joi.string().min(5).required(),
      street: Joi.string().min(5).required(),
      number: Joi.string().min(1).required(),
    }),
  })
}
