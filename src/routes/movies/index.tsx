import { Movies } from '@pages'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/movies/')({
  component: () => <Movies/>
})