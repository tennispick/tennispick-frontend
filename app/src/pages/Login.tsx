import Login from 'app/src/features/login/component/Login';
import TenTable from 'app/src/shared/ui/TenTable';

const columns = [
  {
    accessorKey: 'id',
    header: () => 'ID',
    cell: ({ row }: any) => {
      return row.original.id;
    }
  },
  {
    accessorKey: 'name',
    header: () => 'Name',
    cell: ({ row }: any) => {
      return row.original.name;
    }
  },
  {
    accessorKey: 'email',
    header: () => 'Email',
    cell: ({ row }: any) => {
      return row.original.email;
    }
  }
]

const LoginPage = () => {
  return (
    <div className="relative w-screen h-screen flex bg-[#F8F8F8]">
      <Login />
      {/* <TenTable
        data={[]}
        columns={columns}
      /> */}
    </div>
  );
};

export default LoginPage;
