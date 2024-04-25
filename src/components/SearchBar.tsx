import { Search } from "lucide-react";

interface Props {
  search: string;
  setSearch: (value: string) => void;
}

export function SearchBar({ search, setSearch }: Props) {
  return (
    <div className="bg-light dark:bg-dark border rounded-md relative  flex justify-center max-sm:mt-7 items-center">
      <input
        type="text"
        placeholder="Search"
        className="border-2 border-gray-300 p-2 max-sm:p-1 rounded-md w-full"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <Search className="absolute right-2 top-2 text-primary text-xl"  />
    </div>
  );
}
