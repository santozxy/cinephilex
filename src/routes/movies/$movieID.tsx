import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/movies/$movieID')({
  component: () => <div>Hello /movies/$movieID!</div>
})