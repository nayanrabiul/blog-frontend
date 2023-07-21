import SearchInput from '@/components/common/search';
import { FaEye, FaPencilAlt, FaTimes, FaTrashAlt } from 'react-icons/fa';
import { useActionConfirm } from '@/helpers/hooks';
import { Modal } from 'antd';
import { useState } from 'react';
import Pagination from './pagination';
import Image from 'next/image';
import { useUserContext } from '@/context/user';



export const havePermission = (permission: string, roles: [{ permissions: string[] }]) => {
    for (let role of roles || []) {
        if (role?.permissions?.includes(permission)) {
            return true;
        }
    }
    return false;
};

interface TableProps {
    columns: any[];
    data: any;
    indexed?: boolean;
    loading?: boolean;
    noActions?: boolean;
    actions?: any;
    action?: any;
    onView?: (data: any) => void;
    onEdit?: (data: any) => void;
    onDelete?: (data: any) => Promise<any>;
    onReload?: any;
    pagination?: boolean;
    shadow?: boolean;
    title?: string;
    permission?: boolean;
    noHeader?: boolean;
    afterSearch?: (data: any) => void;
    onSearchChange?: (data: any) => void;
}
const Table = ({
    columns,
    data,
    indexed,
    loading = false,
    noActions,
    actions,
    action,
    onView,
    onEdit,
    onDelete,
    onReload,
    pagination = false,
    shadow = true,
    title,
    permission,
    noHeader = false,
    afterSearch,
    onSearchChange,
}: TableProps) => {
    const { user } = useUserContext();
    const checkPermissions = (name) => {
        if (permission) {
            // @ts-ignore
            return havePermission(name, user?.role);
        }
        return true;
    };

    let cols = noActions
        ? columns
        : [
              ...columns,
              {
                  text: 'Action',
                  dataField: 'no_actions',
                  className: 'w-44 text-right',
                  formatter: (noActions, data) => {
                      return (
                          <div className='flex justify-end'>
                              {actions && actions(data)}
                              {onView && (
                                  <button
                                      className='p-1.5 border border-green-500 text-green-500 hover:bg-green-500 hover:text-white rounded mr-2'
                                      title='View'
                                      onClick={() => onView(data)}
                                  >
                                      <FaEye />
                                  </button>
                              )}
                              {data.disableEdit === 1 &&
                                  !onView &&
                                  data.disableDelete === 1 &&
                                  !actions &&
                                  '-'}
                              {onEdit &&
                                  checkPermissions(permission + '_edit') &&
                                  data?.disableEdit !== 1 && (
                                      <button
                                          className='p-1.5 border border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white rounded mr-2'
                                          title='Edit'
                                          onClick={() => onEdit(data)}
                                      >
                                          <FaPencilAlt />
                                      </button>
                                  )}
                              {onDelete && checkPermissions(permission + '_delete') && (
                                  <button
                                      className='p-1.5 border border-red-500 text-red-500 hover:bg-red-500 hover:text-white disabled:opacity-20 disabled:cursor-not-allowed rounded mr-2'
                                      title='Delete'
                                      disabled={data?.disableDelete === 1}
                                      onClick={async () => {
                                          await useActionConfirm(
                                              onDelete,
                                              { _id: data._id },
                                              onReload,
                                              'Are you sure you want to delete this item?',
                                              'Yes, Delete'
                                          );
                                      }}
                                  >
                                      <FaTrashAlt />
                                  </button>
                              )}
                          </div>
                      );
                  },
              },
          ];

    // @ts-ignore
    return (
        <>
            <div
                className={`w-full bg-white ${shadow ? 'shadow-lg' : ''} rounded-sm mb-4 py-5 px-2`}
            >
                {noHeader || (
                    <header className='px-4 pt-3 pb-2 border-b border-gray-100 flex justify-between flex-wrap'>
                        {title ? (
                            <>
                                {typeof title === 'string' ? (
                                    <h4 className='text-base font-medium text-gray-700'>{title}</h4>
                                ) : (
                                    title
                                )}
                            </>
                        ) : (
                            <div className='flex flex-wrap mb-3 sm:mb-0'>
                                {/*@ts-ignore*/}
                                <SearchInput
                                    className='w-60'
                                    onChange={(e) => {
                                        onReload({ search: e.target.value || undefined, page: 1 });
                                        onSearchChange && onSearchChange(e.target.value || '');
                                    }}
                                />
                                {afterSearch}
                            </div>
                        )}
                        {checkPermissions(permission + '_create') && action}
                    </header>
                )}
                <div className='p-3 relative'>
                    <div className='overflow-x-auto'>
                        <table className='table-auto w-full'>
                            <thead className='text-xs font-semibold uppercase bg-gray-50 text-gray-500'>
                                <tr>
                                    {indexed && (
                                        <th className='p-2 whitespace-nowrap'>
                                            <div className='font-semibold text-left'>#</div>
                                        </th>
                                    )}
                                    {cols?.map((column, index) => (
                                        <th className='p-2 whitespace-nowrap text-left' key={index}>
                                            <div
                                                className={`font-semibold ${
                                                    column?.className || ''
                                                }`}
                                            >
                                                {column.text}
                                            </div>
                                            <div style={{ fontSize: 10 }}>{column.description}</div>
                                        </th>
                                    ))}
                                </tr>
                            </thead>
                            <tbody className='text-sm divide-y divide-gray-100'>
                                {loading ? (
                                    <tr>
                                        <td className='h-96 pb-16'>
                                            <div className='absolute w-full flex justify-center'>
                                                <div className='loading' />
                                            </div>
                                        </td>
                                    </tr>
                                ) : (
                                    <>
                                        {(pagination ? data?.docs : data)?.map((row, index) => (
                                            <tr key={index}>
                                                {indexed && (
                                                    <td className='p-2 whitespace-nowrap text-gray-500'>
                                                        {(pagination
                                                            ? (data?.page - 1) * data.limit
                                                            : 0) +
                                                            index +
                                                            1}
                                                    </td>
                                                )}
                                                {cols?.map((column, index) => (
                                                    <td
                                                        className={`p-2 whitespace-nowrap text-gray-500 ${
                                                            column?.className || ''
                                                        }`}
                                                        key={index}
                                                    >
                                                        {column.formatter
                                                            ? column.formatter(
                                                                  row[column.dataField],
                                                                  row
                                                              )
                                                            : row[column.dataField] || '-'}
                                                    </td>
                                                ))}
                                            </tr>
                                        ))}
                                    </>
                                )}
                            </tbody>
                        </table>
                    </div>
                    {pagination && (
                        <div className='pt-3 mt-1 border-t'>
                            <Pagination
                                page={data?.page}
                                total={data?.totalDocs}
                                onSizeChange={(size) => onReload({ size })}
                                limit={data?.limit}
                                totalPages={data?.totalPages}
                                onPageChange={(page) => onReload({ page })}
                            />
                        </div>
                    )}
                </div>
            </div>
        </>
    );
};
export default Table;

export const TableImage = ({ url }) => {
    const [image, setImage] = useState();
    return (
        <div className='w-inline-block h-8'>
            <Image
                height={32}
                width={32}
                role='button'
                src={url}
                alt=''
                onClick={() => setImage(url)}
                style={{ maxWidth: '100%', maxHeight: '100%' }}
            />
            <Modal
                width={800}
                visible={image}
                onCancel={() => setImage(undefined)}
                footer={null}
                bodyStyle={{ padding: 0, zIndex: 60 }}
                closeIcon={
                    <FaTimes
                        size={18}
                        className=' absolute inline-block right-4 rounded bg-gray-300 bg-opacity-25 text-white top-4'
                    />
                }
            >
                <Image
                    height={200}
                    width={100}
                    className='w-100'
                    style={{ minHeight: 400 }}
                    src={image}
                    alt={''}
                />
            </Modal>
        </div>
    );
};
