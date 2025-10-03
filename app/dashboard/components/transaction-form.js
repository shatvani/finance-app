'use client'

import Button from "@/components/button"
import Input from "@/components/input"
import Label from "@/components/label"
import Select from "@/components/select"
import { types, categories } from "@/lib/consts"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { transactionSchema } from "@/lib/validation"
import { useState } from "react"

function TransactionForm() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({
    mode: 'onTouched',
    resolver: zodResolver(transactionSchema),
  })

  const [isSaving, setIsSaving] = useState(false)

  const onSubmit = async (data) => {
    setIsSaving(true)
    try {
      await fetch(`${process.env.NEXT_PUBLIC_API_URL}/transactions`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...data,
          created_at: `${data.created_at}T00:00:00.000Z`,
        }),
      })
    } finally {
      setIsSaving(false)
    }
  }

  return (
    <form className="space-y-4" onSubmit={handleSubmit(onSubmit)}>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <Label htmlFor="type" className="mb-1">Type</Label>
          <Select id="type" {...register("type")}>
            {types.map((type) => <option key={type}>{type}</option>)} 
          </Select>   
          {errors.type && <p className="text-sm text-red-500 mt-1">{errors.type.message}</p>}       
        </div>

        <div>
          <Label htmlFor="category" className="mb-1">Cagegory</Label>
          <Select id="category" {...register("category")}>
            {categories.map((categorie) => <option key={categorie}>{categorie}</option>)} 
          </Select>
        </div>

        <div>
          <Label htmlFor="created_at" className="mb-1">Date</Label>
          <Input id="created_at" {...register("created_at")}/>
          {errors.created_at && <p className="text-sm text-red-500 mt-1">{errors.created_at.message}</p>}
        </div>

        <div>
          <Label htmlFor="amount" className="mb-1">Amount</Label>
          <Input id="amount" type="number" {...register("amount")} />
          {errors.amount && <p className="text-sm text-red-500 mt-1">{errors.amount.message}</p>}
        </div>

        <div className="col-span-1 md:col-span-2">
          <Label htmlFor="description" className="mb-1">Description</Label>
          <Input id="description" {...register("description")} />
          {errors.description && <p className="text-sm text-red-500 mt-1">{errors.description.message}</p>}
        </div>
      </div>

      <div className="flex justify-end">
        <Button type="submit" disabled={isSaving}>Save</Button>
      </div>
    </form>
  )
}

export default TransactionForm
