import Joi from "joi";

function validateModel(data) {
  const joiSchema = Joi.object({
    username: Joi.string().trim().required(),
    password: Joi.string().trim().lowercase().required(),
    age: Joi.number().min(18).required(),
    isMarried: Joi.boolean().required(),
    email: Joi.string().email().trim().required(),
  });
  return joiSchema.validate(data);
}

export { validateModel };
