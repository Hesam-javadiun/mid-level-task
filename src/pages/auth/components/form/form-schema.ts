import { z, ZodType } from "zod";
import * as zod from 'zod'
import type { FormDataType } from "./form";
import validation from "@/lib/zod";

export const loginFormSchema: ZodType<FormDataType> = z.object({
  username: validation.getUsernameMustHaveRules(),
  password: validation.getPasswordMustHaveRules(),
});

export type Schema = zod.infer<typeof loginFormSchema>;
