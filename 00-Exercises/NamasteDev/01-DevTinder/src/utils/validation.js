import { z } from "zod";

const validateSignUpData = z.object({
  firstName: z.string().trim().toLowerCase(),
  lastName: z.string().trim().toLowerCase(),
  emailId: z
    .string()
    .trim()
    .toLowerCase()
    .email({ message: "Invalid email address" }),
  password: z
    .string()
    .trim()
    .min(5, { message: "Password must be at least 8 characters" }),
  gender: z.enum(["male", "female"]).optional(),
});

export { validateSignUpData };
