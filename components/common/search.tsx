import { FiSearch } from 'react-icons/fi';

const SearchInput = ({ className, value, onChange, placeholder }) => {
    return (
        <div className='relative mr-2'>
            <input
                className={`form-input !p-2 !pl-8 ${className}`}
                style={{ borderRadius: 4 }}
                value={value}
                onChange={onChange}
                placeholder={placeholder || 'Search'}
            />
            <FiSearch className='absolute top-3 left-2.5 text-gray-500' />
        </div>
    );
};
export default SearchInput;
