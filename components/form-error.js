function FormError({error}) {
  return error && <p className="text-sm text-red-500 mt-1">{error.message}</p>
}

export default FormError
