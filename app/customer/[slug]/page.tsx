import CustomerDetailScreen from '@features/customer/screen/CustomerDetail';

const CustomerDetail = ({ params }: { params: { slug: string } }) => {
  const { slug } = params;
  return <CustomerDetailScreen id={slug} />;
};

export default CustomerDetail;
