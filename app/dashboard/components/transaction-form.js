import Button from "@/components/button"
import Input from "@/components/input"
import Label from "@/components/label"
import Select from "@/components/select"
import { types, categories } from "@/lib/consts"

function TransactionForm() {
  return (
    <form className="space-y-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <Label className="mb-1">Type</Label>
          <Select id="type" name="type" className="w-full">
            {types.map((type) => <option key={type.value} value={type.value}>{type.label}</option>)} 
          </Select>
        </div>

        <div>
          <Label className="mb-1">Cagegory</Label>
          <Select id="type" name="type" className="w-full">
            {categories.map((categorie) => <option key={categorie.value} value={categorie.value}>{categorie.label}</option>)} 
          </Select>
        </div>

        <div>
          <Label className="mb-1">Date</Label>
          <Input type="date"/>
        </div>

        <div>
          <Label className="mb-1">Amount</Label>
          <Input type="number" />
        </div>

        <div className="col-span-2">
          <Label className="mb-1">Description</Label>
          <Input />
        </div>
      </div>

      <div className="flex justify-end">
        <Button type="submit">Save</Button>
      </div>
    </form>
  )
}

export default TransactionForm
