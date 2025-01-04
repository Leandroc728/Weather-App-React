import React, { ChangeEvent, SyntheticEvent } from 'react'

// Types for the component

interface Props  {
  search: string | undefined;
  onSearchSubmit: (e: SyntheticEvent) => void;
  handleSearchChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

const SearchBar : React.FC<Props> = ({ onSearchSubmit, search, handleSearchChange }) => {

  // Search bar component

  return (
    <>
      <form className='w-full px-3' onSubmit={ (e) => onSearchSubmit(e) }>
        <input placeholder='Search a location' type="text" value={search} onChange={ (e) => handleSearchChange(e) } className='rounded-lg border border-gray-300 text-gray-900 text-sm focus:ring-blue-500 w-full p-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-neutral-50 dark:focus:ring-blue-500 dark:focus:border-blue-500' />
        <input hidden type="submit" value="" />
      </form>
    </>
  )
}

export default SearchBar