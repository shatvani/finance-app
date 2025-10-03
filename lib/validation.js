//import {z} from "zod"
import * as z from "zod"; 
import { categories, types } from "./consts";

export const transactionSchema = z.object({
  type: z.enum(types),
  category: z.enum(categories),
  // created_at: z.date({
  //   required_error: "Date is required",
  //   invalid_type_error: "Invalid date"
  // }),
  created_at: z.string().refine((date) => !isNaN(Date.parse(date)), {
    message: "Date needs to contain a valid date date"
  }),
  amount: z.coerce.number({
    required_error: "Amount is required",
    invalid_type_error: "Amount must be a number"
  }).positive("Amount must be greater than zero"),
  description: z.string({
    required_error: "Description is required",
    invalid_type_error: "Description must be a string"
  }).min(1, "Description must be at least 1 character")
  .max(200, "Description must be at most 200 characters")
});