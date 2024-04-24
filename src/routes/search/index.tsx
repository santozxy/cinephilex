import { createFileRoute } from '@tanstack/react-router'
import { Search } from '@pages'

export const Route = createFileRoute('/search/')({
  component: () => <Search/>
})