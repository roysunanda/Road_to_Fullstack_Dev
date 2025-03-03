import Joi from "joi";
import { z } from "zod";

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

function validateZod(data) {
  const zodSchema = z.object({
    username: z.string().trim(),
    password: z.string().trim().toLowerCase(),
    age: z.number().min(18),
    isMarried: z.boolean(),
    email: z.string().email().trim().toLowerCase(),
  });

  return zodSchema.safeParse(data);
}

export { validateModel, validateZod };
