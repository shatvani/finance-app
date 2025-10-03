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
import { useRouter } from "next/navigation"
import { purgeTransactionListCache } from "@/lib/actions"
import FormError from "@/components/form-error"

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

  const router = useRouter()
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
      await purgeTransactionListCache()
      router.push('/dashboard')
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
          <FormError error={errors.type} />      
        </div>

        <div>
          <Label htmlFor="category" className="mb-1">Cagegory</Label>
          <Select id="category" {...register("category")}>
            {categories.map((category) => <option key={category}>{category}</option>)} 
          </Select>
          <FormError error={errors.category} />
        </div>

        <div>
          <Label htmlFor="created_at" className="mb-1">Date</Label>
          <Input id="created_at" {...register("created_at")}/>
          <FormError error={errors.created_at} />
        </div>

        <div>
          <Label htmlFor="amount" className="mb-1">Amount</Label>
          <Input id="amount" type="number" {...register("amount")} />
          <FormError error={errors.amount} />    
        </div>

        <div className="col-span-1 md:col-span-2">
          <Label htmlFor="description" className="mb-1">Description</Label>
          <Input id="description" {...register("description")} />
          <FormError error={errors.description} />    
        </div>
      </div>

      <div className="flex justify-end">
        <Button type="submit" disabled={isSaving}>Save</Button>
      </div>
    </form>
  )
}

export default TransactionForm
