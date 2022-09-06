import Joi from "joi";

const signSchema = Joi.object({
  email: Joi.string().email().required(),
  password: Joi.string().required()
});

export default signSchema;