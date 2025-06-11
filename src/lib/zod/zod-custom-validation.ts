import z from "zod";

export default class ZodCustomValidation {
  public getPasswordMustHaveRules()  {
    return z
      .string()
      .min(5, { message: "Password must be at least 5 characters" })
      .max(12, { message: "Password is too long" })
  }

  public getUsernameMustHaveRules(){
    return z.string().min(1, "Username cannot be empty!")
  }
}
