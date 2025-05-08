import CustomerDetailScreen from '@/screens/customer/ui/detail/CustomerDetail';

const CustomerDetailPage = ({ params }: { params: { slug: string } }) => {
  const { slug } = params;
  return <CustomerDetailScreen id={slug} />;
};

export default CustomerDetailPage;
